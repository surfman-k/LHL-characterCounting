var finalCount = {};

function countLetters(str){
	var noSpace = str.split(' ').join('');
	for (var i = 0; i < noSpace.length; i++){
		!finalCount[noSpace[i]] ? finalCount[noSpace[i]] = 1 : finalCount[noSpace[i]] += 1;
	}
	return finalCount;
}

console.log(countLetters('lighthouse in the house'));