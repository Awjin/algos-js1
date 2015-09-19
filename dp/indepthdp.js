function bruteForce(svgContainer) {

	//JSON containers for Square, Line, and Text data
	var jsonSquares = [
		{"x" : 210, "y" : 10}, 	//L1
		{"x" : 160, "y" : 60},	//L2
		{"x" : 210, "y" : 60},
		{"x" : 260, "y" : 60},
		{"x" : 110, "y" : 110},	//L3
		{"x" : 160, "y" : 110},
		{"x" : 210, "y" : 110},
		{"x" : 260, "y" : 110},
		{"x" : 310, "y" : 110},
		{"x" : 60, "y" : 160},	//L4
		{"x" : 110, "y" : 160},
		{"x" : 160, "y" : 160},
		{"x" : 210, "y" : 160},
		{"x" : 260, "y" : 160},
		{"x" : 310, "y" : 160},
		{"x" : 360, "y" : 160},
		{"x" : 10, "y" : 210},	//L5
		{"x" : 60, "y" : 210},	
		{"x" : 110, "y" : 210},
		{"x" : 160, "y" : 210},
		{"x" : 210, "y" : 210},
		{"x" : 260, "y" : 210},
		{"x" : 310, "y" : 210},
		{"x" : 360, "y" : 210},
		{"x" : 410, "y" : 210}
	];
	var jsonLines = [
		{"x" : 210, "y" : 10, "child" : "left"}, 	//L1
		{"x" : 160, "y" : 60, "child" : "left"},	//L2
		{"x" : 210, "y" : 60, "child" : "left"},
		{"x" : 260, "y" : 60, "child" : "left"},
		{"x" : 110, "y" : 110, "child" : "left"},	//L3
		{"x" : 160, "y" : 110, "child" : "left"},
		{"x" : 210, "y" : 110, "child" : "left"},
		{"x" : 260, "y" : 110, "child" : "left"},
		{"x" : 310, "y" : 110, "child" : "left"},
		{"x" : 60, "y" : 160, "child" : "left"},	//L4
		{"x" : 110, "y" : 160, "child" : "left"},
		{"x" : 160, "y" : 160, "child" : "left"},
		{"x" : 210, "y" : 160, "child" : "left"},
		{"x" : 260, "y" : 160, "child" : "left"},
		{"x" : 310, "y" : 160, "child" : "left"},
		{"x" : 360, "y" : 160, "child" : "left"},
		{"x" : 210, "y" : 10, "child" : "middle"}, 	//L1
		{"x" : 160, "y" : 60, "child" : "middle"},	//L2
		{"x" : 210, "y" : 60, "child" : "middle"},
		{"x" : 260, "y" : 60, "child" : "middle"},
		{"x" : 110, "y" : 110, "child" : "middle"},	//L3
		{"x" : 160, "y" : 110, "child" : "middle"},
		{"x" : 210, "y" : 110, "child" : "middle"},
		{"x" : 260, "y" : 110, "child" : "middle"},
		{"x" : 310, "y" : 110, "child" : "middle"},
		{"x" : 60, "y" : 160, "child" : "middle"},	//L4
		{"x" : 110, "y" : 160, "child" : "middle"},
		{"x" : 160, "y" : 160, "child" : "middle"},
		{"x" : 210, "y" : 160, "child" : "middle"},
		{"x" : 260, "y" : 160, "child" : "middle"},
		{"x" : 310, "y" : 160, "child" : "middle"},
		{"x" : 360, "y" : 160, "child" : "middle"},
		{"x" : 210, "y" : 10, "child" : "right"}, 	//L1
		{"x" : 160, "y" : 60, "child" : "right"},	//L2
		{"x" : 210, "y" : 60, "child" : "right"},
		{"x" : 260, "y" : 60, "child" : "right"},
		{"x" : 110, "y" : 110, "child" : "right"},	//L3
		{"x" : 160, "y" : 110, "child" : "right"},
		{"x" : 210, "y" : 110, "child" : "right"},
		{"x" : 260, "y" : 110, "child" : "right"},
		{"x" : 310, "y" : 110, "child" : "right"},
		{"x" : 60, "y" : 160, "child" : "right"},	//L4
		{"x" : 110, "y" : 160, "child" : "right"},
		{"x" : 160, "y" : 160, "child" : "right"},
		{"x" : 210, "y" : 160, "child" : "right"},
		{"x" : 260, "y" : 160, "child" : "right"},
		{"x" : 310, "y" : 160, "child" : "right"},
		{"x" : 360, "y" : 160, "child" : "right"},
	];
	var jsonText = [
		{"x" : 285, "y" : 40, "text" : "3 = 3 * 1"},
		{"x" : 335, "y" : 90, "text" : "9 = 3 * 3"},
		{"x" : 385, "y" : 140, "text" : "15 = 3 * 5"},
		{"x" : 435, "y" : 190, "text" : "21 = 3 * 7"}
	];

	//Adding rectangle objects to SVG
	var squares = svgContainer.selectAll("rect")
		.data(jsonSquares)
		.enter()
		.append("rect");

	//Drawing rectangles
	var squareAttributes = squares
		.attr("x", function (d) {return d.x;})
		.attr("y", function (d) {return d.y;})
		.attr("width", 50)
		.attr("height", 50)
		.style("stroke", "black")
		.style("stroke-width", 2)
		.attr("fill", "white");

	//Adding line objects to SVG
	var lines = svgContainer.selectAll("line")
		.data(jsonLines)
		.enter()
		.append("line");

	//Drawing lines
	var lineAttributes = lines
		.attr("x1", function (d) {return (d.x + 25);})
		.attr("y1", function (d) {return (d.y + 25);})
		.attr("x2", function (d) {
			if (d.child === "left") { return (d.x - 15) } 
			else if (d.child === "middle") { return (d.x + 25) } 
			else if (d.child === "right") { return (d.x + 65) }; 
		})
		.attr("y2", function (d) {return (d.y + 65);})
		.attr("stroke-width", 2)
		.attr("stroke", function (d){
			if (d.child === "left") { return ("red") } 
			else if (d.child === "middle") { return ("blue") } 
			else if (d.child === "right") { return ("black") }; 

		});

	//Adding text objects to SVG
	var text = svgContainer.selectAll("text")
		.data(jsonText)
		.enter()
		.append("text");

	//Drawing text
	var textLabels = text
		.attr("x", function (d) {return d.x;})
		.attr("y", function (d) {return d.y;})
		.text(function (d) {return d.text;})
		.attr("font-family", "sans-serif")
		.attr("font-size", "20px")
		.attr("fill", "black");	}

