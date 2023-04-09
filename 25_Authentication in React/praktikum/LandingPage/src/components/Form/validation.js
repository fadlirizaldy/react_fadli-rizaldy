const ProdNameValidation = (prodName, setErrors) => {
  if (prodName.length < 1) {
    setErrors((prevData) => ({ ...prevData, productName: "Please enter the product name" }));
    return true;
  }

  const isValidString = /^[A-Za-z0-9 ]*$/.test(prodName);
  if (!isValidString) {
    setErrors((prevData) => ({ ...prevData, productName: "Product name can only contain number and character" }));
    return true;
  }

  setErrors((prevData) => ({ ...prevData, productName: "" }));
  return false;
};

const ProdCategoryValidation = (category, setErrors) => {
  if (category.length < 1) {
    setErrors((prevData) => ({ ...prevData, category: "Please choose the category" }));
    return true;
  }
  setErrors((prevData) => ({ ...prevData, category: "" }));
  return false;
};

const ProdFileValidation = (filePath, setErrors) => {
  if (filePath.length < 1) {
    setErrors((prevData) => ({ ...prevData, filepath: "Please insert an image of the product" }));
    return true;
  }

  const isValidPath = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(filePath);
  if (!isValidPath) {
    setErrors((prevData) => ({ ...prevData, filepath: "Please insert image with the proper extension (img, png, etc..)" }));
    return true;
  }
  setErrors((prevData) => ({ ...prevData, filepath: "" }));
  return false;
};

const ProdFreshnessValidation = (freshness, setErrors) => {
  if (freshness.length < 1) {
    setErrors((prevData) => ({ ...prevData, freshness: "Please choose the freshness of product" }));
    return true;
  }
  setErrors((prevData) => ({ ...prevData, freshness: "" }));
  return false;
};

const ProdDescValidation = (description, setErrors) => {
  if (description.length < 1) {
    setErrors((prevData) => ({ ...prevData, desc: "Please enter the description of the product" }));
    return true;
  }
  setErrors((prevData) => ({ ...prevData, desc: "" }));
  return false;
};

const ProdPriceValidation = (price, setErrors) => {
  if (price.length < 1) {
    setErrors((prevData) => ({ ...prevData, price: "Please enter the product price" }));
    return true;
  }

  const isValidPrice = /^[0-9]+$/.test(price);
  if (!isValidPrice) {
    setErrors((prevData) => ({ ...prevData, price: "Product price can only contain number" }));
    return true;
  }

  setErrors((prevData) => ({ ...prevData, price: "" }));
  return false;
};

// Validation Function
const FormValidation = (prodName, category, filePath, freshness, description, price, setErrors) => {
  let cntError = 0;

  //validate name
  if (ProdNameValidation(prodName, setErrors)) {
    cntError += 1;
  }

  // validation category
  if (ProdCategoryValidation(category, setErrors)) {
    cntError += 1;
  }

  //validation image
  if (ProdFileValidation(filePath, setErrors)) {
    cntError += 1;
  }

  //validation freshness,
  if (ProdFreshnessValidation(freshness, setErrors)) {
    cntError += 1;
  }
  //validation description
  if (ProdDescValidation(description, setErrors)) {
    cntError += 1;
  }

  //validation price
  if (ProdPriceValidation(price, setErrors)) {
    cntError += 1;
  }

  if (cntError > 0) {
    return true;
  }
  return false;
};

export default FormValidation;
