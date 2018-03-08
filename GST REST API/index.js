'use strict';

const Hapi=require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
// joi for field validation
const Joi = require('joi');
const Pack = require('./package');

// Create a server with a host and port
const server=Hapi.server({
    host:'localhost',
    port:8000
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
    path:'/hello',
    handler:function(request,h) {

        return'hello world';
    }
});
server.route(
    {
    method:'GET',
    path:'/product/{id}',
    config: {
        handler: function(request,reply){
            console.log(request.params);
            return("you reached server")
        },
        description: 'product gst',
        notes: 'Returns a product description',
        tags: ['api'],
        validate: {
            params: {
                username: Joi.number()
                        .required()
                        .description('product gstY'),
            }
        }
    },
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