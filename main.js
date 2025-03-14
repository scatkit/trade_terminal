class Token{
  static decimals = 6
  #decimals
  constructor(address, decimals){
    this.address = address,
    this.#decimals = decimals
  }
  
  static getTokenDecimals(){ 
    return this.decimals
  }
}

const memeTokenA = new Token("9TY6DUg1VSssYH5tFE95qoq5hnAGFak4w3cn72sJNCoV", 6)
const memeTokenB = new Token("E3rijajUad1jSJkvxwSA5YkWvNLTsNhRQTHkcybwKXrC", 7)
console.log(Token.getTokenDecimals())
