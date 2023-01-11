const data = require("../data/zoo_data");

const { species } = data;

const getAllLocations = () => {
  const locations = [];

  species.map((specie) => {
    if (!locations.includes(specie.location)) locations.push(specie.location);
    return;
  });

  return locations;
};

const getAnimalMap = (options = {}) => {
  const locations = getAllLocations();
  const filteredAnimalsLocation = {};

  console.log(options);

  if (!options.includeNames || options.includeNames === false) {
    locations.map((location) => {
      const list = [];
      species.filter((specie) => {
        if (specie.location === location) {
          list.push(specie.name);
          return (filteredAnimalsLocation[location] = list);
        }
      });
    });
    console.log(filteredAnimalsLocation);
    return filteredAnimalsLocation;
  }
  if (options.includeNames && !options.sex && !options.sorted) {
    locations.map((location) => {
      const list = [];
      species.filter((specie) => {
        if (specie.location === location) {
          specie.residents.map((resident) => {
            list.push(resident.name);
            const obj = {};
            obj[specie.name] = list;
            return (filteredAnimalsLocation[location] = obj);
          });
        }
      });
    });
    console.log(filteredAnimalsLocation);
    return filteredAnimalsLocation;
  }
  if (options.includeNames && options.sorted && !options.sex) {
    locations.map((location) => {
      const list = [];
      species.filter((specie) => {
        if (specie.location === location) {
          specie.residents.map((resident) => {
            list.push(resident.name);
            const obj = {};
            obj[specie.name] = list;
            list.sort();
            return (filteredAnimalsLocation[location] = obj);
          });
        }
      });
    });
    console.log(filteredAnimalsLocation);
    return filteredAnimalsLocation;
  }
  if (options.includeNames && options.sorted && options.sex) {
    locations.map((location) => {
      const list = [];
      species.filter((specie) => {
        if (specie.location === location) {
          specie.residents.map((resident) => {
            if (resident.sex === options.sex) {
              list.push(resident.name);
              const obj = {};
              obj[specie.name] = list;
              list.sort();
              return (filteredAnimalsLocation[location] = obj);
            }
          });
        }
      });
    });
    console.log(filteredAnimalsLocation);
    return filteredAnimalsLocation;
  }
  if (!options.includeNames && options.sorted && options.sex) {
    locations.map((location) => {
      const list = [];
      species.filter((specie) => {
        if (specie.location === location) {
          specie.residents.map((resident) => {
            if (resident.sex === options.sex) {
              list.push(resident.name);
              list.sort();
              return (filteredAnimalsLocation[location] = list);
            }
          });
        }
      });
    });
    console.log(filteredAnimalsLocation);
    return filteredAnimalsLocation;
  }
};

const objOptions = {
  includeNames: true,
  sorted: true,
  sex: "male",
};

getAnimalMap(objOptions);

module.exports = getAnimalMap;