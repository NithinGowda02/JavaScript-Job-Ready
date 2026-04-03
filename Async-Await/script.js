// Async-Await

function getData(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("DATA - ", id);
            resolve("Success");
        }, 3000);
    })
}

async function getAllData() {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
    
}
