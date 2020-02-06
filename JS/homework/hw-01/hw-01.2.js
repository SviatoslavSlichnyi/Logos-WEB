let login;
let password;

login = "somebody";
password = "qwerty";

whos = (login) => {
  if (login == "cancel") {
    console.log("Canceled.");
  } else if (login == "Admin") {
    verifyPassword();
  } else {
    console.log("I don't know you.");
  }
};

verifyPassword = (password) => {
  if (password == "Cancel") {
    console.log("Canceled");
  } else if (password == "Other") {
    console.log("TheMaster");
  } else {
    console.log("Wrong password");
  }
};


//main()
whos();