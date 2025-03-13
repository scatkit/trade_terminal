const poolsInfo = {
  name: "WSOL",
  decimals: 9,
  url: null,
  setEndpoin(endpoint){
   if (!this.url){return this.url = endpoint} 
  }
}

poolsInfo.setEndpoin("https://here.com")
poolsInfo.setEndpoin("https://here.com")
console.log(poolsInfo.url)


