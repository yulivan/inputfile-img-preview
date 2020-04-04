(function($) {

	'use strict';

  /**
 * Permite que se muestre el contenido del input file oculto en otro input.
 * 
 * @param numeroInput Numero del input file que se quiere ver con un estilo modificado 
 * y del input en el que se mostrara.
 */
function mostrarInputFileModificado(numeroInput) {
    $("#archivo_oculto"+numeroInput).change(function(){
        $("#archivo"+numeroInput).val($("#archivo_oculto"+numeroInput).val());
    });
}

mostrarInputFileModificado(1);
mostrarInputFileModificado(2);

  /**
  * Mostrar imagen seleccionada en el elemento img
  * @param input: recive input selecconado
  */
  function readImage(input){
    if(input.files && input.files[0]){
      var reader = new FileReader();
      reader.onload = function(e){
        $('#imgpreve').attr('src', e.target.result); //renderizamos la imagen
      }
      reader.readAsDataURL(input.files[0]);
    }
  }

  // codigo a ejecutar cuando se detecta un cambio de archivo
  $("#archivo_oculto1").change(function(){
    readImage(this);
  });

})(jQuery);