  
  
 //    AJAX加载数据
  var  str=location.href;
//	      "http://127.0.0.1/wodxiangmu/FSshopping/html/xiangqing.html?id=01"
	      var  arr=str.split("?")[1];
	      var  id=arr.split("=")[1];
	      $.ajax({
	      	type:"get",
	      	url:"http://127.0.0.1/wodxiangmu/FSshopping/json/data.json",
	      	success:function(res){
	      		var  html=""; 
	      		  for(var i in res.list){
	      		  	    if(id==res.list[i].id){
	      		  	    	  var ch=res.list[i];
	      		  	    html=`<div class="mian-top">
			<div class="nav1">
				 <ul class="aa">
				 	<li><a href="#">首页 </a></li>
				 	<li>&nbsp;>&nbsp;</li>
				 	<li><a href="#">所有类别  </a></li>
				 	<li>&nbsp;>&nbsp;</li>
				 	<li><a href="#">家居生活</a></li>
				 	<li>&nbsp;>&nbsp;</li>
				 	<li><a href="#">家居用品</a></li>
				 	<li>&nbsp;>&nbsp;</li>
				 	<li><a href="#">${ch.name}</a></li>
				 </ul>
			</div>
		</div>
		<div class="mian-body">
		<!--左图--><div class="info-left" >
			<!--左图小图--><div class="left-xiao" id="bottom">
				               <img src="../images-tubiao/xbSmallup.gif" style="width: 94px;" id="bottom-top"/>
				               <ul id="xiaotu">
				               	<li><img src="../images-index/${ch.src}"/></li>
				               	
				               	</ul>
				            
			             </div>
			             <div class="left-big" id="small">
			             	 <img src="../images-index/${ch.src}" />
			             	 
			             	
    	                     <div id="mask"></div>  
			             </div>
			             <div class="fangda" id="big">
			             	 <img src="../images-index/${ch.src}"  class="bigImage"/>
			             	 
			             </div>
			             <div class="left-end">
			             	 <dl style="float:left;">
                            <dt style="margin-top: 15px;">
                               
                                <div id="ckepop" style="float: left;">
                                    <span style="width: 50px; height: 18px;">分享到：</span> 
                                    <a><span style="background: url(../images-tubiao/jiathis_ico.png) no-repeat left;background-position: 0px -144px;"></span></a>
                                    <a><span style="background: url(../images-tubiao/jiathis_ico.png) no-repeat left;background-position: 0px -96px;"></span></a>
                                    <a><span style="background: url(../images-tubiao/jiathis_ico.png) no-repeat left;background-position: 0px -160px;"></span></a>
                                    <a><span style="background: url(../images-tubiao/jiathis_ico.png) no-repeat left;background-position: 0px -176px;"></span></a>
                                    <a id="jiajia"></a>
                                    <a><span style="background: url(../images-tubiao/counter.gif) no-repeat ;background-position: 0px -64px; width: 36px;">1</span></a>
                                </div>
                                <p style="float:right; margin-left: 110px;">
	                                <a href="#" id="">
	                                  <img src="../images-tubiao/addFavorite.png">
	                                </a>
                               </p>
                              
                            </dt>
                        </dl>
			             </div>
			            </div>
				
			<!--中间详情--><div class="info-center">
				             <h2 style="font-size: 16px;">${ch.name}</h2>
				             <div class="num">
				             	<p>商品货号:${ch.num}</p>
				             </div>
				             <div class="spxq">
					             <div class="price">
					             	 <p>风尚价&nbsp;：<strong>¥${ch.price}</strong></p>
					             </div>
					             <div class="song">
					         <p>促销信息&nbsp;：&nbsp;<span style="border: 1px solid red;background-color: #d91404;color: #fff">买赠&nbsp;</span>&nbsp;<span>&nbsp;${ch.add}</span></p>
					             </div>
				             </div>
				             <div class="id">
				             	<div class="id-left">送至：</div>
				             	<div class="id-right">
				             		 <div class="id-content">江西省 南昌市 东湖区</div>

				             	</div>
				             </div>
				             <div class="add">
				                   <div><a id="jian" >- </a><input type="text" value="1" id="text" /><a id="jia">+</a></div>	
				             	   <div style="float: left; margin: 10px;">库存状况:&nbsp;<span>有库存</span></div>
				             </div>
				             <div class="btnlist">
				             	<a id="dingguo" style="background-color: #2ca530; width: 80px;">立即购买</a>
				             	<span data-id=${ch.id}  data-name=${ch.name} data-src=${ch.src} data-price=${ch.price}   style="display:none"></span>
				             	<a style="background-color: #fc4c65;width: 80px; "id="buy" >加入购物车</a>
				             </div>
			            </div> 
			<!--右边详情--><div class="info-right">
				                  <div class="weima">
				                  	<center><p style="margin-bottom: 5px;">手机扫码订购</p></center>
				                  	<img src="../images-tubiao/ShowTDBarcodeImage.png" />
				                  	<center><p style="font-size: 12px; margin-top: 5px;">银联支付/支付宝/微信支付</p></center>
				                  </div>
				                  <div class="tv">
				                  	<a href="#">查看往期电视商品</a>
				                  </div>
			            </div>
			       
		          
			
		</div>`
	      		  	    	  
	      		    	    	  
	      		  	  }
	      		  }	    	  
	      		  	    	  
	      		   $("#main").html(html);
	      		    
	      		    
	      		     //放大镜效果  
	   
    $("#bottom li").bind("mouseenter",function(){
		var index = $(this).index();
		$("#small img").eq(index).show().siblings("img").hide();
						$("#big img").eq(index).show().siblings("img").hide();
						
					})
					$("#small").on({
						mouseenter : function(){
							$("#big").show();
							
							$("#mask").show();
						},
						mouseleave : function(){
							$("#big").hide();
							
							$("#mask").hide();
						},
						mousemove : function(e){
							var e = e || event;
							var x = e.pageX - $("#small").offset().left - $("#mask").width()/2;
							var y = e.pageY - $("#small").offset().top - $("#mask").height()/2;
							var maxL = $("#small").width() - $("#mask").width();
							var maxT = $("#small").height() - $("#mask").height();
							x =Math.min( maxL , Math.max( 0 ,x ) ); 
							y =Math.min( maxT , Math.max( 0 ,y ) ); 
							$("#mask").css({
								left : x , 
								top : y,
								backgroundPositionX : -x,
								backgroundPositionY : -y
			})
			
			//大图宽度/小图宽度 = 大图left/ x
			var bigImgX = x*$("#big img").eq(0).width()/$("#small img").eq(0).width();
			var bigImgY = y*$("#big img").eq(0).height()/$("#small img").eq(0).height();
			
			$(".bigImage").css({
				left : -bigImgX,
				top : -bigImgY
			})
		}
	})
	       //点击切换上下图片
	       $("#bottom-top").click(function(){
	   
	       	       $("#xiaotu").animate({"margin-top":-90},500,function(){
	       	       	        $("#xiaotu").css("margin-top",0)
	       	       	                    .find("li:first")
	       	       	                    .appendTo($("#xiaotu"))
	       	       })
	       })
	     //  点击+- 数量加减
	             var num=1;
	       $("#jia").click(function(){
	       	     
	       	     num++;
	       	     $("#text").val(num);
	       	     
	       })
	       $("#jian").click(function(){
	       	       if(num<2){
	       	       	   $("#text").val(1)
	       	       	   return
	       	       }
	       	        num--
	       	       	
	       	       $("#text").val(num) ;
	       	     
	       })
	        
	        // 立即购买需要数据存入     
	     $("#dingguo").click(function(){
	     	   var num1=Number(num);   
	     	      
	     	  var flag= true;//可以向数组中添加数据
	     	  var  arr=[];
	     	  var _json={
	     	  	 id:$(this).next().data("id"),
			     name:$(this).next().data("name"),
			     src:$(this).next().data("src"),
			     price:$(this).next().data("price"),
			     count:num1
	     	  }
	     	 
            var cookieInfo=getCookie("list")
	     	    if(cookieInfo.length!=0){
	     	    	   	arr=cookieInfo;
	     	    	   //点击相同商品时，需要做商品数量的累加    用当前点击的商品编号id   和  取出来的cookie的 数据中商品id做比较 发现有相等的，count++
									for(var i in arr){
										if(_json.id == arr[i].id && _json.name == arr[i].name){
											flag = false;
											  arr[i].count+=num1;
											  break;
											
										
										}
									}
	     	    }	   
	     	    	
	     	    	if(flag){
	     	    		
	     	    	  arr.push(_json);
	     	    }
	     	    	   
	     	   
	     	  setCookie("list",JSON.stringify(arr));
	     	     location.href="dingdan.html";  
	     	
	    })  	  
	     	  

	   
	     	      
	     	      
	     	      
	     	      
	    
	      //点击加入购物车   数据存入COOKIE中		    
	      		    
	      		    
	     $("#buy").click(function(){
	     	 var num1=Number(num); 
	     	  var flag = true;//可以向数组中添加数据
	     	  var  arr=[];
	     	  var _json={
	     	  	 id:$(this).prev().data("id"),
			     name:$(this).prev().data("name"),
			     src:$(this).prev().data("src"),
			     price:$(this).prev().data("price"),
			     count:num1
	     	  }
	     	 
             var cookieInfo=getCookie("list")
	     	    if(cookieInfo.length!=0){
	     	    	   arr=cookieInfo;
	     	    	   //点击相同商品时，需要做商品数量的累加    用当前点击的商品编号id   和  取出来的cookie的 数据中商品id做比较 发现有相等的，count++
									for(var i in arr){
										if(_json.id == arr[i].id && _json.name == arr[i].name){
											 arr[i].count+=num1;
											flag = false;
											break;
										}
									}
	     	    }	   
	     	    	
	     	    	if(flag){
	     	    		
	     	    	  arr.push(_json);
	     	    }
	     	    	   
	     	   
	     	  setCookie("list",JSON.stringify(arr));
	     	       
	     
	     	  
	     	  
	         	  var  f=confirm("是否继续购买?确定--继续购买，取消---去购物车结算");
	         	  if( !f ){
											location.href = "gouwuche.html";
								}else{
									
	     	         location.href="index.html";
								}
									

	     })
	        		     
	      		    
	   }
	      	
	});
	
	   
	   
	   	 
	