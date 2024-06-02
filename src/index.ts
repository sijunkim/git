const hasMiddle = true;
const president = {
  first: 'sijun',
  last: 'kim',
};
const fullName = { ...president, ...(hasMiddle ? { middle: 'changer', temp: 'temp' } : {}) };
console.log(fullName);

const wedding = true;
const house = 'incheon';
const man = 'kimsijun';
