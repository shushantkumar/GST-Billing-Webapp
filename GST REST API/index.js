'use strict';

const Hapi=require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
// joi for field validation
const Joi = require('joi');
const Pack = require('./package');
var mysql = require('mysql'); 
const Relish = require('relish')({});

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "gstbilling"
  });

// Create a server with a host and port
const server=Hapi.server({
    host:'localhost',
    port:8000
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to database!");
});

const options = {
    info: {
            'title': 'GST API Documentation',
            'version': Pack.version,
        }
    };

server.register([
    Inert,
    Vision,
    {
        'register': HapiSwagger,
        'options': options
    }], (err) => {
        console.log(err);

    });
    

// Add the route
server.route(
    {
    method:'GET',
    path:'/productget/{product_code}',
    config:{
        handler: function (request, reply) {
            console.log(request.params);
            let product_code = request.params.product_code;
            let final={
            };

            var sql = "select * from product_details where product_code='"+product_code+"'";
            con.query(sql, function (err, result) {
                if (err) throw err;
                // console.log(result);
                // this.final=result[0];
                return(result);
            }); 

            console.log(something);
            return("something");
        },
        description: 'Get product data',
        notes: 'product Get request',
        tags: ['api'],
        validate: {
            failAction: Relish.failAction,
            params: {
                product_code :Joi.string().required()
            }
        }
    }
});

server.route(
    {
    method:'GET',
    path:'/productget',
    config:{
        handler: function (request, reply) {
            let resp={};
            var sql = "select * from product_details";
            con.query(sql,this, function (err, result) {
                if (err) throw err;
                console.log(result);
                this.resp=result;
                // this.final=result[0];
                // this.final.product_code=result[0].product_code;
                // this.final.product_name=result[0].product_name;
                // this.final.product_price=result[0].product_price;
                // this.final.product_gst=result[0].product_gst;
                // return(result);
                console.log(this.resp);
                
            }); 
            // function just(){
            //     this.final.id=2;
            // };

            console.log(resp);
            return(resp);
        },
        description: 'Get product data',
        notes: 'product Get request',
        tags: ['api'],
        validate: {
            failAction: Relish.failAction,
            // params: {
            //     product_code :Joi.string().required()
            // }
        }   
    }
});

server.route(
    {
    method:'POST',
    path:'/productpost',
    config: {handler: function(request,reply){
        // console.log(request.params); //params for get
        console.log(request.payload);
        let product_code = request.payload.product_code;
        let product_name = request.payload.product_name;
        let product_price = request.payload.product_price;
        let product_gst = request.payload.product_gst;

            var sql = "INSERT INTO product_details (id,product_code,product_name,product_price,product_gst ) VALUES ('','"+product_code+"','"+product_name+"','"+product_price+"','"+product_gst+"')";
            con.query(sql, function (err, result) {
              if (err) throw err;
              console.log("1 record inserted");
            });

        return ({success:true,message: "product data stored"});
    },
        description: 'post product request',
        notes:'post  requ',
        tags:['api'],
        validate:{
            failAction: Relish.failAction,
            payload:{
                product_code: Joi.string().required(),
                product_name: Joi.string().required(),
                product_price: Joi.number().required(),
                product_gst: Joi.number().min(0).max(100)

            }
        }
    }
});



server.route({
    method: 'DELETE',
    path: '/productget/{product_code}',
    handler: function (request, reply) {
    let product_code = request.params.product_code;
    var sql = "DELETE FROM product_details WHERE product_code = '" + product_code +"'";
    con.query(sql,function (err, result, fields) {
       if (err) throw err;
 
       if (result.affectedRows) {
           return(true);
       } else {
           return(false);
       }
    });
    },
    config: {
        validate: {
        params: {
            product_code: Joi.string().required()
        }
        }
    }
});

// Start the server
async function start() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();