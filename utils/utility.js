export function formatDate(isoDate) {
    const date = new Date(isoDate);
    
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // I mesi vanno da 0 a 11, quindi aggiungiamo 1
    const year = date.getUTCFullYear();
    
    return `${month}/${day}/${year}`;
}

export function showLoading() {
    const loader = document.getElementById('loader');
    loader.className = 'show';
}

export function hideLoading() {
    const loader = document.getElementById('loader');
    loader.className = 'not-show';
}

export function createArticleToDIV( article ) {
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

    return cardDiv;
}
