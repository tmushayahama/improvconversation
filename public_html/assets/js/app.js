
$(function() {
	console.log("ready!");

	var ImprovConv = function(id) {
		this.id = id;
	};
	
	ImprovConv.prototype.sampleStart = function() {
		console.log("I am a sample");
		var act = [
			{Description: ""},
			{Description: ""}
		];
		var count = 0;
		var display = $("#im-display");
		display.fadeIn("1000");

		var myFunction = function() {
			if (count === 0) {
				var rand = Math.round(Math.random() * (6000 - 3000)) + 3000;
				setTimeout(myFunction, rand);
			} else if (count < act.length) {
				display.text(act[count].Description);
				var rand = Math.round(Math.random() * (12000 - 6000)) + 6000;
				console.log(rand);
				var snd = new Audio("assets/sounds/sound1.wav");
				snd.play();
				setTimeout(myFunction, rand);
			}
			count++;
		};
		myFunction();
	};

	ImprovConv.prototype.start = function() {
		console.log("I am being sra");
		var act = [
			{Description: ""},
			{Description: ""}
		];
		var count = 0;
		var display = $("#im-display");
		display.fadeIn("1000");

		var myFunction = function() {
			if (count === 0) {
				var rand = Math.round(Math.random() * (12000 - 5000)) + 5000;
				setTimeout(myFunction, rand);
			} else if (count < act.length) {
				display.text(act[count].Description);
				var rand = Math.round(Math.random() * (20000 - 10000)) + 10000;
				console.log(rand);
				var snd = new Audio("assets/sounds/sound1.wav");
				snd.play();
				setTimeout(myFunction, rand);
			}
			count++;
		};
		myFunction();
	};

	var improvConv = new ImprovConv(1);

	$("body").on("click", "#im-start-btn", function(e) {
		$(".im-play-btn").hide();
		improvConv.start();		
	});
	$("body").on("click", "#im-samplestart-btn", function(e) {
		$(".im-play-btn").hide();
		improvConv.sampleStart();		
	});
});									