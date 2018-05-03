var getRandom = function(from, to) {
	return Math.floor((Math.random() * to) + from);
}


var matrix = new Matrix($('#matrix1'),20,20);

function in_array(needle, haystack, strict) {	// Checks if a value exists in an array
	//
	// +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)

	var found = false, key, strict = !!strict;

	for (key in haystack) {
		if ((strict && haystack[key] === needle) || (!strict && haystack[key] == needle)) {
			found = true;
			break;
		}
	}
	return found;
}