(function( $ ) {
  var defaults_ = {
    'api': 'http://api.brix.dev.br',
    'width': 200,
    'heigth': 200
  }

  var methods = {
    init : function( options, callback ) { 
      var settings = $.extend( defaults_, options);
      var $this = $(this);
      var path = "/cobranca";
      var valor = settings.valor;
      var body = {tipoCobranca: 'PIX', chavePix: settings.chave, valor: valor}
      const headers = { 'api-key': settings.credencial};
      var cobranca;

      console.log(`Gerando Pix no valor ${0}`, valor)

      $.ajax({
        url: settings.api+path,
        type: 'post',
        data: body,
        headers: headers,
        dataType: 'json',
        success: function (data) {
          cobranca = data;
          $this.each(function(element) {
          if ($this[element].tagName=="DIV") {
              $this[element].innerHTML = cobranca.json.cobranca.pix.copiaecola
            }
          });
          if (typeof callback == 'function') { // make sure the callback is a function
            callback(cobranca.json.cobranca.pix.copiaecola); // brings the scope to the callback
          }
        },
        error: function(error) {
          console.error("Erro ao criar a cobrança.", error)
        }
      })
    },
    qrcode: function(copiaecola, options) {
      var settings = $.extend( defaults_, options);
      var $this = $(this);
      $this.each(function(element) {
        if ($this[element].tagName=="DIV") {
          $($this[element]).kjua({text: copiaecola, 
            render: 'image',
            size: 160
          });
        }
      });
    },
    monitor : function( callback, options ) {
      var settings = $.extend( defaults_, options);
      console.debug("chamado o show", settings)
    }
  };

  $.fn.brix = function( method, options ) {  
      
    var settings = $.extend( defaults_, options);

      if ( methods[method] ) {
        return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
      } else if ( typeof method === 'object' || ! method ) {
        return methods.init.apply( this, arguments );
      } else {
        $.error( 'Method ' +  method + ' does not exist on jQuery.brix' );
      } 
  }

  // return this.each(function() {        

  //     // Dica código plugin aqui
  
  // });
})( jQuery );