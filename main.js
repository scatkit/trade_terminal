class Sender {
  constructor(recipient) {
    this.recipient = recipient;
  }
  sendMessage(message) {
    throw new Error("sendMessage method must be implemented by subclasses");
  }
  
  toString(){
    return `Recepient: ${this.recipient}`
  }
}

class Email extends Sender{
  constructor(recepient, body){
    super(recepient)
    this.body = body
  }
  toString(){
    return `${super.toString()} with body ${this.body }`
  }
}


const email = new Email("bostonskat4@gmail.com", "Fuck you!")
console.log(email.toString())
