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
        currentData = arrayData.slice().sort((a, b) => a.price - b.price);
        break;
      case "Price descending":
        currentData = arrayData.slice().sort((a, b) => b.price - a.price);
        break;
      default:
        currentData = arrayData;
        break;
    }
  }

  return currentData;
};

export const filteredData = (data, color, price) => {
  let filteredByColor = (item) => {
    if (!color || color !== item.color) {
      return false;
    }
    return true;
  };
  let filteredByPrice = (item) => {
    if (!price || Number(price) > item.price) {
      return false;
    }
    return true;
  };
  let filtered = data.filter(filteredByColor).filter(filteredByPrice);
  return filtered;
};
