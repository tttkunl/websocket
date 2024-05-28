function printName(person){
    console.log(person.name)
}

const person={
    name: "Steve",
    phone:"00123456",
    greet:()=>{
        console.log(`hello i'm ${person.name}`)
    },
    greet2:function(){
        console.log(`I'm ${this.name}`)
    }
};

const {name,phone,greet,greet2}= person;

function printName1({name,phone}){
    console.log(name)
    console.log(phone)
}

person.greet()
person.greet2()
printName1(person)