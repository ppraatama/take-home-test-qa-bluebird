const request = require("supertest");
const baseURL = "https://api.practicesoftwaretesting.com";

let brandId = "";
let categoryId = "";
let imageId = "";

function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

beforeEach(async () => {
  const brandBody = {
    name: `Brand-${generateRandomString(5)}`,
    slug: `Slug-${generateRandomString(5)}`,
  };

  console.log(brandBody);

  const brandResponse = await request(baseURL)
    .post("/brands")
    .send(brandBody)
    .set("Content-Type", "application/json");

  console.log(brandResponse.body);
  expect(brandResponse.status).toBe(201);
  console.log(
    "actual status: " + brandResponse.status + ", expected status 200"
  );
  brandId = brandResponse.body.id;

  const categoryBody = {
    name: `Category-${generateRandomString(5)}`,
    slug: `Slug-${generateRandomString(5)}`,
  };

  console.log(categoryBody);

  const responseCategory = await request(baseURL)
    .post("/categories")
    .send(categoryBody)
    .set("Content-Type", "application/json");

  console.log(responseCategory.body);
  expect(responseCategory.status).toBe(201);
  console.log(
    "actual status: " + responseCategory.status + ", expected status 200"
  );
  categoryId = responseCategory.body.id;
  console.log("brandId is " + brandId, "CategoryId is " + categoryId);

  const responseImage = await request(baseURL).get("/images");

  console.log("Response body:", responseImage.body);
  console.log("Response status:", responseImage.status);

  expect(responseImage.status).toBe(200);

  const ids = responseImage.body.map((item) => item.id);
  console.log("Product IDs:", ids);

  imageId = ids[0];
  console.log("Product image id:", imageId);
});

describe("Create products in practice software testing with method POST", () => {
  test("Scenario: Verify success create products", async () => {
    const reqBodyProducts = {
      name: "Putra",
      desc: "barang putra",
      price: 2.99,
      category_id: categoryId,
      brand_id: brandId,
      product_image_id: imageId,
      is_location_offer: 1,
      is_rental: 0,
    };

    const response = await request(baseURL)
      .post("/products")
      .send(reqBodyProducts)
      .set("Content-Type", "application/json");

    console.log("Response Body:", response.body);
    console.log("Response Status:" ,response.status)
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
  });

  test("Scenario: Verify failed create products when the resource not found", async () => {
    const reqBodyProducts = {
      name: "Produk 1",
      desc: "Produk 1 ",
      price: 2.99,
      category_id: categoryId,
      brand_id: brandId,
      product_image_id: imageId,
      is_location_offer: 1,
      is_rental: 0,
    }

    const response = await request(baseURL)
      .post("/product")
      .send(reqBodyProducts)
      .set("Content-Type", "application/json");

    console.log("Response Body:", response.body);
    console.log("Response Status:", response.status);
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("message")
  })

  test("Scenario: Verify failed create product using wrong method", async () => {
    const reqBodyProducts = {
      name: "Produk 1",
      desc: "Produk 1 ",
      price: 2.99,
      category_id: categoryId,
      brand_id: brandId,
      product_image_id: imageId,
      is_location_offer: 1,
      is_rental: 0,
    }

    const response = await request(baseURL)
      .put("/products")
      .send(reqBodyProducts)
      .set("Content-Type", "application/json");

    console.log("Response Body:", response.body);
    console.log("Response Status:", response.status);
    expect(response.status).toBe(405);
    expect(response.body).toHaveProperty("message")
  })

  test("Scenario: Verify failed create product input wrong field", async () => {
    const reqBodyProducts = {
      name: "Produk 1",
      desc: "Produk 1 ",
      price: 2.99,
      category_id: categoryId,
      brand_id: brandId,
      product_image_id: imageId,
      is_location_offer: 2,
      is_rental: 0,
    }

    const response = await request(baseURL)
      .post("/products")
      .send(reqBodyProducts)
      .set("Content-Type", "application/json");

    console.log("Response Body:", response.body);
    console.log("Response Status:", response.status);
    expect(response.status).toBe(422);
  })
});