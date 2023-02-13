// What is a callback function?

// A callback function is a function passed into another function as an argument to be executed 
// later.

// Just like filter() method, a higher order function that we have used takes a callback function.

const numsArray = [20, 2, 13, 15, 16, 17, 18, 22]

function isOdd (num) {
    return num % 2
}

// isOdd function is a callback function here.
const numsOdd = numsArray.filter(isOdd)

console.log(numsOdd);

// Synchronous callback function

// What do we mean by a callback function in terms of "synchronous"

// The example of numsOdd() function above is a synchronous callback function.
// Here the filter() method completes first before the execution of console.log() function.

// Now, what is an Asynchronous callback function

// Asynchronous simply means that JavaScript must wait for an operation to complete then it will execute
// the rest of the code while waiting.

// For example, we write a code for downloading a document from the remote server and 
// want to process it as per business logic once the download completes.

function download(url) {
    // code of document download
}

function process(document) {
    // code of document processing
}

// download(url);
// process(document);

// Now downloading the document may take time depending on the network speed or the size of the document.
// let's write the following code for the same.

function download(url){
    setTimeout(()=> {
        console.log(`Downloading ${url}`);
    }, 3000)
}

function process (document){
    console.log(`Processing ${document}`);
}

// let documentUrl = 'https://brainstormers.com/callback.pdf'
// download(documentUrl);
// process(documentUrl);

// Processing https://brainstormers.com/callback.pdf
// Downloading https://brainstormers.com/callback.pdf

// Oh no! we didn't receive the expected output. Processing --> Downloading
// We were supposed to receive the below output. Downloading --> Processing
// Correct sequence
// Downloading https://brainstormers.com/callback.pdf
// Processing https://brainstormers.com/callback.pdf

// How do we solve this?

// To solve this, we can pass the process() function to the download() function.
// The process() function will get executed inside the download() function once the download completes. 

function download(url, callback){

    setTimeout( ()=>{
        // download the document
        console.log(`Downloading ${url}`);
        // process the document
        callback(url)
    }, 3000)

}

function process (document){
    console.log(`Processing ${document}`);
}

let documentUrl = 'https://brainstormers.com/callback.pdf'
download(documentUrl, process)

// The problem got solved now.
// Here, the process() function is a callback function passed into an asynchronous function...