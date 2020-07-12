import * as ORM from "sequelize"

import {
    Sequelize,
    Model,
    ModelDefined,
    DataTypes,
    HasManyGetAssociationsMixin,
    HasManyAddAssociationMixin,
    HasManyHasAssociationMixin,
    Association,
    HasManyCountAssociationsMixin,
    HasManyCreateAssociationMixin,
    Optional,
} from "sequelize";
import sequelize from "sequelize";
import { any } from "sequelize/types/lib/operators";

var resultados: any;
var DadosStatus: boolean = false;

const modelo = {
    nome: 'Courses',
    atributos: {
        description: ORM.STRING,
        url: ORM.STRING,
        longDescription: ORM.STRING,
        iconUrl: ORM.STRING,
        courseListIcon: ORM.STRING,
        seqNo: ORM.INTEGER,
        comingSoon: ORM.BOOLEAN,
        isNew: ORM.BOOLEAN,
        isOngoing: ORM.BOOLEAN
    }
}

const conexaoConfig = {
    nomeBancoDados: 'complete-typescript-course',
    usuario: 'integracao',
    senha: '',
    atributos: {
        host: 'localhost',
        dialect: 'integracao',
        define: {
            timestamps: false
        }
    }


};


const dialetos = { "postgres": "postgres" };

const conOpcoes = {
    host: 'localhost',
    dialect: dialetos.postgres,
    define: {
        timestamps: false
    }
}

const getSequelize = (conexaoConfig: any) => {
    let sequelize = new Sequelize(conexaoConfig.nomeBancoDados, conexaoConfig.usuario, conexaoConfig.senha, {
        host: "localhost",
        dialect: "postgres",
        define: {
            timestamps: false
        }
    })

    return sequelize
};


function setResultados(results: any) {

    resultados = results;

    return resultados


};

const sequelizeConect = getSequelize(conexaoConfig);




const getDados = async (sequelize: ORM.Sequelize, nomeTabela: string, atributos: any ) => {
    let res: any;
    
       sequelize.define(nomeTabela, atributos).findAll()
           .then((results) => {
              
               res = results;
               setResultados(res);
               DadosStatus = true;
                              
              
                          })
           .finally(() => {
               
               DadosStatus = true;
             
              })
   
   
}



async function getDadosJs() {

    getDados(sequelizeConect, modelo.nome, modelo.atributos)
        
};

function getresultados() { return resultados } 



export let tabela = {
    lerDados: getDadosJs,
    dados: getresultados
    
    
};


