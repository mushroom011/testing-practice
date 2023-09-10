const analyzeArray = (arr) => {
    const length = arr.length;
    const average = arr.reduce((prev, next) => prev + next) / length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);

  return {
    average,
    min,
    max,
    length,
  };
};

export default analyzeArray;
