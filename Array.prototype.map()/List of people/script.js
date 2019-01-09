function makeSentence(person) {
    return `${person.name} is ${person.age} years old`;
}

function peopleSentence(people) {
    return people.map(makeSentence);
}

let people = [
    { name: "TK", age: 26 },
    { name: "Kaio", age: 10 },
    { name: "Kazumi", age: 30 }
];

console.log(peopleSentence(people));