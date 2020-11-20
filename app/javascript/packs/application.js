// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("jquery")
require("jquery-ui")
require("bootstrap")
require("@fortawesome/fontawesome-free")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
function simulateTouchEvents(oo,bIgnoreChilds)
{
 if( !$(oo)[0] )
  { return false; }

 if( !window.__touchTypes )
 {
   window.__touchTypes  = {touchstart:'mousedown',touchmove:'mousemove',touchend:'mouseup'};
   window.__touchInputs = {INPUT:1,TEXTAREA:1,SELECT:1,OPTION:1,'input':1,'textarea':1,'select':1,'option':1};
 }

$(oo).bind('touchstart touchmove touchend', function(ev)
{
    var bSame = (ev.target == this);
    if( bIgnoreChilds && !bSame )
     { return; }

    var b = (!bSame && ev.target.__ajqmeclk), // Get if object is already tested or input type
        e = ev.originalEvent;
    if( b === true || !e.touches || e.touches.length > 1 || !window.__touchTypes[e.type]  )
     { return; } //allow multi-touch gestures to work

    var oEv = ( !bSame && typeof b != 'boolean')?$(ev.target).data('events'):false,
        b = (!bSame)?(ev.target.__ajqmeclk = oEv?(oEv['click'] || oEv['mousedown'] || oEv['mouseup'] || oEv['mousemove']):false ):false;

    if( b || window.__touchInputs[ev.target.tagName] )
     { return; } //allow default clicks to work (and on inputs)

    // https://developer.mozilla.org/en/DOM/event.initMouseEvent for API
    var touch = e.changedTouches[0], newEvent = document.createEvent("MouseEvent");
    newEvent.initMouseEvent(window.__touchTypes[e.type], true, true, window, 1,
            touch.screenX, touch.screenY,
            touch.clientX, touch.clientY, false,
            false, false, false, 0, null);

    touch.target.dispatchEvent(newEvent);
    e.preventDefault();
    ev.stopImmediatePropagation();
    ev.stopPropagation();
    ev.preventDefault();
});
 return true;
}; 

$( function() {
  function enviaPuntuacio(fase, correcte) {
		$.ajax({method: "get", url: "../puntuacions/grava_puntuacio", data: { fase: fase, correcte: correcte }})
  }
  
  $( "#sortable" ).sortable();
  $( "#sortable" ).disableSelection();
  
  $('.benfet3').hide()
  simulateTouchEvents($( "#material-1" ));
  simulateTouchEvents($( "#material-2" ));
  simulateTouchEvents($( "#material-3" ));
  simulateTouchEvents($( "#material-4" ));
  simulateTouchEvents($( "#material-5" ));
  simulateTouchEvents($( "#material-6" ));
  simulateTouchEvents($( "#material-7" ));
  simulateTouchEvents($( "#material-8" ));
  simulateTouchEvents($( "#material-9" ));
  simulateTouchEvents($( "#material-10" ));
  simulateTouchEvents($( "#material-11" ));
  $( "#material-1" ).draggable();
  $( "#material-2" ).draggable();
  $( "#material-3" ).draggable();
  $( "#material-4" ).draggable();
  $( "#material-5" ).draggable();
  $( "#material-6" ).draggable();
  $( "#material-7" ).draggable();
  $( "#material-8" ).draggable();
  $( "#material-9" ).draggable();
  $( "#material-10" ).draggable();
  $( "#material-11" ).draggable();

  var materials_correctes = 0
  $( "#casa-material-1" ).droppable({
    drop: function(event, ui) {
      $(this).addClass( "material-casa-correcte" )
      materials_correctes += 1
      comprovaMaterials(materials_correctes)
    },
    accept: "#material-10"
  });

  $( "#casa-material-2" ).droppable({
    drop: function(event, ui) {
      $(this).addClass( "material-casa-correcte" )
      materials_correctes += 1
      comprovaMaterials(materials_correctes)
    },
    accept: "#material-6"
  });

  $( "#casa-material-3" ).droppable({
    drop: function(event, ui) {
      $(this).addClass( "material-casa-correcte" )
      materials_correctes += 1
      comprovaMaterials(materials_correctes)
    },
    accept: "#material-8"
  });

  $( "#casa-material-4" ).droppable({
    drop: function(event, ui) {
      $(this).addClass( "material-casa-correcte" )
      materials_correctes += 1
      comprovaMaterials(materials_correctes)
    },
    accept: "#material-7"
  });

  $( "#casa-material-5" ).droppable({
    drop: function(event, ui) {
      $(this).addClass( "material-casa-correcte" )
      materials_correctes += 1
      comprovaMaterials(materials_correctes)
    },
    accept: "#material-9"
  });

  function comprovaMaterials(materials_correctes) {
    if (materials_correctes > 4) {
      $('.benfet3').show()
      enviaPuntuacio(3, true)
    }
    console.log("Materials correctes:")
    console.log(materials_correctes)
  }

  $('.benfet7').hide()
  $('#panell-termic-ok').hide()
  $('#panell-fotovoltaic-ok').hide()
  simulateTouchEvents($( "#produccio-1" ));
  simulateTouchEvents($( "#produccio-2" ));
  simulateTouchEvents($( "#produccio-3" ));
  simulateTouchEvents($( "#produccio-4" ));
  simulateTouchEvents($( "#produccio-5" ));
  $( "#produccio-1" ).draggable();
  $( "#produccio-2" ).draggable();
  $( "#produccio-3" ).draggable();
  $( "#produccio-4" ).draggable();
  $( "#produccio-5" ).draggable();

  var produccions_correctes = 0

  $( "#container-panell-solar-termic" ).droppable({
    drop: function(event, ui) {
      $('#panell-termic').hide()
      $('#panell-termic-ok').show()
      produccions_correctes += 1
      comprovaProduccions(produccions_correctes)
    },
    accept: "#produccio-3"
  });

  $( "#container-panell-solar-fotovoltaic" ).droppable({
    drop: function(event, ui) {
      $('#panell-fotovoltaic').hide()
      $('#panell-fotovoltaic-ok').show()
      produccions_correctes += 1
      comprovaProduccions(produccions_correctes)
    },
    accept: "#produccio-5"
  });

  function comprovaProduccions(produccions_correctes) {
    if (produccions_correctes > 1) {
      $('.benfet7').show()
      enviaPuntuacio(7, true)
    }
    console.log("Produccions correctes:" + produccions_correctes)
  }

  simulateTouchEvents($( "#puzzle1" ));
  simulateTouchEvents($( "#puzzle2" ));
  simulateTouchEvents($( "#puzzle3" ));
  simulateTouchEvents($( "#puzzle4" ));
  simulateTouchEvents($( "#puzzle5" ));
  simulateTouchEvents($( "#puzzle6" ));
});