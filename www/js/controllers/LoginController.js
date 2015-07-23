app.controller('LoginController', ['$state','$sanitize', function($state,$sanitize){
	var self = this;
	self.join = function() {
		// sanitize the nickname
		var nickname = $sanitize(self.nickname)
		if (nickname) {
			$state.go('chat',{nickname:nickname})
		};
	}
}]);