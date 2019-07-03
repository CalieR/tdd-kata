class StringCalculator {
  add(string) {
    if (string === "") {
      return 0;
    } else {
      const numArr = string.split(/\n|,/).map(num => parseInt(num));
      const negatives = []
      numArr.forEach(number => {
        if (number < 0) negatives.push(number)
      });
      if (negatives.length > 0) {
        throw new Error(`negatives not allowed: ${negatives}`)
      }
      return numArr.reduce((a, b) => a + b, 0);
    }
  }
}

module.exports = StringCalculator;
