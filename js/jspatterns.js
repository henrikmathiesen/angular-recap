/// <reference path="../typings/jquery/jquery.d.ts"/>

// Basic JavaScript Patterns



// Sending a function to a function to execute

var work = function () {
	console.log('Working hard!');
};

var doWork = function (f) {
	console.log("Starting work");
	f();
	console.log("Ending work");
};

doWork(work);



// Revealing Module Pattern, a variable like _workCount is only created once and stored in memory
// it can be accessed by the inner functions job01 and job02 even after the outer function has executed

var createWorker = function () {

	var _workCount = 0;

	var job01 = function () {
		_workCount += 1;
		console.log("Doing job01 " + _workCount);
	};

	var job02 = function () {
		_workCount += 1;
		console.log("Doing job02 " + _workCount);
	};

	return {
		job01: job01,
		job02: job02
	}
};

var worker = createWorker();
worker.job01();
worker.job02();
worker.job01();


//  ^ All these global variables is not ok



// Revealing Module Pattern with self executing function

var ajaxFactory = (function () {

	var _ajaxCallCount = 0;

	var ajaxCall = function () {
		_ajaxCallCount += 1;
		console.log("Doing Ajax Call " + _ajaxCallCount + " ");
	};


	return {
		ajaxCall: ajaxCall
	}

})();

(function () {
	ajaxFactory.ajaxCall();
	ajaxFactory.ajaxCall();
	ajaxFactory.ajaxCall();
})();

// This example has one global variable, 'ajaxFactory', with a descriptive name, so we can reach it from other files
// In those files we encapsulate the script in an IIFE (immediately invoked function expression)




// I want to test something with Ajax in relation to this
// We want to bind click event after response from ajax, so ajax request is only run once
// setTimeout is there for debug purpose
// jQuery is included in the project (should come before Angular)

var gitHubAjaxService = (function () {

	//setTimeout(function(){
		$.ajax({ type: 'GET', url: 'https://api.github.com/users/octocat' })
			.then(function(response){
				$('.jq-promise-test').on('click', function () {
					console.log(response);
				});
			});
	//}, 5000);
	
})();
