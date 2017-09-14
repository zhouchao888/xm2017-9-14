

     //页面加载；
	        $(function(){
	        	  var  arr=getCookie("list");
	        	  var   str="";
	        	  var  str1=""
	        	  console.log(arr)
                  for(var i in arr){
                  	   var  ch=arr[i];
                  	   str+=`<div class="table-c">
					  	 <p style="width: 52px;"><input type="checkbox" class="ck"/> </p>
					 	 <p style="width: 340px;height: 80px;">
					 	 	<img src="../images-index/${ch.src}" />
					 	 	<span>${ch.name}</span>
					 	 </p>
					 	 <p style="width: 97px;">311778</p>
					 	 <p style="width: 85px;">${ch.price}</p>
					 	 <p style="width: 95px;">是</p>
					 	 <p style="width: 98px;">${ch.count}</p>
					 	 <p id="suprice"  style="width: 95px;">${ch.price*ch.count}</p>
					 	 <p style="display: none;" data-id="${ch.id}" data-name="${ch.name}"></p>
					 	 <p style="width: 108px;">
					 	
					 	 	<a class="del">删除</a>
					 	 </p>
					  </div>`
					  
					  
                  }
                  $("#add-shop").html(str);
                             
                 
                 //全选
		           $("#selectAll").click(function(){
						$(".ck").prop("checked", $(this).prop("checked"));
						jiesuan()
						
					})
		           
		           $(".ck").click(function(){
		           	      jiesuan()
		           })
		           
		         //  结算函数  
		           
		           function jiesuan(){
						var money = 0;
						
						$(".ck:checked").each(function(){
							
						money += parseInt( $(this).parent().parent().find("#suprice").html() )
						})
						
						$("#add-price").html( money );
						
	                    }
		           //删除操作；
		           
		           $(".del").click(function(){
		           	       var  id=$(this).parent().prev().data("id")
		           	       var  name=$(this).parent().prev().data("name")
		           	       for(var i in arr){
		           	       	    if(id==arr[i].id&&name==arr[i].name){
		           	       	    	 arr.splice(i,1);
		           	       	    	 setCookie("list",JSON.stringify(arr));
		           	       	    	 $(this).parent().parent().remove();
		           	       	    	 jiesuan()
		           	       	    }
		           	       }
		           })
		           
		          
	        	  
	        })