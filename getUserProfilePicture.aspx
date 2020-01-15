<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<%@ Page Language="C#" %>
<%@ Register tagprefix="SharePoint" namespace="Microsoft.SharePoint.WebControls" assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml">

<head runat="server">
<meta name="WebPartPageExpansion" content="full" />
<meta http-equiv="Content-Type" content="text/html; charset=windows-1252" />
<title>Untitled 1</title>
<meta http-equiv="X-UA-Compatible" content="IE=10" />
<SharePoint:CssRegistration Name="default" runat="server"/>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<SharePoint:ScriptLink Name="MicrosoftAjax.js" runat="server" Defer="False" Localizable="false"/>
<SharePoint:ScriptLink Name="SP.core.js" runat="server" Defer="False" Localizable="false"/>
<SharePoint:ScriptLink Name="SP.js" runat="server" Defer="True" Localizable="false"/>



<script>


SP.SOD.executeFunc('sp.js','SP.ClientContext',getProfImg)
        
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
    
    
    
</script>




</head>

<body>

<form id="form1" runat="server">




<div id="profilePic">

<img id="profilePicImg" ></a>


</div>


</form>

</body>

</html>
