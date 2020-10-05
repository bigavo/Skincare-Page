// function randomPips() {
// 	var pips1 = Math.round((Math.random() * 5) + 1);
//     var pips2 = Math.round((Math.random() * 5) + 1);
//     var count = 1;
    
//     while (pips1 !== pips2) {
//         count++;
//         pips1 = Math.round((Math.random() * 5) + 1);
//         pips2 = Math.round((Math.random() * 5) + 1);
//     }

//     document.getElementById("answer").innerHTML = "There was " + count + " randomizations until you got the same pips.";
// }



// randomPips();
// var count = 1;
// function randomPips() {
// 	var pips1 = Math.round((Math.random() * 5) + 1);
// 	var pips2 = Math.round((Math.random() * 5) + 1);
//     while (pips1 !== pips2) {
//         count++;
//         var pips1 = Math.round((Math.random() * 5) + 1);
//         var pips2 = Math.round((Math.random() * 5) + 1);
//     }
//     document.getElementById("answer").innerHTML = "Same pips is " + pips1 + " .There were " + count + " randomizations until you got the same pips.";
// }
// randomPips();

// function showWeightGoals() { 
// 	var weight = parseFloat(document.getElementById("weight").value);
// 	var week;
// 	var text = "";
// 	var weightLostEachWeek;
// 		weightLostEachWeek = weight * 0.1 / 7;
	
// 	for (week = 1;week <= 7; week++) {
// 		weight -= weightLostEachWeek;
// 		text = text + "After " + week + ". week " + weight.toFixed(2) + " kg" + "<br>";
// 		// let newTextNode = document.createElement("p");
// 		// newTextNode.innerHTML = text
// 		document.getElementById("answer").innerHTML = text;
// 	}
// } 

// function showComparisonScores() {
// 	var originalVotes = document.getElementById("votes").value;
// 	var candidates = document.getElementById("candidates").value;
//     var count = 1;
//     var votes;
// 	var text = "";
	
// 	for(count = 1; count <= candidates; count++) {
// 		votes = originalVotes / count;
// 		text += count + ". candidate: " + votes.toFixed(2) + "<br>";
// 	}
// 	document.getElementById("answer").innerHTML = text;
// }

// showComparisonScores();
function calculateProfit() {
	var expectedRound = document.getElementById("rounds").value;
	var totalBetMoney = Number(expectedRound) * 1;
	var winMoney = 0;
	var text = "";
	
	for(var count = 1; count <= expectedRound; count++) {
		var pipsNumber = Math.round((Math.random()* 5) + 1 );

		if(pipsNumber === 1 || pipsNumber === 3 || pipsNumber === 5) {
			winMoney += 0;
		} else if(pipsNumber === 2 || pipsNumber === 4) {
			winMoney += 1.25;	
		} else {
			winMoney += 1.5;
		}
	}

	var profit = winMoney - totalBetMoney;
	text = "Bets were together " + totalBetMoney + " euros" + "<br>" + "Win were " + winMoney + " euros" + "<br>" + "Profits was " + profit + " euros";
	document.getElementById("answer").innerHTML = text;
}
