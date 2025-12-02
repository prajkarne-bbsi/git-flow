const response = await fetch('http://127.0.0.1:8000/v1/posts/?page=1');
const data = await response.json();
console.log(data);