const placeHolder = document.getElementById("output");
const butt = document.getElementById("btn");
const hell = "https://jsonplaceholder.typicode.com/posts/1";

//your JS code here. If required.
async function getData() {
    const url =  await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await url.json();
    // console.log (data);
    // console.log (data.title);
    placeHolder.innerText = data.title ;
}

  butt.addEventListener('click' , getData);