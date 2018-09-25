var calculateIndexes = function (current, length, displayLength) {
	displayLength = displayLength - 2;
	var indexes = [1];
	var start = Math.round(current - displayLength / 2);
	var end = Math.round(current + displayLength / 2);
	if (start <= 1) {
		start = 2;
		end = start + displayLength - 1;
		if (end >= length - 1) {
			end = length - 1;
		}
	}
	if (end >= length - 1) {
		end = length - 1;
		start = end - displayLength + 1;
		if (start <= 1) {
			start = 2;
		}
	}
	if (start !== 2) {
		indexes.push("...");
	}
	for (var i = start; i <= end; i++) {
		indexes.push(i);
	}
	if (end !== length - 1) {
		indexes.push("...");
	}
	indexes.push(length);
	return indexes;
};

function log(obj) {
	$(document.body).append("<p>" + obj + "</p>");
}

log(calculateIndexes(1, 100, 10));
log(calculateIndexes(1, 10, 100));
log(calculateIndexes(50, 100, 10));
log(calculateIndexes(99, 100, 10));

var calculatePage = function(current,length,rang){
	if(current===1&&length===1){
		return [1];
	}
	var result = [1];
	var start = current - rang;
	var end = current + rang;
	if(start <= 1){
		start = 2;
	}
	if(end >= length){
		end = length-1;
	}
	if (start !== 2) {
		result.push("...");
	}
	for (var i = start; i <= end; i++) {
		result.push(i);
	}
	if (end !== length - 1) {
		result.push("...");
	}
	result.push(length)
	return result;
}
