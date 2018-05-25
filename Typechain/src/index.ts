interface Human {
    name: string,
    age: number,
    gender: string
}

const person = {
    "name": "Ahn Sohyeon",
    "age" : 23,
    "gender": "female"
};

const sayJiyeong = (person: Human): string => {
    return (`Hello ${person.name}, I'm Jiyeong, you are ${person.age}, and you are a ${person.gender}`)
} 

console.log(sayJiyeong(person));

export{};
