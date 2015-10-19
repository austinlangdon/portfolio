console.log('Run siteInfo() if you would like to find out more.');

function siteInfo(){
	console.log('This site was developed with Bootstrap, Sass, and charm.');
}

$('.connect').click(function(){
	console.log('hi');
});

$(document).ready(function(){
	$('li a').hover(function(){
		$(this).addClass('test');
	}, function(){
		$(this).removeClass('test');
	});
});