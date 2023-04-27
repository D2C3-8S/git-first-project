const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");


const apikey = "M47wpQ2/Js4rmXNaNG1bQw==4InJpKxM49f5mcIz"; 

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apikey,
    },

}
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke(){

    try {
        
    jokeEl.innerText = "Updating....";
    btnEl.disabled = true;
    btnEl.innerText = "Loading....";
    const response = await fetch(apiURL, options)
    const data = await response.json()

    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";

    jokeEl.innerText =data[0].joke;

        
    } catch (error) {
        jokeEl.innerText = "An Error happened, try again later ";
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
        console.log(error)
        
    }
  
}
btnEl.addEventListener("click", getJoke);

/*
create a global variable const btnEl => to access the button element using its ID.
create an add Event Listener to the button("clicked", getJoke)
create a function named getJoke and passed an argument to the addEventListener(getJoke)method.
create a global variable const apikey => for storing the APIKey from API Ninjas (My Account)
create a global variable const options => for storing the method and headers.





Asynchronous programming is a technique that enables your program to start
 a potentially long-running task and still be able to be responsive to other 
 events while that task runs, rather than having to wait until that task has 
 finished. Once that task has finished, your program is presented with the result.

 Async functions
The word “async” before a function means one simple thing: a function always returns
 a promise. Other values are wrapped in a resolved promise automatically.

 The fetch() method in JavaScript is used to request data from a server. The request
 can be of any type of API that returns the data in JSON or XML. The fetch() method 
 requires one parameter, the URL to request, and returns a promise.


 Syntax:

fetch('url')           //api for the get request
  .then(response => response.json())
  .then(data => console.log(data));
Parameters: This method requires one parameter and accepts two parameters:

URL: It is the URL to which the request is to be made.
Options: It is an array of properties. It is an optional parameter.
Return Value: It returns a promise whether it is resolved or not. The return data can be of the format JSON or XML. It can be an array of objects or simply a single object.

SYNTAX THAT USED ON THE PROJECT.
const response = await fetch(apiURL, options)
const data = await response.json()





JavaScript try and catch
The try statement allows you to define a block of code to be tested for errors while it is being executed.

The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.

The JavaScript statements try and catch come in pairs:

try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}


*/