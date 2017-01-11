/**
 * Created by Administrator on 2017/1/11 0011.
 */
!(function(window,document){
    var scaleView=(function(){
        var picList=[];//图片列表
        var picIndex=0;//列表中的第几个图片

        /* pic 对象
         {
         link: "http://img3.cache.netease.com/f2e/ent/ent_painting2016/images/2.jpg?1520",
         imgW: "1875",
         imgH: "3015",
         areaW: "375",
         areaH: "603",
         areaL: "1379",
         areaT: "103",
         limitMax: .3,
         limitMin: .2
         }
        * */

        function config(List){
            picList=List;
            picIndex=0;
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