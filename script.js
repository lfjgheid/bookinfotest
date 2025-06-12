// script.js
function searchBooks() {
  const query = document.getElementById("search").value;
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    .then((response) => response.json())
    .then((data) => {
      const results = document.getElementById("results");
      results.innerHTML = "";
      data.items.forEach((book) => {
        const info = book.volumeInfo;
        const div = document.createElement("div");
        div.innerHTML = `<h2>${info.title}</h2>
                         <p>Author: ${info.authors?.join(", ")}</p>
                         <p>${info.description?.substring(0, 300)}...</p>`;
        results.appendChild(div);
      });
    });
}
