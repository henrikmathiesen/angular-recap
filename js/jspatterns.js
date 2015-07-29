// Basic JavaScript Patterns


// Sending a function to a function to execute

var work = function(){
	console.log('Working hard!');
};

var doWork = function(f){
	console.log("Starting work");
	f();
	console.log("Ending work");
};

doWork(work);



// Revealing Module Pattern, crude

var createWorker = function(){
	
	var _workCount = 0;
	
	var job01 = function(){
		_workCount += 1;
		console.log("Doing job01 " + _workCount);
	};
	
	var job02 = function(){
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