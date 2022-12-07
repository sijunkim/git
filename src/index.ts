interface Person {
  name: string;
}

// const alice: Person = { name: 'Alice' };
const people: Person[] = ['피카츄', '파이리', '꼬부기', '이상해씨'].map((name): Person => ({ name }));
console.log(people);
for (const person of people) {
  console.log(person.name);
}
