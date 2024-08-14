const input_encrypt = document.querySelector('#inputEncript');
const output = document.querySelector('#output');
const boton_encrypt = document.querySelector('#botonEncript');
const boton_decrypt = document.querySelector('#botonDecript');
const boton_reset = document.querySelector('#botonReset');
const boton_copiar = document.querySelector('#botonCopiar');
reseteo();

function cambioEncrypt(){
    const valor = input_encrypt.value;
    input_encrypt.value = valor.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    /* 
    console.log('enter',/enter/.test(valor));
    console.log('imes',/imes/.test(valor));
    console.log('ai',/ai/.test(valor));
    console.log('ober',/ober/.test(valor));
    console.log('ufat',/ufat/.test(valor));
    */
   
   if(!valor){
    reseteo();
   }else{
    /*boton_reset.disabled=false;*/
    if(/enter|imes|ai|ober|ufat/.test(valor) ){
        boton_encrypt.disabled=true;
        boton_decrypt.disabled=false;
    }else{
        boton_encrypt.disabled=false;
        boton_decrypt.disabled=true;
    }
   }


}

function reseteo(){
    input_encrypt.value ="";
    boton_encrypt.disabled=true;
    boton_decrypt.disabled=true;
    boton_reset.disabled=true;
    boton_copiar.disabled=true;
    output.value="";
}

function encript(){
    const valor = input_encrypt.value;
    output.value = valor
    .replace( /e/g, "enter" )
    .replace( /i/g, "imes" )
    .replace( /a/g, "ai" )
    .replace( /o/g, "ober" )
    .replace( /u/g, "ufat" );
    boton_copiar.disabled=false;
    boton_reset.disabled=false;
}

function decript(){
    const valor = input_encrypt.value;
    output.value = valor
    .replace( /enter/g, "e" )
    .replace( /imes/g, "i" )
    .replace( /ai/g, "a" )
    .replace( /ober/g, "o" )
    .replace( /uber/g, "u" );
    boton_copiar.disabled=false;
    boton_reset.disabled=false;
}

async function copiar(){
    const texto = output.value;

    try{
        await navigator.clipboard.writeText( texto );
        alert("¡Se ha copiado correctamente!")
    }catch(err){
        console.error("Error al copiar: ", err);
    }
}

input_encrypt.addEventListener("input", /*Callback*/ cambioEncrypt);
boton_reset.addEventListener("click",  reseteo);
boton_encrypt.addEventListener("click",encript);
boton_decrypt.addEventListener("click",decript);
boton_copiar.addEventListener("click", copiar);