const data = require('../data/zoo_data');

const entrants = [
  { name: "Lara Carvalho", age: 5 },
  { name: "Frederico Moreira", age: 5 },
  { name: "Pedro Henrique Carvalho", age: 5 },
  { name: "Maria Costa", age: 18 },

  { name: "Carlos Nogueira", age: 50 },
];

const { prices } = data;

// { child: 3, adult: 2, senior: 1 }

const countEntrants = (entrants) => {
  const objEntrants = {};
  let child = 0;
  let adult = 0;
  let senior = 0;

  entrants.map((entrant) => {
    if (entrant.age < 18) {
      objEntrants["child"] = child = child + 1;
      objEntrants["adult"] = adult;
      objEntrants["senior"] = senior;
    }
    if (entrant.age >= 18 && entrant.age < 50) {
      objEntrants["child"] = child;
      objEntrants["adult"] = adult = adult + 1;
      objEntrants["senior"] = senior;
    }
    if (entrant.age >= 50) {
      objEntrants["child"] = child;
      objEntrants["adult"] = adult;
      objEntrants["senior"] = senior = senior + 1;
    }
  });
  return objEntrants;
};

countEntrants(entrants);

const calculateEntry = (entrants = []) => {
  if (entrants.length === 0 || entrants === {}) return 0;
  const countPeople = countEntrants(entrants);
  console.log(countPeople);
  const { adult, child, senior } = countPeople;
  const moneyEarned =
    child * prices.child + adult * prices.adult + senior * prices.senior;
  const total = Number((Math.round(moneyEarned * 100) / 100).toFixed(2));
  console.log(total);
  return total;
};

calculateEntry(entrants);

module.exports = { calculateEntry, countEntrants };

module.exports = { calculateEntry, countEntrants };
