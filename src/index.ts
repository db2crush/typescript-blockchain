const name = "delbert",
    age = 28,
    gender = "male";

const Hi = (name: string, age: number, gender?:string): string => {
    return `Hello ${name}, your age is ${age} and your gender is a ${gender} !`;    
}

Hi(name, age);

export {};
