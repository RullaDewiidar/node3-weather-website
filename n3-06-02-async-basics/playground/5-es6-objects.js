const name = "Andrew";
const userAge = 27;

const user = {
  name,
  age: userAge,
  location: "Philidelphia",
};

console.log(user);

const product = {
  label: "Red Notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2,
};

// const label = product.label
// const stocl = product.stock

// --- Object Desturcturing ---

// const { label: productLabel, stock, rating = 5 } = product;
// console.log(productLabel);
// console.log(stock);
// console.log(rating);

const traansaction = (type, { label, stock = 0 } = {}) => {
  console.log(type, label, stock);
};

traansaction("order", product);
