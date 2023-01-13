const data = require('../data/zoo_data');

const { prices } = data;

const countEntrants = (entrants) => {
  const objEntrants = { child: 0, adult: 0, senior: 0 };
  entrants.map((entrant) => {
    if (entrant.age < 18) objEntrants.child += 1;
    if (entrant.age >= 18 && entrant.age < 50) objEntrants.adult += 1;
    if (entrant.age >= 50) objEntrants.senior += 1;
    return objEntrants;
  });
  console.log(objEntrants);
  return objEntrants;
};

const calculateEntry = (entrants = []) => {
  if (JSON.stringify(entrants) === '{}' || entrants.length === 0) return 0;

  const countPeople = countEntrants(entrants);
  const { adult, child, senior } = countPeople;
  const moneyEarned = child * prices.child + adult * prices.adult + senior * prices.senior;
  const total = Number((Math.round(moneyEarned * 100) / 100).toFixed(2));

  return total;
};
calculateEntry();

module.exports = { calculateEntry, countEntrants };
