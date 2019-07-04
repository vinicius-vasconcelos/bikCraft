Visibility.onVisible(function(){
	setTimeout(function () {
		$(".introducao h1").addClass("animated fadeInDown");
	}, 400);
	setTimeout(function () {
		$(".introducao blockquote").addClass("animated fadeInDown");
	}, 800);
	setTimeout(function () {
		$(".introducao .btn").addClass("animated fadeInDown");
	}, 1200);
	setTimeout(function () {
		$(".animar").addClass("animated fadeInDown");
	}, 1600);
});

$(document).ready(() => $('#nome').addClass('foco'))
$('input').focus(function () { $(this).addClass('foco') });
$('input').blur(function () { $(this).removeClass('foco') });
$('textarea').focus(function () { $(this).addClass('foco') });
$('textarea').blur(function () { $(this).removeClass('foco') });