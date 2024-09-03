//your JS code here. If required.
let submit = document.getElementById('btn');
let nm = document.getElementById('name').value
let ag = document.getElementById('age').value
let promise = new promise (function(resolve,reject){
	submit.addEventListener('click', () => {
		if(ag >= 18){
			resolve(`Welcome, ${nm}. You can vote.`)
		}
		else{
			reject(`Oh sorry ${nm}. You aren't old enough.`)
		}
	})
})

promise.
	then(function(success){
		alert(success);
	},function(error){
		alert(error);
	}
