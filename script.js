let currentAnswer = "";
let correctAnswer;
let attempts = 0;

function press(num) {
  currentAnswer += num;
  document.getElementById("answerDisplay").innerText = "Your answer: " + currentAnswer;
}

function clearAnswer() {
  currentAnswer = "";
  document.getElementById("answerDisplay").innerText = "Your answer: ";
}

function randomQuestion() {
  const level = Math.min(attempts + 1, 3); // harder each time
  let a, b, q;

  if (level === 1) {
    a = Math.floor(Math.random() * 10);
    b = Math.floor(Math.random() * 10);
    correctAnswer = a + b;
    q = `${a} + ${b}`;
  } else if (level === 2) {
    a = Math.floor(Math.random() * 12);
    b = Math.floor(Math.random() * 12);
    correctAnswer = a * b;
    q = `${a} × ${b}`;
  } else {
    // Algebra question
    const x = Math.floor(Math.random() * 10) + 1;
    const m = Math.floor(Math.random() * 5) + 1;
    const c = Math.floor(Math.random() * 10);
    const y = m * x + c;
    q = `If y = ${y} and equation is y = ${m}x + ${c}, find x`;
    correctAnswer = x;
  }

  document.getElementById("question").innerText = q;
}

function submitAnswer() {
  const userAns = parseFloat(currentAnswer);
  const message = document.getElementById("message");

  if (isNaN(userAns)) {
    message.innerText = "⚠️ Please enter a number!";
    return;
  }

  if (userAns === correctAnswer) {
    message.innerText = "✅ Correct!";
    attempts = 0;
  } else {
    attempts++;
    if (attempts >= 3) {
      message.innerText = "❌ Out of attempts! Game restarting...";
      attempts = 0;
    } else {
      message.innerText = `❌ Wrong! Try again! (${3 - attempts} left)`;
    }
  }

  clearAnswer();
  setTimeout(() => {
    randomQuestion();
    message.innerText = "";
  }, 1500);
}

randomQuestion();
