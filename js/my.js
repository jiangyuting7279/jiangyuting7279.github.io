$(function(){
	// JavaScript Document
		;(function(){	
			var mySwiper = new Swiper ('.all', {
			direction: 'vertical',//垂直
			mousewheel: true, //鼠标中键（滚轮）
				keyboard : true, //键盘 上下左右    
			loop: true, //无缝
				effect : 'slide', //slide 普通切换 cube立方体切换  coverflow    flip翻转
				
				// 如果需要分页器
				pagination: {
				  el: '.swiper-pagination',
			clickable :true,
				},
				// 如果需要滚动条
			scrollbar: {
			  el: '.swiper-scrollbar',
			},
			on:{
				  init: function(){
					swiperAnimateCache(this); //隐藏动画元素 
					swiperAnimate(this); //初始化完成开始动画
				  }, 
				  slideChangeTransitionEnd: function(){ 
					swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
				  } 
				}
				
			  }) 
			$('.slideto').click(function(e) {
				mySwiper.slideNext()
			}); 
		})();
		;(function(){	
		$('.hua').mousestorm({
							images: ['images/flowers3.png','images/flowers2.png' ], //粒子图片数组。
							opacity: [0.3, 0.96], //粒子透明度范围0.2-0.96。粒子随机透明度范围
							time: [2000, 3000], //粒子运动的时间2000-3000毫秒
							rotate: [360, 720], //旋转度数,随机旋转
							scale: [0.4, 0.8], //粒子缩放范围 原图片的倍数0.3-0.7。粒子的随机大小范围
							diepresent: 0.2, //粒子生长到消失的范围，屏幕宽度取0.4的倍数。 数值越大粒子运动的越远，数值越小粒子运动的越近 建议0.4
							numpresent: 0.04 //粒子产生数量限制比例 数值越小 创建 的也越小，数值越大创建的也越多建议0.03
						})
		  
		  
		  
		})();
		;(function(){	
			$('.bannerbox_in').bomb();
			lc_lightbox('.elem', {
		wrap_class: 'lcl_fade_oc',
		gallery : true,	
		thumb_attr: 'data-lcl-thumb', 
		
		skin: 'minimal',
		radius: 0,
		padding	: 0,
		border_w: 0,
	});
		})();
		

		;(function(){	
		$('.con3 .hua2').mousestorm({
							particle:{
								y:'top',
								x:'left'	
							},
							images: ['images/lizi/ye1.png','images/lizi/ye2.png','images/lizi/ye3.png','images/lizi/ye4.png','images/lizi/ye4.png'], //粒子图片数组。
							opacity: [0.2, 1], //粒子透明度范围0.2-1。粒子随机透明度范围
							time: [7000, 8000], //粒子运动的时间2000-3000毫秒
							rotate: [0, 360], //旋转度数,随机旋转
							scale: [0.5, 0.2], //粒子缩放范围 原图片的倍数0.3-0.7。粒子的随机大小范围
							diepresent: 0.6, //粒子生长到消失的范围，屏幕宽度取0.4的倍数。 数值越大粒子运动的越远，数值越小粒子运动的越近 建议0.4
							numpresent: 0.04 //粒子产生数量限制比例 数值越小 创建 的也越小，数值越大创建的也越多建议0.03
						})
		})();
	})
		;(function(){	
		  var mySwiper = new Swiper ('.app', {
			loop: true, //无缝
			effect : 'coverflow', //slide  coverflow cube flip
			slidesPerView: 5,
			autoplay: {
		disableOnInteraction: false,
	},
			// 如果需要前进后退按钮
			navigation: {
			  nextEl: '.swiper-button-next',
			  prevEl: '.swiper-button-prev',
			}
		  })        
	})();
		;(function(){	
			$('.con8 ul li').hover(function(e) {
                $(this).children().toggle()
            });
		
		})();