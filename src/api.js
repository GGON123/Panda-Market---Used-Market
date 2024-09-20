import axios from "axios";

const instance = axios.create({
  baseURL: "https://pandamarket-api-b1vd.onrender.com",
  timeout: 5000,
});

async function getProductList(params = {}) {
  if (typeof params !== "object") {
    throw new Error("params should be an object");
  }

  return instance
    .get(`/items`, { params })
    .then((res) => res.data)
    .catch((error) => console.log("Request failed:", error.message));
}

async function getProduct(id) {
  if (typeof id !== "string" || id.trim() === "") {
    throw new Error("id should be a non-empty string");
  }

  return instance
    .get(`/items${id}`)
    .then((res) => res.data)
    .catch((error) => console.log("Request failed:", error.message));
}

async function createProduct(articleData) {
  if (typeof articleData !== "object" || Array.isArray(articleData)) {
    throw new Error("articleData should be an object");
  }

  return instance
    .post(`/items`, articleData)
    .then((res) => res.data)
    .catch((error) => console.log("Request failed:", error.message));
}

async function patchProduct(id, articleData) {
  if (typeof id !== "string" || id.trim() === "") {
    throw new Error("id should be a non-empty string");
  }

  if (typeof articleData !== "object" || Array.isArray(articleData)) {
    throw new Error("articleData should be an object");
  }

  return instance
    .patch(`/items${id}`, articleData)
    .then((res) => res.data)
    .catch((error) => console.log("Request failed:", error.message));
}

async function deleteProduct(id) {
  if (typeof id !== "string" || id.trim() === "") {
    throw new Error("id should be a non-empty string");
  }

  return instance
    .delete(`/items${id}`)
    .then((res) => `${res.status} ${res.statusText} ${res.message}`)
    .catch((error) => console.log("Request failed:", error.message));
}

export {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
};
