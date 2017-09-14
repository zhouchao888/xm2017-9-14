	   //mian-nav 的轮播图
         	      	          
	   var timer = setInterval(autoPlay,2000);
	   var index=0;
	   function autoPlay(){
	   	   index++
		if(index == $("#mian-nav ul li").size()){
			index = 0;
		  }	
		$("#ollist li").eq( index ).addClass("current").siblings().removeClass("current");
		$(".nav-img li").eq(index).fadeIn(1500).siblings().fadeOut(1500);
	   }
	   
	    $("#mian-nav").mousemove(function(){
	    	       clearInterval(timer);
	    	  $("#ollist li").click(function(){
	    	  
	    	  	 $(".nav-img li").eq($(this).index()).fadeIn(1000).siblings().fadeOut(1000);
	    	  	 $(this).addClass("current").siblings().removeClass("current");
	    	  })
	    })
	    
	    $("#mian-nav").mouseout(function(){
	    	     timer = setInterval(autoPlay,2000);
	    })
	    
	    //结束；
	    
	    //热卖轮播；
	    
	    var  timer1=setInterval(lunbo,2000);
	    var  index1=0;
	    function  lunbo(){
	    	 index1++
	      if(index1 == $("#remai li").size()){
			index1 = 0;
		  }	
		  $("#remai-btn li").eq( index1 ).addClass("current").siblings().removeClass("current");
		  $("#remai").animate({"margin-left":-400},1500,function(){
		  	          $("#remai").css("margin-left",0)
		  	                     .find("li:first")
		  	                     .appendTo($("#remai"))
		  })
		 }  
	     
	      $("#remai").mouseover(function(){
	    	       clearInterval(timer1);
	    	       $("#remai-btn li").click(function(){
	    	       	 clearInterval(timer1);
	      	      
	      	       $("#remai li").eq($(this).index()).show().siblings().hide();
	      	      
	      	       $(this).addClass("current").siblings().removeClass("current");
	               })
	    	      
	      })
	    
	    $("#remai").mouseout(function(){
	    	     timer1 = setInterval(lunbo,2000);
	    	     $("#remai li").show()
	    	     
	      })
	    
	     
	    //图片鼠标移入移除效果；
	        $("#remai-right li").mouseenter(function(){
	      	    $(this).css("box-shadow","0 -5px 10px #e6e6e6")
	      })
	      
	       $("#remai-right li").mouseleave(function(){
	      	    $(this).css("box-shadow","")
	      })
	    
	    
	      $(".but li").mouseenter(function(){
	      	    $(this).css("box-shadow","0 -5px 10px #e6e6e6")
	      })
	      
	       $(".but li").mouseleave(function(){
	      	    $(this).css("box-shadow","")
	      })
	       
	       
	       
	       //right 鼠标移入效果
          $(".title-right a").mousemove(function(){
          	      $(this).addClass("sel");
          	      $(this).siblings().removeClass("sel");
          	      $(".bd").eq($(this).index()).css("display", "block");
          	      $(".bd").eq($(this).index()).siblings(".bd").css("display","none")
          })
		
		   $(".title-right1  a").mousemove(function(){
          	      $(this).addClass("sel");
          	      $(this).siblings().removeClass("sel");
          	      $(".banner-style1 .bd").eq($(this).index()).css("display", "block");
          	      $(".banner-style1 .bd").eq($(this).index()).siblings(".bd").css("display","none")
          })
		   
		    $(".title-right2 a").mousemove(function(){
          	      $(this).addClass("sel");
          	      $(this).siblings().removeClass("sel");
          	      $(".banner-style2 .bd").eq($(this).index()).css("display", "block");
          	      $(".banner-style2 .bd").eq($(this).index()).siblings(".bd").css("display","none")
          })
		    
		     $(".title-right3 a").mousemove(function(){
          	      $(this).addClass("sel");
          	      $(this).siblings().removeClass("sel");
          	      $(".banner-style3 .bd").eq($(this).index()).css("display", "block");
          	      $(".banner-style3 .bd").eq($(this).index()).siblings(".bd").css("display","none")
          })
		     
		      $(".title-right4 a").mousemove(function(){
          	      $(this).addClass("sel");
          	      $(this).siblings().removeClass("sel");
          	      $(".banner-style4 .bd").eq($(this).index()).css("display", "block");
          	      $(".banner-style4 .bd").eq($(this).index()).siblings(".bd").css("display","none")
          })
		  
			   $(".title-right5 a").mousemove(function(){
	          	      $(this).addClass("sel");
	          	      $(this).siblings().removeClass("sel");
	          	      $(".banner-style5 .bd").eq($(this).index()).css("display", "block");
	          	      $(".banner-style5 .bd").eq($(this).index()).siblings(".bd").css("display","none")
	          })