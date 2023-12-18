
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


// スクロールイン
function fadeinEvent() {
	const fadeinClass= Array.prototype.slice.call(document.getElementsByClassName("js-fade"));

	fadeinClass.forEach(function( element ) {
		// getBoundingClientRect で要素の位置や幅や高さなどを取得
		const boundingClientRect = element.getBoundingClientRect();

		// スクロールの位置情報（html のスクロールがなければ、body のスクロール）を取得
		const scroll = document.documentElement.scrollTop || document.body.scrollTop;

		// ブラウザウィンドウの ビューポートの高さ
		const windowHeight = window.innerHeight;
			// スクロールの位置が、フェードインしたい要素の位置にいるかどうか判定する
			if (scroll > scroll + boundingClientRect.top - windowHeight + 100){

				// 要素を表示する場合は、要素の透明度を無くし、Y方向の移動距離を無くす。これで表示される
				element.style.opacity = "1";
				element.style.transform = "translateY(0)";
		}
	});
}

// 画面がロードされたときに行う処理を記載
window.onload = function(){
// 画面が中途半端なスクロール位置でリロードされても表示するべきものが表示されるようにするため、ロードですぐに呼び出す
	fadeinEvent();
	// スクロールしたら動くエベントとして用意しておく。スクロールするたびに動くようにする
	window.addEventListener('scroll', fadeinEvent, false);
}