function getRentExeption(address){
  if (address){
    return 28000
  }
}

const minRentCost = (function (tokenAddress){
  return getRentExeption(tokenAddress)
})("32kjr344ht45jkth34kjt3h");
 
console.log(minRentCost)
