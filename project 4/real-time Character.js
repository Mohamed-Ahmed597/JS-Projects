const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");
textareaEl.addEventListener("keyup", () => {
  updeateCounter();
});
updeateCounter();
function updeateCounter() {
  totalCounterEl.innerHTML = textareaEl.value.length;
  remainingCounterEl.innerText =
    textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}
