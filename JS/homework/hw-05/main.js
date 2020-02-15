$(() => {

  let formElem = $("#regform");
  formElem.submit(async e => {
    e.preventDefault();

    // let json = JSON.stringify($("#regform").serializeArray());
    // console.log(json);

    let user = {
      id: 13,
      firstName: "Steve",
      lastName: "Jobs",
      age: 45,
      address: 'WolfStreet',
      email: 'steve.jobs@gmail.com'
    };

    console.log(JSON.stringify(user));
  

    $.ajax({
      type: "POST",
      data: JSON.stringify(user),
      crossDomain: true,
      dataType: 'json',
      contentType: "application/json;charset=utf-8",
      url: "http://localhost:8080/register",
    });

  })

});
