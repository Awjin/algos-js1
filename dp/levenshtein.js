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

	// for (var i = 0; i < s_str.length; i++){

	// }

	// for (var j = 0; j < t_str.length; j++){
	// 	jsonArr.push({
	// 		"i" : ,
	// 		"j" : j,
	// 		"d" : d[i][j]
	// 	});
	// }


	//console.log("JSON: ", jsonArr);

	//return d[s_len-1][t_len-1], jsonArr;

	return jsonArr;
}

function levenBoard (svgContainer, jsonArr, s_str, t_str) {
	
	var s = s_str.split("");
	var t = t_str.split("");

	//Adding rectangle objects to SVG
	var squares = svgContainer.selectAll("rect")
		.data(jsonArr)
		.enter()
		.append("rect");

	//Drawing rectangles
	var squareAttributes = squares
		.attr("x", function (d) {return 50*d.i + 10;})
		.attr("y", function (d) {return 50*d.j + 10;})
		.attr("width", 50)
		.attr("height", 50)
		.style("stroke", "black")
		.style("stroke-width", 2)
		.attr("fill", "white");

	//Adding text objects to SVG
	var text = svgContainer.selectAll("text")
		.data(jsonArr)
		.enter()
		.append("text");

	//Drawing text
	var textLabels = text
		.attr("x", function (d) {return 50*d.i + 35;})
		.attr("y", function (d) {return 50*d.j + 35;})
		.text(function (d) {return d.d;})
		.attr("font-family", "sans-serif")
		.attr("font-size", "14px")
		.attr("fill", "black");

	var jsonLabels = [
		{x: 85, y: 50, text: s[0]},
		{x: 85, y: 50, text: s[1]},
		{x: 85, y: 50, text: s[2]},
		{x: 85, y: 50, text: s[3]},
		{x: 85, y: 50, text: s[4]},
		{x: 85, y: 50, text: s[5]},
		{x: 85, y: 50, text: s[6]}
	];

	// for (i = 0; i < s.length; i++){
	// 	jsonLabels.push({
	// 		x: 85,
	// 		y: 50,
	// 		text: s[i]
	// 	});
	// 	console.log(s[i]);
	// }

	var text = svgContainer.selectAll("text")
		.data(jsonLabels)
		.enter()
		.append("text");

	//Drawing text
	var textLabels = text
		.attr("x", function (d) {return d.x;})
		.attr("y", function (d) {return d.y;})
		.text(function (d) {return d.text;})
		.attr("font-family", "sans-serif")
		.attr("font-size", "14px")
		.attr("fill", "black");

}