$(document).ready(function() {


	$.getJSON("emp.json", function(json) {
		var template = $('#employeeTpl').html();
		var info = Mustache.to_html(template, json);
		$('#sampleArea').html(info);
	});

var DATA = {
	name: "Christophe",
	price: 100,
	salesTax: 0.05,
	add:function() {
		return this.price + this.price * this.salesTax;
	}
    }
	var template = $('#productTpl').html();
	var info = Mustache.to_html(template, DATA);
	$('#Area').html(info);
});