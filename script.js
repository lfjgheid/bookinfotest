// script.js (with image support)
function searchBooks() {
  const query = document.getElementById("search").value;
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    .then((response) => response.json())
    .then((data) => {
      const results = document.getElementById("results");
      results.innerHTML = "";
      data.items.forEach((book) => {
        const info = book.volumeInfo;
        const thumbnail = info.imageLinks?.thumbnail || '';

        const div = document.createElement("div");
        div.innerHTML = `
          ${thumbnail ? `<img src="${thumbnail}" alt="${info.title}" style="width:100%; border-radius:5px; margin-bottom:10px;" />` : ''}
          <h2>${info.title}</h2>
          <p><strong>Author:</strong> ${info.authors?.join(", ") || "N/A"}</p>
          <p>${info.description?.substring(0, 200) || "No description available"}...</p>
        `;
        results.appendChild(div);
      });
    });
}
