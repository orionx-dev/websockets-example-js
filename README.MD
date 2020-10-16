# Websockets-example-js

## Motivación

Este repositorio fue creado para ayudar a los desarrolladores a conectarse a nuestro sistema de websockets y así mejorar sus bots de trading, haciéndolos más rápidos, responsivos y eficientes.

## Cómo utilizar

1. Edita el archivo `src/helpers/orionx/index.js` y configura tus propias credenciales.
2. Ejecuta el comando `npm install` o `yarn install` en su defecto.
3. Ejecuta el comando `npm run start-local` o `yarn start-local`.
4. Visualiza en la consola los cambios del orderbook y los trades que van llegando.

## Nota sobre los canales privados
El código para los canales privados sólo va a funcionar para uno de los canales, dado que en ambos ejemplos se llama la función `requestRealtimeToken()` el cual sobreeescribe el token. Para probar los sockets privados recomendamos habilitar sólo una de las funciones en [este archivo](https://github.com/orionx-dev/websockets-example-js/blob/master/src/index.js#L3).

## Disclaimer: Esto no es un bot
Este proyecto no tiene funcionalidad de bot, ni tampoco apunta a eso. El código demostrado es a modo de ejemplo y no necesariamente cumple con la estructura de objetos que necesitará tu código. Lo único que se pretende, es demostrar cómo se conecta al sistema de sockets de Orionx, y cómo vincular los eventos a determinadas acciones. Éstas acciones realmente no hacen nada más que mantener un estado actualizado de los objetos en cuestión con una estructura de objetos que no necesariamente se ajusta a sus necesidades.
