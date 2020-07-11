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


const conexao = {
    nome:'complete-typescript-course',
    usuario:'integracao',
    Senha: 'senha',
    atributos:{
        host: 'localhost',
        dialect: 'integracao',
        define: {
            timestamps: false
        }
    }


}


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

};

const sequelize = new Sequelize(conexao.nome, conexao.usuario, conexao.Senha, {
    host: 'localhost',
    dialect: 'postgres',
    define: {
        timestamps: false
    }
});


    
console.log(sequelize.define(modelo.nome, modelo.atributos).findAll());
