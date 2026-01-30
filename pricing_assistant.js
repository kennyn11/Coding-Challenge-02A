let productName = "White Tee"
let costPerunit = 9.98
let basePrice = 19.98
let discountRate = 0.20
let salesTaxRate = 0.07
let fixedMonthlyCosts = 4000

let discountedPrice = basePrice * (1 - discountRate)
let finalPriceWithTax = discountedPrice * (1 + salesTaxRate)
let profitPerUnit = finalPriceWithTax - costPerunit
let breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit)
let isProfitablePerUnit = profitPerUnit > 0

console.log("White Tee:", productName)
console.log("Discount before Tax:", discountedPrice)
console.log("Total Cost:", basePrice)
console.log("Break Even Units", breakEvenUnits)
console.log("Calculated Profits:", profitPerUnit)