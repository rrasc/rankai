document.getElementById("auditForm").addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent the form from reloading the page

    const urlInput = document.getElementById("urlInput");
    const url = urlInput.value;
    const resultsContainer = document.getElementById("results");

    // Display a loading message
    resultsContainer.innerHTML = "<p>Analyzing... Please wait.</p>";

    try {
        // Replace with your backend API URL
        const apiUrl = "https://your-backend-url.com/analyze";

        // Make a POST request to the backend API
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ url }),
        });

        if (!response.ok) {
            throw new Error("Failed to fetch analysis. Please try again.");
        }

        const data = await response.json();

        // Display the results
        resultsContainer.innerHTML = `
            <h3>SEO Results:</h3>
            <pre>${JSON.stringify(data.seo_results, null, 2)}</pre>
            <h3>AI Results:</h3>
            <pre>${JSON.stringify(data.ai_results, null, 2)}</pre>
        `;
    } catch (error) {
        // Handle errors
        resultsContainer.innerHTML = `<p>Error: ${error.message}</p>`;
    }
});
