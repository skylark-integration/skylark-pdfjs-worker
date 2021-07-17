define([
	"skylark-langx-ns",
	"./worker"
],function(skylark,worker) {
	return skylark.attach("intg.pdfjs.worker",worker);
})