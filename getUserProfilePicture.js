 function getProfImg(){
    var siteurl = _spPageContextInfo.webAbsoluteUrl;
    var retorno="";
   
      $.ajax({
        
                   url: siteurl + "/_api/web/lists/getbytitle('Projects')/items(3)",
                   method: "GET",
                   headers: { "Accept": "application/json; odata=verbose" },
                   success: function (data) {
                        if (d.PictureUrl.length > 0 ) {
                             retorno=d.PictureUrl
                        }        
                  },
                  error: function (error) {
                      alert("Error: "+ JSON.stringify(error));
                 }
          });
   
   
   
   return=retorno
   
    }
