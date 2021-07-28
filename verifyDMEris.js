//Adaptação para eris 

//Function 
async function verificarDM(user) {
if (!user || !user.id) {
return new Error("Please provide a valid <User>")
}
const userDM = await user.getDMChannel()    
return userDM.createMessage('').catch(error => {
        return error.message != 'Cannot send messages to this user'
    })
    
}  


//Use: 

console.log(await verificarDM (<User>)) // Se estiver true a dm está aberta se estiver falar a dm está fechada  

