function getToken(){
var url = server+ "/vizportal/api/web/v1/generatePublicKey";
var params = "<tsRequest><credentials name='"+username+"' password='"+password+"'><site contentUrl='' /></credentials></tsRequest>";
var json_payload = "{\"method\":\"generatePublicKey\",\"params\":{}}";
  return token = new Promise(function(resolve,reject){
    $.ajax({
        url: server+ '/vizportal/api/web/v1/generatePublicKey',
        type: "POST",
        dataType: "json",
        data: json_payload,
        contentType: "application/json",
        headers: {
          'content-type': "application/json;charset=UTF-8",
          'accept': "application/json, text/plain, */*",
          'cache-control': "no-cache"
          }
        
      }).done(function(data){
          var keyId = data.result.keyId;
          var exponent = data.result.key.e;
          var modulus = data.result.key.n;                
          var BigInteger = forge.jsbn.BigInteger;
          modulus = new forge.jsbn.BigInteger(modulus,16);
          exponent =  new forge.jsbn.BigInteger(exponent, 16);
          var rsa = forge.pki.rsa;
          var publicKey = rsa.setPublicKey(modulus, exponent);
          var pem = forge.pki.publicKeyToPem(publicKey);
          var encrypt = new JSEncrypt();
          encrypt.setPublicKey(pem);
          
          var encrypted_jeencrypt= encrypt.encrypt(password);
          var encrypted_jeencrypt_hex = base64toHEX(encrypted_jeencrypt);
          var login_payload = "{\"method\":\"login\",\"params\":{\"username\":\""+username+"\", \"encryptedPassword\":\""+encrypted_jeencrypt_hex+"\", \"keyId\":\""+keyId+"\"}}"
          
          var url = server +"/vizportal/api/web/v1/login";
            $.ajax({
                url: url,
                type: "POST",
                dataType: "json",
                data: login_payload,
                contentType: "application/json",
                headers: {
                  'content-type': "application/json;charset=UTF-8",
                  'accept': "application/json, text/plain, */*",
                  'cache-control': "no-cache"
                  },
                    success: function(data, textStatus, request){
                      login_details.push(data.result.site.luid);
                  xsrf_token = document.cookie.split("=")[1];
                       resolve();
                 },
                   error: function (request, textStatus, errorThrown) {
                    console.log(request.getAllResponseHeaders());
                   }
              });
          });
  })      
}
