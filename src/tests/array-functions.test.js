import {map,filter,find,findLast} from "../services/array-functions";
const names = ["Jon","Bob","Ted","Barney","Lilly","Robin","Saul","Axe"];
const myNumbers = [4,3,55,22,99,1913,7,5,4,2,1];

function addHello(name){
  return "Hello " + name;
}
function findThree(name){
  return name.length === 3;
}
function findBarney(name){
  return name === "Barney";
}
//head should find the first element in the array "Jon"

describe("map", () => {
  it("should prepend Hello to each name", () => {
    expect(map(names,addHello)).toEqual([
      "Hello Jon",
      "Hello Bob",
      "Hello Ted",
      "Hello Barney",
      "Hello Lilly",
      "Hello Robin",
      "Hello Saul",
      "Hello Axe"
    ]);
  });
});

//filter should return an array with names of length 3
//["Jon","Bob","Ted","Axe"]

describe("filter", () => {
  it("should return a new array of names with 3 letters in it", () => {
    expect(filter(names, findThree)).toEqual([
      'Jon',
      'Bob',
      'Ted',
      'Axe'
    ]);
  });
});

//find should find one name of "Barney"

describe("find", () => {
  it("if should return Barney", () => {
    expect(find(names, findBarney)).toEqual("Barney");
  });
});

//findLast should find the last name of "Axe"

//reverse should return an array with the elements in the opposite order
//["Axe","Saul","Robin","Lilly","Barney","Ted","Bob","Jon"]
//tail should return all elements in an array except the first one
//[Bob","Ted","Barney","Lilly","Robin","Saul","Axe"];
