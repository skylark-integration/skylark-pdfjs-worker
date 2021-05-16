define([
	"skylark-langx/skylark",
	"./worker"
],function(skylark,worker) {
	return skylark.attach("intg.pdfjs.worker",worker);
})