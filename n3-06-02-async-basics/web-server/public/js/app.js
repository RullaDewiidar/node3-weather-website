console.log("Client Side JS is loaded!");
const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  messageOne.textContent = "Loading";
  messageTwo.textContent.innerHTML = "";
  fetch("http://localhost:3000/weather?address=" + location).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          console.log(data.error);
          messageOne.textContent = data.error;
        } else {
          messageOne.textContent = data.address;
          messageTwo.innerHTML = data.forecast.replace(/\n/g, '<br>');
          console.log(data.forecast);
        }
      });
    }
  );
});
