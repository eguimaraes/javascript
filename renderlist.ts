 private _renderList(item: IDado): void {  
    let html: string = '';
    
    let resultadoBusca: any = item.PrimaryQueryResult;
    
    let linhas: any = resultadoBusca.RelevantResults.Table.Rows;

    var infomacao: any = {
      "PreferredName":"",
      "AboutMe":"",
      "PictureURL":"",
      "Aniversario":""


    };

    
    linhas.map(linha => {           

      linha.Cells.map(dadosV => {

        let campos:any = ["PreferredName","AboutMe","PictureURL","RefinableDate00"];

        
        if (campos.includes(dadosV.Key) && dadosV.Value !== null) {
          
      
          switch (dadosV.Key){
            
                        
            case "PictureURL":
              infomacao.PictureURL = dadosV.Value;
              break;
            
              case "PreferredName":
                infomacao.PreferredName = dadosV.Value;
              break;
            
              case "RefinableDate00":
                infomacao.Aniversario = dadosV.Value;
              break;
              case "AboutMe":
                infomacao.AboutMe = dadosV.Value;
              break;
            
            
            

          }

         


          
          




        }
       
       
       ;

      });

      html += `
      <div>
      <img src='${infomacao.PictureURL}'></br>
      <div>Nome: ${infomacao.PreferredName}</div></br>
      <div>Sobre: ${infomacao.AboutMe}</div></br>
      <div>Aniversario: ${infomacao.Aniversario}</div></div></br></br>`

      infomacao.AboutMe= infomacao.PictureURL = infomacao.PreferredName = infomacao.Aniversario = "";


    });
