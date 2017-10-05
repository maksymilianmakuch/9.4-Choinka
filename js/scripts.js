function drawTree(treeLevels) {
	for(var i=1;i<=treeLevels;i++){
		var star = "";
		for(var j=0;j<treeLevels-i;j++){
			star += " ";
		}
		for(var j=0;j<2*i-1;j++){
			star += "*";
		}
		console.log(star);
	}
}
drawTree(5);
