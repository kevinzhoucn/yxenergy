jq(function(){
	//头条使用图片时脚本
	headline();
	
	
 jq("#top_link_search_btn_en").click(function () {
  var input_value=encodeURIComponent(jq("input[id='top_link_search_txt_en']").val());
  var c_adress= "http://apps.sinopec.com/search/searchresults.aspx?s=group&l=en&k="+input_value;
      if(input_value==""){
      alert("Enter search keywords");
      }else{
      	window.open(c_adress);
  	  }
 });
		/*头条字号变化开始*/
		var ttxwText = jq(".ttxw a").text();
		var ttxwLen = ttxwText.length;
		if(ttxwLen > 21){
			jq(".ttxw").css("font-size","18px");
		} 
		
		var ttxwText_red = jq(".ttxw_red a").text();
		var ttxwLen_red = ttxwText_red.length;
		if(ttxwLen_red > 21){
			jq(".ttxw_red").css("font-size","18px");
		} 

		/*头条字号变化结束*/
		
		
		
		//将“繁體”转换为“简体”
		var atemp = jq(".jb_language_right>a:contains(繁體)");
        atemp.text('简体');
        atemp.attr("href", "http://www.sinopecgroup.com/group");
     	
     	/*简繁体图片切换开始*/
 	if(atemp.text()=="简体"){
		
		var arryImg = new Array(
    			
    			//一、首页banner图
    				"/group/Themes/Image/pic05.jpg",
    			"/group/Themes/Image/pic06.jpg",
				"/group/Themes/Image/pic07.jpg",
				
				//二、首页专题链接
				"/group/Resource/Image/hot2013110101.jpg", 
				
				"/group/Resource/Image/hot2013100801.jpg", 
				
				"/group/Resource/Image/hot20130821.jpg", 
				
				"/group/Resource/Image/hot2013080601.jpg", 
				
				"/group/Resource/Image/hot20130712.jpg", 
				
				"/group/Resource/Image/hot20130628.jpg", 
				
				"/group/Resource/Image/hot20130509.jpg", 
				
				"/group/Resource/Image/hot20130502.jpg", 
				
				"/group/Resource/Image/hot20130420.jpg", 
				
				"/group/Resource/Image/hot20130412.jpg", 
				
				"/group/Resource/Image/hot20130409.jpg", 
				
				"/group/Resource/Image/hot20130402.jpg", 
				
				"/group/Resource/Image/hot20130326.jpg", 
				
				"/group/Resource/Image/hot20130321.jpg", 
				
				"/group/Resource/Image/hot20130318.jpg", 
				
				"/group/Resource/Image/hot20130313.jpg", 
				
				"/group/Resource/Image/hot20130305.jpg", 
				
				"/group/Resource/Image/hot20130307.jpg", 
				
				"/group/Resource/Image/hot20130222.jpg", 
				
				"/group/Resource/Image/hot2013022701.jpg", 
				
				"/group/Resource/Image/hot20130226.jpg", 
				
				"/group/Resource/Image/hot20130219.jpg", 
				
				"/group/Resource/Image/hot20130218.jpg", 
				
				"/group/Resource/Image/hot20130217.jpg", 
				
				"/group/Resource/Image/hot2013012101.jpg", 
				
				"/group/Resource/Image/hot2013011001.jpg", 
				
				//三、首页社会责任图片
				"/group/Resource/Image/pic11.gif", 

				"/group/Resource/Image/pic12.gif", 
				
				"/group/Resource/Image/pic14.gif", 
				
				"/group/Resource/Image/pic13.gif", 
				
				"/group/Resource/Image/newpic3.jpg", 
				
				"/group/Resource/Image/newpic1.jpg", 
				
				"/group/Resource/Image/newpic_caiwu.jpg", 
				"/group/Resource/Image/xcp2012.jpg", 
				"/group/Resource/Image/lsgbsh20130627.jpg",
				"/group/Resource/Image/symx2012.jpg",

				//四、二级栏目banner图片
				
				"/group/Resource/image/about_banner.jpg", 
				
				"/group/Resource/Image/pic_c_xwzx_banner.jpg", 
				
				"/group/Resource/Image/business_banner.jpg", 
				
				"/group/Resource/Image/pic_c_tzzgx_banner.jpg", 
				
				"/group/Resource/Image/product_banner.jpg", 
				
				"/group/Resource/Image/pic_c_shzr_banner.jpg", 
				
				"/group/Resource/Image/innovate_banner.jpg", 
				
				"/group/Resource/Image/pic_c_rlzy_banner.jpg", 
				
				"/group/Resource/Image/pic_c_shxt_banner.jpg",
				"/group/Resource/Image/pic_c_tzzgx_banner.jpg",
				
				//头条图片
				"/group/Resource/Image/pictop.jpg"

    			    			); 
    for(var arr = 0; arr<arryImg.length;arr++){
 		 var strImg = arryImg[arr];
         var lastIndex = strImg.lastIndexOf("_"); 
	     var isBig5 = strImg.substr(lastIndex,5);
	    
	      if(isBig5 != "_big5"){
	     
	    		//第一步：将字符串分为三部分，第一部分找到最后一个”/“进行
	    		var  arry1 = strImg.split("/");//字符串以某个字符为分隔成为数组
	    			var len= arry1.length;//获取数组长度
	    			var bigimg1 = "";
	    			for(var i=0;i<len-1;i++){
	    				bigimg1 =bigimg1+ arry1[i]+"/" ;
	    		
	    			}
	    			var temp1 = arry1[len-1].toString();
	    			var arry2 = temp1.split(".");
	    			var temp2 = arry2[0].toString();
	    			var bigimg2 = temp2+"_big5."+arry2[1].toString();
	    			var bigimg = bigimg1 + bigimg2;
					jq("[src='"+strImg+"']").attr("src",bigimg);
	    				
	    	}	    			
    }
 }
	
/*简繁体图片切换结束*/		

//当新闻摘要为空时隐藏
		if(jq(".abstract").text() == ""){
			jq(".abstract").hide();
		}

 //通栏幻灯
    var index_banner = 0;//数字索引
    var len_banner = jq(".bus_top_ul li").length;//图片数量
    var imgTimer_banner = null;//时间间隔
    var tab_banner=jq(".bus_top ol li");
    var content_banner=jq(".bus_top_ul li");
    jq(".bus_top ol li").click(function () {
        index_banner = jq(".bus_top ol li").index(this);
        //背景图圆点更改

		showContent(tab_banner,content_banner,index_banner);

    }).eq(0).click();

    jq(".bus_top").hover(function () {
        if (imgTimer_banner) {
            clearInterval(imgTimer_banner);
        }
    }, function () {
        imgTimer_banner = setInterval(function () {
        showContent(tab_banner,content_banner,index_banner);
             index_banner++;
            if (index_banner == len_banner) { index_banner = 0; }
        }, 4000);
    }).trigger("mouseleave");






//新闻幻灯
    var index = 0;
    var len = jq(".news_list ol li").length;
    var imgTimer = null;//时间间隔
    var tab_news=jq(".news_list ol li");
    var content_news=jq(".news_list ul li");
    jq(".news_list ol li").click(function () {
        index = jq(".news_list ol li").index(this);
        
			showContent(tab_news,content_news,index);    
   
 }).eq(0).click();

    //划入停止动画 ，划出开始动画
    jq(".news_list").hover(function () {
        if (imgTimer) {
            clearInterval(imgTimer);
        }
    }, function () {
        imgTimer = setInterval(function () {

			showContent(tab_news,content_news,index);
			
            index++;
            if (index == len) { index = 0; }
        }, 3000);
    }).trigger("mouseleave");



//新闻切换卡
    var index_newstext = 0;
    var tab_newstext=jq(".bus_middle ul li");
    var content_newstext=jq(".jb_ul_content>div");
    jq(".bus_middle ul li").click(function () {
        index_newstext = jq(".bus_middle ul li").index(this);
        showContent(tab_newstext,content_newstext,index_newstext);
        
        
    }).eq(0).click();



/*首页图片滑动*/

     var len_pic  = jq(".bus_pic_middle ul li").length;
	 var index_pic = 0;
	 var picHeight = jq(".bus_pic_middle ul li").height()+20;
	 var num_pic = parseInt(jq(".bus_pic_middle").height()/100);//取整，舍弃小数部分
	 //往上按钮
 	jq(".bus_pic_top").click(function () {
		if(index_pic!=0){	index_pic--;
		jq(".bus_pic_middle ul").stop(true,false).animate({top : -picHeight*index_pic},700);
}
    });
    //往下按钮
    jq(".bus_pic_bottom").click(function () {
    	if(index_pic!=(len_pic-num_pic)){index_pic++;
		jq(".bus_pic_middle ul").stop(true,false).animate({top : -picHeight*index_pic},700);
			}
    });
});




