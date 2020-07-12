import { cursos } from '../control/exibeCursos';
import { Request, Response, Application } from 'express';
import express = require('express');

let timerId = exibeDados();

let resultado: any;

let i: any;





function aplicacao() {
    var app: Application = express();

    app.use(express.static('.'));


    app.get('/api/courses', function(req, res) {

        res.send(JSON.stringify(resultado));


    });



    app.listen(8090);
}

function exibeDados() {
    
    return setInterval(
        function () {
            i = cursos.get();
            if (i !== undefined) {
                resultado = cursos.get()
                clearInterval(timerId); 
                console.log(resultado)
                setResultado(resultado);
                aplicacao();
                
            }
            else { console.log("aguardando"); }
        },
        1000);


}

function setResultado(res: object) {

    resultado = res;

    console.log(res)

}







 
