var swipeLock = true;
var id = 0; //控制翻页
var haveClicked = 0;//已经点过的数量
var touchLock = false;
$(function(){
    $('.s0 .map').pos({
        'width': 800,
        'lastPageX': -400
    });
	//防止点击btn时swiper移动
    $('.btn-box').on('touchmove',function(e){
        e.stopPropagation();
        e.preventDefault();
    });
    $('.hint-box').on('touchstart',function(){
        $('.hint-box').removeClass('active');
    });
});