function checkerBoard(svgContainer) {

	//JSON containers for Square, Line, and Text data
	var jsonSquares = [
		{"x" : 10, "y" : 10}, //L0
		{"x" : 60, "y" : 10},	
		{"x" : 110, "y" : 10},
		{"x" : 160, "y" : 10},
		{"x" : 210, "y" : 10},
		{"x" : 260, "y" : 10},
		{"x" : 310, "y" : 10},
		{"x" : 360, "y" : 10},
		{"x" : 10, "y" : 60},
		{"x" : 60, "y" : 60}, //L1
		{"x" : 110, "y" : 60},
		{"x" : 160, "y" : 60},
		{"x" : 210, "y" : 60},
		{"x" : 260, "y" : 60},
		{"x" : 310, "y" : 60},
		{"x" : 360, "y" : 60},
		{"x" : 10, "y" : 110}, //L2
		{"x" : 60, "y" : 110}, 
		{"x" : 110, "y" : 110},
		{"x" : 160, "y" : 110},
		{"x" : 210, "y" : 110},
		{"x" : 260, "y" : 110},
		{"x" : 310, "y" : 110},
		{"x" : 360, "y" : 110},
		{"x" : 10, "y" : 160}, //L3
		{"x" : 60, "y" : 160}, 
		{"x" : 110, "y" : 160},
		{"x" : 160, "y" : 160},
		{"x" : 210, "y" : 160},
		{"x" : 260, "y" : 160},
		{"x" : 310, "y" : 160},
		{"x" : 360, "y" : 160},		
		{"x" : 10, "y" : 210}, //L4
		{"x" : 60, "y" : 210}, 
		{"x" : 110, "y" : 210},
		{"x" : 160, "y" : 210},
		{"x" : 210, "y" : 210},
		{"x" : 260, "y" : 210},
		{"x" : 310, "y" : 210},
		{"x" : 360, "y" : 210},	
		{"x" : 10, "y" : 260}, //L5
		{"x" : 60, "y" : 260}, 
		{"x" : 110, "y" : 260},
		{"x" : 160, "y" : 260},
		{"x" : 210, "y" : 260},
		{"x" : 260, "y" : 260},
		{"x" : 310, "y" : 260},
		{"x" : 360, "y" : 260},		
		{"x" : 10, "y" : 310}, //L6
		{"x" : 60, "y" : 310}, 
		{"x" : 110, "y" : 310},
		{"x" : 160, "y" : 310},
		{"x" : 210, "y" : 310},
		{"x" : 260, "y" : 310},
		{"x" : 310, "y" : 310},
		{"x" : 360, "y" : 310},	
		{"x" : 10, "y" : 360}, //L7
		{"x" : 60, "y" : 360}, 
		{"x" : 110, "y" : 360},
		{"x" : 160, "y" : 360},
		{"x" : 210, "y" : 360},
		{"x" : 260, "y" : 360},
		{"x" : 310, "y" : 360},
		{"x" : 360, "y" : 360}];

	var jsonText = [
		{"x" : 60, "y" : 50, "text" : "x"},
		{"x" : 80, "y" : 50, "text" : "0"},
		{"x" : 130, "y" : 50, "text" : "1"},
		{"x" : 180, "y" : 50, "text" : "2"},
		{"x" : 230, "y" : 50, "text" : "3"},
		{"x" : 280, "y" : 50, "text" : "4"},
		{"x" : 330, "y" : 50, "text" : "5"},
		{"x" : 380, "y" : 50, "text" : "6"},
		{"x" : 430, "y" : 50, "text" : "7"},
		{"x" : 35, "y" : 70, "text" : "y"},
		{"x" : 35, "y" : 445, "text" : "7"},
		{"x" : 35, "y" : 395, "text" : "6"},
		{"x" : 35, "y" : 345, "text" : "5"},
		{"x" : 35, "y" : 295, "text" : "4"},
		{"x" : 35, "y" : 245, "text" : "3"},
		{"x" : 35, "y" : 195, "text" : "2"},
		{"x" : 35, "y" : 145, "text" : "1"},
		{"x" : 35, "y" : 95, "text" : "0"}];

	//Adding rectangle objects to SVG
	var squares = svgContainer.selectAll("rect")
		.data(jsonSquares)
		.enter()
		.append("rect")

	//Drawing rectangles
	var squareAttributes = squares
		.attr("x", function (d) {return d.x+50;})
		.attr("y", function (d) {return d.y+50;})
		.attr("width", 50)
		.attr("height", 50)
		.style("stroke", "black")
		.style("stroke-width", 2)
		.attr("fill", "white");

	//Adding label objects to SVG
	var text = svgContainer.selectAll("text")
		.data(jsonText)
		.enter()
		.append("text");

	//Drawing labels
	var textLabels = text
		.attr("x", function (d) {return d.x;})
		.attr("y", function (d) {return d.y;})
		.text(function (d) {return d.text;})
		.attr("font-family", "sans-serif")
		.attr("font-size", "20px")
		.attr("fill", "black");	}

