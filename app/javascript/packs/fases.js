
$(document).on('turbolinks:load', function () {
	// Preparació
	$('.container-fase').hide()
	$('#amaga-tot').click(function() {
		$('.container-fase').hide()
	})
	function enviaPuntuacio(fase, correcte) {
		$.ajax({method: "get", url: "../puntuacions/grava_puntuacio", data: { fase: fase, correcte: correcte }})
	}
	// Fase 1
	$('#frase-2').hide()
	$('.benfet').hide()
	$('.malfet').hide()
	$('#pista-1').click(function() {
	  $('#frase-1').hide()
	  $('#frase-2').show()
	  $('#pista-1').hide()
	})
	
	$('#comprova-repte-1').click(function() {
	  valor = $('#input-repte-1').val()
	  if(valor === 'Per estalviar diners i lluitar contra el canvi climàtic') {
			$('.benfet').show()
			enviaPuntuacio(1, true)
	  } else if (valor === 'Per estalviar diners i lluitar contra el canvi climatic') {
			$('.benfet').show()
			enviaPuntuacio(1, true)
	  } else if (valor === 'Per estalviar diners i lluitar contra el canvi climàtic.') {
			$('.benfet').show()
			enviaPuntuacio(1, true)
	  } else if (valor === 'Per estalviar diners i lluitar contra el canvi climatic.') {
			$('.benfet').show()
			enviaPuntuacio(1, true)
    } else if (valor === 'per estalviar diners i lluitar contra el canvi climatic') {
        $('.benfet').show()
        enviaPuntuacio(1, true)
    } else if (valor === 'per estalviar diners i lluitar contra el canvi climatic.') {
        $('.benfet').show()
        enviaPuntuacio(1, true)
	  } else {
			$('.malfet').show().delay(3000).fadeOut()
			enviaPuntuacio(1, false)
	  }
	})

	// Fase 2
	$('.benfet2').hide()
	$('.malfet2').hide()
	$('.map-slice').click(function() {
		$('.benfet2').hide()
		$('.malfet2').show().delay(3000).fadeOut();
	})
	$('#map48').click(function() {
		$('.malfet2').hide()
		$('.benfet2').show()
		enviaPuntuacio(2, true)
	})
	$('#map48_v2').hide();
  $('#map48').hover(function() {
		$('#map48').hide();
		$('#map48_v2').show();
	})
	$('#map48_v2').click(function() {
		$('.malfet2').hide()
		$('.benfet2').show()
		enviaPuntuacio(2, true)
	})
  
  // Fase 3
  

  // Fase 4
  $('.benfet4').hide()
  $('.malfet4').hide()
  $('#porquets-casa-palla').click(function() {
		$('.benfet4').hide()
		$('.malfet4').show().delay(3000).fadeOut();
		enviaPuntuacio(4, false)
  })
  $('#porquets-casa-fusta').click(function() {
		$('.benfet4').hide()
		$('.malfet4').show().delay(3000).fadeOut();
		enviaPuntuacio(4, false)
  })
  $('#porquets-casa-maons').click(function() {
		$('.benfet4').show()
		$('.malfet4').hide()
		enviaPuntuacio(4, true)
  })

  // Fase 5
  $('.benfet5').hide()
  $('.malfet5').hide()
  $('#tria-manta').click(function() {
		$('.benfet5').show()
		$('.malfet5').hide()
		enviaPuntuacio(5, true)
  })
  $('#tria-estufa').click(function() {
		$('.benfet5').hide()
		$('.malfet5').show().delay(3000).fadeOut();
		enviaPuntuacio(5, false)
  })

  // Fase 8
  $('.benfet8').hide()
  $('.malfet8').hide()
  $('#comprova-repte-8').click(function() {
	  valor8 = $('#input-repte-8').val()
	  if(valor8 === 'LES BOMBETES LED CONSUMEIXEN MENYS ENERGIA') {
			$('.benfet8').show()
			enviaPuntuacio(8, true)
	  } else if (valor8 === 'Les bombetes led consumeixen menys energia') {
			$('.benfet8').show()
			enviaPuntuacio(8, true)
	  } else if (valor8 === 'Les bombetes LED consumeixen menys energia') {
			$('.benfet8').show()
			enviaPuntuacio(8, true)
    } else if (valor8 === 'Les bombetes Led consumeixen menys energia') {
        $('.benfet8').show()
        enviaPuntuacio(8, true)
    } else if (valor8 === 'Les bombetes LED consumeixen menys energia.') {
        $('.benfet8').show()
        enviaPuntuacio(8, true)
    } else if (valor8 === 'les bombetes led consumeixen menys energia') {
        $('.benfet8').show()
        enviaPuntuacio(8, true)
	  } else {
			$('.malfet8').show().delay(3000).fadeOut()
			enviaPuntuacio(8, false)
	  }
	})

	// Fase 9
		var fase = 0;
    var monedes = 100;
    var preu;
    var estalvi;
    var energia = 89;
    var valor_items = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    $(".items").click(function(){
			var id_item = $(this).attr('value');
			if (valor_items[id_item] == 0) {
				valor_items[id_item] = 1;
				obtenir_text(id_item);
				indicadors(id_item);
			}
    });
    
    //Amaguem elements de la casa
    $("#casa_tendal").hide();
    $("#casa_aillament").hide();
    $("#casa_tele").hide();
    $("#casa_pintura").hide();
    $("#casa_finestres").hide();
    $("#casa_jacuzzi").hide();
    //$("#casa_lampades").hide();
    $("#casa_plantes").hide();
    $("#casa_caldera").hide();
    //$("#casa_electrodomestics").hide();
    $("#casa_captadors_termics").hide();
    $("#casa_captadors_fotovoltaics").hide();
    
    $("#punt_tendal").hide();
    $("#punt_aillament").hide();
    $("#punt_tele").hide();
    $("#punt_pintura").hide();
    $("#punt_finestres").hide();
    $("#punt_jacuzzi").hide();
    $("#punt_llums").hide();
    $("#punt_plantes").hide();
    $("#punt_caldera").hide();
    $("#punt_electrodomestics").hide();
    $("#punt_captadors_termics").hide();
    $("#punt_captadors_fotovoltaics").hide();
    
    $("#text_tendal").hide();
    $("#text_aillament").hide();
    $("#text_tele").hide();
    $("#text_pintura").hide();
    $("#text_finestres").hide();
    $("#text_jacuzzi").hide();
    $("#text_llums").hide();
    $("#text_plantes").hide();
    $("#text_caldera").hide();
    $("#text_electrodomestics").hide();
    $("#text_captadors_termics").hide();
    $("#text_captadors_fotovoltaics").hide();

    $("#tendal").click(function(){
        $(this).html('<img src="http://www.tecnicdecapcalera.cat/casa-juga/img/tendal_off.jpg" alt="tendal" width="110" height="76">');
        $("#casa_tendal").show();
        $("#punt_tendal").show();
        $("#punt_tendal").mouseover(function() {
            $("#text_tendal").show();
        });
        $("#punt_tendal").mouseout(function() {
            $("#text_tendal").hide();
        });
    });
    $("#aillant").click(function(){
        $(this).html('<img src="http://www.tecnicdecapcalera.cat/casa-juga/img/aillant_off.jpg" alt="aïllant tèrmic" width="110" height="76">');
        $("#casa_aillament").show();
        $("#punt_aillament").show();
        $("#punt_aillament").mouseover(function() {
            $("#text_aillament").show();
        });
        $("#punt_aillament").mouseout(function() {
            $("#text_aillament").hide();
        });
    });
    $("#televisor").click(function(){
        $(this).html('<img src="http://www.tecnicdecapcalera.cat/casa-juga/img/televisor_off.jpg" alt="televisor" width="110" height="76">');
        $("#casa_tele").show();
        $("#punt_tele").show();
        $("#punt_tele").mouseover(function() {
            $("#text_tele").show();
        });
        $("#punt_tele").mouseout(function() {
            $("#text_tele").hide();
        });
    });
    $("#pintura").click(function(){
        $(this).html('<img src="http://www.tecnicdecapcalera.cat/casa-juga/img/pintura_off.jpg" alt="pintura" width="110" height="76">');
        $("#casa_pintura").show();
        $("#punt_pintura").show();
        $("#punt_pintura").mouseover(function() {
            $("#text_pintura").show();
        });
        $("#punt_pintura").mouseout(function() {
            $("#text_pintura").hide();
        });
    });
    $("#finestres").click(function(){
        $(this).html('<img src="http://www.tecnicdecapcalera.cat/casa-juga/img/finestra_off.jpg" alt="finestra" width="110" height="76">');
        $("#casa_finestres").show();
        $("#punt_finestres").show();
        $("#punt_finestres").mouseover(function() {
            $("#text_finestres").show();
        });
        $("#punt_finestres").mouseout(function() {
            $("#text_finestres").hide();
        });
    });
    $("#jacuzzi").click(function(){
        $(this).html('<img src="http://www.tecnicdecapcalera.cat/casa-juga/img/jacuzzi_off.jpg" alt="jacuzzi" width="110" height="76">');
        $("#casa_jacuzzi").show();
        $("#punt_jacuzzi").show();
        $("#punt_jacuzzi").mouseover(function() {
            $("#text_jacuzzi").show();
        });
        $("#punt_jacuzzi").mouseout(function() {
            $("#text_jacuzzi").hide();
        });
    });
    $("#lampades").click(function(){
        $(this).html('<img src="http://www.tecnicdecapcalera.cat/casa-juga/img/llums_off.jpg" alt="lampades" width="110" height="76">');
        $("#casa_llums").show();
        $("#punt_llums").show();
        $("#punt_llums").mouseover(function() {
            $("#text_llums").show();
        });
        $("#punt_llums").mouseout(function() {
            $("#text_llums").hide();
        });
    });
    $("#plantes").click(function(){
        $(this).html('<img src="http://www.tecnicdecapcalera.cat/casa-juga/img/plantes_off.jpg" alt="plantes" width="110" height="76">');
        $("#casa_plantes").show();
        $("#punt_plantes").show();
        $("#punt_plantes").mouseover(function() {
            $("#text_plantes").show();
        });
        $("#punt_plantes").mouseout(function() {
            $("#text_plantes").hide();
        });
    });
    $("#caldera").click(function(){
        $(this).html('<img src="http://www.tecnicdecapcalera.cat/casa-juga/img/caldera_off.jpg" alt="caldera" width="110" height="76">');
        $("#casa_caldera").show();
        $("#punt_caldera").show();
        $("#punt_caldera").mouseover(function() {
            $("#text_caldera").show();
        });
        $("#punt_caldera").mouseout(function() {
            $("#text_caldera").hide();
        });
    });
    $("#electrodomestics").click(function(){
        $(this).html('<img src="http://www.tecnicdecapcalera.cat/casa-juga/img/electrodomestics_off.jpg" alt="electrodomestics" width="110" height="76">');
        $("#casa_electrodomestics").show();
        $("#punt_electrodomestics").show();
        $("#punt_electrodomestics").mouseover(function() {
            $("#text_electrodomestics").show();
        });
        $("#punt_electrodomestics").mouseout(function() {
            $("#text_electrodomestics").hide();
        });
    });
    $("#captadors_termics").click(function(){
        $(this).html('<img src="http://www.tecnicdecapcalera.cat/casa-juga/img/captadors_termics_off.jpg" alt="captadors tèrmics" width="110" height="76">');
        $("#casa_captadors_termics").show();
        $("#punt_captadors_termics").show();
        $("#punt_captadors_termics").mouseover(function() {
            $("#text_captadors_termics").show();
        });
        $("#punt_captadors_termics").mouseout(function() {
            $("#text_captadors_termics").hide();
        });
    });
    $("#captadors_fotovoltaics").click(function(){
        $(this).html('<img src="http://www.tecnicdecapcalera.cat/casa-juga/img/captadors_fotovoltaics_off.jpg" alt="captadors fotovoltaics" width="110" height="76">');
        $("#casa_captadors_fotovoltaics").show();
        $("#punt_captadors_fotovoltaics").show();
        $("#punt_captadors_fotovoltaics").mouseover(function() {
            $("#text_captadors_fotovoltaics").show();
        });
        $("#punt_captadors_fotovoltaics").mouseout(function() {
            $("#text_captadors_fotovoltaics").hide();
        });
    });

    function obtenir_text(id_item) {
        $.getJSON( "data/respostes.json", function( data ) {
            var resposta = data.elements[fase].respostes[id_item].text_resposta;
            escriu_resposta(resposta);
            canvi_fase();  
        });
    }
    
    function escriu_resposta(resposta) {
        var hora = jQuery.now();
        var time = new Date(hora);
        h = time.getHours();
        m = time.getMinutes();
        if (m < 10) {
            m = '0'+m;
        }
    }

    function indicadors(id_item) {
        
        switch(id_item) {
            case '0':
                preu = 40;
                estalvi = 30;
            break;
            case '1':
                preu = 20;
                estalvi = 15;
            break;
            case '2':
                preu = 6;
                estalvi = 4;
            break;
            case '3':
                preu = 12;
                estalvi = 10;
            break;
            case '4':
                preu = 6;
                estalvi = 4;
            break;
            case '5':
                preu = 10;
                estalvi = -1;
            break;
            case '6':
                preu = 15;
                estalvi = 12;
            break;
            case '7':
                preu = 10;
                estalvi = 0;
            break;
            case '8':
                preu = 35;
                estalvi = -10;
            break;
            case '9':
                preu = 5;
                estalvi = 0;
            break;
            case '10':
                preu = 20;
                estalvi = 14;
            break;
            case '11':
                preu = 20;
                estalvi = 12;
            break;
        }
        
        monedes = monedes-preu;
        energia = energia-estalvi;

        $("#money").text(monedes);
        $("#energy-fill").css("width", energia+"%");
        if (monedes <= 0) {
            if (monedes < 0) {
                $("#money").css( "color", "#f15c4c" );
            }
            game_over(monedes);
        }
    
    }

    

    function game_over(monedes) {
        var energia_inicial = 89;
        var energia_final = energia;
        var total_estalvi = 100 - ((energia_final/energia_inicial)*100);
        var estalvi_formatejat = total_estalvi.toFixed(0);
        var diners_restants = monedes*(-1);
        var missatge_deute = "Amb els diners que estalviaràs a les factures d\'electricitat i gas podràs pagar el deute sense problemes."; 
        
        if (diners_restants == 0) {
            missatge_deute = " ";   
        }
        
        if (total_estalvi < 50) {
					enviaPuntuacio(9, false)
					if (monedes == 0) {
							$("#items-container").html('<div class="final_explica_decepcionat container_final"><p>Ja no et queden monedes.</p><p>Has aconseguit estalviar un '+estalvi_formatejat+'% d\'energia.</p><p>Hauries pogut utilitzar millor els diners per estalviar energia...</p></div>');
					}
					else {
							$("#items-container").html('<div class="final_explica_decepcionat container_final"><p>Ja no et queden monedes.</p><p>Has acabat amb un deute de '+diners_restants+' monedes i has aconseguit estalviar un '+estalvi_formatejat+'% d\'energia.</p><p>Hauries pogut utilitzar millor els diners per estalviar energia...</p></div>');
					}
        }
        else if (total_estalvi >= 50 && total_estalvi < 75) {
					enviaPuntuacio(9, false)
					if (monedes == 0) {
							$("#items-container").html('<div class="final_explica container_final"><p>Ja no et queden monedes.</p><p>Has aconseguit estalviar un '+estalvi_formatejat+'% d\'energia.</p><p>Has aconseguit estalviar molta energia, però encara hi havia marge per estalviar més!</p></div>');
					}
					else {
							$("#items-container").html('<div class="final_explica container_final"><p>Ja no et queden monedes.</p><p>Has acabat amb un deute de '+diners_restants+' monedes i has aconseguit estalviar un '+estalvi_formatejat+'% d\'energia.</p><p>Has aconseguit estalviar molta energia, però encara hi havia marge per estalviar més!</p></div>');
					}
        }
        else if (total_estalvi >= 75 && total_estalvi < 100) {
					enviaPuntuacio(9, true)
					if (monedes == 0) {
							$("#items-container").html('<div class="final_content container_final"><p>Ja no et queden monedes.</p><p>Has aconseguit estalviar un '+estalvi_formatejat+'% d\'energia.</p><p>Ho has fet molt bé! La casa consumeix menys d\'una quarta part del que consumia inicialment! '+missatge_deute+'</p></div>');
					}
					else {
							$("#items-container").html('<div class="final_content container_final"><p>Ja no et queden monedes.</p><p>Has acabat amb un deute de '+diners_restants+' monedes i has aconseguit estalviar un '+estalvi_formatejat+'% d\'energia.</p><p>Ho has fet molt bé! La casa consumeix menys d\'una quarta part del que consumia inicialment! '+missatge_deute+'</p></div>');
					}
        }
        else if (total_estalvi >= 100) {
					enviaPuntuacio(9, true)
					if (monedes == 0) {
							$("#items-container").html('<div class="final_content_2 container_final"><p>Ja no et queden monedes.</p><p>Has aconseguit estalviar un '+estalvi_formatejat+'% d\'energia.</p><p>Ho has fet molt bé! La casa genera més energia de la que consumeix!  '+missatge_deute+'</p></div>');
					}
					else {
							$("#items-container").html('<div class="final_content_2 container_final"><p>Ja no et queden monedes.</p><p>Has acabat amb un deute de '+diners_restants+' monedes i has aconseguit estalviar un '+estalvi_formatejat+'% d\'energia.</p><p>Ho has fet molt bé! La casa genera més energia de la que consumeix!  '+missatge_deute+'</p></div>');
					}
        }
        
        
    }


	// Fase 10
	$('.benfet10').hide()
	$('.malfet10').hide()
    var counter_10 = 0
	
	$('#container-tria-aventura-2').hide()
	$('#container-tria-aventura-3').hide()
	$('#container-tria-aventura-4').hide()
	$('#container-tria-aventura-5').hide()
    $('#container-tria-aventura-6').hide()

	$('#llum-artificial').click(function() {
		$('#container-tria-aventura-1').hide()
		$('#container-tria-aventura-2').delay(4000).fadeIn()
		$('.malfet10').show().delay(3000).fadeOut()
		$('.benfet10').hide()
	})
	$('#llum-natural').click(function() {
		$('#container-tria-aventura-1').hide()
		$('#container-tria-aventura-2').delay(4000).fadeIn()
		$('.benfet10').show().delay(3000).fadeOut()
        counter_10 += 1
        console.log(counter_10)
	})
	$('#nevera-be').click(function() {
		$('#container-tria-aventura-2').hide()
		$('#container-tria-aventura-3').delay(4000).fadeIn()
		$('.benfet10').show().delay(3000).fadeOut()
        counter_10 += 1
	})
	$('#nevera-malament').click(function() {
		$('#container-tria-aventura-2').hide()
		$('#container-tria-aventura-3').delay(4000).fadeIn()
		$('.malfet10').show().delay(3000).fadeOut()
	})
	$('#classe-fred').click(function() {
		$('#container-tria-aventura-3').hide()
		$('#container-tria-aventura-4').delay(4000).fadeIn()
		$('.malfet10').show().delay(3000).fadeOut()
	})
	$('#classe-be').click(function() {
		$('#container-tria-aventura-3').hide()
		$('#container-tria-aventura-4').delay(4000).fadeIn()
		$('.benfet10').show().delay(3000).fadeOut()
        counter_10 += 1
	})
	$('#transport-cotxe').click(function() {
		$('#container-tria-aventura-4').hide()
		$('#container-tria-aventura-5').delay(4000).fadeIn()
		$('.malfet10').show().delay(3000).fadeOut()
	})
	$('#transport-bici').click(function() {
		$('#container-tria-aventura-4').hide()
		$('#container-tria-aventura-5').delay(4000).fadeIn()
		$('.benfet10').show().delay(3000).fadeOut()
        counter_10 += 1
	})
	$('#roba-estesa').click(function() {
		$('#container-tria-aventura-5').hide()
        $('#container-tria-aventura-6').delay(4000).fadeIn()
		$('.benfet10').show().delay(3000).fadeOut()
        counter_10 += 1
        if(counter_10 > 4) {
            enviaPuntuacio(10, true)
        } else {
            enviaPuntuacio(10, false)
        }
        $('#respostes-correctes-tria-aventura').text(counter_10)
	})
	$('#roba-assecadora').click(function() {
		$('#container-tria-aventura-5').delay(3000).fadeOut()
        $('#container-tria-aventura-6').delay(4000).fadeIn()
		$('.malfet10').show().delay(3000).fadeOut()
        enviaPuntuacio(10, false)
        $('#respostes-correctes-tria-aventura').text(counter_10)
	})
    

    // Fase 11
    $('#frase-4').hide()
    $('.benfet11').hide()
    $('.malfet11').hide()
    $('#pista-2').click(function() {
      $('#frase-3').hide()
      $('#frase-4').show()
      $('#pista-2').hide()
    })
    
    $('#comprova-repte-11').click(function() {
      valor = $('#input-repte-11').val()
      if(valor === 'Quan sortim sempre apaguem els llums i els aparells.') {
            $('.benfet11').show()
            enviaPuntuacio(11, true)
      } else if (valor === 'Quan sortim sempre apaguem els llums i els aparells') {
            $('.benfet11').show()
            enviaPuntuacio(11, true)
      } else if (valor === 'quan sortim sempre apaguem els llums i els aparells.') {
            $('.benfet11').show()
            enviaPuntuacio(11, true)
      } else if (valor === 'quan sortim sempre apaguem els llums i els aparells') {
            $('.benfet11').show()
            enviaPuntuacio(11, true)
      } else {
            $('.malfet11').show().delay(3000).fadeOut()
            enviaPuntuacio(11, false)
      }
    })

    // Fase 12
    var interruptor_1 = 0
    var interruptor_2 = 0
    $('.benfet12').hide()
    $('.malfet12').hide()
    $('#info-lux-1').hide()
    $('#info-lux-2').hide()
    $('#info-lux-3').hide()
    $('.llum-aula').hide()
    $('#aula-1-llums').show()
    $('#interruptor-1-on').hide()
    $('#interruptor-2-on').hide()
    $('#interruptor-1-off').click(function() {
        $('#interruptor-1-off').hide()
        $('#interruptor-1-on').show()
        interruptor_1 = 1
        actualitza_llum_cas_1()
    })
    $('#interruptor-1-on').click(function() {
        $('#interruptor-1-on').hide()
        $('#interruptor-1-off').show()
        interruptor_1 = 0
        actualitza_llum_cas_1()
    })
    $('#interruptor-2-off').click(function() {
        $('#interruptor-2-off').hide()
        $('#interruptor-2-on').show()
        interruptor_2 = 1
        actualitza_llum_cas_1()
    })
    $('#interruptor-2-on').click(function() {
        $('#interruptor-2-on').hide()
        $('#interruptor-2-off').show()
        interruptor_2 = 0
        actualitza_llum_cas_1()
    })

    function actualitza_llum_cas_1() {
        if (interruptor_1 == 0 && interruptor_2 == 0) {
            $('.llum-aula').hide()
            $('#aula-1-llums').show()
        }
        else if (interruptor_1 == 0 && interruptor_2 == 1) {
            $('.llum-aula').hide()
            $('#aula-2-llums').show()
        }
        else if (interruptor_1 == 1 && interruptor_2 == 0) {
            $('.llum-aula').hide()
            $('#aula-3-llums').show()
        }
        else if (interruptor_1 == 1 && interruptor_2 == 1) {
            $('.llum-aula').hide()
            $('#aula-4-llums').show()
        }
    }

    var luximetre1 = 560
    var luximetre2 = 241
    var luximetre3 = 163
    function valors_luximetre() {
        if (interruptor_1 == 0 && interruptor_2 == 0) {
            luximetre1 = 498
            luximetre2 = 221
            luximetre3 = 163
        }
        else if (interruptor_1 == 0 && interruptor_2 == 1) {
            luximetre1 = 523
            luximetre2 = 320    
            luximetre3 = 269
        }
        else if (interruptor_1 == 1 && interruptor_2 == 0) {
            luximetre1 = 628
            luximetre2 = 284    
            luximetre3 = 198
        }
        else if (interruptor_1 == 1 && interruptor_2 == 1) {
            luximetre1 = 628
            luximetre2 = 384    
            luximetre3 = 306
        }
    }

    $('#punt-lux-1').click(function() {
        valors_luximetre()
        $('#info-lux-1').text(luximetre1 + " lux")
        $('#info-lux-1').show().delay(2000).fadeOut()
    })
    $('#punt-lux-2').click(function() {
        valors_luximetre()
        $('#info-lux-2').text(luximetre2 + " lux")
        $('#info-lux-2').show().delay(2000).fadeOut()
    })
    $('#punt-lux-3').click(function() {
        valors_luximetre()
        $('#info-lux-3').text(luximetre3 + " lux")
        $('#info-lux-3').show().delay(2000).fadeOut()
    })

    $('#comprova-repte-12').click(function() {
        $('#comprova-repte-12').hide()
        if (interruptor_1 == 0 && interruptor_2 == 1) {
            $('.benfet12').show()
            enviaPuntuacio(12, true)
        } else {
            $('.malfet12').show()
            enviaPuntuacio(12, false)
        }
    })


    // FASE 13 - Valors d'il·luminació

    $('.benfet13').hide()
    $('.malfet13').hide()
    var count_iluminacio = 0
    $('#comprova-repte-13').click(function() {
      var valor_aula = $('#input1-repte-13').val()
      if(valor_aula === '300') {
        count_iluminacio += 1
      }
      var valor_gimnas = $('#input2-repte-13').val()
      if(valor_gimnas === '100') {
        count_iluminacio += 1
      }
      var valor_biblioteca = $('#input3-repte-13').val()
      if(valor_biblioteca === '500') {
        count_iluminacio += 1
      }
      var valor_passadis = $('#input4-repte-13').val()
      if(valor_passadis === '100') {
        count_iluminacio += 1
      } 

      if(count_iluminacio > 3) {
        $('.benfet13').show()
        enviaPuntuacio(13, true)
      } else {
        $('.malfet13').show()
        enviaPuntuacio(13, false)
      }

      $('#comprova-repte-13').hide()
    })


    // FASE 14 - Quanta llum necessitem? (2)
    var interruptor_3 = 0
    var interruptor_4 = 0
    $('.benfet14').hide()
    $('.malfet14').hide()
    $('#info-lux-4').hide()
    $('#info-lux-5').hide()
    $('#info-lux-6').hide()
    $('.llum-aula2').hide()
    $('#aula-5-llums').show()
    $('#interruptor-3-on').hide()
    $('#interruptor-4-on').hide()
    $('#interruptor-3-off').click(function() {
        $('#interruptor-3-off').hide()
        $('#interruptor-3-on').show()
        interruptor_3 = 1
        actualitza_llum_cas_2()
    })
    $('#interruptor-3-on').click(function() {
        $('#interruptor-3-on').hide()
        $('#interruptor-3-off').show()
        interruptor_3 = 0
        actualitza_llum_cas_2()
    })
    $('#interruptor-4-off').click(function() {
        $('#interruptor-4-off').hide()
        $('#interruptor-4-on').show()
        interruptor_4 = 1
        actualitza_llum_cas_2()
    })
    $('#interruptor-4-on').click(function() {
        $('#interruptor-4-on').hide()
        $('#interruptor-4-off').show()
        interruptor_4 = 0
        actualitza_llum_cas_2()
    })

    function actualitza_llum_cas_2() {
        if (interruptor_3 == 0 && interruptor_4 == 0) {
            $('.llum-aula2').hide()
            $('#aula-5-llums').show()
        }
        else if (interruptor_3 == 0 && interruptor_4 == 1) {
            $('.llum-aula2').hide()
            $('#aula-6-llums').show()
        }
        else if (interruptor_3 == 1 && interruptor_4 == 0) {
            $('.llum-aula2').hide()
            $('#aula-7-llums').show()
        }
        else if (interruptor_3 == 1 && interruptor_4 == 1) {
            $('.llum-aula2').hide()
            $('#aula-8-llums').show()
        }
    }

    var luximetre4 = 560
    var luximetre5 = 241
    var luximetre6 = 163
    function valors_luximetre2() {
        if (interruptor_3 == 0 && interruptor_4 == 0) {
            luximetre4 = 498
            luximetre5 = 221
            luximetre6 = 163
        }
        else if (interruptor_3 == 0 && interruptor_4 == 1) {
            luximetre4 = 523
            luximetre5 = 320    
            luximetre6 = 269
        }
        else if (interruptor_3 == 1 && interruptor_4 == 0) {
            luximetre4 = 628
            luximetre5 = 284    
            luximetre6 = 198
        }
        else if (interruptor_3 == 1 && interruptor_4 == 1) {
            luximetre4 = 628
            luximetre5 = 384    
            luximetre6 = 306
        }
    }

    $('#punt-lux-4').click(function() {
        valors_luximetre2()
        $('#info-lux-4').text(luximetre4 + " lux")
        $('#info-lux-4').show().delay(2000).fadeOut()
    })
    $('#punt-lux-5').click(function() {
        valors_luximetre2()
        $('#info-lux-5').text(luximetre5 + " lux")
        $('#info-lux-5').show().delay(2000).fadeOut()
    })
    $('#punt-lux-6').click(function() {
        valors_luximetre2()
        $('#info-lux-6').text(luximetre6 + " lux")
        $('#info-lux-6').show().delay(2000).fadeOut()
    })

    $('#comprova-repte-14').click(function() {
        $('#comprova-repte-14').hide()
        if (interruptor_3 == 0 && interruptor_4 == 0) {
            $('.benfet14').show()
            enviaPuntuacio(14, true)
        } else {
            $('.malfet14').show()
            enviaPuntuacio(14, false)
        }
    })


    // FASE 15 - Quanta llum necessitem? (2)
    var interruptor_5 = 0
    var interruptor_6 = 0
    $('.benfet15').hide()
    $('.malfet15').hide()
    $('#info-lux-7').hide()
    $('#info-lux-8').hide()
    $('#info-lux-9').hide()
    $('.llum-aula3').hide()
    $('#aula-9-llums').show()
    $('#interruptor-5-on').hide()
    $('#interruptor-6-on').hide()
    $('#interruptor-5-off').click(function() {
        $('#interruptor-5-off').hide()
        $('#interruptor-5-on').show()
        interruptor_5 = 1
        actualitza_llum_cas_3()
    })
    $('#interruptor-5-on').click(function() {
        $('#interruptor-5-on').hide()
        $('#interruptor-5-off').show()
        interruptor_5 = 0
        actualitza_llum_cas_3()
    })
    $('#interruptor-6-off').click(function() {
        $('#interruptor-6-off').hide()
        $('#interruptor-6-on').show()
        interruptor_6 = 1
        actualitza_llum_cas_3()
    })
    $('#interruptor-6-on').click(function() {
        $('#interruptor-6-on').hide()
        $('#interruptor-6-off').show()
        interruptor_6 = 0
        actualitza_llum_cas_3()
    })

    function actualitza_llum_cas_3() {
        if (interruptor_5 == 0 && interruptor_6 == 0) {
            $('.llum-aula3').hide()
            $('#aula-9-llums').show()
        }
        else if (interruptor_5 == 0 && interruptor_6 == 1) {
            $('.llum-aula3').hide()
            $('#aula-10-llums').show()
        }
        else if (interruptor_5 == 1 && interruptor_6 == 0) {
            $('.llum-aula3').hide()
            $('#aula-11-llums').show()
        }
        else if (interruptor_5 == 1 && interruptor_6 == 1) {
            $('.llum-aula3').hide()
            $('#aula-12-llums').show()
        }
    }

    var luximetre7 = 238
    var luximetre8 = 148
    var luximetre9 = 98
    function valors_luximetre3() {
        if (interruptor_5 == 0 && interruptor_6 == 0) {
            luximetre7 = 238
            luximetre8 = 148
            luximetre9 = 98
        }
        else if (interruptor_5 == 0 && interruptor_6 == 1) {
            luximetre7 = 290
            luximetre8 = 312    
            luximetre9 = 286
        }
        else if (interruptor_5 == 1 && interruptor_6 == 0) {
            luximetre7 = 340
            luximetre8 = 251    
            luximetre9 = 162
        }
        else if (interruptor_5 == 1 && interruptor_6 == 1) {
            luximetre7 = 365
            luximetre8 = 319    
            luximetre9 = 289
        }
    }

    $('#punt-lux-7').click(function() {
        valors_luximetre3()
        $('#info-lux-7').text(luximetre7 + " lux")
        $('#info-lux-7').show().delay(2000).fadeOut()
    })
    $('#punt-lux-8').click(function() {
        valors_luximetre3()
        $('#info-lux-8').text(luximetre8 + " lux")
        $('#info-lux-8').show().delay(2000).fadeOut()
    })
    $('#punt-lux-9').click(function() {
        valors_luximetre3()
        $('#info-lux-9').text(luximetre9 + " lux")
        $('#info-lux-9').show().delay(2000).fadeOut()
    })

    $('#comprova-repte-15').click(function() {
        $('#comprova-repte-15').hide()
        if (interruptor_5 == 1 && interruptor_6 == 1) {
            $('.benfet15').show()
            enviaPuntuacio(15, true)
        } else {
            $('.malfet15').show()
            enviaPuntuacio(15, false)
        }
    })


    // Fase 16 - Seguim les instruccions
    $('.benfet16').hide()
    $('.malfet16').hide()
    $('#aparells-ordinador').hide()
    $('#aparells-pantalla').hide()
    $('#aparells-pantallaapagada').hide()
    $('#aparells-porta').hide()
    $('#aparells-projector').hide()
    $('#aparells-interruptor').hide()
    $('#aparells-2').hide()
    var apagats = 0
    $('#contorn-interruptor').mouseover(function() {
        $('#aparells-interruptor').show()
    })
    $('#contorn-interruptor').mouseout(function() {
        $('#aparells-interruptor').hide()
    })
    $('#contorn-interruptor').click(function() {
        apagats += 1
        $('#aparells-2').show()
    })
    $('#contorn-ordinador').mouseover(function() {
        $('#aparells-ordinador').show()
    })
    $('#contorn-ordinador').mouseout(function() {
        $('#aparells-ordinador').hide()
    })
    $('#contorn-ordinador').click(function() {
        apagats += 1
        $('#aparells-projector-si-pc').hide()
        $('#aparells-fonspantalla').hide()
        $('#aparells-ledpc').hide()
    })
    $('#contorn-projector').mouseover(function() {
        $('#aparells-projector').show()
    })
    $('#contorn-projector').mouseout(function() {
        $('#aparells-projector').hide()
    })
    $('#contorn-projector').click(function() {
        apagats += 1
        $('#aparells-projector-si-pc').hide()
        $('#aparells-projector-no-pc').hide()
    })
    $('#contorn-pantalla').mouseover(function() {
        $('#aparells-pantalla').show()
    })
    $('#contorn-pantalla').mouseout(function() {
        $('#aparells-pantalla').hide()
    })
    $('#contorn-pantalla').click(function() {
        apagats += 1
        $('#aparells-pantallaapagada').show()
    })
    $('#contorn-porta').mouseover(function() {
        $('#aparells-porta').show()
    })
    $('#contorn-porta').mouseout(function() {
        $('#aparells-porta').hide()
    })
    $('#contorn-porta').click(function() {
        if (apagats > 3) {
            $('.benfet16').show()
            enviaPuntuacio(16, true)
        } else {
            $('.malfet16').show().delay(2000).fadeOut()
            enviaPuntuacio(16, false)
        }
    })

})