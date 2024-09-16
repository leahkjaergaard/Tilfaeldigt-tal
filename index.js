function logRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 101);
  console.log(randomNumber);
  document.querySelector(".random-number").textContent = randomNumber;
}

logRandomNumber();
