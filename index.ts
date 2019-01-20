const name = "delbert",
    age = 28,
    gender = "male";

const Hi = (name, age, gender?) => {
    console.log(`Hello ${name}, your age is ${age} and your gender is a ${gender}`);
}

Hi(name, age);

export {};
