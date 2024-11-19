$(document).ready(function () {
    $(".btn-notice").click(function () {
    $(".notice").show();
    $(".gal").hide();
    $(".btn-notice").addClass("on");
    $(".btn-gal").removeClass("on");
    });

    $(".btn-gal").click(function () {
    $(".gal").show();
    $(".notice").hide();
    $(".btn-gal").addClass("on");
    $(".btn-notice").removeClass("on");
    });
    $(".notice").show();
    $(".gal").hide();
});
//첫번쨰 공지사항내용(.open-modal)을 클릭했을때,모날이 나타남

$(".open-modal").dblclick(function(){
    $(".modal").show();
    });
//닫기 버튼을 클릭했을때, 모달창이 사라짐
    $(".close-modal").click(function(){
    $(".modal").hide();
    });

//매인매뉴인에 있는 li태그한테 마우스를 올리면 , sub가 나타남
$(".gnb>li").mouseenter(function(){
    $(this).children(".sub").stop(true,true).slideDown();
})
$(".gnb>li").mouseleave(function(){
    $(this).children(".sub").stop(true,true).slideUp();
})