const movieList = document.getElementById("movie-list");

movieList.style["background-color"] = "red";
movieList.style.display = "block";

const userChoseKeyName = "level";



let person = {
    "first name": "Max",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    greet: function (){
        alert("Hi there!");
    },

1.5: "Hello!"
};

person.greet();

//...

//person.age = 31;
delete person.age;
//person.age = undefined;
//person.age = null; 
person.isAdmin = true;

console.log(person["first name"]);
console.log(person[1.5]);
console.log(person);
