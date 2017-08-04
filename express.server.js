const express = require( "express" );
const fs = require( "fs" );
const server = express();
const PORT = process.env.PORT || 4001;

server.get( "/", onHomePage );

function onHomePage( tRequest, tResponse )
{
    onReadFile( 'index.html', tResponse );
}

function onReadFile( tFile, tResponse )
{
    fs.readFile( tFile, onReadComplete )
    
    function onReadComplete( tError, tData )
    {
        tResponse.writeHead( 200, { 'Content-Type': 'text/html' } );
        tResponse.end( tData );
    }
}

server.listen( PORT, onServerInit );

function onServerInit()
{
    console.log( "what it is?" );
}