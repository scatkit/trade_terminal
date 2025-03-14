const Token = {
  name: "MLG",
  decimals: 6,
  getDecimals(){
    return `${this.decimals} decimals`
  }
}
const WrapedSol = Object.create(Token)


WrapedSol.decimals = 9

class TokenNew{
  constructor(){
    this.name = "MLG";
    this.decimals = 6;
  }
  getDecimals(){
    console.log("decimals",this.decimals)
  }
}

class WrapedSolNew extends TokenNew{
  constructor(){
    super()
  }
  getDecimals(){
    console.log("decimals",this.decimals)
  }
}


const wsol = new WrapedSolNew()
wsol.getDecimals()
console.log(WrapedSolNew.__proto__)
