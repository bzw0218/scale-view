/**
 * Created by Administrator on 2017/1/11 0011.
 */
!(function(window,document){
    var scaleView=(function(){
        var picList=[];

        function config(List){
            picList=List;
            //start();
        }

        function start(){

        }

        return {
            config:config,
            start:start
        }
    })()

    window.scaleView=scaleView;
})(window,document)