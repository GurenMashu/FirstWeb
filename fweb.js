// fweb.js

// Function to fetch and display programs based on selected language and search query
function fetchPrograms(language, query) {
    fetch(`json/${language}_programs.json`)
        .then(response => response.json())
        .then(data => {
            const results = data.filter(program => 
                program.name.toLowerCase().includes(query.toLowerCase()) ||
                program.description.toLowerCase().includes(query.toLowerCase())
            );
            displayResults(results);
        })
        .catch(error => console.error('Error fetching programs:', error));
}

// Function to display results in the UI
function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear previous results
    
    results.forEach(program => {
        const programDiv = document.createElement('div');
        programDiv.className = 'program-box'; // Apply styling from CSS
        programDiv.innerHTML = `
            <h3>${program.name}</h3>
            <p><strong>Description:</strong> ${program.description}</p>
            <p><strong>Algorithm:</strong> ${program.algorithm}</p>
            <pre><code>${program.code}</code></pre>
        `;
        resultsContainer.appendChild(programDiv);
    });
}

// Function to search programs based on the selected language and query
function searchPrograms(language) {
    const query = document.getElementById('search').value;
    fetchPrograms(language, query);
}
