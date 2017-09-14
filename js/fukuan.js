



             $(function(){
    	
    	        var arr=getCookie("list");
    	        var my=0;  
    	         for(var i in arr ){
    	         	  var ch=arr[i];
    	         	  my+=(ch.price*ch.count);
    	         }
    	      $("#my").html(my)
    	
    	
    })
