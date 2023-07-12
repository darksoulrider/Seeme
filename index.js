import validator from "validator";

const email = "mack@gmail.com";
const dt = "2024-03-31"; // cuase of leap year ?

console.log(validator.isDate(dt));
