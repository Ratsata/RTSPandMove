# RTSPandMove

  Api escrita con NodeJs para controlar el movimiento y capturar el video RTSP del equipo Siva para la App Mobil.

## RTSP

 Crea un WebSocket con el video RTSP en el puerto 9999
 
    ws://localhost:9999

## Movimiento

 - callPTZ: *callPTZ(string uri)*
 Realiza el movimiento de la PTZ realizando llamadas a la camara con autentificacion digest
 
        callPTZ/cgi-bin/ptz.cgi?action=start&channel=1&code=Position&arg1=0&arg2=-1000&arg3=0
