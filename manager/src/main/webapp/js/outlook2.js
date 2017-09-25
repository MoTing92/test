/***********************************************************************

* 作者：莫庭 QQ:837913368
* 创建日期：2017/9/26

**********************************************************/



$(function(){
	InitLeftMenu();

	$('#tabs').tabs('add',{
		title:'首页',
		content:createFrame('https://www.baidu.com')
	}).tabs({
        onSelect: function (title) {
            var currTab = $('#tabs').tabs('getTab', title);
            var iframe = $(currTab.panel('options').content);

			var src = iframe.attr('src');
			if(src)
				$('#tabs').tabs('update', { tab: currTab, options: { content: createFrame(src)} });

        }
    });

})

//初始化左侧
function InitLeftMenu() {
	var menu = "<ul>" +
				"<li>" +
				"<a>用户管理</a>" +
				"</li>" +
				"<li>" +
				"<a>用户管理</a>" +
				"</li>" +
				"<li>" +
				"<a>用户管理</a>" +
				"</li>" +
			"</ul>";
	$("#nav").append(menu);
}

