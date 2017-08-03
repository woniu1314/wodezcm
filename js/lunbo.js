
//轮播
window.mySwipe = Swipe(document.getElementById('slider'),
				{
				  startSlide: 0, //第几张开始
				  speed: 400,
				  auto: 0, 	  //是否自动播放。为0就不会自动播放
				  continuous: true,//无限循环
				  disableScroll: false,
				  stopPropagation: false,
				  callback: function(index, elem) {
				  	
				    $(".indirector span").eq(index%2).addClass("on").siblings().removeClass("on");
				  	console.info("callback",index,elem);
				  	
				  },
				  transitionEnd: function(index, elem) {
				  	console.info("transitionEnd",index,elem)
				  	
				  }
				}
			);
			
			$(".indirector span").on("click",function(){
				var index = $(this).index();
				mySwipe.slide(index, 2000)
			})
			