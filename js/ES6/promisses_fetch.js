const url = 'https://jsonplaceholder.typicode.com/posts/';

const responsePromise = new Promise((resolve, reject) => {
	let response = fetch(url);
	resolve(response);
});

//fetch is a pre-build promise which return just a response without data
fetch(url)
	.then(response => console.log('Success: ', response))
	.catch(response => console.log('Failed: ',response));

//to get data from our response we need to write next code
fetch(url)
	.then(response => response.json())
	.then(data => console.log('Data: ', data));