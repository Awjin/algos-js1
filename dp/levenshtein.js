function levenshtein (s, t) {

	//initializing table to store Levenshtein Distances
	var d = new Array(s.length);
	for (var i = 0; i < s.length; i++) {
		d[i] = new Array(t.length);
		for (var j = 0; j < t.length; j++){
			d[i][j] = 0;
		}
	}

	//Base Cases to build off of:

		//LD between each prefix and an empty string is
		//the length of the prefix, achieved by dropping
		//all characters in the prefix
	for (var i = 1; i < s.length; i++) {
		d[i,0] = i;
	}

		//LD between an empty string and each prefix is
		//the length of the prefix, achieved by adding
		//all characters in the prefix to the empty string
	for (var j = 1; i < t.length; i++) {
		d[0,j] = j;
	}


	for (var j = 1; j < t.length; j++){
		for (var i = 1; i < s.length; i++){
			if (s[i] === t[j]){
				d[i,j] = d[i-1, j-1];
			} else {
				d[i,j] = Math.min(d[i-1, j] + 1,	// a deletion
                               	  d[i, j-1] + 1,	// an insertion
                                  d[i-1, j-1] + 1);	// a substitution
			}

		}

	}
	return d[s.length, t.length];
}

levenshtein("abcd","ahbd");