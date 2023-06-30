const quoteContent = document.getElementById("quote__content");
const quoteAuthor = document.getElementById("quote__author");

// Storing the api server in a variable
const api_url = "https://api.quotable.io/random";

async function getquote(url) {
  // Fetches the data from the server
  const response = await fetch(url);
  // Returns the fetched data as JSON
  var data = await response.json();
  //   Update the fetched data to the HTML dom
  quoteContent.innerHTML = data.content;
  quoteAuthor.innerHTML = data.author;
}

getquote(api_url);

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quoteContent.innerHTML +
      " ---- by " +
      quoteAuthor.innerHTML,
    "Tweet Window",
    "width=600",
    "height=300"
  );
}
