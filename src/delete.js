const User = require('./bd');
(async () => {
	let doomedUser = {login: 'KseniaVeh'};
	doomedUser = new User(newUser);
	await User.deleteOne(doomedUser);
	process.exit(0);
})