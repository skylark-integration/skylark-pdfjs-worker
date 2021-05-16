define([
	"skylark-langx/skylark",
	"./worker"
],function(skylark,worker) {
	return skylark.attach("intg.pdfworker",worker);
})