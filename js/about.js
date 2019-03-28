/*まさかスクリプトまで読んでくれるなんて。ありがたい限りです。
　もっとちゃんと隠せばよかったかなあ…
　- rom男*/

var count = 1;
function trigger() {
    if (count < 10) {
        count++;
    }
    else {
        var x = document.getElementById("easter-egg");
        x.innerHTML = "<b>名誉会長</b><br>mdmg_uncle";
    }
};

function trigger2(){
    var x = document.getElementById("easter-egg3");
    x.innerHTML = "<br><br><b>ウェブデザイン</b><br>rom_o";

}
