const Token = {
  name: "MLG",
  decimals(){
    return "6 decimals"
  }
}
const WrapedSol = Object.create(Token)

console.log(WrapedSol.__proto__ === Token)

console.log(WrapedSol.decimals())
