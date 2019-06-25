login_details=[];
function getToken() {

var url = "http://yourServerAddress/api/2.0/auth/signin";
var params = "<tsRequest><credentials name='Username' password='UserPassword' ><site contentUrl='' /></credentials></tsRequest>";

    return zuo = new Promise(function(resolve,reject){

            var xhr = new XMLHttpRequest(); 
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.withCredentials = true;
            xhr.onload= function(){ 
                if (this.status === 200) {
                    var parsed_xml = JSON.parse(JSON.stringify(x2js.xml_str2json(xhr.responseText)))
                    login_details.push(parsed_xml.tsResponse.credentials._token);                   login_details.push(parsed_xml.tsResponse.credentials.site._id);
                    resolve(login_details);
                }
            }
            xhr.onerror=reject;
        xhr.send();

        })


}

function getWorkbooks(){

var url = "http://serveraddress//api/2.3/sites/"+login_details[1]+"/workbooks?pageSize=1000";

    return zuo = new Promise(function(resolve,reject){

            var xhr = new XMLHttpRequest(); 
            xhr.open("GET", url, true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("X-Tableau-Auth",login_details[0]);
            xhr.onload= function(){ 
                if (this.status === 200) {

                    var workbooks = JSON.parse(JSON.stringify(x2js.xml_str2json(xhr.responseText)))

                    for (var f=0;f<workbooks.tsResponse.workbooks.workbook.length;f++){
                        if(workbooks.tsResponse.workbooks.workbook[f].project._name=="Default"){
                            workbooks_list.push(workbooks.tsResponse.workbooks.workbook[f]._id)
                        }
                       resolve();
                    }

                }
            }
            xhr.onerror= function(){ 


                    console.log(xhr.responseText);              
            }

        xhr.send();

        })


}

getToken()
    .then(function(login_details){
        console.log(login_details[0]+"/"+login_details[1]);
    })
    .then(function(){
        getWorkbooks();
    })
