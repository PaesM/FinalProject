document.getElementById('getFact').addEventListener('click', function () {
    const url = 'https://catfact.ninja/fact'; // Direct API link

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('fact').textContent = data.fact;
        })
        .catch(error => {
            document.getElementById('fact').textContent = 'Failed to fetch a cat fact.';
            console.error('Error:', error);
        });
});
