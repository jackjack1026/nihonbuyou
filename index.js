$(function(){
			

	/*step2
	ハンバーガーボタン（矢印）をクリックしたら処理を行う
	イベントメソッドを使う
*/
$(".btn-gnavi").on("click", function(){
	 console.log("test");
	 $(this).toggleClass("isopen");
	//$("#global-navi").css("display","none");
	
	
	/*step3
	メニューの表示・非表示
	cssでrightプロパティの値を変える
	
	ハンバーガーボタンが（矢印）をクリックされたら
	メニュ－にクラス名openをつける
    ↓
    クラス名openがついているかいないかの判定
	→　ついている（開かれた状態）
    　次回クリック時用に（閉じる動きに）
    　1.cssのrightプロパティの値を-300に設定
	　2.既についている蔵梅井openを取り除く

    ついていない　cssのrightプロパティの値を-300*/


//ハンバーガーメニューの位置を設定するための変数
var rightVal = 0;

if($(this).hasClass("open")){
//メニュー表示中    
//クラス名openをもっていればメニューを開いた状態に設定
rightVal= -400;

//メニューを開いたら次回クリック時は閉じた状態になるように設定
$(this).removeClass("open");
}else{
	//メニュー非表示中
	//rightValは0のまま
	//メニューを閉じたら次回クリック時は開いた状態になるように設定
	$(this).addClass("open");
}

/*step4
ハンバーガーメニューが右からアニメーションして出現するようにする*/
$("#global-navi").stop().animate({
    right : rightVal
},200);


});
});
	

  