function showContent(tab,content,index){

            jq(tab).eq(index).addClass("active").siblings().removeClass("active");
            jq(content).eq(index).stop(true, true).fadeIn(500).siblings().hide();

};

jq(function () {
  jq("#top_link_search_btn").click(function () {
  var input_value=encodeURIComponent(jq("input[id='top_link_search_txt']").val());
  var c_adress= "http://apps.sinopec.com/search/searchresults.aspx?s=group&l=cn&k="+input_value;
      if(input_value==""){
      alert("请输入搜索关键词");
      }else{
      	window.open(c_adress);
  	  }
 });
 

   
//产品搜索
 jq("#btn_search").click(function () {
  var input_value=encodeURIComponent(jq("input[id='btn_search_text']").val());
  var c_adress= "http://apps.sinopec.com/search/searchresults.aspx?s=group&k=%E4%BA%A7%E5%93%81"+" "+input_value;
      if(input_value==""){
      alert("请输入搜索关键词");
      } else{
      	window.open(c_adress);
  	  }
 });
 
 //产品列表
 jq("#service_0").bind('mouseover',function(){jq("#service_0").addClass("on");jq("#service_1").removeClass("on");jq("#service_2").removeClass("on");});
 jq("#service_1").bind('mouseover',function(){jq("#service_1").addClass("on");jq("#service_0").removeClass("on");jq("#service_2").removeClass("on");});
 jq("#service_2").bind('mouseover',function(){jq("#service_2").addClass("on");jq("#service_0").removeClass("on");jq("#service_1").removeClass("on");});
       
  });
  
  
  
var headline = function(){
	jq(".ttxw_img a").eq(0).hide().siblings().show();
};
