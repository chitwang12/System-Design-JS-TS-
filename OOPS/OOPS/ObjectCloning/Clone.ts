const  _ = require ("lodash");
// Object Cloning in OOP (JS/TS Notes)


// // What is Object Cloning?
    // Object cloning = creating a new object with the same values as an existing one.

    // Independent object in memory (not the same reference).

    // Changes in clone don’t affect original (except in shallow cloning when nested objects are shared).


//Why Use Object Cloning?
    // Efficiency → quickly duplicate objects instead of reinitializing.

    // Preserve State → useful for undo/redo or caching.

    // Prototype Pattern → re-use object templates.

    // Reduce Coupling → prevent unintended side-effects between objects.

// Types of Cloning in JS/TS

// 1. Shallow Cloning

// Copies primitive values by value.

// Copies object references by reference (nested objects are shared).

// Modification of nested objects affects both original & clone.

// TS: same as JS, but you can type it
  



  
// Example

const bigObject = {
    id: 101,
    name: "Alice",
    dob: new Date("1999-05-21"),
    hobbies: ["reading", "coding", "cycling"],
    address: {
      city: "Delhi",
      pincode: 110001,
      geo: { lat: 28.7041, lng: 77.1025 },
    },
    meta: new Map([
      ["role", "admin"],
      ["level", 5],
    ]),
    tags: new Set(["typescript", "javascript", "nodejs"]),
  };


//Shallow Copy Using Spread Operator


const shallowClone = { ...bigObject };

// Modify nested values
shallowClone.address.city = "Mumbai";
shallowClone.hobbies.push("music");

// Modify primitives
shallowClone.name = "Bob";

console.log("Original:", bigObject);
console.log("Shallow Clone:", shallowClone);



// Deep Cloning
const deepCloneJSON = JSON.parse(JSON.stringify(bigObject));

deepCloneJSON.address.city = "Bangalore";
deepCloneJSON.hobbies.push("gaming");

console.log("Original:", bigObject);
console.log("Deep Clone JSON:", deepCloneJSON);
// Limitations: no functions, Dates become strings, loses Map/Set

//Deep Clone (Structured Clone Modern Way)
const deepCloneStructured = structuredClone(bigObject);

deepCloneStructured.address.city = "Pune";
deepCloneStructured.hobbies.push("painting");
deepCloneStructured.dob.setFullYear(2000);
deepCloneStructured.meta.set("role", "superadmin");
deepCloneStructured.tags.add("express");

console.log("Original:", bigObject);
console.log("Deep Clone Structured:", deepCloneStructured);


// Deep Clone (Lodash Library)


const deepCloneLodash = _.cloneDeep(bigObject);

deepCloneLodash.address.city = "Hyderabad";
deepCloneLodash.hobbies.push("travelling");
deepCloneLodash.dob.setFullYear(2010);
deepCloneLodash.meta.set("level", 10);
deepCloneLodash.tags.add("react");

console.log("Original:", bigObject);
console.log("Deep Clone Lodash:", deepCloneLodash);






  
