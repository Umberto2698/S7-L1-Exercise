class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  static compareAge(user1, user2) {
    if (user1.age > user2.age) {
      return user1.firstName + " " + user1.lastName + " è più grande di " + user2.firstName + " " + user2.lastName;
    } else if (user1.age < user2.age) {
      return user1.firstName + " " + user1.lastName + " è più piccolo di " + user2.firstName + " " + user2.lastName;
    } else {
      return (
        user1.firstName +
        " " +
        user1.lastName +
        " e " +
        user2.firstName +
        " " +
        user2.lastName +
        " hanno la stessa età."
      );
    }
  }
}

const utenti = [
  new User("Mario", "Rossi", 34, "Perugia"),
  new User("Luigi", "De Medici", 50, "Firenze"),
  new User("Umberto", "Zappulla", 25, "Trieste"),
  new User("Elisabetta", "Segatel", 25, "San Donà di Piave"),
];

console.log(User.compareAge(utenti[3], utenti[2]));

const dati = document.getElementsByTagName("input");
const btn = document.getElementById("submit");
const ul = document.getElementsByTagName("ul")[0];
const br = document.createElement("br");

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  static sameOwner(pet1, pet2) {
    return pet1.ownerName === pet2.ownerName;
  }
}

let animali = [];

btn.addEventListener("click", (submit) => {
  submit.preventDefault();
  for (let i = 0; i < dati.length; i++) {
    const li = document.createElement("li");
    li.innerText = `${dati[i].value}`;
    ul.appendChild(li);
  }
  ul.appendChild(br);
  animali.push(new Pet(dati[0].value, dati[1].value, dati[2].value, dati[3].value));
  if (animali.length > 1) {
    for (let i = 0; i < animali.length - 1; i++) {
      if (Pet.sameOwner(animali[i], animali[animali.length - 1])) {
        console.log(animali[i]);
        console.log(animali[animali.length - 1]);
        console.log(true);
      }
    }
  }
});
