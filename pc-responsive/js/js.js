var swipermain;
$(function(){
    //全屏自适应 
    bg_size();
    $(window).on('resize',function(){
        bg_size();
    });
    new zoomForJQuery('.zoom',1);

    //主slider
    swipermain = new Swiper('.swiper-container-main',{
        mode: 'vertical',
        speed: 400,
        mousewheelControl : true,
        simulateTouch : false,
        pagination : '.pagination-main',
        paginationClickable : true,
        threshold: "50",
        onSlideChangeEnd: function(swiper){
            $('.navigation li').eq(swipermain.activeIndex).addClass('active').siblings().removeClass('active');
            // if(swipermain.activeIndex == 1){
            //     $('.video').css('top','0px');
            // }
        }
    });

});
//背景自适应
function bg_size(){
    var bg_w = 2600;
    var bg_h = 990;
    var win_h = $(window).height();
    var win_w = $(window).width();
    if(bg_h/bg_w >= win_h/win_w){
        $('.s .sbg').attr('style',"width:100%;position:absolute;left:0;top:50%;margin-top:-"+bg_h*(win_w/bg_w)/2+"px");
    }else{
        $('.s .sbg').attr('style',"height:100%;position:absolute;top:0;left:50%;margin-left:-"+bg_w*(win_h/bg_h)/2+"px");
    }
}