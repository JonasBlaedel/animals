"use strict";

window.addEventListener("DOMContentLoaded", start);

const allAnimals = [];

function start() {
  console.log("ready");

  loadJSON();
}

function loadJSON() {
  fetch("animals.json")
    .then((response) => response.json())
    .then((jsonData) => {
      // when loaded, prepare objects
      prepareObjects(jsonData);
    });
}

function prepareObjects(jsonData) {
  jsonData.forEach((jsonObject) => {
    // TODO: Create new object with cleaned data - and store that in the allAnimals array
    const animals = jsonObject.fullname.split(" ");
    // her laves det nye objekt baseret på data der er splittet foroven
    const animal = {
      name: animals[0],
      desc: animals[2],
      type: animals[3],
      age: jsonObject.age,
    };

    //vi pusher objektet til vores tomme array øverst på siden

    allAnimals.push(animal);

    allAnimals.name = animals[0];
    allAnimals.desc = animals[2];
    allAnimals.type = animals[3];
    allAnimals.age = jsonObject.age;

    console.log(allAnimals);

    jsonData = allAnimals;
    // TODO: MISSING CODE HERE !!!
  });

  displayList();
}

function displayList() {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  allAnimals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}
