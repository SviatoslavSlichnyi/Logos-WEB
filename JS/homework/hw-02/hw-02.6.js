camelize = str => {
  let words = str.split("-");
  let newStr = words[0];

  for (let i = 1; i < words.length; i++) {
    newStr += words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  return newStr;
};

let mystr = "my-short-string";
let newstr = camelize(mystr);
console.log(newstr);
