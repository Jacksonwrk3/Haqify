function containsSpecialCharacters(input) {
  return /[!@#$%^&*()_+\-:\[\]{};':"\\|,.<>\/?]+/.test(input);
}

function containsNumbers(input) {
  return /\d/.test(input);
}

function containsAccents(input) {
  return /[À-ÿ]/.test(input);
}

function containsCapitalLetters(input) {
  return /[A-Z]/.test(input);
}

function containsLowerCaseLetters(input) {
  return /[a-z]/.test(input);
}

function containsLetters(input) {
  return /[a-zA-Z]/.test(input);
}

const check = {
  containsSpecialCharacters: containsSpecialCharacters,
  containsNumbers: containsNumbers,
  containsAccents: containsAccents,
  containsCapitalLetters: containsCapitalLetters,
  containsLowerCaseLetters: containsLowerCaseLetters,
  containsLetters: containsLetters,
};

export default check;
