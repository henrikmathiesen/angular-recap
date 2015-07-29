// Basic JavaScript Patterns

var work = function(){
	console.log('Working hard!');
};

var doWork = function(f){
	console.log("Starting work");
	f();
	console.log("Ending work");
};

doWork(work);



var createWorker = function(){
	
	var job01 = function(){
		console.log("Doing job01");
	};
	
	var job02 = function(){
		console.log("Doing job02");
	};
	
	return {
		job01: job01,
		job02: job02
	}
};

var worker = createWorker();
worker.job01();
worker.job02();