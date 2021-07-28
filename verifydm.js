function verifydm(user) {
	return user.send('').catch(error => {
        return error.message != 'Cannot send messages to this user'
	})
	
}

//Usage

console.log(await verifydm(<user>) //If it is true then the person's private is turned on. If it is false, it is turned off!