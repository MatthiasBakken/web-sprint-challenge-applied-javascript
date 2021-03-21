const Header = (title = "stuff", date = "03/21/21", temp = "84") => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  const contDiv = document.createElement("div");
  contDiv.classList.add("header");
  const dateSpan = document.createElement("span");
  dateSpan.classList.add("date");
  dateSpan.textContent = date;
  const titleH1 = document.createElement("h1");
  titleH1.textContent = title;
  const tempSpan = document.createElement("span");
  tempSpan.classList.add("temp");
  tempSpan.textContent = temp;

  contDiv.appendChild(dateSpan);
  contDiv.appendChild(titleH1);
  contDiv.appendChild(tempSpan);

  console.log("contDiv",contDiv);
  return contDiv;

  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  document.querySelector(`${selector}`).appendChild(Header());
}

headerAppender(".header-container")

export { Header, headerAppender }
