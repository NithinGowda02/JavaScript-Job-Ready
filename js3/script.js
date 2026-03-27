/* For a given array with prices of 5 items -> [250, 645, 300, 900, 50] 
all items have an offer of 10% OFF on them. Change the array to store final price after applying offer. */

let prices = [250, 645, 300, 900, 50]

for(let i = 0; i < prices.length; i++){
   let discount = prices[i] / 10
   let discounted_amt = prices[i] - discount
   prices[i] = discounted_amt 
   console.log(`Prices After Discount >> ${prices[i]}`)
}
console.log(prices)

