document.getElementById('laughBtn').addEventListener('click', () => {

  const firstClick = document.querySelector('.firstClick');

  fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById('joke').textContent = data.joke;
      firstClick.textContent = 'Next';
    })
    .catch(e => {
      document.getElementById('joke').textContent = 'Oops! No joke for now 😢';
    });
});
