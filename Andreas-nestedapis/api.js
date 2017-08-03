var countryURL="https://restcountries.eu/rest/v2/alpha?codes=nl";
var userURL="http://randomuser.me/api/";

$.ajax({
   url:countryURL,
   success:function(data){
        var Name=data.results;
        console.log(Name);
        var countryIntial=name.net;
       $("body").append("<h1>The intials of the country is " + countryIntial + "</h1>");
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

