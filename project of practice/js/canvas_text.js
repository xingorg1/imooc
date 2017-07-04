/**
 * Created by lenovo on 2016/3/23.
 */
function draw(id) {
    var canvas = document.getElementById(id);
    var context = canvas.getContext('2d');
    context.fillStyle="pink";
    context.fillRect(0,0,800,350);
    context.font = "900 40px '微软雅黑'";
    context.textBaseline = 'hanging';
    context.textAlign = 'start';
    context.fillStyle ='green';
    context.fillText('HTML5+CSS3项目实战课程',125,75,800);
    context.fillText('canvas文字绘制教程练习',325,195,800);
    context.fillText('郭菊锋',660,250,800);
    context.fillText('2016-03-23',550,300,800);

}
