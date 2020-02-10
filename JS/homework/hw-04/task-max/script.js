document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn").addEventListener("click", () => {
    let list = document.getElementById("list");
    if (list.style.display == "none") {
      list.style.display = "block";
    } else {
      list.style.display = "none";
    }
  });
});
