function Mostrar() {
   const numMes= document.getElementById("textbox1").value();
    
    if (numMes == "1") {
        document.getElementById("mostrar").value="Janeiro";
    }

    else {
        if (numMes == "2") {
            document.getElementById("mostrar").value="Fevereiro";
        }
    }

}

function Limpar() {
    document.getElementById("limpar").focus();
}