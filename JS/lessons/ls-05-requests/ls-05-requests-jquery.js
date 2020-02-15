$.ajax({
  type: "Get",
  contentType: "application/json",
  url: "https://api.github.com/users/SviatoslavSlichnyi",

  success: json => loaded(json)
});

loaded = data => {
  console.log(data);

  let login = document.getElementById("login");
  login.innerHTML = data.login;
};
