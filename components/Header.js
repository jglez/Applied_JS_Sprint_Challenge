// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

// Header component
function Header() {
  const headerDiv = document.createElement('div');
  headerDiv.classList.add('header');

  const spanDate = document.createElement('span');
  spanDate.classList.add('date');
  spanDate.textContent = 'MARCH 28, 2020';

  const h1 = document.createElement('h1');
  h1.textContent = 'Lambda Times';

  const spanTemp = document.createElement('span');
  spanTemp.classList.add('temp');
  spanTemp.textContent = '98°';

  headerDiv.appendChild(spanDate);
  headerDiv.appendChild(h1);
  headerDiv.appendChild(spanTemp);

  return headerDiv;
}
// Scaffold for Header() invocation
const scaffold = document.querySelector('.header-container');
const newHeader = Header();

// Append header to the DOM
scaffold.appendChild(newHeader);
