class Message {
  static totalMessagesSent = 0;
  static totalMsgLength = 0;
  
  constructor(recipient, sender, body) {
    this.recipient = recipient;
    this.sender = sender;
    this.body = body;
    Message.totalMessagesSent++
    Message.totalMsgLength += body.length
  }
  
  static getAverageMessageLength(){
    return (Message.totalMessagesSent === 0? 0 : Message.totalMessagesSent/Message.totalMsgLength).toFixed(2)
  }
}

new Message("555-111","555-2222","Fr the Ancients!")
new Message("555-111","555-2222","Fe Ancients!")
new Message("555-111","555-2222","F Ancients!")
new Message("555-111","555-2222","FAncients!")
new Message("555-111","555-2222","Fncients!")
new Message("511","555-2222","Fts!")
console.log(Message.getAverageMessageLength())
