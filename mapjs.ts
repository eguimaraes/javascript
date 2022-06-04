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
