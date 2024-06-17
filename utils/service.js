const apiUrl = 'https://saurav.tech/NewsAPI/everything/cnn.json';

export function fetchNews() {
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