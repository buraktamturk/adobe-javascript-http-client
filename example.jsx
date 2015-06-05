
#include "http.jsx"

// GET example

var data = $http({
	method: 'GET',
	url: 'http://date.jsontest.com/'
});

alert(data.payload.time);

// GET with query string example

data = $http({
	method: 'GET',
	url: 'http://md5.jsontest.com/?text=example_text'
});

alert(data.payload.md5);

// GET with custom headers
data = $http({
	method: 'GET',
	url: 'http://httpbin.org/headers',
	headers: {'Hello': 'World'}
});

alert(data.payload.headers.Hello);

// POST example
var data = $http({
	method: 'POST',
	payload: 'email=burak@tamturk.in',
	url: 'http://httpbin.org/post',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	}
});

alert(data.payload.form.email);

// POST Json example (note, payload will be converted to json string and Content-Type: application/json will be automatically added to your request)
var data = $http({
	method: 'POST',
	payload: {email: 'burak@tamturk.in'},
	url: 'http://httpbin.org/post'
});

alert(data.payload.json.email);

