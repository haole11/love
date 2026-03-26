var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
    // 1. 修复：获取当前时间戳和开始时间戳
    var current = new Date().getTime();
    var start = new Date(date).getTime();
    
    // 2. 修复：计算时间差（当前 - 过去 = 已过去的时间）
    var distance = current - start;

    // 3. 计算天、时、分、秒
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // 4. 补零操作
    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }

    var result = "第 <span class=\"digit\">" + days + "</span> 天 <span class=\"digit\">" + hours + "</span> 小时 <span class=\"digit\">" + minutes + "</span> 分钟 <span class=\"digit\">" + seconds + "</span> 秒"; 
    
    // 5. 修复：移除 setTimeout 延迟，直接更新，保证页面加载即显示
    $("#clock").html(result);
    // 如果需要淡入效果，保留 fadeIn，不需要则删除
    $("#clock").fadeIn(2000);
}

// 6. 新增：启动定时器，让时间每秒自动刷新（原代码只执行一次）
// 注意：请将下方的日期修改为你实际的开始日期
var startDate = "2023-01-01 00:00:00"; 
timeElapse(startDate);
setInterval(function(){
    timeElapse(startDate);
}, 1000);
