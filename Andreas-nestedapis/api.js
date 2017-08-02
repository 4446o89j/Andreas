var nameURL="http://randomuser.me/api/";
var countryURL="https://restcountries.eu/rest/v2/alpha?codes=nl";

$.ajax({
   url:countryURL,
   success:function(data){
        var name=data.results[0];
        var countryName=name.name.first;
       $("body").append("<h1>The name of the country is " + countryName + "</h1>");
   }
});

// $.ajax({
//    url : userURL,
//    success:function(data){
//        var name = data.results[0];
//        var userFirstname = name.name.first;
//        $("body").append("<h1>This persons first name is " + userFirstname + "</h1>");
//    }
// });

