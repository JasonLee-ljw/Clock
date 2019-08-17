requirejs(['jquery','ClockModel'],function ($,clock) {
       var clock=new clock.clock('#clock',{
            mode:'Arab',
            radius: 200,
            
    });
    
});









// var cas = document.getElementById('clock');
// var obj = cas.getContext ('2d');
// var width = obj.canvas.width;
// var height = obj.canvas.height;
// var r = width / 2;
// var rem = width / 300;

// function dragBackgound () {
//     obj.save();
//     obj.beginPath();
//     obj.translate(r,r);
//     obj.lineWidth=10 * rem;
//     obj.arc(0,0,r - obj.lineWidth/2,0,2*Math.PI,false);
//     obj.stroke();
    
//     var hourNumbers = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
//     obj.font=25 * rem + "px Arial";
//     obj.textAlign = "center";
//     obj.textBaseline= "middle";
//     hourNumbers.forEach(function (num,i) {
//         var red = 2 * Math.PI / 12 * i;
//         var x = Math.cos(red) * (r-35* rem);
//         var y = Math.sin(red) * (r-35* rem);
//         obj.fillText(num,x,y) 
//     });
//     for(var i = 0;i<60;i++){
//         var red = 2 * Math.PI / 60 * i;
//         var x = Math.cos(red) * (r-18* rem);
//         var y = Math.sin(red) * (r-18* rem);
//         obj.beginPath();
//         if(i % 5 === 0){
//             obj.fillStyle = '#000';
//             obj.arc(x,y,2* rem,0,2 * Math.PI,false);
//         }else{
//             obj.fillStyle = '#ccc';
//             obj.arc(x,y,2* rem,0,2 * Math.PI,false);
//         }
//         obj.fill();
//     }  
// };

// function dragHour (hour,minute,second) {
//     obj.save();
//     obj.beginPath();
//     var total = hour + minute / 60 + second / 3600;
//     var red = 2 * Math.PI / 12 * total;
//     obj.rotate(red);
//     // obj.moveTo(0,10* rem);
//     // obj.lineTo(0,- r / 2);
//     // obj.lineWidth = 9* rem;
//     // obj.stroke();
//     // obj.lineCap ="round";
//     obj.moveTo(0,15*rem);
//     obj.lineTo(8,0);
//     obj.lineTo(1,-r / 2);
//     obj.lineTo(0,-r / 2);
//     obj.lineTo(-8,0);
//     obj.fillStyle = '#000';
//     obj.fill();
//     obj.restore();
// };

// function dragMinute (minute,second) {
//     obj.save();
//     obj.beginPath();
//     var total = minute + second / 60;
//     var red = 2 * Math.PI / 60 * total;
//     obj.rotate(red);
//     // obj.moveTo(0,20* rem);
//     // obj.lineTo(0,- (r-50* rem));
//     // obj.lineCap = 'round';
//     // obj.lineWidth = 7* rem;
//     // obj.stroke();
//     obj.moveTo(0,25*rem);
//     obj.lineTo(6,0);
//     obj.lineTo(1,- (r-50* rem));
//     obj.lineTo(0,- (r-50* rem));
//     obj.lineTo(-6,0);
//     obj.fillStyle = '#000';
//     obj.fill();
//     obj.restore();
// };

// function dragSecond (second) {
//     obj.save();
//     obj.beginPath();
//     var red = 2 * Math.PI / 60 * second;
//     obj.rotate(red);
//     obj.fillStyle = 'red';
//     obj.moveTo(-2* rem,30* rem);
//     obj.lineTo(2* rem,28* rem);
//     obj.lineTo(1* rem, -(r-23* rem));
//     obj.lineTo(0, -(r-23* rem));
//     obj.fill();
//     obj.restore();
// };

// function dragDot () {
//     obj.beginPath();
//     obj.arc(0,0,5* rem,0,2 * Math.PI);
//     obj.fillStyle = '#fff';
//     obj.fill();
// };

// function drow () {
//     obj.clearRect(0,0,width,height);
//     var now = new Date();
//     var hour = now.getHours();
//     var minute = now.getMinutes();
//     var second = now.getSeconds();
//     dragBackgound();
//     dragHour(hour,minute,second);
//     dragMinute(minute,second);
//     dragSecond(second);
//     dragDot();
//     obj.restore();
// };
 
// drow();
// setInterval (drow,1000);

