fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    console.log(response);
    if (response.ok) {
      return response.json();
    }
  })
  .then((booksArr) => {
    console.log(booksArr);

    const row = document.getElementById("book-grid");
    booksArr.array.forEach((book) => {
      const col = document.createElement("div");
      col.classList.add("col");

      col.innerHTML = `
      <div class="col">
          <div class="card">
            <img src="${book.img}" class="card-img-top" alt="${book.title}" />
            <div class="card-body">
              <h5 class="card-title">${book.title}</h5>
              <p id="price" class="card-text">${book.price}</p>
              <p id="category" class="card-text">${book.category}</p>
            </div>
          </div>
        </div>
        `;
    });
  });
