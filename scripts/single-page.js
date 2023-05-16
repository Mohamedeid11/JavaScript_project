
const id = window.location.search.slice(1)
let singleBook = document.querySelector("#single-page");

  let single_book_data = "";
  fetch("https://www.googleapis.com/books/v1/volumes?q=quilting/" + id )
  .then((response) => response.json())
  .then((book) => { 

    return book.items.map(book => {
        
        console.log(book.volumeInfo)
        console.log(book.volumeInfo.authors)
        
        single_book_data += `
  
        <div class="card">
        <div class="row no-gutters">
            <div class="col-auto">
                <img src="${book.volumeInfo.imageLinks.thumbnail}" class="img-fluid" width="400px" height="700" alt="">
            </div>
            <div class="col">
                <div class="card-block px-2">
                <div class="card-header">
                    <h5 class="card-title">${book.volumeInfo.title}</h5>
                </div>
                <div class="card-body">

                    <table class="table table-striped">
                
                        <tr>
                            <th scope="row"> Categories </th>
                            <td>${book.volumeInfo.categories}</td>
                        </tr>

                        <tr>
                            <th scope="row">Authors </th>
                            <td> ${book.volumeInfo.authors} </td>    
                        </tr>

                        <tr>
                            <th scope="row"> Publisher</th>
                            <td> ${book.volumeInfo.publisher}</td>
                        </tr>

                        <tr>
                            <th scope="row"> Description </th>
                            <td>${book.volumeInfo.description}</td>
                        </tr>

                        <tr>
                            <th scope="row"> Count Of Pages </th>
                            <td>${book.volumeInfo.pageCount}</td>
                        </tr>
                        
                        <tr>
                            <th scope="row"> Price </th>
                            <td>150$</td>
                        </tr>
                    </table>

                </div>
                <div class="card-footer bg-primary text-white">
                    <button class="btn add-to-plan" id="${book.id}" onClick="singleBook(this.id)" >  Add To Cart </button>
                </div>

                </div>
            </div>
        </div>
        <div class="card-footer w-100 text-muted">
            Footer stating cats are CUTE little animals
        </div>
    </div>
       
  
      `;

      singleBook.innerHTML = single_book_data;

      })

  });