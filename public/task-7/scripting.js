function myfunc() {
	var x = document.getElementById('result').value	
	var a = x.toLowerCase()
	document.getElementById('result').value= a;
	console.log(a);
}
function myfunct() {
	var x = document.getElementById('result').value	
	var b = x.toUpperCase()
	document.getElementById('result').value = b;
	console.log(b);
}
function myfunci() {
	var x = document.getElementById('result').value;	
	var c = x.toString().split('');
	c.sort();
	var res = c.join('');
	document.getElementById('result').value = res;
}