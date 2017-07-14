/*
//Global variable prototype
var computerChoice = Math.random();
if (computerChoice < 1/3) {
	computerChoice = "rock";
} else if (computerChoice < 2/3) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors"
}*/

//User chooses rock
$("body").hide();
$("body").fadeIn("slow");
$("h1").mouseenter(
	function() {
		$(this).fadeTo("slow", 0.5);
	}
	);
$("h1").mouseleave(
	function() {
		$(this).fadeTo("slow", 1);
	}
	);
$("#rock").on("click", function() {
//local variable in order to reset it while pressing the button
	var computerChoice = Math.random();
if (computerChoice < 1/3) {
	computerChoice = "rock";
} else if (computerChoice < 2/3) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors"
}

// if function
	if (computerChoice === "rock") {
		$("#text").html("Computer choice: " + "<strong>" + computerChoice + "</strong>" + "<br>The result is a tie!<span> Make your choice again</span>");
		$("#outcome").css("background-color", "rgb(226, 214, 38)");
	} else if (computerChoice === "paper") {
		$("#text").html("Computer choice: " + "<strong>" + computerChoice + "</strong>" + "<br>Paper cover rock.<span> Computer wins</span>");
		$("#outcome").css("background-color", "rgb(252, 65, 65)");
	} else {
		$("#text").html("Computer choice: " + "<strong>" + computerChoice + "</strong>" + "<br>Rock destroys scissors.<span> You win</span>");
		$("#outcome").css("background-color", "rgb(114, 249, 69)");
	}
	$("span").css("font-size", "20px").css("font-style", "italic");
}
)

//User chooses paper
$("#paper").on("click", function() {
//local variable in order to reset it while pressing the button
	var computerChoice = Math.random();
if (computerChoice < 1/3) {
	computerChoice = "rock";
} else if (computerChoice < 2/3) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors"
}

// if function
	if (computerChoice === "paper") {
		$("#text").html("Computer choice: " + "<strong>" + computerChoice + "</strong>" + "<br>The result is a tie!<span> Make your choice again</span>");
		$("#outcome").css("background-color", "rgb(226, 214, 38)");
	} else if (computerChoice === "rock") {
		$("#text").html("Computer choice: " + "<strong>" + computerChoice + "</strong>" + "<br>Paper cover rock.<span> You win</span>");
		$("#outcome").css("background-color", "rgb(114, 249, 69)");
	} else {
		$("#text").html("Computer choice: " + "<strong>" + computerChoice + "</strong>" + "<br>Scissors cut paper.<span> Computer wins</span>");
		$("#outcome").css("background-color", "rgb(252, 65, 65)");
	}
	$("span").css("font-size", "20px").css("font-style", "italic");
});

//User chooses scissors
$("#scissors").on("click", function() {
//local variable in order to reset it while pressing the button
	var computerChoice = Math.random();
if (computerChoice < 1/3) {
	computerChoice = "rock";
} else if (computerChoice < 2/3) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors"
}

// if function
	if (computerChoice === "scissors") {
		$("#text").html("Computer choice: " + "<strong>" + computerChoice + "</strong>" + "<br>The result is a tie!<span> Make your choice again</span>");
		$("#outcome").css("background-color", "rgb(226, 214, 38)");
	} else if (computerChoice === "rock") {
		$("#text").html("Computer choice: " + "<strong>" + computerChoice + "</strong>" + "<br>Rock destroys scissors.<span> Computer wins</span>");
		$("#outcome").css("background-color", "rgb(252, 65, 65)");
	} else {
		$("#text").html("Computer choice: " + "<strong>" + computerChoice + "</strong>" + "<br>Scissors cut paper.<span> You win</span>");
		$("#outcome").css("background-color", "rgb(114, 249, 69)");
	}
	$("span").css("font-size", "20px").css("font-style", "italic");
})
