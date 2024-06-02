const hasMiddle = true;
const president = {
  first: 'sijun',
  last: 'kim',
};
const fullName = { ...president, ...(hasMiddle ? { middle: 'changer', temp: 'temp' } : {}) };
console.log(fullName);

const a = 'a';
const b = 'b';
const c = 'c';
const d = 'd';
