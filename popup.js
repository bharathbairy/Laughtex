document.getElementById('laughBtn').addEventListener('click', () => {

  const firstClick = document.querySelector('.firstClick');
  const jokeBox = document.querySelector('.jokeBox');

  fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById('joke').textContent = data.joke;
      firstClick.textContent = 'Next';
      jokeBox.style.display = 'block';
    })
    .catch(e => {
      document.getElementById('joke').textContent = 'Oops! No joke for now 😢';
    });
});

const gradients = [
  "linear-gradient(135deg, #FFD966 0%, #FFEB99 100%)",   // Sunny Yellow
  "linear-gradient(135deg, #FF6F91 0%, #FF9BAA 100%)",   // Warm Pink
  "linear-gradient(135deg, #6BCB77 0%, #9BE8A0 100%)",   // Fresh Green
  "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",   // Soft Aqua
  "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",   // Lavender Pink
  "linear-gradient(135deg, #fda085 0%, #f6d365 100%)",   // Peachy Orange
  "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",   // Light Blue
  "linear-gradient(to right, #ff758c, #ff7eb3)",         // Pink Candy
  "linear-gradient(to right, #667eea, #764ba2)",         // Purple Blue
  "linear-gradient(to right, #00c9ff, #92fe9d)",         // Aqua Green
  "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",   // Lime Green
  "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",   // Sunny Orange
  "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",   // Soft Coral
  "linear-gradient(135deg, #fc466b 0%, #3f5efb 100%)",   // Neon Pink to Blue
  "linear-gradient(to right, #ff6a00, #ee0979)",         // Orange to Pink
  "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",   // Minty Blue
  "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)",   // Purple to Light Blue
  "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)",   // Creamy Beige
  "linear-gradient(to right, #f83600, #f9d423)",         // Red to Yellow
  "linear-gradient(135deg, #c471f5 0%, #fa71cd 100%)"    // Violet Pink
];

document.addEventListener('DOMContentLoaded', () => {
  const jokeBox = document.querySelector('.jokeBox');
  jokeBox.style.background = gradients[Math.floor(Math.random() * gradients.length)];
});
