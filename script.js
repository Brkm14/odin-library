const popUpForm = document.querySelector(".form-popup");
const button = document.querySelector(".addBook");

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        const readStatus = this.read ? "I read" : "not read yet";
        return `${title} by ${author}, ${pages} pages, ${readStatus}`
    }
}

Book.prototype.info = function() {
    console.log(`Hello, I'm ${this.name}!`)
  }

function addBookToLibrary() {
  // do stuff here
}

book1 = new Book("Avengers", "Kevin Feige", 345, true);
console.log(book1.info());




button.addEventListener("click", () => {
    formOverlay.style.display = "block";
});

let form = document.getElementById('formOverlay');
// let outputDiv = document.getElementById('output');
let cntDiv = document.getElementById('cnt-output');



form.addEventListener('submit', function(e) {
  e.preventDefault(); // Formun otomatik gönderimini engelle
  
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let readOption = document.getElementById("readOption").checked ? 'Yes' : 'No' ;

  let outputDiv = document.createElement('div');
  outputDiv.classList.add('output');
  cntDiv.appendChild(outputDiv);
  let bookCard = document.createElement("div");
  bookCard.classList.add("card");
  outputDiv.appendChild(bookCard);
//   Adding button
  let deleteButton = document.createElement('button');
  deleteButton.classList.add("delete-button")
  deleteButton.textContent = 'DELETE';
  outputDiv.appendChild(deleteButton); 
  
  let outputText = `
    Book Name: ${title}<br>
    Author: ${author}<br>
    Pages: ${pages}<br>
    Read: ${readOption}
  `;
  
  bookCard.innerHTML = outputText;
  formOverlay.style.display = "none";
  clearForm();

  // Tüm delete düğmelerini seçin
const deleteButtons = document.querySelectorAll('.delete-button');

// Her delete düğmesi için olay dinleyicisi ekle
deleteButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Ebeveyn div'i seçin ve kaldırın
        const parentDiv = button.closest('.output');
        if (parentDiv) {
            parentDiv.remove();
        }
    });
});

  
});

// Tüm "Delete" düğmelerini seç



function clearForm() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("readOption").checked = false;
}
