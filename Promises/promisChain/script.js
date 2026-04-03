// Promise chain

function getData(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("DATA - ", id);
            resolve("Success");
        }, 3000);
    })
}    

console.log("Loading....")
getData(1)
    .then((res) => {
        return getData(2)
        .then((res) => {
            return getData(3)
            .then((res) => {
                console.log(res);
            })
        })
    })