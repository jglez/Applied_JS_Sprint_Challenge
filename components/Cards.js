// STEP 3: Create article cards.
// -----------------------

const cardsDiv = document.querySelector('.cards-container');
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
axios
.get('https://lambda-times-api.herokuapp.com/articles')
.then(res => {
  // Study the response data you get back, closely.
  console.log(res.data.articles);
  // API data has a large object containing an object with the key of articles: {}
  // Within articles:{} are 5 keys: javascript, bootstrap, technology, jquery, node
  // Each of these keys contains an array with articles, each a separate object

  const javaScriptArticles = res.data.articles.javascript;
  const bootstrapArticles = res.data.articles.bootstrap;
  const technologyArticles = res.data.articles.technology;
  const jqueryArticles = res.data.articles.jquery;
  const nodeArticles = res.data.articles.node;

  const articlesArray = [javaScriptArticles, bootstrapArticles, technologyArticles, jqueryArticles, nodeArticles]

// Instead of writing 5 forEach statements, (one for each array of article topics) 
// I collected all array topics and placed them in an articlesArray
// I then looped over each array within my array, now only needing two forEach statements.
// For each array, I then enter another forEach where I invoke cardMaker and pass the article objects inside of the topics arrays
  articlesArray.forEach(arr => {
    arr.forEach(article => {
      // Use your function to create a card for each of the articles, and append each card to the DOM.
      const newArticle = cardMaker(article);
      cardsDiv.appendChild(newArticle);
    })
  })

  // Testing my function / exploring the data ----------------------------------------------
  // const newArticle = cardMaker(res.data.articles.node[0]);
  // cardsDiv.appendChild(newArticle)
  // console.log(newArticle);
})
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.

function cardMaker(articleObj) {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  const headlineDiv = document.createElement('div');
  headlineDiv.classList.add('headline');
  headlineDiv.textContent = articleObj.headline;

  const authorDiv = document.createElement('div');
  authorDiv.classList.add('author');

  const imgDiv = document.createElement('div');
  imgDiv.classList.add('img-container');

  const authorImg = document.createElement('img');
  authorImg.src = articleObj.authorPhoto;

  const authorName = document.createElement('span');
  authorName.textContent = 'By ' + articleObj.authorName;

  // Now we have to append everything with the correct structure
  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);

  authorDiv.appendChild(imgDiv);
  authorDiv.appendChild(authorName);

  imgDiv.appendChild(authorImg);

  // Now we have to add the click event listener 
  cardDiv.addEventListener('click', event => {
    console.log(headlineDiv);
  })

  // Return
  return cardDiv;
}


// Write a function that takes a single article object and returns the following markup:
// <div class="card"> -----------------------------------------> DONE
//   <div class="headline">{Headline of article}</div> --------> DONE
//   <div class="author"> -------------------------------------> DONE
//     <div class="img-container"> ----------------------------> DONE
//       <img src={url of authors image} /> -------------------> DONE
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//

