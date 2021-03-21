const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  const contDiv = document.createElement("div");
  contDiv.setAttribute("class", "header");
  const dateSpan = document.createElement("span");
  dateSpan.setAttribute("class", "date");
  dateSpan.textContent = date;
  const titleH1 = document.createElement("h1");
  titleH1.textContent = title;
  const tempSpan = document.createElement("span");
  tempSpan.setAttribute("class", "temp");
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
  // const values = Header(`Title`, `03/22/21`, `83`)
  // console.log("val",values);
  // document.querySelector(`${selector}`).appendChild(values);
}

export { Header, headerAppender }
