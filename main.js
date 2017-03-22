$(document).ready(function() {


	$.getJSON("emp.json", function(json) {
		var template = $('#employeeTpl').html();
		var info = Mustache.to_html(template, json);
		$('#sampleArea').html(info);
	});

	// var Prod = {
	// 	name: 'ani',
	// 	product: 'ball',
	// 	qty: 15
	// }
	// Prod.onsale = function() {
	// 	this.qty-1;
	// 	console.log(this.qty);
	// };

	// Prod.onpurchase = function() {
	// 	this.qty+1;
	// 	console.log(this.qty);
	// };

	// var template = $('#employeeTpl').html();
	// var info = Mustache.to_html(template, Prod);
	// $('#sampleArea').html(info);	
});