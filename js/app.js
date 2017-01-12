angular.module('app', ['ui.router', 'ngCookies', 'ngResource', 'app.login', 'app.layout', 'app.register'])

.run(function(User) {
	//Check if User is authenticated
	if (User.getCachedCurrent() == null) {
		User.getCurrent();
	}
});