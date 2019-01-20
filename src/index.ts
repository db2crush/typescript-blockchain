interface Human  {
    name: string,
    age: number,
    gender: string
}

const person = {    
    name: "delbert",
    age: 28,
    gender: "male"
} 

const Hi = (person: Human): string => {
    return `Hello ${person.name}, your age is ${person.age} and your gender is a ${person.gender} !`;
}

Hi(person);

export {};
