               
 function getlocal(){
      var province = $('#country').val();
      window.location = base_url + 'home/getsessionlocal/'+province;
   };
   
   
                
$(function(){
	$('.thumimg').click(function(){
			var img = $(this).attr('src');
			$('#dimg').attr('src',img);
		});
	
    // them moi san pham
     $('.addcart').click(function (){
        
        var tmp = $(this).attr('href');
        var txt = tmp.split('|');
        // var size = $('input[name="chonsize"]:checked').val();
         var soluong = $('#soluong').val();
        // var mau = $('input[name="chonmau"]:checked').val();
         //var mau = document.dathang123.chonmau.checked;
         //var hinhthuc = $('#chonhinhthuc').val();
         

		  var oParam = new Object();
		  oParam.id = txt[0];
		  		//alert(oParam.id);
		  //oParam.size = size;
          oParam.number = soluong;
         // oParam.mau = mau;
          //oParam.hinhthuc = hinhthuc;
          
		        //alert(oParam.type);
				$.post(base_url + 'home/addcart/', oParam, function(data){
				alert(data.message);
                if(data.message=='Thêm vào giỏ hàng thành công'){
                   window.location.href = base_url+'cart.html';  
                }
                //window.location.href = base_url+ 'gio-hang.html';
			},'json');
			return false;
	  });
    
	 $('.total').click(function (){
				var tmp = $(this).attr('rel');
				//alert(tmp);
				window.location.href = base_url + 'home/addtotal/'+ tmp;
				//window.location.href = window.location.href;
					return true;
			  });
		
 /*  $('#total').click(function(){
        var oParam = new Object();
            var id = $(this).attr('rel');
			alert(id);
            $.ajax({
                url:base_url + 'home/addtotal/'+ id,
                type:"POST",
                data:oParam,
                beforeSend:function(xhr){
                    showloading();
                },
                timeout:10000,
                success:function(response,status){
                    hideloading();
                    window.location.href = window.location.href;
                    }
                });  
        return false;
    });*/
		
				  
        $('.cqtt').keyup(function (key , val)
    	 {
    		 var qtt = parseInt($(this).val());
    		 var tmp = $(this).attr('rel').split('-');
    		 var price = parseInt(tmp[0]);
    		 var id = parseInt(tmp[1]);
			 var sale_price = parseInt(tmp[2]);
    		 var sub = (qtt*price);
             $('#sub'+id).html(addCommas(sub));
    		 $('#sub'+id).attr('rel' , sub);
    		 totalprice(sale_price);
    
    	 });
        
})
function remove_cart(id)
{
	/*var total = parseInt($('#cartstotal').attr('rel')) - parseInt($('#sub'+id).attr('rel'));
	$('#cartstotal').html(addCommas(total));
	$('#cartstotal').attr('rel',total);
	$('#tr'+id).remove();*/
	var id = parseInt(id);  
	window.location.href =  base_url + 'home/remove/' + id; 
	
}

function totalprice(sale_price)
{
	var total = 0;
	$('.subtotal').each(function (key,val){
		total = (total + parseInt($(this).attr('rel'))) ;
	});
	total = total - sale_price;
	$('#cartstotal').html(addCommas(total));
	$('#cartstotal').attr('rel',total);
}

function addCommas(str) {
    var amount = new String(str);
    amount = amount.split("").reverse();

    var output = "";
    for ( var i = 0; i <= amount.length-1; i++ ){
        output = amount[i] + output;
        if ((i+1) % 3 == 0 && (amount.length-1) !== i)output = '.' + output;
    }
    return output;
}

