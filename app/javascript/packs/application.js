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

$( function() {
  function enviaPuntuacio(fase, correcte) {
		$.ajax({method: "get", url: "../puntuacions/grava_puntuacio", data: { fase: fase, correcte: correcte }})
  }
  
  $( "#sortable" ).sortable();
  $( "#sortable" ).disableSelection();
  
  $('.benfet3').hide()
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
});