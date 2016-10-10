var request = require('request');

module.exports = function(shortUrl) {
	request({ method: 'HEAD', url: shortUrl, followAllRedirects: true },
		function(err, response){
			if (err) {
				console.log('Provide a valid url');
			}
			else {
				console.log(response.request.href);
			}
		});
};
