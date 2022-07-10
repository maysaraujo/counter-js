const CURRENT_NUMBER = document.getElementById("currentNumber");

let count = 0;

function increment() {
  count++;
  CURRENT_NUMBER.innerHTML = count;
}

function decrement() {
  if (count <= 0) {
    document.getElementById("decrement").disabled = true;
  }
  count--;
  CURRENT_NUMBER.innerHTML = count;
}
