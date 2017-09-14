

// 页面加载；
 $(function(){
	       	   var  arr=getCookie("list");
	       	   var  str="";
	       	   for(var i in arr){
	       	   	   var  ch=arr[i];
	       	   	   str+=` <div class="table-c">
				 	
				 	 <p style="width: 340px;">
				 	 	<img src="../images-index/${ch.src}" />
					 	 	<span>${ch.name}</span>
				 	 </p>
				 	 <p style="width: 97px;">324321</p>
				 	 <p style="width: 85px;">${ch.price}</p>
				 	 <p style="width: 95px;">是</p>
				 	 <p style="width: 98px;">${ch.count}</p>
				 	 <p style="width: 95px;" >${ch.price*ch.count}</p>
				 	
				      </div> `
	       	   }
	       	     $("#add-shoplist").html(str);
	       	     
	       	    // 点击关闭  改变DIS的高度实现隐藏 
	       	    $("#closed").click(function(){
	       	    	
	       	    	    $("#dis").slideUp()
	       	    })
	       	     // 点击新增  改变DIS的高度实现隐藏 
	       	     $("#add-a").click(function(){
	       	    	
	       	    	    $("#dis").slideDown()
	       	    })
	       	     
	       	     //点击提交 跳转
	       	     
	       	     $("#complete").click(function(){
	       	     	   alert()
	       	     	    location.href="fukuan.html";
	       	     })
	       	     
	       })
	       