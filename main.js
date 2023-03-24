const numbers=[1,2,3,4,5];
let add=numbers.reduce(function(acc,curr){
	return acc+curr*2
},10)
document.write(add);