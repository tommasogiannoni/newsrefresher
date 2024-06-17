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
