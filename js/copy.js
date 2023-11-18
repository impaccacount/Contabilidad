
function copyText(textoACopiar, alerta){
  
        var elementoTemporal = document.createElement("textarea");
        elementoTemporal.value = textoACopiar;
  

        elementoTemporal.style.position = "absolute";
        elementoTemporal.style.left = "-9999px";
  
     
        document.body.appendChild(elementoTemporal);
  
        elementoTemporal.select();
        document.execCommand("copy");
      
        document.body.removeChild(elementoTemporal);
  
      
        alert(alerta);
}