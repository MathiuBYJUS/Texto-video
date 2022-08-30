x=0;
y=0;
draw_circle="";
draw_rect="";

var  SpeechRecongnition=window.webkitSpeechRecognition;

var recognition=new SpeechRecongnition();

function Dibujo()
{
    document.getElementById("Span").innerHTML= "El sistema esta esuchando porfavor di lo que quieres dibujar"
    recognition.start();
}

recognition.onresult = function(event)
{
    console.log(event);
    var content = event.results[0][0].transcript;

    document.getElementById("Span").innerHTML= "El sistema reconocio " + content;
    if(content == "Circulo")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Se empezó a dibujar un círculo "; 
        draw_circle = "set";
    }

    if(content == "Rectangulo")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Se empezó a dibujar un rectángulo "; 
        draw_rect = "set";
    }
}



