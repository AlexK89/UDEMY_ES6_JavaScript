const url = 'https://jsonplaceholder.typicode.com/posts/';
//fetch is a pre-build promise which return just a response without data
fetch(url)
	.then(response => console.log('Success: ', response))
	.catch(error => console.log('Failed: ', error));

//to get data from our response we need to write next code
fetch(url)
	.then(response => response.json())
	.then(data => console.log('Data: ', data));