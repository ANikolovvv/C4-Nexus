export const sortingHandler = (arrayData, sortArray) => {
  let currentData = arrayData;

  sortArray.forEach((element) => {
    switch (element) {
      case "alphabeticalA-Z":
        currentData = currentData
          .slice()
          .sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "AlphabeticalZ-A":
        currentData = currentData
          .slice()
          .sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "PriceAscending":
        currentData = currentData.slice().sort((a, b) => a.price - b.price);
        break;
      case "PriceDescending":
        currentData = currentData.slice().sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
  });

  return currentData;
};
export const filteredData = (data, colors, prices) => {
  const price = prices[0] ? prices[0].split("-") : "";
  const min = Number(price[0]);
  const max = Number(price[1]);

  const filteredProducts = (product) => {
    const colorMatch = colors.length === 0 || colors.includes(product.color);
    return colorMatch;
  };

  const filteredByPrice = (item) => {
    const currentPrice = item.discountedPrice
      ? item.discountedPrice
      : item.price;

    if (min && currentPrice < min) {
      return false;
    }
    if (max && currentPrice >= max) {
      return false;
    }
    return true;
  };

  let current = data.filter(filteredProducts).filter(filteredByPrice);

  return current;
};
