## url-amplifier
[![Build Status](https://travis-ci.org/nitin42/url-amplifier.svg?branch=master)](https://travis-ci.org/nitin42/url-amplifier)

A small library that expands a URL that has been shortened by a service such as [bit.ly](bit.ly) and follows only one redirect.

### Installation

```
npm install url-amplifier

```

### Usage

```javascript
var amp = require('url-amplifier');

setTimeout(function(){
	amp('https://goo.gl/ihmH9Y'); // Output: nitintulswani.com
}, 1000);

```

### Tests

```
npm test
```

### Contributing 

Add unit tests for any new or changed functionality

### License

ISC

