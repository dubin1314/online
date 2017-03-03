$(function(){
//加载页面头部
    $("#aside").load('sidebar.html',function(){
        navText("模拟考试成绩查询");
    })});
layui.use('form', function(){
    var $ = layui.jquery, form = layui.form();

    //全选
    form.on('checkbox(allChoose)', function(data){
        var child = $(data.elem).parents('table').find('tbody input[type="checkbox"]');
        child.each(function(index, item){
            item.checked = data.elem.checked;
        });
        form.render('checkbox');
    });

});