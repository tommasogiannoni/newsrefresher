import { formatDate, showLoading, hideLoading } from './utils/utility.js';

const apiUrl = 'https://saurav.tech/NewsAPI/everything/cnn.json';
let showArticles = [];
let currentIndex = 0;

function fetchNews() {
    return fetch(apiUrl)
                        .then(data => {
                            if(!data.ok)
                                throw Error("Api service failed!");

                            return data.json();
                        })
                        .catch(error => {
                            console.error(error);
                        });
}

/**
 * On load page get all articles
 */
document.addEventListener('DOMContentLoaded', async function() {
    showLoading();
    const rawResult = await fetchNews();
    showArticles = rawResult.articles;
    displayResults();
    hideLoading();
})

function displayResults() {
    const container = document.getElementById('results-container');
    container.innerHTML = '';

    for (let i = 0; i < 10; i++) {
        if (currentIndex >= showArticles.length) {
            currentIndex = 0; // reset at the end;
        }

        const article = showArticles[currentIndex];
        currentIndex++;

        const cardDiv = document.createElement('div');
        cardDiv.className = 'article-class';
        
        const titleElement = document.createElement('h3');
        titleElement.textContent = article.title;
        cardDiv.appendChild(titleElement);
        
        const authorElement = document.createElement('p');
        authorElement.className = 'author';
        authorElement.textContent = article.author ? `By: ${article.author}` : 'By: Unknown';
        cardDiv.appendChild(authorElement);
        
        const descriptionElement = document.createElement('p');
        descriptionElement.className = "description";
        descriptionElement.textContent = article.description;
        cardDiv.appendChild(descriptionElement);
        
        const publishedAtElement = document.createElement('p');
        publishedAtElement.className = 'publishedAt';
        publishedAtElement.textContent = `Published on: ${formatDate(article.publishedAt)}`;
        cardDiv.appendChild(publishedAtElement);
        
        container.appendChild(cardDiv);
    }
}

/**
 * Delete the 10 showed news to refil with other 10
 */
function refresh() {
    displayResults();
}
window.refresh = refresh;


function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
}
  
const listener = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
 }

let mybutton = document.getElementById("top");
window.onscroll = function() {scrollFunction()};
mybutton.addEventListener("click", listener);


