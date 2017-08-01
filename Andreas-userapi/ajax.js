$.ajax({
   url : userURL,
   success:function(data){
       var name = data.results[0];
       var userFirstname = name.name.first;
       $("body").append("<h1>This persons first name is " + userFirstname + "</h1>");
   }
});