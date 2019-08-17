define(['jquery'],function ($) {
    function Clock(el,options) {
        this.opts = $.extend({},Clock.DEFAULT,options);
        this.$el = $(el);
        this.$drow = this.$el[0].getContext('2d');
        this.width = this.$drow.canvas.width = (this.opts.radius);
        this.height = this.$drow.canvas.height = (this.opts.radius);
        this.r = this.width / 2;
        this.rem = this.width / 300;
        this.$data = $('#container');
        if(this.opts.mode != 'Arab' || 'Roman'){
            this.opts.mode == 'Arab'
        };
    };

    //默认参数
    Clock.DEFAULT= {
        mode:'Arab',//时钟样式
        radius:300,//时钟大小
        isShowDate:true//是否显示日期
    }
    Clock.prototype.init = function () {
        this.drow();

        this.interval = setInterval (() => {
         this.drow()
        },1000)
    };
    Clock.prototype.stop = function () {
        clearInterval(this.interval);
    }
    Clock.prototype.drow = function () {
        this.$drow.clearRect(0,0,this.width,this.height);
        var now = new Date();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
        this.dragBackground();
        this.dragHour(hour,minute,second);
        this.dragMinute(minute,second);
        this.dragSecond(second);
        this.dragDot();
        this.$drow.restore();
        if(this.opts.isShowDate){
            this.current();
        };
        
    };
    //时钟外框
    Clock.prototype.dragBackground = function () {
        var r = this.r;
            rem = this.rem;
            drow = this.$drow;
        drow.save();
        drow.beginPath();
        drow.translate(r,r);
        drow.lineWidth=10 * rem;
        drow.arc(0,0,r - drow.lineWidth/2,0,2*Math.PI,false);
        drow.stroke();
        
        var hourArray = [];
        if(this.opts.mode == 'Arab'){
            hourArray = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
        }else if(this.opts.mode == 'Roman'){
            hourArray = ['Ⅲ','Ⅳ','Ⅴ','Ⅵ','Ⅶ','Ⅷ','Ⅸ','Ⅹ','Ⅺ','Ⅻ','Ⅰ','Ⅱ']
        }else{
            hourArray = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
        };
        drow.font=25 * rem  + "px Arial";
        drow.textAlign = "center";
        drow.textBaseline= "middle";
        hourArray.forEach(function (num,i) {
            var red = 2 * Math.PI / 12 * i;
            var x = Math.cos(red) * (r-35 * rem);
            var y = Math.sin(red) * (r-35 * rem);
            drow.fillText(num,x,y) 
        });
        for(var i = 0;i<60;i++){
            var red = 2 * Math.PI / 60 * i;
            var x = Math.cos(red) * (r-18 * rem);
            var y = Math.sin(red) * (r-18 * rem);
            drow.beginPath();
            if(i % 5 === 0){
                drow.fillStyle = '#000';
                drow.arc(x,y,2 * rem,0,2 * Math.PI,false);
            }else{
                drow.fillStyle = '#ccc';
                drow.arc(x,y,2 * rem,0,2 * Math.PI,false);
            }
            drow.fill();
        }
    };

    //时针
    Clock.prototype.dragHour = function (hour,minute,second) {
        var r = this.opts.radius / 2;
            rem = this.rem;
            drow = this.$drow;
        drow.save();
        drow.beginPath();
        var total = hour + minute / 60 + second / 3600;
        var red = 2 * Math.PI / 12 * total;
        drow.rotate(red);
        if(this.opts.mode == 'Arab'){
            drow.moveTo(0,10 * rem);
            drow.lineTo(0,- r / 2);
            drow.lineWidth = 9 * rem;
            drow.stroke();
            drow.lineCap ="round";
        }else{
            drow.moveTo(0,15 * rem);
            drow.lineTo(8 * rem,0);
            drow.lineTo(1 * rem,-r / 2);
            drow.lineTo(0,-r / 2);
            drow.lineTo(-8 * rem,0);
            drow.fillStyle = '#000';
            drow.fill();
        }
        drow.restore();
    };
    //分针
    Clock.prototype.dragMinute = function (minute,second) {
        var r = this.opts.radius / 2;
            rem = this.rem;
            drow = this.$drow;
        drow.save();
        drow.beginPath();
        var total = minute + second / 60;
        var red = 2 * Math.PI / 60 * total;
        drow.rotate(red);
        if(this.opts.mode == 'Arab'){
            drow.moveTo(0,20 * rem);
            drow.lineTo(0,- (r-50 * rem));
            drow.lineCap = 'round';
            drow.lineWidth = 7 * rem;
            drow.stroke();
        }else{
            drow.moveTo(0,25 * rem);
            drow.lineTo(6 * rem,0);
            drow.lineTo(1 * rem,- (r-50 * rem));
            drow.lineTo(0,- (r-50 * rem));
            drow.lineTo(-6 * rem,0);
            drow.fillStyle = '#000';
            drow.fill();
        }
        drow.restore();
    };

    //秒针
    Clock.prototype.dragSecond = function (second) {
        var r = this.opts.radius / 2;
            drow = this.$drow;
        drow.save();
        drow.beginPath();
        var red = 2 * Math.PI / 60 * second;
        drow.rotate(red);
        drow.fillStyle = 'red';
        drow.moveTo(-2 * rem,30 * rem);
        drow.lineTo(2 * rem,28 * rem);
        drow.lineTo(1 * rem, -(r-23 * rem));
        drow.lineTo(0, -(r-23 * rem));
        drow.fill();
        drow.restore();
    };

    //中心圆
    Clock.prototype.dragDot = function () {
        var drow = this.$drow;
        drow.beginPath();
        drow.arc(0,0,5 * rem,0,2 * Math.PI);
        drow.fillStyle = '#fff';
        drow.fill();
    }
    
    //当前日期
    Clock.prototype.current = function () {
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var day = now.getDate();
        var num = now.getDay();
        var weekend = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
        var week = weekend[num];
        this.$data.prepend(`<span id='data'>${year} 年 ${month} 月 ${day} 日 ${week}</span>`);
    }
    var init = function (el,option){
         new Clock(el,option).init();
         
    }

    return {
        clock:init
    }
});
    