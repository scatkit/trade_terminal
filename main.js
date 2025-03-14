const notification = {
  notify(recipient, message) {
    return `Notification for ${recipient}: ${message}`;
  },
};

const systemNotification = Object.create(notification)

systemNotification.broadcast = function(message){
  return `Bordcast to all users: ${message}`
}

let x = systemNotification.broadcast("bostonskat4@gmail.com", "yooo")
console.log(x)

