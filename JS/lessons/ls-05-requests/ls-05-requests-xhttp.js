//////////////Asynchronous request///////////////////////

let xhr = new XMLHttpRequest();

//set up settings
xhr.open("GET", "https://api.github.com/users/SviatoslavSlichnyi");

//send request
xhr.send();

xhr.onload = () => {
  //check error
  if (xhr.status != 200) {
    alert(`Error ${xhr.status}: ${xhr.statusText}`);
  }
  //success
  else {
    console.log(`Length of bytes of response is ${xhr.response.length}`);
    let json = JSON.parse(xhr.response);
    console.log(json);
    let login = document.getElementById('login');
    login.innerHTML = json.login;
  }
};

xhr.onprogress = event => {
  if (event.lengthComputable) {
    console.log(`Progress: Uploaded ${event.loaded}/${event.total} Bytes`);
  } else {
    console.log(`Progress: Uploaded ${event.loaded} Bytes`);
  }
};

xhr.onerror = () => {
  alert("request was not sent");
}



///////////////Synchronous request/////////////////////////
// let xhrSync = new XMLHttpRequest();

// //set up settings
// xhrSync.open("GET", "<URL>", false);

// try {
//   xhrSync.send();
//   if (xhrSync.status != 200) {
//     alert(`Error ${xhrSync.status}: ${xhrSync.statusText}`);
//   }
// } catch(err) {
//   alert("request was not sent");
// }