// const getStartedBtn = document.querySelector('.btn');
// getStartedBtn.addEventListener('click', () => {
//   console.log('Get started button clicked!');
// });
// const courseCards = document.querySelectorAll('.card');
// courseCards.forEach(card => {
//   card.addEventListener('mouseover', () => {
//     card.style.backgroundColor = '#eee';
//   });
//   card.addEventListener('mouseout', () => {
//     card.style.backgroundColor = 'white';
//   });
// });


let content = document.querySelector("#content");
let out = "";
fetch("https://www.googleapis.com/books/v1/volumes?q=quilting")
.then((response) => response.json())
.then((books) => {
  // console.log(books)
    return books.items.map(book => {
      console.log(book.volumeInfo)
      console.log(book.volumeInfo.imageLinks)
      out += `

      <div class="card col-3">
        <div class="card-header" style="height: 60px;">
          <h5 class="card-title limit-paragraph-line">${book.volumeInfo.title}</h5>
        </div>
        <img class="card-img-top" height="400"  src="${book.volumeInfo.imageLinks.smallThumbnail}" alt="${book.volumeInfo.subtitle}">
        <div class="card-body">
          <p class="card-text limit-paragraph-line">${book.volumeInfo.description}</p>
        </div>
        <div class="card-footer bg-secondary text-white">
          <small class="text-muted "> <a href="https://www.googleapis.com/books/v1/volumes?q=quilting/hU8uuQEACAAJ" class="btn add-to-plan" data-course="Course 2">read More</a></small>
        </div>
      </div>
    
     

    `;
      content.innerHTML = out;
    })
});


