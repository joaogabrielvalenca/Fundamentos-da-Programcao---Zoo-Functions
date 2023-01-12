const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('com o parâmetro vazio retorna objeto com todos os horários', () => {
    const functionDays = getOpeningHours();
    const empty = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(functionDays).toEqual(empty);
  });
  it('com o parâmetro em 09:00-AM em monday retorna que o zoo está fechado', () => {
    const monday = 'Monday';
    const mondayHour = '09:00-AM';
    const functionMonday = getOpeningHours(monday, mondayHour);
    const mondayReturn = 'The zoo is closed';
    expect(functionMonday).toEqual(mondayReturn);
  });
  it('com o parâmetro em 09:00-AM em tuesday retorna que o zoo está aberto', () => {
    const tuesday = 'Tuesday';
    const tuesdayHour = '09:00-AM';
    const functionTuesday = getOpeningHours(tuesday, tuesdayHour);
    const tuesdayReturn = 'The zoo is open';
    expect(functionTuesday).toEqual(tuesdayReturn);
  });
  it('com o parâmetro em 09:00-PM em wednesday retorna que o zoo está fechado', () => {
    const wednesday = 'Wednesday';
    const wednesdayHour = '09:00-PM';
    const functionWednesday = getOpeningHours(wednesday, wednesdayHour);
    const wednesdayReturn = 'The zoo is closed';
    expect(functionWednesday).toEqual(wednesdayReturn);
  });
});
