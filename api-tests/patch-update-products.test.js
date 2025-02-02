const request = require("supertest");
const baseURL = "https://api.practicesoftwaretesting.com";

let brandId = "";
let categoryId = "";
let imageId = "";
let productId = "";

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
  const getProducts = await request(baseURL).get(`/products`).send({
    page: 1,
  });

  console.log("Response Body", getProducts.body);

  if (getProducts.body.data && getProducts.body.data.length > 0) {
    productId = getProducts.body.data[0].id;
    brandId = getProducts.body.data[0].brand.id;
    categoryId = getProducts.body.data[0].category.id;
    imageId = getProducts.body.data[0].product_image.id;

    console.log("productId:", productId);
    console.log("brandId:", brandId);
    console.log("categoryId:", categoryId);
    console.log("imageId:", imageId);
  } else {
    throw new Error("No products found with the specified brand and category.");
  }
});

describe("Update products in practice software testing with method PATCH", () => {
  test("Scenario: Verify success update product id", async () => {
    const response = await request(baseURL)
      .patch(`/products/${productId}`)
      .send({
        name: `${generateRandomString(6)})`,
        description: `${generateRandomString(6)}`
      })
      .set("Content-Type", "application/json");

    console.log("Response Status:", response.status);
    console.log(response.status);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("success");
  });

  test("Scenario: Verify user input wrong method", async () => {
    const response = await request(baseURL)
    .post(`/products/${productId}`)
    .send({
        name: `${generateRandomString(5)}`,
        description: `${generateRandomString(5)}`
    })
    .set("Content-Type", "application/json");

    console.log("Response Status:", response.status);
    expect(response.status).toBe(405)
    expect(response.body).toHaveProperty("message");
  })

  test("Scenario: Verify user input wrong endpoint", async () => {
    const response = await request(baseURL)
    .patch(`/product/${productId}`)
    .send({
        name: `${generateRandomString(5)}`,
        description: `${generateRandomString(5)}`
    })
    .set("Content-Type", "application/json");

    console.log("Response Status:", response.status);
    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(404);
  })

  test("Scenario: Verify return status code 422 when the server was not able to process", async () => {
    const response = await request(baseURL)
    .patch(`/products/${productId}`)
    .send({
        name: `${generateRandomString(5)}`,
        description: `${generateRandomString(5)}`,
        price: 1.99,
        category_id: categoryId,
        brand_id: brandId,
        product_image_id: 1,
        is_location_offer: 4,
        is_rental: 1
    })
    .set("Content-Type", "application/json");

    console.log("Response Body:", response.body);
    console.log("Response Status:", response.status);
    expect(response.status).toBe(422);
  })
});