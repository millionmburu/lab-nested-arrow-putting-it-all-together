function createLoginTracker(userInfo) {
  let attemptCount = 0; //Initializes the count attempts for loging in
  const loginAttempts = (passwordAttempt) => {
    attemptCount ++; //increments according to the number of attempts
    if (attemptCount <= 3){
      if(passwordAttempt === userInfo.password){
        return "Login Successful"
      }
      else {
        return `Attempt ${attemptCount}: Login Failed`
      }
    }
    else{
      return "Account locked due to too many failed login attempts" //locks the user incase the attempts exceed 3
    }
  }
  return loginAttempts
}
const user = { //user details
    "username": "user1",
    "password": "password123"
}
const tracker = createLoginTracker(user)
console.log(tracker("wrongpass"));   //first attempt
console.log(tracker("wrongpass"));   //second attempt
console.log(tracker("password123")); //correct attempt
console.log(tracker("password123")) //exceeded attempt

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};