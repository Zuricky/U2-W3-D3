fetch("https://striveschool-api.herokuapp.com/books")
  .then((responseObj) => {
    console.log(responseObj);

    if (responseObj.ok) {
      return responseObj.json();
    }
  })
  .then((bookObj) => {
    console.log(bookObj);

    // DOM MANIPULATION
    const row = document.getElementById("book-list");

    bookObj.data.forEach((booksInfo) => {
      const col = document.createElement("div");
      col.classList.add("col");

      col.innerHTML = `<div class="col-4">
          <div class="card">
            <img src="${booksInfo.img}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${booksInfo.title}</h5>
              <p id="price" class="card-text">${booksInfo.price}</p>
              <p id="category" class="card-text">${booksInfo.category}</p>
              <a href="#" class="btn btn-dark">Go somewhere</a>
            </div>
          </div>
        </div>`;

      row.appendChild(col);
    });
  })
  .catch((err) => console.log(err));
