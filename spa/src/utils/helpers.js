export const sortingHandler = (arrayData, sortArray) => {
  let currentData = arrayData;

  for (let e = 0; e < sortArray.length; e++) {
    const element = sortArray[e];
    switch (element) {
      case "alphabeticalA-Z":
        currentData = arrayData
          .slice()
          .sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "AlphabeticalZ-A":
        currentData = arrayData
          .slice()
          .sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "PriceAscending":
        currentData = arrayData.sort((a, b) => a.price - b.price);
        break;
      case "Price descending":
        currentData = arrayData.sort((a, b) => b.price - a.price);
        break;
      default:
        currentData = arrayData;
        break;
    }
  }

  return currentData;
};

export const filteredData = (data, colors, prices) => {
  const filteredProducts = data.filter((product) => {
    const colorMatch = colors.length === 0 || colors.includes(product.color);
    const priceMatch =
      prices.length === 0 ||
      (prices[0] === "0-25" && product.price <= 25) ||
      (prices[0] === "25-100" && product.price > 25);

    return colorMatch && priceMatch;
  });

  return filteredProducts;
};
