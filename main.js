const GetReserves = (baseReserve, quoteReserve) =>{
  let vaultB = 400
  let vaultQ = 2
  return {
    baseReserve,
    quoteReserve,
    vaultB,
    vaultQ,
  }
}


let x = GetReserves("Fm67yCGR8BCPNrJzfoF1dvoPnJkEm658pmxBV6u3qwrE", "GmMautNDHVBsaxt2W38SMi2kqAgrG1HZJkHhdE7Ypump")
console.log(x)

