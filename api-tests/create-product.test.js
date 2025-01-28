const request = require("supertest");

describe("Testing external API with Supertest", () => {
  const baseURL = "https://api.practicesoftwaretesting.com";
  let brandId = "";
  let categoryId = "";
  let imageId = "";

  test("Create Branc Id", async () => {
    function generateRandomStringBrand(length) {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let result = "";
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    }

    const reqBody = {
      name: `Brand-${generateRandomStringBrand(5)}-011`,
      slug: `Slug-${generateRandomStringBrand(5)}-011`,
    };

    console.log(reqBody);

    const response = await request(baseURL)
      .post("/brands")
      .send(reqBody)
      .set("Content-Type", "application/json");

    console.log(response.body);
    expect(response.status).toBe(201);
    console.log("actual status: " + response.status + ", expected status 200");
    brandId = response.body.id;
  });

  test("Create Category Id", async () => {
    function generateRandomStringCategory(length) {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let result = "";
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    }

    const reqBody = {
      name: `Category-${generateRandomStringCategory(5)}-011`,
      slug: `Slug-${generateRandomStringCategory(5)}-011`,
    };

    console.log(reqBody);

    const response = await request(baseURL)
      .post("/categories")
      .send(reqBody)
      .set("Content-Type", "application/json");

    console.log(response.body);
    expect(response.status).toBe(201);
    console.log("actual status: " + response.status + ", expected status 200");
    categoryId = response.body.id;

    console.log("brandId is " + brandId, "CategoryId is " + categoryId);
  });

  test("Get Product Image Id", async () => {
    const response = await request(baseURL).get("/images");

    console.log("Response body:", response.body);
    console.log("Response status:", response.status);

    expect(response.status).toBe(200);

    const ids = response.body.map((item) => item.id);
    console.log("Product IDs:", ids);

    imageId = ids[0];
    console.log("Product image id:", imageId);
  });

  test("create products", async () => {
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
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
  });
});
