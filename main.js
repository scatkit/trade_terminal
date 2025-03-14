const user = {
  name: "Ally",
  addresses:{
    walletAddress: "3pvmL7M24uqzudAxUYmvixtkWTC5yaDhTUSyB8cewnJK",
    getWallet(){
      return `wallet: ${this.walletAddress}`
    },
  },
  getName(){
    console.log(this)
    return this.name
  }
}

console.log(user.getName())

