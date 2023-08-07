function calculateScore() {
  const answers = ['b', 'a', 'c', 'c', 'd'];
  let score = 0;

  for (let i = 1; i <= 5; i++) {
    const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
    if (selectedAnswer && selectedAnswer.value === answers[i - 1]) {
      score++;
    }
  }

  if (score >= 3) {
    sessionStorage.setItem('page1Score', score);
    window.location.href = 'page2.html';
  } else {
    sessionStorage.setItem('page1Score', score);
    window.location.href = 'page3.html';
  }
}

function calculateSecondPageScore() {
  const answers = ['b', 'd', 'a', 'c', 'c']; // Correct answers for page2.html questions
  let score = 0;

  for (let i = 6; i <= 10; i++) {
    const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
    if (selectedAnswer && selectedAnswer.value === answers[i - 6]) {
      score++;
    }
  }

  sessionStorage.setItem('page2Score', score);

  const page1Score = sessionStorage.getItem('page1Score');
  const totalScore = parseInt(page1Score) + parseInt(score);
  sessionStorage.setItem('totalScore', totalScore);

  window.location.href = 'result.html';
}

function calculateThirdPageScore() {
  const answers = ['a', 'a', 'a', 'c', 'd']; // Correct answers for page3.html questions
  let score = 0;

  for (let i = 11; i <= 15; i++) {
    const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
    if (selectedAnswer && selectedAnswer.value === answers[i - 11]) {
      score++;
    }
  }

  sessionStorage.setItem('page3Score', score);

  const page1Score = sessionStorage.getItem('page1Score');
  const totalScore = parseInt(page1Score) + parseInt(score);
  sessionStorage.setItem('totalScore', totalScore);

  window.location.href = 'result.html';
}

function goToStartPage() {
  window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', () => {
  const totalScoreElement = document.getElementById('total-score');
  const totalScore = sessionStorage.getItem('totalScore');

  if (totalScoreElement && totalScore !== null) {
    totalScoreElement.textContent = totalScore;
    sessionStorage.removeItem('totalScore');
  }
});
