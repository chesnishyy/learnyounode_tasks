const http = require('http');

const array_of_urls = process.argv.filter((element, index) => index >= 2);

const array_of_results = array_of_urls.map((url) => {
    return new Promise((resolve, reject) => {
        http.get(url, (response) => {
            let result = '';
    
            response.setEncoding('utf8');
            response.on('data', (data) => result += data);
            response.on('end', () => {
                resolve(result);
            })
        })
    })
})

Promise.all(array_of_results).then((res) => {
    res.forEach(data => console.log(data))
})

