var chai = require('chai');
var expect = chai.expect;

var app = require('../src/app.js');

describe('Url shortener', function(){
	it('expands the short urls', function(done){
		setTimeout(function() {
			expect(app('https://goo.gl/Senjeg')).to.equal('http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/');			
		}, 1000);
		done();
	});

	it('should throw error if no url', function(done){
		setTimeout(function() {
			expect(app('')).to.equal('Provide a valid url');	
		}, 1000);
		done();
	});
});

