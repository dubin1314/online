$(function(){
//加载页面头部
    $("#aside").load('sidebar.html',function(){
        navText("创建试卷");
    })});
layui.use(['form', 'layedit', 'laydate'], function() {
    var form = layui.form()
        , layer = layui.layer
        , layedit = layui.layedit
        , laydate = layui.laydate;

    //创建一个编辑器
    var editIndex = layedit.build('LAY_demo_editor');
})