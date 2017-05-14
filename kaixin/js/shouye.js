//导航
$(function(){
		function daohang(){
			$(".top_box ul li").mouseover(function(){
			var i=$(this).index()
			var x=$(".top_box ul li").eq(i).position().left;
			var w =$(".top_box ul li").eq(i).width();
			$(".top_box ul .header_other").eq(0).stop(true).animate({left:x+31,width:w},100)
			$(".top_box ul li").mouseout(function(){

			$(".top_box ul .header_other").eq(0).stop(true).animate({left:0+31,width:31},300)

		})
		})
			
		}
		daohang()
		//===========================
		var ww=window.innerWidth
		var hh=window.innerHeight
		console.log(hh)
		$(".outer ul li").width(ww)
		$(".outer ul li").height(hh)
		var ggw=$(".outer ul li").eq(0).width()
		console.log(ggw)
		$(".outer .gg").width(ggw*$(".outer ul li").length)
		
})
		$(function(){
				var len= $(".outer ul li").eq(0).width();
				var diqius = $(".outer ul .con_box .diqiu");
				var dianziquan=$(".outer ul .dianziquan");
				var cumputer = $(".outer ul .shixidiaocha_outer .cumputer");
				var phone = $(".outer ul .shixidiaocha_outer .phone");
				var h1 = $(".outer ul .shixidiaocha_p h1");
				var p1=$(".outer ul .shixidiaocha_p p");
				var h2 = $(".outer ul .yingxiaogongju_p h1");
				var p2=$(".outer ul .yingxiaogongju_p p");
				var gp = $(".outer ul .yingxiaogongju_outer .gp")
				$(".outer").scrollLeft(len*1);
				//图片的下标
				var x=1;
				var x1=0;
				var time = null;
					fen()
			function automove(){
						
				time=setInterval(function(){
					x++;
					x1++;
					if(x>$(".outer ul li").length-1){
				$(".outer").scrollLeft(len);
						x=2;
					}
					if(x1>$(".amin #list li").length-1){
						x1=0
					}
					//添加样式
				youhua()
					fen()
				},4000)
			}
			//代码优化
			function youhua(){
				$(".amin #list li").eq(x1).addClass("lis").siblings().removeClass("lis")
				$(".outer").stop(true,2000).animate({scrollLeft:(x*len)},1000)
			}
			//============导航点击事件
			$(".amin .left").click(function(){
				clearInterval(time)
				x--;
				if(x<=0){
					x=$(".outer ul li").length-2
           		 $(".outer").scrollLeft(len*(x+1));
					
				}
				fen()
				
				console.log(x)
				x1--;
				if(x1<0){
					$(".amin #list li").length-3
				}
//				console.log(x1)
				youhua()
				automove()
			})
			$(".amin .right").click(function(){
				clearInterval(time)
				x++;
				
					x1++;
					if(x>$(".outer ul li").length-1){
				$(".outer").scrollLeft(len);
						x=2;
					}
					if(x1>$(".amin #list li").length-1){
						x1=0
					}
					//添加样式
				youhua()
					fen()
//				automove()
			})
			$(".amin #list li").click(function(){
				clearInterval(time)
			var l= $(this).index()
				x1=l;
				x=l+1
				console.log(x)
				youhua(fen())
				automove()			
			})
			//=======================
			automove();
			function fen(){
				if(x==1||x==4){
						diqius.stop(true,true).addClass('diqius')
						diqius.stop(true).delay(1000).animate({opacity:1},100,function(){
						dianziquan.show().animate({marginLeft:0,opacity:1},200)})
					
						
				}else{
					diqius.stop(true,true).removeClass('diqius')
					diqius.stop(true).animate({opacity:0},1000,function(){
					dianziquan.stop(true,true).animate({marginLeft:-2000,opacity:0},200).hide()
					})

				}
				if(x==2){
					cumputer.stop(true,true).delay(1000).animate({right:0,opacity:1},1000,"easeOutQuart",function(){
						phone.stop(true,true).animate({left:62,top:190,opacity:1},1000,"easeOutQuart")
					})
					h1.stop(true,true).eq(0).delay(1500).animate({right:8,opacity:1},1000,"easeOutQuart")
					p1.stop(true,true).eq(0).delay(1500).animate({right:0,opacity:1},1000,"easeOutQuart")
				}else{
					cumputer.stop(true,true).animate({right:500,opacity:0},1000,"easeOutQuart",function(){
						phone.stop(true,true).animate({left:-50,top:190,opacity:0},1000,"easeOutQuart")
					})
					h1.stop(true,true).eq(0).animate({right:-500,opacity:0},1000,"easeOutQuart")
					p1.stop(true,true).eq(0).animate({right:-500,opacity:0},1000,"easeOutQuart")
				}
				if(x==3){
					h2.eq(1).animate({left:0,opacity:1},1000,"easeOutQuart",function(){
						p2.eq(1).stop(true,true).animate({left:0,opacity:1},1000,"easeOutQuart")
							gp.stop(true,true).delay(100).animate({right:0,opacity:1},1000,"easeOutQuart")
					})
						
				}else{
					h2.stop(true,true).eq(1).animate({left:-500,opacity:0},1000,"easeOutQuart")
						p2.eq(1).stop(true,true).animate({left:-500,opacity:0},1000,"easeOutQuart")
							gp.stop(true,true).animate({right:-500,opacity:0},500,"easeOutQuart")
				}
			
			}
			//============================================
			$(window).scroll(function(){
				var h=$(window).scrollTop()
				var gh=$(".amin").height()
				var ceng1 = $(".content .ceng1").offset().top
				var ceng2 = $(".content .ceng2").offset().top
				var ceng3 = $(".content .ceng3").offset().top
				var ceng4 = $(".content .ceng4").offset().top
				var ceng5 = $(".content .ceng5").offset().top
				var i = -1;
				h++;
				if(h>gh-300){
					$(".top").addClass("beijing")
				}else{
					$(".top").removeClass("beijing")
					
				}
				if(h>ceng1-500){
					$(".content .ceng1_nr1").animate({top:0},500,function(){
						$(".content .ceng1_nr2").animate({top:0},200,function(){
							$(".content .ceng1_nr3").animate({left:0},200,function(){
								$(".content .ceng1_nr4").animate({right:0},200,function(){
									$(".content .ceng1_nr5").animate({top:0},200)
								})
							})
						})
					})
				}
				if(h>ceng2-500){
					$(".content .ceng2_nr1").animate({top:0},500,"swing",function(){
						$(".content .ceng2_nr2").animate({top:0},300,"swing",function(){
							$(".content .ceng2_nr3").animate({top:0},300,"swing")		
						})
					})
					$(".content .demo .tu3").animate({left:195},1000,"swing")
					$(".content .demo .tu2").delay(300).animate({right:22},1000,"swing")
					$(".content .demo .tu1").delay(400).animate({right:22},1000,"swing")
					$(".content .demo .tu5").delay(500).animate({left:33},1000,"swing")	
					$(".content .demo .tu4").delay(600).animate({left:41},1000,"swing")
					$(".content .ceng2_nr5").delay(1400).animate({top:0},300,"linear")
				}
				if(h>ceng3-500){
					$(".ceng3 .ceng3_nr1").animate({top:0},500,function(){
						$(".ceng3 .ceng3_nr2").animate({top:0},500,function(){
							var time =setInterval(function(){
								i++;
								if(i>$(".ceng3 .ceng3_nr_box ul li").length){
									clearInterval(time)
								}
								$(".ceng3 .ceng3_nr_box ul li").eq(i).animate({top:0,opacity:1,background:0},300)
							},150)
						})
					})
				}
				if(h>ceng4-500){
					$(".ceng4 .ceng4_nr1").animate({top:0},500,function(){
						$(".ceng4 .ceng4_nr2").animate({top:0},500,function(){
							$(".ceng4 .ceng4_nr3").animate({top:0},500,function(){
								$(".ceng4 .ceng4_lunbo").animate({top:0},500)
									$(".ceng4 .right").click(function(){
										$(".ceng4 #ceng4_outer").animate({
											scrollLeft:$(".ceng4 #ceng4_outer").width()
										},200)
									})
									$(".ceng4 .left").click(function(){
										$(".ceng4 #ceng4_outer").animate({
											scrollLeft:0
										},200)
									})
							})
						})
					})
				}
				if(h>ceng5-500){
					$(".ceng5 .ceng5_nr1").animate({top:0},500,function(){
						$(".ceng5 .ceng5_nr2").animate({top:0},500,function(){
							$(".ceng5 .ceng5_nr3").animate({left:0},500,function(){
								$(".ceng5 .ceng5_nr4").animate({left:0},500)
							})
						})
					})
				}
				console.log(h)
				console.log(gh)
			})
		});	
