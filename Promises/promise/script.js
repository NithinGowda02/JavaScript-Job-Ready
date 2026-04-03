function asynFunction(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching some data 1.....")
            resolve("Success"); 
        }, 4000)   
    })
}

console.log("Loading.......");
let promise = asynFunction();
promise.then((res) => {
    console.log(res);
})