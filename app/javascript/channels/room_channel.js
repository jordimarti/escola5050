import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    if(data.contingut != '') {
    	$('#missatges').append('<div class="missatge" id="'+ data.user_id +'"> <span class="nom-usuari-xat">'+ data.nom +':</span> '+ data.contingut +'</div>')
	    $('.missatge-contingut-'+data.user_id+' .field-xat').val('')
	    scroll_bottom()
    }
  }
});

let scroll_bottom;

$(document).on('turbolinks:load', function () {
  scroll_bottom()
})

scroll_bottom = function () {
	$('#missatges').scrollTop($('#missatges')[0].scrollHeight)
}