//your JS code here. If required.
document.getElementById('form').addEventListener('submit',function(event) {
	event.preventDefault();

	const nm = document.getElementById('name').value
	const ag = document.getElementById('age').value

	if(!nm || !ag){
		alert('please fill the missed fields');
		return;
	}

	new promise((resolve,reject) => {
		setTimeout(()=>{
			if(ag>=18){
				resolve();
			}
			else{
				reject();
			}
		},4000)
	})
	.then(() => {
		alert(`Welcome, ${nm}. You can vote.`);
	})
	.catch(() => {
		alert(`Oh sorry ${nm}. You aren't old enough.`);
	});
});


