# 基于swiper的PC端的全屏自适应翻页 #

### HTML Layout ###
		<div class="swiper-container swiper-container-main">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide s">
		            <img class="sbg" src="img/bg1.jpg" alt="">
		            <div class="main zoom">
		                <div class="title"></div>
		            </div>
		        </div>
		        <div class="swiper-slide s">
		            <img class="sbg" src="img/bg1.jpg" alt="">
		            <div class="main zoom">
		                
		            </div>
		        </div>
		    </div>
		    <div class="pagination pagination-main"></div>
		</div>
>主体swiper中slide添加类名's'
>
>slide下img标签添加类名'sbg', 此为每页slide的背景
>
>main中为主体内容部分

### css ###
	.main {
	    width: 2600px;
	    height: 990px;
	    position: relative;
  		margin: 0 auto;
	}
>按照设计尺寸定义.main的width和height

### JS ###
		new contentResponsive('.zoom',1); 
    	bgResponsive(2600,990);
	    $(window).on('resize',function(){
	        bgResponsive(2600,990);
	    });
>contentResponsive(eleStr, zoom)
>
>eleStr为需要缩放部分的class名称
>
>zoom为缩放比例, 默认为1, 0.9将更小
>
>bgResponsive(width,height)
>
>width和height分别为缩放区域的宽度和高度, 和css中.main的一致