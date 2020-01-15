function getProfImg(){
    
    
   
      $.ajax({
        
                   url:  "https://edvaldoguimaraes.sharepoint.com/_api/SP.UserProfiles.PeopleManager/GetMyProperties/PictureUrl",
                   method: "GET",
                   headers: { "Accept": "application/json; odata=verbose" },
                   success: function (data) {
                        if (data.d.PictureUrl.length > 0 ) {
  
imagem=document.getElementById("profilePicImg");
                                                     imagem.src=data.d.PictureUrl;
                                                       
                                                       
                             
                        }        
                  },
                  error: function (error) {
                      alert("Error: "+ JSON.stringify(error));
                 }
          });
   
   
   
   
   
    }
    
