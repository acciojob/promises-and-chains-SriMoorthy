//your JS code here. If required.
let submit = document.getElementById('btn');
let nm = document.getElementById('name')
let ag = document.getElementById('age')
let promise = new promise (function(resolve,reject){
	submit.addEventListener('click', () => {
		if(ag.innerHTML > 18){
			resolve(`Welcome, ${nm.innerHTML}. You can vote.`)
		}
		else{
			reject(`Oh sorry ${nm.innerHTML}. You aren't old enough.`)
		}
	})
})

promise.
	then(function(success){
		alert(success);
	},function(error){
		alert(error);
	}
