//print some simple instructions
if (document.getElementById('instructions')) {
  document.getElementById('instructions').innerHTML = 'This will be a simple javascript powerd quiz app';
}

//namespace
var quizr = { };
    
    quizr.loader = function() {
      quizr.printDot = function(){ document.write('.'); };
      document.getElementById("loader").setTimeout(printDot(), 1000);
    };












quizr.init = function(){
quizr.loader();
};

quizr.init();