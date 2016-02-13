// 图片预加载及进度条
window.addEventListener('DOMContentLoaded', function() {
    "use strict";
    var ql = new QueryLoader2(document.querySelector("body"), {
        barColor: "#666",
        backgroundColor: "#eee",
        percentage: true,
        barHeight: 10,
        minimumTime: 1000,
        fadeOutTime: 3000
    });
});


var DELAY_SPEED = 200;//文字が流れる速さ
var FADE_SPEED = 1000;//表示のアニメーション時間
var str = [];


$(document).ready(function(){
	
	
	var windW = $(document).width();
	var windH = $(document).height();
	
	if (windW > windH){
		$(".🌀").height(windW).css("marginTop",-windW/2).css("marginLeft",-windW/2);
	} else{
		$(".🌀").height(windH*1.3).width(windH*1.3).css("marginTop",-windH*1.3/2).css("marginLeft",-windH*1.3/2);
	}
	
	$("#🌹,.sec2,.🍀,.babysbreath").height(windH);
	$(".🍀,.babysbreath").width(windW);
	
	
	setTimeout(function(){
		$("#form").fadeIn(3000);
	}, 5000);
	
		$("#btn").click(function(){
			if ($('#txt').val() != ""){
				var nick = $('#txt').val();
				$(".name").html(nick + "，你好。");
				$("#txt").val('');
				$(".sec1").fadeOut(3000);
				$(".sec2").fadeIn(3000);
				
				
			setTimeout(function(){
				$("#🌹 .💐").addClass("go").css("opacity","1");
			}, 2000);
			setTimeout(function(){
				$(".btn1").fadeIn(3000);
				$(".sec2").click(function(){
					$(".sec2").fadeOut(3000);
					$(".sec3").fadeIn(3000);
				});
			}, 5000);
			setTimeout(function(){
				$(".txtArea").fadeIn(3000);
			}, 5000);
				
			setTimeout(function(){
			
	$('.fadein > span').each(function(i){//セレクタで指定した要素すべて
        $(this).css('opacity','1');//行を不透明にする
        str[i] = $(this).text();//元のテキストをコピーし
        $(this).text('');//テキストを消す
        var no = i;
        var self = this;
        var interval = setInterval(function(){//50ミリ秒毎にチェック
            if(no == 0 || $('.fadein > span').eq(no - 1).children('span:last').css('opacity') == 1){//最初の行または前の行が全文字表示された時
                clearInterval(interval);//チェックを停止
                for (var j = 0; j < str[no].length; j++) {
                    $(self).append('<span>'+str[no].substr(j, 1)+'</span>');//1文字ずつ<span>を付けて
                    $(self).children('span:last').delay(DELAY_SPEED * j).animate({opacity:'1'}, FADE_SPEED);//時間差でフェードインさせる
                }
            }
        }, 50);
    });
				
				
				
				
			}, 10000);
				
				
				
				
				
				
				
				
			}else{
				alert('请输入您的昵称');
				$("#txt").val('');
			}
			
		});
	
	
	
	// 音乐播放开关设定
	$(".music-trigger").click(function(document){
		if($(this).hasClass("play")){
			$('#stop-btn').click();
			$(this).removeClass("play").addClass("stop");
		} else{
			$('#play-btn').click();
			$(this).removeClass("stop").addClass("play");
		}
	});
	
	
	
});






