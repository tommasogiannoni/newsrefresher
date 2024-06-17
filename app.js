import { showLoading, hideLoading, displayArticleToHTML } from './utils/utility.js';
import { fetchNews } from './utils/service.js';

const MAX_NUM_ARTICLES = 10;
let showArticles = [];
let currentIndex = 0;

/**
 * On page load get all articles
 */
document.addEventListener('DOMContentLoaded', async function() {
    showLoading();
    //
    const rawResult = await fetchNews();
    showArticles = rawResult.articles;
    displayResults(); // dsiplay  first 10 articles
    //
    hideLoading();
})

/**
 * Function that update the article views
 */
function displayResults() {
    const container = document.getElementById('results-container');
    container.innerHTML = '';

    for (let i = 0; i < MAX_NUM_ARTICLES; i++) {
        if (currentIndex >= showArticles.length) {
            currentIndex = 0; 
        }

        const article = showArticles[currentIndex];
        currentIndex++; // keep track about latest article showed

        // create article div;
        const divToAdd = displayArticleToHTML(article);
        container.appendChild(divToAdd);
    }
}

/**
 * On refresh button click update the view
 */
function refresh() {
    displayResults();
}


function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
}
  
function goTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/**
 * Dom elements event handling
 */
let mybutton = document.getElementById("top");
mybutton.addEventListener("click", goTop);

/**
 * Window function handling
 */
window.refresh = refresh;
window.onscroll = scrollFunction;


