let btn = document.getElementById("btn");
btn.onclick = function random() {
  let quote = document.getElementById("quote");
  let author = document.getElementById("author");
  let p = fetch("https://dummyjson.com/quotes");
  p.then((x) => x.json())
    .then((y) => {
      var random = Math.round(Math.random() * 30);
      console.log(y);
      console.log(y.quotes[random].quote);
      quote.innerHTML = y.quotes[random].quote;
      author.innerHTML =`-  ${y.quotes[random].author}` ;
    })
    .catch(() => {
      setTimeout(() => {
        quote.innerHTML = "Something wrong....";
        author.innerHTML = "";
      },200);
    });
};
