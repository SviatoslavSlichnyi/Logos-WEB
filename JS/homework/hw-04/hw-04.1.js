document.addEventListener("DOMContentLoaded", () => {
  let liElements = document.getElementsByTagName("li");

  let btnFill = document.getElementById("btn_fill");
  btnFill.addEventListener("click", () => {
    for (let li of liElements) {
      li.innerHTML = "item";
    }

    let uls = document.getElementsByTagName("ul");

    let answer = "";
    for (let i = 0; i < uls.length; ++i) {
      let liAmount = uls[i].getElementsByTagName("li").length;
      answer += `<h4>The list #${i + 1} has ${liAmount} children.</h4>`;
    }

    document.getElementById("statistic").innerHTML = answer;
  });

  document.getElementById("hide_text").addEventListener("click", () => {
    let txt = document.getElementById("text");
    if (txt.style.display == "none") {
      txt.style.display = "block";
    } else {
      txt.style.display = "none";
    }
  });
});
