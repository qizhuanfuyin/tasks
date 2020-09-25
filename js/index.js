$(function() {
	/* 返回顶部按钮 */
	var backButton = $('.back_to_top');

	function backToTop() {
		$('html,body').animate({
			scrollTop: 0
		}, 800);
	}
	backButton.on('click', backToTop);

	$(window).on('scroll', function() { /*当滚动条的垂直位置大于浏览器所能看到的页面的那部分的高度时，回到顶部按钮就显示 */
		if ($(window).scrollTop() > $(window).height())
			backButton.fadeIn();
		else
			backButton.fadeOut();
	});
	$(window).trigger('scroll'); /*触发滚动事件，避免刷新的时候显示回到顶部按钮*/

	$(window).on('scroll', function() { /*当滚动条的垂直位置大于浏览器所能看到的页面的那部分的高度时，回到顶部按钮就显示 */
		var scrollTop = $(window).scrollTop();
		if(scrollTop > 70){
			 $(".bg-head").addClass("active-yd-bar");
		}else{
			$(".bg-head").removeClass("active-yd-bar");
		}
	});

	$(".connico a").hover(function() {
		$(this).css("background", "rgba(0, 0, 0, .25)");
	}, function() {
		$(this).css("background", "#fff");
	});

	/*显示隐藏*/
	$(document).ready(function(){
		$(".hove-xiangmu").hover(function(){
			$(this).find("div").eq(1).show()
		},function(){
			$(this).find("div").eq(1).hide()
		})
	})
})