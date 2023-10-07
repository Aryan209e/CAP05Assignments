// index.js
let API_KEY = "API_KEY"
let container = document.getElementById("container")

function getData() {
  let searchParam = document.getElementById("searchParam").value

  // get the data
  fetch(httpsfakestoreapi.com/products)
    .then(function (res) {
      return res.json()
    })
    .then(function (res) {
      displayData(res.Search)
    })
    .catch(function (err) {
      console.log(err)
    })
}

function displayData(List) {
  container.innerHTML = ""

  if (!moviesList || moviesList.length === 0) {
    let notFoundDiv = document.createElement("div")
    notFoundDiv.textContent = "No Results Found"
    container.appendChild(notFoundDiv)
  } else {
    List.map((products) => {
      let listCard = document.createElement("div")
      listCard.className = "card"

      // Create Image
      let posterElement = document.createElement("img")
      posterElement.src = movie.Poster

      // Create Title
      let titleElement = document.createElement("p")
      titleElement.textContent = "Title : " + movie.Title

      // Create Year
      let yearElement = document.createElement("p")
      yearElement.textContent = "Year : " + movie.Year

      // Create IMDB ID;
      let idElement = document.createElement("p")
      idElement.textContent = "IMDB-ID : " + movie.imdbID

      // Create Type
      let typeElement = document.createElement("p")
      typeElement.textContent = "Type : " + movie.Type

      movieCard.append(
        posterElement,
        titleElement,
        yearElement,
        idElement,
        typeElement
      )

      movieCard.addEventListener("click", function (e) {
        localStorage.setItem("imdbID", movie.imdbID)
        location.href = "moviedetails.html"
      })

      container.append(movieCard)
    })
  }
}