/**
 * Created by lenovo on 2016/3/23.
 */
function draw(id){
    var canvas = document.getElementById(id);
    var context = canvas.getContext("2d");
    /*获取画布*/
    context.fillStyle = "#dedede";
    context.fillRect(0,0,500,500);
    /*绘制画布的背景色和范围*/
   /* 如下：制作一个for循环语句，让10个圆形不断错开重叠达到想要的效果*/
    for(var i=0;i<10;i++){
        context.beginPath();
        context.arc(i*25,i*25,i*10,0,Math.PI*2,true);
        /*25为每次错开的距离的倍数，10为弧度，0为开始角度，math.pi*2表示360度，true表示顺时针画圆反之为逆时针*/
        context.closePath();
       /* 下边为圆填充颜色，设置透明样式*/
        context.fillStyle = 'rgba(255,0,0,0.25)';
        context.fill();
        /*下边为圆画边框线*/
        context.strokeStyle = '#f00';
        context.stroke();
    }
    window.location = canvas.toDataURL('image/png');/*这一行就是为了保存图片所做的，讲一个网页变成了一个图片*/
}
/*绘制一个圆形
context.beginPath();
context.arc(10,10,10,0,Math.PI*2,true);
context.closePath();
context.fillStyle = 'rgba(255,0,0,0.25)';
context.fill();*/
