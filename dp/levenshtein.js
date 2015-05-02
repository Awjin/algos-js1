function levenshtein (s_str, t_str) {

	var s = s_str.split("");
	var t = t_str.split("");

	var s_len = s.length + 1;
	var t_len = t.length + 1;

	//initializing table to store Levenshtein Distances
	var d = new Array(s_len);
	for (var i = 0; i < s_len; i++) {
		d[i] = new Array(t_len);
		for (var j = 0; j < t_len; j++){
			d[i][j] = 0;
			//console.log("d[",i,"][",j,"]=", d[i][j]);

		}
	}
	//console.log("initialized d:", d);

	// console.log(d[0][0]);

	//Base Cases to build off of:
		//LD between each prefix and an empty string is
		//the length of the prefix, achieved by dropping
		//all characters in the prefix
	for (var i = 1; i < s_len; i++) {
		d[i][0] = i;

	}
		//LD between an empty string and each prefix is
		//the length of the prefix, achieved by adding
		//all characters in the prefix to the empty string
	for (var j = 1; j < t_len; j++) {
		d[0][j] = j;
	}


	for (var j = 1; j < t_len; j++){
		for (var i = 1; i < s_len; i++){
			if (s[i-1] === t[j-1]){
				//console.log("same");
				d[i][j] = d[i-1][j-1];
			} else {
				d[i][j] = Math.min(d[i-1][j] + 1, 
								   d[i][j-1] + 1, 
								   d[i-1][j-1] + 1);
			}
		}
	}

	var jsonArr = [];

	for (var i = 0; i < d.length; i++){
		for (var j = 0; j < d[i].length; j++){
			jsonArr.push({
				"i" : i,
				"j" : j,
				"d" : d[i][j]
			});
		}
	}

	//console.log("JSON: ", jsonArr);

	//return d[s_len-1][t_len-1], jsonArr;

	return jsonArr;
}

var json = levenshtein("saturday","sunday");
console.log("Levenshtein Distance =", json);