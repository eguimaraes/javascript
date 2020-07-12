import { tabela } from "./model/cursos";

tabela.lerDados();

let i: any;
let timerId=setInterval(
        function() {
        i = JSON.stringify(tabela.dados());
        if (i !== undefined) {
            console.log(i);
            console.log('finalizado');
            clearInterval(timerId)
        } else { console.log("aguardando") }
        }
    ,1000)


