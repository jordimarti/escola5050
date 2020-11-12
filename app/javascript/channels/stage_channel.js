import consumer from "./consumer"

consumer.subscriptions.create("StageChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    switch(data.stage_id) {
    	case '0':
    		$('.container-fase').hide()
    		break;
		  case '1':
		    $('#container-fase-1').show()
		    break;
		  case '2':
		  	$('#container-fase-1').hide()
    		$('#container-fase-2').show()
    		break;
      case '3':
        $('#container-fase-2').hide()
        $('#container-fase-3').show()
        break;
      case '4':
        $('#container-fase-3').hide()
        $('#container-fase-4').show()
        break;
      case '5':
        $('#container-fase-4').hide()
        $('#container-fase-5').show()
        break;
      case '7':
        $('#container-fase-5').hide()
        $('#container-fase-7').show()
        break;
      case '8':
        $('#container-fase-7').hide()
        $('#container-fase-8').show()
        break;
      case '9':
        $('#container-fase-8').hide()
        $('#container-fase-9').show()
        break;
      case '10':
        $('#container-fase-9').hide()
        $('#container-fase-10').show()
        break;
    	default:
    		$('.container-interactiu').html("<div>Error</div>")
    }	
  }
});
