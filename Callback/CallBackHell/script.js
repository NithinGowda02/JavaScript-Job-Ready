function getData(id, getNextData){
    setTimeout(() => {
        console.log(`Data - ${id}`);
        if (getNextData){
            getNextData();
        }
        
    },2000);
}
console.log("Loading....")
getData(1,() => {
    console.log("getting data2...")
    getData(2, () =>{
        console.log("getting data3...")
        getData(3, () => {
            console.log("getting data4...")
            getData(4);
        })
    })
})