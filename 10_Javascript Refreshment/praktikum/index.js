const form = document.getElementById("formProduct");
const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const productCategory = document.getElementById("productCategory");
const productDesc = document.getElementById("productDesc");
const productFreshness = document.getElementsByName("productFreshness");
const productImage = document.getElementById("productImage");

// Error Element
const errorProduct = document.getElementById("errorProduct");
const errorPrice = document.getElementById("errorPrice");
const errorCategory = document.getElementById("errorCategory");
const errorDesc = document.getElementById("errorDesc");
const errorFreshness = document.getElementById("errorFreshness");
const errorImage = document.getElementById("errorImage");

const errorThrow = (message, elementInput, elementError) => {
  elementError.innerText = message;
  elementError.classList.add("text-danger");
  elementInput.classList.add("border", "border-danger");
};

const arr = {};

const radioValidation = () => {
  let formValid = false;

  let i = 0;
  while (!formValid && i < productFreshness.length) {
    if (productFreshness[i].checked) formValid = true;
    i++;
  }

  return formValid;
};

const formValidation = (e) => {
  if (productName.value.length > 25) {
    e.preventDefault();
    errorThrow("Product Name must not exceed 25 characters.", productPrice, errorProduct);
  }

  if (productName.value.match("[@/#{}]")) {
    e.preventDefault();
    errorThrow("Name must not contain symbols.", productName, errorProduct);
  }

  if (productName.value.length < 1) {
    e.preventDefault();
    errorThrow("Please enter a valid Prouct name.", productName, errorProduct);
  } else {
    arr["productName"] = form.elements["productName"].value;
  }

  if (productPrice.value.length < 1 || isNaN(Number(productPrice.value))) {
    e.preventDefault();
    errorThrow("Please enter a valid Product price.", productPrice, errorPrice);
  } else {
    arr["productPrice"] = form.elements["productPrice"].value;
  }

  if (productCategory.value.length < 1) {
    e.preventDefault();
    errorThrow("The Category field must be filled in", productCategory, errorCategory);
  } else {
    arr["productCategory"] = form.elements["productCategory"].value;
  }

  if (productDesc.value.length < 1) {
    e.preventDefault();
    errorThrow("The Description field must be filled in", productDesc, errorDesc);
  } else {
    arr["productDesc"] = form.elements["productDesc"].value;
  }

  if (productImage.value.length < 1) {
    e.preventDefault();
    errorImage.innerText = "The Image field must be filled in";
    errorImage.classList.add("text-danger");
    productImage.classList.replace("border-primary", "border-danger");
  } else {
    arr["isUploadedImage"] = true;
  }

  if (!radioValidation()) {
    e.preventDefault();
    errorFreshness.innerText = "The Freshness field must be checked";
    errorFreshness.classList.add("text-danger");
  } else {
    let freshness;
    for (let i = 0; i < productFreshness.length; i++) {
      if (productFreshness[i].checked) {
        freshness = productFreshness[i].value;
      }
    }
    arr["productFreshness"] = freshness;
  }
};

form.addEventListener("submit", (e) => {
  formValidation(e);

  const data = `Product Uploaded!
  Product Name  : ${arr["productName"]}
  Price         : ${arr["productPrice"]}
  Category      : ${arr["productCategory"]}
  Freshness     : ${arr["productFreshness"]}
  Desc          : ${arr["productDesc"]}
  `;

  if (Object.keys(arr).length == 6) {
    // alert(JSON.stringify(arr));
    alert(data);
  }
});
