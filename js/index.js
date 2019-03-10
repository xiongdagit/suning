// 初始化页面功能
window.onload = function () {
    // 搜索
    search();
};

var search = function () {
    // 获取dom元素
    var search = document.getElementById('sn-search');
    var banner = document.getElementById('sn-banner');
    // 监听滚动事件
    window.onscroll = function () {
        // 当前页面滚动的距离
        // IE
        // var top = documentElement.scrolTop;
        // 谷歌
        var top = document.body.scrollTop;
        // 距离范围
        var height = banner.offsetHeight;
        if (top > height) {
            // 当滚动的距离超过了轮播图的距离的时候，保持不变；
            opacity = 0.85;
        } else {
            // 当页面滚动的时候，随着页面距离变大 透明度变大；
            opacity = 0.85 * (top / height);
        };
        search.style.background = 'rgba(250,185,0,' + opacity + ')';
    };

};