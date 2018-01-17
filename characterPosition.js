var positions = {};

function positionLetters(str){
	var noSpace = str.split(' ').join('');
	for (var i = 0; i < noSpace.length; i++){
		!positions[noSpace[i]] ? positions[noSpace[i]] = [i] : positions[noSpace[i]].push(i);
	}
	return positions;
}

console.log(positionLetters('lighthouse in the house'));