function dpSolution(svgContainer) {

	//JSON containers for Square, Line, and Text data
	var jsonSquares = [
		{"x" : 10, "y" : 10, "fill" : "grey"}, //L0
		{"x" : 60, "y" : 10, "fill" : "lightblue"},	
		{"x" : 110, "y" : 10, "fill" : "white"},
		{"x" : 160, "y" : 10, "fill" : "white"},
		{"x" : 210, "y" : 10, "fill" : "white"},
		{"x" : 260, "y" : 10, "fill" : "white"},
		{"x" : 310, "y" : 10, "fill" : "white"},
		{"x" : 360, "y" : 10, "fill" : "white"},
		{"x" : 10, "y" : 60, "fill" : "grey"}, //L1
		{"x" : 60, "y" : 60, "fill" : "grey"}, 
		{"x" : 110, "y" : 60, "fill" : "lightblue"},
		{"x" : 160, "y" : 60, "fill" : "white"},
		{"x" : 210, "y" : 60, "fill" : "white"},
		{"x" : 260, "y" : 60, "fill" : "white"},
		{"x" : 310, "y" : 60, "fill" : "white"},
		{"x" : 360, "y" : 60, "fill" : "white"},
		{"x" : 10, "y" : 110, "fill" : "grey"}, //L2
		{"x" : 60, "y" : 110, "fill" : "grey"}, 
		{"x" : 110, "y" : 110, "fill" : "grey"},
		{"x" : 160, "y" : 110, "fill" : "lightblue"},
		{"x" : 210, "y" : 110, "fill" : "white"},
		{"x" : 260, "y" : 110, "fill" : "white"},
		{"x" : 310, "y" : 110, "fill" : "white"},
		{"x" : 360, "y" : 110, "fill" : "white"},
		{"x" : 10, "y" : 160, "fill" : "grey"}, //L3
		{"x" : 60, "y" : 160, "fill" : "grey"}, 
		{"x" : 110, "y" : 160, "fill" : "grey"},
		{"x" : 160, "y" : 160, "fill" : "grey"},
		{"x" : 210, "y" : 160, "fill" : "lightblue"},
		{"x" : 260, "y" : 160, "fill" : "white"},
		{"x" : 310, "y" : 160, "fill" : "white"},
		{"x" : 360, "y" : 160, "fill" : "white"},		
		{"x" : 10, "y" : 210, "fill" : "grey"}, //L4
		{"x" : 60, "y" : 210, "fill" : "grey"}, 
		{"x" : 110, "y" : 210, "fill" : "grey"},
		{"x" : 160, "y" : 210, "fill" : "grey"},
		{"x" : 210, "y" : 210, "fill" : "grey"},
		{"x" : 260, "y" : 210, "fill" : "lightblue"},
		{"x" : 310, "y" : 210, "fill" : "white"},
		{"x" : 360, "y" : 210, "fill" : "white"},	
		{"x" : 10, "y" : 260, "fill" : "grey"}, //L5
		{"x" : 60, "y" : 260, "fill" : "grey"}, 
		{"x" : 110, "y" : 260, "fill" : "grey"},
		{"x" : 160, "y" : 260, "fill" : "grey"},
		{"x" : 210, "y" : 260, "fill" : "grey"},
		{"x" : 260, "y" : 260, "fill" : "grey"},
		{"x" : 310, "y" : 260, "fill" : "lightblue"},
		{"x" : 360, "y" : 260, "fill" : "white"},		
		{"x" : 10, "y" : 310, "fill" : "grey"}, //L6
		{"x" : 60, "y" : 310, "fill" : "grey"}, 
		{"x" : 110, "y" : 310, "fill" : "grey"},
		{"x" : 160, "y" : 310, "fill" : "grey"},
		{"x" : 210, "y" : 310, "fill" : "grey"},
		{"x" : 260, "y" : 310, "fill" : "grey"},
		{"x" : 310, "y" : 310, "fill" : "grey"},
		{"x" : 360, "y" : 310, "fill" : "lightblue"},	
		{"x" : 10, "y" : 360, "fill" : "grey"}, //L7
		{"x" : 60, "y" : 360, "fill" : "grey"}, 
		{"x" : 110, "y" : 360, "fill" : "grey"},
		{"x" : 160, "y" : 360, "fill" : "grey"},
		{"x" : 210, "y" : 360, "fill" : "grey"},
		{"x" : 260, "y" : 360, "fill" : "grey"},
		{"x" : 310, "y" : 360, "fill" : "grey"},
		{"x" : 360, "y" : 360, "fill" : "grey"}];

	var jsonText = [
		{"x" : 60, "y" : 50, "text" : "x"},
		{"x" : 80, "y" : 50, "text" : "0"},
		{"x" : 130, "y" : 50, "text" : "1"},
		{"x" : 180, "y" : 50, "text" : "2"},
		{"x" : 230, "y" : 50, "text" : "3"},
		{"x" : 280, "y" : 50, "text" : "4"},
		{"x" : 330, "y" : 50, "text" : "5"},
		{"x" : 380, "y" : 50, "text" : "6"},
		{"x" : 430, "y" : 50, "text" : "7"},
		{"x" : 35, "y" : 70, "text" : "y"},
		{"x" : 35, "y" : 445, "text" : "7"},
		{"x" : 35, "y" : 395, "text" : "6"},
		{"x" : 35, "y" : 345, "text" : "5"},
		{"x" : 35, "y" : 295, "text" : "4"},
		{"x" : 35, "y" : 245, "text" : "3"},
		{"x" : 35, "y" : 195, "text" : "2"},
		{"x" : 35, "y" : 145, "text" : "1"},
		{"x" : 35, "y" : 95, "text" : "0"}];

	//Adding rectangle objects to SVG
	var squares = svgContainer.selectAll("rect")
		.data(jsonSquares)
		.enter()
		.append("rect")

	//Drawing rectangles
	var squareAttributes = squares
		.attr("x", function (d) {return d.x+50;})
		.attr("y", function (d) {return d.y+50;})
		.attr("width", 50)
		.attr("height", 50)
		.style("stroke", "black")
		.style("stroke-width", 2)
		.attr("fill", function (d) {return d.fill;});

	//Adding label objects to SVG
	var text = svgContainer.selectAll("text")
		.data(jsonText)
		.enter()
		.append("text");

	//Drawing labels
	var textLabels = text
		.attr("x", function (d) {return d.x;})
		.attr("y", function (d) {return d.y;})
		.text(function (d) {return d.text;})
		.attr("font-family", "sans-serif")
		.attr("font-size", "20px")
		.attr("fill", "black");	

	var jsonLines = [
		{"x" : 60, "y" : 60, "child" : "middle"}, //(0,0)
		{"x" : 60, "y" : 110, "child" : "middle"},
		{"x" : 60, "y" : 160, "child" : "middle"},
		{"x" : 60, "y" : 210, "child" : "middle"},
		{"x" : 60, "y" : 260, "child" : "middle"},
		{"x" : 60, "y" : 310, "child" : "middle"},
		{"x" : 60, "y" : 360, "child" : "middle"},
		{"x" : 60, "y" : 60, "child" : "right"},
		{"x" : 60, "y" : 110, "child" : "right"},
		{"x" : 60, "y" : 160, "child" : "right"},
		{"x" : 60, "y" : 210, "child" : "right"},
		{"x" : 60, "y" : 260, "child" : "right"},
		{"x" : 60, "y" : 310, "child" : "right"},
		{"x" : 60, "y" : 360, "child" : "right"},

		// {"x" : 110, "y" : 110, "child" : "left"},
		// {"x" : 110, "y" : 160, "child" : "left"},
		// {"x" : 110, "y" : 210, "child" : "left"},
		// {"x" : 110, "y" : 260, "child" : "left"},
		// {"x" : 110, "y" : 310, "child" : "left"},
		// {"x" : 110, "y" : 360, "child" : "left"},
		// {"x" : 110, "y" : 110, "child" : "middle"},
		// {"x" : 110, "y" : 160, "child" : "middle"},
		// {"x" : 110, "y" : 210, "child" : "middle"},
		// {"x" : 110, "y" : 260, "child" : "middle"},
		// {"x" : 110, "y" : 310, "child" : "middle"},
		// {"x" : 110, "y" : 360, "child" : "middle"},
		{"x" : 110, "y" : 110, "child" : "right"},
		{"x" : 110, "y" : 160, "child" : "right"},
		{"x" : 110, "y" : 210, "child" : "right"},
		{"x" : 110, "y" : 260, "child" : "right"},
		{"x" : 110, "y" : 310, "child" : "right"},
		{"x" : 110, "y" : 360, "child" : "right"},

		// {"x" : 160, "y" : 160, "child" : "left"},
		// {"x" : 160, "y" : 210, "child" : "left"},
		// {"x" : 160, "y" : 260, "child" : "left"},
		// {"x" : 160, "y" : 310, "child" : "left"},
		// {"x" : 160, "y" : 360, "child" : "left"},
		// {"x" : 160, "y" : 160, "child" : "middle"},
		// {"x" : 160, "y" : 210, "child" : "middle"},
		// {"x" : 160, "y" : 260, "child" : "middle"},
		// {"x" : 160, "y" : 310, "child" : "middle"},
		// {"x" : 160, "y" : 360, "child" : "middle"},
		{"x" : 160, "y" : 160, "child" : "right"},
		{"x" : 160, "y" : 210, "child" : "right"},
		{"x" : 160, "y" : 260, "child" : "right"},
		{"x" : 160, "y" : 310, "child" : "right"},
		{"x" : 160, "y" : 360, "child" : "right"},

		// {"x" : 210, "y" : 210, "child" : "left"},
		// {"x" : 210, "y" : 260, "child" : "left"},
		// {"x" : 210, "y" : 310, "child" : "left"},
		// {"x" : 210, "y" : 360, "child" : "left"},
		// {"x" : 210, "y" : 210, "child" : "middle"},
		// {"x" : 210, "y" : 260, "child" : "middle"},
		// {"x" : 210, "y" : 310, "child" : "middle"},
		// {"x" : 210, "y" : 360, "child" : "middle"},
		{"x" : 210, "y" : 210, "child" : "right"},
		{"x" : 210, "y" : 260, "child" : "right"},
		{"x" : 210, "y" : 310, "child" : "right"},
		{"x" : 210, "y" : 360, "child" : "right"},

		// {"x" : 260, "y" : 260, "child" : "left"},
		// {"x" : 260, "y" : 310, "child" : "left"},
		// {"x" : 260, "y" : 360, "child" : "left"},
		// {"x" : 260, "y" : 260, "child" : "middle"},
		// {"x" : 260, "y" : 310, "child" : "middle"},
		// {"x" : 260, "y" : 360, "child" : "middle"},
		{"x" : 260, "y" : 260, "child" : "right"},
		{"x" : 260, "y" : 310, "child" : "right"},
		{"x" : 260, "y" : 360, "child" : "right"},

		// {"x" : 310, "y" : 310, "child" : "left"},
		// {"x" : 310, "y" : 360, "child" : "left"},
		// {"x" : 310, "y" : 310, "child" : "middle"},
		// {"x" : 310, "y" : 360, "child" : "middle"},
		{"x" : 310, "y" : 310, "child" : "right"},
		{"x" : 310, "y" : 360, "child" : "right"},

		// {"x" : 360, "y" : 360, "child" : "left"},
		// {"x" : 360, "y" : 360, "child" : "middle"},
		{"x" : 360, "y" : 360, "child" : "right"},

	];	
}

