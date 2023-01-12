const data = require('../data/zoo_data');

const { hours, species } = data;

const getAvalibleDates = () => {
  const dates = [];
  const days = Object.keys(hours);
  species.map(() => {
    days.map((date) => {
      if (!dates.includes(date)) dates.push(date);
    });
  });
  return dates;
};

const getSchedule = (scheduleTarget = '') => {
  const dates = getAvalibleDates();
  const schedule = {};
  const targetAnimal = species.find((specie) => specie.name === scheduleTarget);

  if (targetAnimal) {
    console.log(targetAnimal.availability);
    return targetAnimal.availability;
  }

  dates.map((day) => {
    const exhibitions = [];

    species.map((specie) => {
      if (specie.availability.includes(day)) exhibitions.push(specie.name);
    });

    Object.entries(hours).map(([key, value]) => {
      const officeHour = value.open > 0
        ? `Open from ${value.open}am until ${value.close}pm`
        : 'CLOSED';
      if (key === day) {
        const result = (schedule[key] = {
          officeHour,
          exhibition: value.open > 0 ? exhibitions : 'The zoo will be closed!',
        });
        return result;
      }
    });
  });
  const daysOfTheWeek = Object.keys(schedule);
  const targetDay = daysOfTheWeek.find((day) => day === scheduleTarget);
  if (targetDay) {
    const result = {};
    result[targetDay] = schedule[targetDay];
    console.log(result);
    return result;
  }
  console.log(schedule);
  return schedule;
};

getSchedule();

module.exports = getSchedule;
