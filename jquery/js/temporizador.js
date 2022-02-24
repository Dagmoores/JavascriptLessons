			(function($) {
				$.fn.temporizador = function(opcoes) {
					const opcoesFinais = $.extend({
					mensagem: 'Em breve',
					horario: '23:59:59'}, 
					opcoes)
							
					console.log(opcoesFinais)
					return this
				}
			})(jQuery)
