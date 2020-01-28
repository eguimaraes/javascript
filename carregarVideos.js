function carregarVideos(){
              
			    var video=document.getElementById("modeloVideo")
				var videoFrame=document.getElementById("modeloVideoFrame")
				 var videoIMG=document.getElementById("videoIMG")
				
				
			  videoFrame.innerHTML="";
			  var videoInnerStr="";
			  
			  $.ajax({
            
                url: _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('videos')/items/?$filter=ContentTypeId%20eq%20%270x0120D520A80800B8A5E961307D2345BFC6C00E6ACE901C%27",
                method: "GET",
                headers: { "Accept": "application/json; odata=verbose" },
                success: function (data) {
                  try {
				  
                  
				  for (var i=0; i<data.d.results.length; i++){
				  console.log(data.d.results[i])
				  video.href=data.d.results[i].AlternateThumbnailUrl.Url.replace(".png","")
				  videoIMG.src=data.d.results[i].AlternateThumbnailUrl.Url
            
                      console.log(data.d.results[i].AlternateThumbnailUrl.Url)
                   }
            
                  } catch (e) { console.log("Nenhum video carregado") }
                },
                error: function (error) {
                  console.log("Error: " + JSON.stringify(error));
                }
              });


}

$(document).ready(function(){carregarVideos()}
