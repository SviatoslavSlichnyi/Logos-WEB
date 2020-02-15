////////fetch////////
//let promise = fetch(url, <option>)

//method: GET
(async () => {
  let url = "https://api.github.com/users/SviatoslavSlichnyi";
  let response = await fetch(url);

  if (response.ok) {
    const resJson = await response.text();
    const json = JSON.parse(resJson);
    console.log(json);

    let login = document.getElementById("login");
    login.innerHTML = json.login;
  } else {
    alert(`Error HTTP ${response.status}: ${response.statusText}`);
  }
})();

//method: POST
// let user = {
//   name: "Steve",
//   surname: "Jobs"
// };

// let response = await fetch(url, {
//   method: "POST",
//   headers: {
//     "Content-type": "application/json;charset=UTF-8"
//   },
//   body: JSON.stringify(user)
// });

// let result = await response.json;
// alert(result.message);