function baseCase(svgContainer) {
	var jsonSquares = [
		{"x" : 10, "y" : 10}, 	
		{"x" : 60, "y" : 10},	
		{"x" : 110, "y" : 10},
		{"x" : 10, "y" : 60},
		{"x" : 60, "y" : 60},	
		{"x" : 110, "y" : 60}
	];

	var jsonLines = [
		{"x" : 60, "y" : 10, "child" : "left"}, 	
		{"x" : 60, "y" : 10, "child" : "middle"},	
		{"x" : 60, "y" : 10, "child" : "right"}
	];

	var jsonText = [
		{"x" : 80, "y" : 30, "text" : "a"},
		{"x" : 11, "y" : 95, "text" : "R(a,b1)"},
		{"x" : 61, "y" : 95, "text" : "R(a,b2)"},
		{"x" : 111, "y" : 95, "text" : "R(a,b3)"},
		{"x" : 165, "y" : 35, "text" : "penultimate row"},
		{"x" : 165, "y" : 85, "text" : "last row"}
			
	];

	//Adding rectangle objects to SVG
	var squares = svgContainer.selectAll("rect")
		.data(jsonSquares)
		.enter()
		.append("rect");

		//Drawing rectangles
	var squareAttributes = squares
		.attr("x", function (d) {return d.x;})
		.attr("y", function (d) {return d.y;})
		.attr("width", 50)
		.attr("height", 50)
		.style("stroke", "black")
		.style("stroke-width", 2)
		.attr("fill", "white");

	//Adding line objects to SVG
	var lines = svgContainer.selectAll("line")
		.data(jsonLines)
		.enter()
		.append("line");

	//Drawing lines
	var lineAttributes = lines
		.attr("x1", function (d) {return (d.x + 25);})
		.attr("y1", function (d) {return (d.y + 25);})
		.attr("x2", function (d) {
			if (d.child === "left") { return (d.x - 15) } 
			else if (d.child === "middle") { return (d.x + 25) } 
			else if (d.child === "right") { return (d.x + 65) }; 
		})
		.attr("y2", function (d) {return (d.y + 65);})
		.attr("stroke-width", 2)
		.attr("stroke", function (d){
			if (d.child === "left") { return ("red") } 
			else if (d.child === "middle") { return ("blue") } 
			else if (d.child === "right") { return ("black") }; 

		});

	//Adding text objects to SVG
	var text = svgContainer.selectAll("text")
		.data(jsonText)
		.enter()
		.append("text");

	//Drawing text
	var textLabels = text
		.attr("x", function (d) {return d.x + 1;})
		.attr("y", function (d) {return d.y;})
		.text(function (d) {return d.text;})
		.attr("font-family", "sans-serif")
		.attr("font-size", "14px")
		.attr("fill", "black");


}
