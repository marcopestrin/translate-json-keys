const source = {
  default: 3,
  opt2: {
    opt3: 0,
    opt7: 0,
    opt4: 1,
  },
  opt3: {
    opt2: 0,
    opt7: 0,
    opt4: 0,
  },
  opt4: {
    opt2: 1,
    opt3: 0,
    opt5: {
      opt7: 0,
    },
  },
  opt7: {
    opt2: 0,
    opt3: 0,
    opt4: {
      opt5: 0,
    },
  },
  opt8: {
    opt10: 1,
  },
  opt10: {
    opt8: 1,
  },
  opt5: {
    opt4: {
      opt7: 0,
    },
  },
};

const matrix = {
  opt1: 'Stocks',
  opt2: 'Bonds',
  opt3: 'ETF',
  opt4: 'Options',
  opt5: 'Annuities',
  opt6: 'Retirement',
  opt7: 'Insurance',
  opt8: 'Futures',
  opt9: 'Funds',
  opt10: 'Cryptocurrencies',
};

const translateValues = (opt, options) => {
  const result = Object.entries(opt).reduce((acc, [key, value]) => {
    if (options[key]) {
      // to translate
      if (typeof value === 'object') {
        // to be recursion
        acc[options[key]] = translateValues(value, options);
      }
      if (typeof value === 'number') {
        // return the value
        acc[options[key]] = Number(value)
      }
    } else {
      // name is not in matrix
      acc[key] = Number(value);
    }
    return acc;
  }, {});
  return result
};

const result = translateValues(source, matrix);
console.log(resut);
