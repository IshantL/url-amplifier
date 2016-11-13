/**
 * @author Nitin Tulswani <tulswani19@gmail.com>
 */

'use strict';

const request = require('request');

/**
 *  Expanding a URL shortened by a service
 *  @params {string} shortUrl
 *  @returns {string}
 */
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
