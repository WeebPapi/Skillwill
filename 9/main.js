import validator from "validator";

const strings = ["test@test.com", "abcDE123"];

strings.forEach((element) => {
  console.log(validator.isEmail(element));
});
