let store1 =
{
    location: "Seattle",
    time: 14, 
    minimumCustomers: 23,
    maximumCustomers: 65,
    adverageCookieSale: 6.3,
    randomCustPerHr: function() {
        return Math.random()
    }
}
// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
// }

//console.log(" Here are the simulated amount of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated")

console.log(" The minimum customer amount is " +  + store1.adverageCookieSale + " , plus the random number of customers " + store1.randomCustPerHr );

console.log(store1.adverageCookieSale + store1.getRandom);
