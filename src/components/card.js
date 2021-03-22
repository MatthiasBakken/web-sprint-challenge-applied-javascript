const axios = require('axios');

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  const cardDiv = document.createElement("div");
  cardDiv.setAttribute("class", "card");
  cardDiv.setAttribute("id", article.id);
  const headlineDiv = document.createElement("div");
  headlineDiv.setAttribute("class", "headline");
  headlineDiv.textContent = article.headline;
  const authorDiv = document.createElement("div");
  authorDiv.setAttribute("class", "author");
  const imgConDiv = document.createElement("div");
  imgConDiv.setAttribute("class", "img-container");
  const image = document.createElement("img");
  image.src = article.authorPhoto;
  imgConDiv.appendChild(image);
  authorDiv.appendChild(imgConDiv);
  const authNameSpan = document.createElement("span");
  authNameSpan.textContent = `By ${article.authorName}`;
  authorDiv.appendChild(authNameSpan);
  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  cardDiv.addEventListener("click", event => {
    console.log(headlineDiv.innerHTML);
    event.stopPropagation();
    event.preventDefault();
  })

  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  return cardDiv;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get("https://lambda-times-api.herokuapp.com/articles")
    .then(res => {
      console.log(selector, res.data);
      console.log("len", res.data.articles)
      const bootstrapArts = res.data.articles.bootstrap;
      const javascriptArts = res.data.articles.javascript;
      const technologyArts = res.data.articles.technology;
      const jqueryArts = res.data.articles.jquery;
      const nodeArts = res.data.articles.node;
      const artArr = [bootstrapArts, javascriptArts, technologyArts, jqueryArts, nodeArts];
      artArr.forEach(sub => {
        sub.forEach(art => {
          document.querySelector(`${selector}`).appendChild(Card(art));
        })
      })
    })

}

export { Card, cardAppender }
