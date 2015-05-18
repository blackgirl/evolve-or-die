$(document).ready(function() {
    $.ajax({
       url: "json/people.json",
           //force to handle it as text
       dataType: "text",
            success: function (dataTest) {
                //data downloaded so we call parseJSON function 
                //and pass downloaded data
                var json = $.parseJSON(dataTest);
                //now json variable contains data in json format
                //let's display a few items
                $.each(json, function (i, jsonObjectList) {
                    console.log(i, json[i]);
                    for(var obj in jsonObjectList) {
                        console.log(jsonObjectList[obj]);
                    }
                 });


             }
  });