function checkaddcart(){



    if($('#customer_name').val() == '')
    {
        alert('Họ tên không được để trống.');
        $('#customer_name').focus();
        return false;
    }
    if($('#customer_phone').val() == '')
    {
        alert('Điện thoại không được để trống.');
        $('#customer_phone').focus();
        return false;
    }
    if($('#customer_email').val() == '')
    {
        alert('Email không được để trống.');
        $('#customer_email').focus();
        return false;
    }
	
	 if($('#receive_name').val() == '')
    {
        alert('Họ tên người nhận không được để trống.');
        $('#receive_name').focus();
        return false;
    }
	
	 if($('#receive_address').val() == '')
    {
        alert('Số nhà, đường không được để trống.');
        $('#receive_address').focus();
        return false;
    }
    if($('#receive_huyen').val() == '')
    {
        alert('Phường/xã - Quận/huyện được để trống.');
        $('#receive_huyen').focus();
        return false;
    }

    if($('#receive_city').val() == '')
    {
        alert('Thành phố không được để trống.');
        $('#receive_city').focus();
        return false;
    }
    
    return true;
 }

 //tinh thanh

   

  
function openPopupWindow(openid) {
 
 $('#apilogin').html('Đang đăng nhập');
  var w = window.open(base_url+'public/login/index.php?login='+encodeURIComponent(openid), 'openid_popup', 'width=450,height=500,location=1,status=1,resizable=yes');

  var coords = getCenteredCoords(450,500);
  w.moveTo(coords[0],coords[1]);
}
function openYahooWindow() {
  openPopupWindow('https://me.yahoo.com');
}

function openGoogleWindow() {
  openPopupWindow('https://www.google.com/accounts/o8/id');
}
function isValidEmail(email){
	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;  
	   return emailPattern.test(email);  
	}

jQuery(document).ready(function(){
    
    $('.nologin').click(function(){
       alert('Bạn phải đăng nhập mới sử dụng được chức năng này.');
       return false; 
    });
    // dang ky nhan thong tin moi

    $('#logout').click(function(){
        var oParam = new Object();
            var url = $(this).attr('href');
            jQuery.ajax({
                url:url,
                type:"POST",
                data:oParam,
                beforeSend:function(xhr){
                    showloading();
                },
                timeout:10000,
                success:function(response,status){
                    hideloading();
                    window.location.href = window.location.href;
                    }
                });  
        return false;
    });
    // hien thi hop ca nhan
    $('#show-info').mousemove(function(){	       
		  $("#infodangnhap").stop(true,true).slideDown().show('slow');
          $("#infodangnhap").focus();
	});
    $("#infodangnhap").hover(function(){        
      //  $(this).stop(true,true).show();
   },function(){        
        $(this).stop(true,true).hide();
   });
   
    
    
// dang nhap
       jQuery('#login').submit(function (){
         var username = jQuery('#username').val();
         var password = jQuery('#password').val();
         if(username == 'Tên đăng nhập' || username == '')
         {
            alert('Bạn chưa nhập vào tên đăng nhập');
            jQuery('#username').focus();
            return false;
         }
         if( password == '')
         {
            alert('Bạn chưa nhập vào mật khẩu');
            jQuery('#password').focus();
            return false;
         }
            var oParam = new Object();
            var url = base_url + 'user/login';
            oParam.username = username;
            oParam.pass = password;
            jQuery.ajax({
                url:url,
                type:"POST",
                data:oParam,
                beforeSend:function(xhr){
                   $('input[type=submit]').val('Loadding');
                },
                timeout:10000,
                success:function(response,status){
                     $('input[type=submit]').val('Login');
                    switch(response){
                        case"NOT_ACTIVATE":
                            alert("Tài khoản chưa được kích hoạt.Bạn hãy kiểm tra email để kích hoạt tài khoản ");
                        break;
                        case"SUCSESS":
                            window.location = base_url + 'home/cart/'; 
                            break;
                        case"UNSUCSESS": alert('Tên đăng nhập hoặc mật khẩu không đúng.');
                        break;
                            default: alert(response);
                        break;
                    }
                    
                }
            });  
         return false;
       });
});
function share_facebook()
{
	u=location.href;t=document.title;
	window.open("http://www.facebook.com/share.php?u="+encodeURIComponent(u)+"&t="+encodeURIComponent(t))
}