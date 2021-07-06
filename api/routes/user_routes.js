module.exports = function(app) {
	
	var userHandlers = require('../controllers/user_controller.js');

	// todoList Routes
	app.route('/users')
		.post(userHandlers.login_required, userHandlers.user_profile);


	app.route('/user/sign_up')
		.post(userHandlers.register);

	app.route('/user/sign_in')
		.post(userHandlers.sign_in);
};
