/*let sum = (a,b)=>{
    return a + b
}
console.log (sum(7,3))
module.exports = {sum};
*/
let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
};
function fromDollarToYen (amountInDolars){
    return amountInDolars * oneEuroIs.JPY / oneEuroIs.USD
};
function fromEuroToDollar (amountInEuro){
    return amountInEuro * oneEuroIs.USD
};
function fromYenToPound (amountInYen){
    return amountInYen * oneEuroIs.GBP / oneEuroIs.JPY
};
module.exports = {oneEuroIs,fromDollarToYen,fromEuroToDollar,fromYenToPound};