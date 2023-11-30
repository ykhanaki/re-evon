
$(function(){

	// common - include
	$("#header").load("./include/header.html");
	$("#footer").load("./include/footer.html");

	// カーソル用のdivタグを取得してcursorに格納
	var cursor = document.getElementById('cursor');

	// カーソル用のdivタグをマウスに追従させる
	document.addEventListener('mousemove', function (e) {
		cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
	});

	// リンクにホバーした時にクラス追加、離れたらクラス削除
	var link = document.querySelectorAll('a,.service_sample dt');
	for (var i = 0; i < link.length; i++) {
		link[i].addEventListener('mouseover', function (e) {
			cursor.classList.add('cursorhover');
		});
		link[i].addEventListener('mouseout', function (e) {
			cursor.classList.remove('cursorhover');
		});
	}
	var link = document.querySelectorAll('a.learnmore');
	for (var i = 0; i < link.length; i++) {
		link[i].addEventListener('mouseover', function (e) {
			cursor.classList.add('cursorhover_learnmore');
		});
		link[i].addEventListener('mouseout', function (e) {
			cursor.classList.remove('cursorhover_learnmore');
		});
	}

	$(window).scroll(function(){
		var obj = $('header .logo');
		scroll = $(window).scrollTop();
		if (scroll > 1) {
		  obj.addClass('issmall');
		} else{
		  obj.removeClass('issmall');
		}
	  })

	  $(".service_sample dt").on("click", function() {
			$(this).next().slideToggle();
		});
});

// ふわっと表示
$(function(){
  $(window).scroll(function (){
    $('.js-fade').each(function(){
      var pos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > pos - windowHeight + 100){
        $(this).addClass('scrollIn');
      }
    });
  });
});