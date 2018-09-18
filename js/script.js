var username = "";

	function send_message(message){

		var prevState = $("#container").html();

		if (prevState.length > 5) {
			prevState = prevState + "<br>";
		}

		$("#container").html(prevState + "<span class = 'current_message'>" + "<span class = 'bot'>ChatBot: </span>" + message + "</span>");

		$(".current_message").hide();
		$(".current_message").delay(500).fadeIn();
		$(".current_message").removeClass('current_message');

	}

	function get_username(){
		send_message("Hello, what is your name?");
	}

	function ai(message){
		if (username.length < 5) {
			username = message;
			send_message("Nice to meet you " + username + ", how are you doing?");
		}

		if (message.indexOf("how are you") >= 0) {
			send_message("Thanks, I am good!");
		}

		if (message.indexOf("time") >= 0) {
			var date = new Date();
			var h = date.getHours();
			var m = date.getMinutes();
			send_message("Current time is: " + h + ":" + m);
		}

	}

	$(function(){

		get_username();

		// Send on enter
		$("#textbox").keypress(function(event) {
			if (event.which == 13) {
				if ($("#enter").prop("checked")) {

					$("#send").click();
					event.preventDefault();

				}
			}
	});

	// Message sending
	$("#send").click(function() {

		var username = "<span class='username'>You: </span>";

		var newMessage = $("#textbox").val();

		$("#textbox").val("");

		var prevState = $("#container").html();

		if (prevState.length > 5) {
			prevState = prevState + "<br>";
		}

		$("#container").html(prevState + username + newMessage);

		// Automatic scroll down for new message
		$("#container").scrollTop($("#container").prop("scrollHeight"));

		ai(newMessage);

	});

});