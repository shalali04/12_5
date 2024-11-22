
var name=window.prompt("Enter your name ");
var helpArray = ["REQUIRED", "NOT-REQUIRED"];
var helptext;

function init() {
	document.getElementById("greeting").innerHTML="Hello "+name+"!";
    helptext = document.getElementById("text");
    registerListeners(document.getElementById("name"), 0);
    registerListeners(document.getElementById("visitFrequency"), 0);
    registerListeners(document.getElementById("easeOfUse"), 0);
    registerListeners(document.getElementById("suggestions"), 1);
    var myForm = document.getElementById("surveyForm");

    myForm.addEventListener("submit", function() { return confirm("Are you sure you want to submit?"); }, false);
    myForm.addEventListener("reset", function() { return confirm("Are you sure you want to cancel?"); }, false);
}

function registerListeners(object, messageNumber) {
    object.addEventListener("focus", function() { helptext.innerHTML = helpArray[messageNumber]; }, false);
    object.addEventListener("blur", function() { helptext.innerHTML = ""; }, false); // Clear help text on blur
}

window.addEventListener("load", init, false);
