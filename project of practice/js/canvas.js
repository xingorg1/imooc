/**
 * Created by lenovo on 2016/3/23.
 */
function draw(id){
    var canvas = document.getElementById(id);
    var context = canvas.getContext("2d");
    context.fillStyle = "green";
    context.strokeStyle = "#ffffff";
    context.lineWidth = "4";
    context.fillRect(0,0,500,350);
    context.strokeRect(60,60,120,100);
    context.strokeRect(80,80,120,100);
    context.strokeRect(100,100,120,100);
    context.strokeRect(120,120,120,100);
    context.strokeRect(140,140,120,100);
    context.strokeRect(160,160,120,100);
    context.strokeRect(180,180,120,100);
    context.strokeRect(200,160,120,100);
    context.strokeRect(220,140,120,100);
    context.strokeRect(240,120,120,100);
    context.strokeRect(260,100,120,100);
    context.strokeRect(280,80,120,100);
    context.strokeRect(300,60,120,100);
}
/*绘制圆形的js代码
function draw(id){
    var canvas1 = document.getElementById(id);
    var context1 = canvas1.getContext("2d");
    context1.fillStyle = "#dedede";
    context1.fillRect(0,0,500,500);
    context1.beginPath();
    context1.arc(10,10,10,0,Math.PI*2,true);
    context1.closePath();
    context1.fillStyle='rgba(255,0,0,0.25)';
    context1.fill();
}*/
