function makeAjaxRequest(url, method = 'GET') {
	//some logic
}

function User() {
	this.id = Math.floor(Math.random() * 999);
}

function createAdminUser(user = new User()) {
	user.admin = true;
	return user;
}

console.log(createAdminUser());