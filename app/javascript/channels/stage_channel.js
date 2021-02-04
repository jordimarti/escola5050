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
      case '11':
        $('#container-fase-10').hide()
        $('#container-fase-11').show()
        break;
      case '12':
        $('#container-fase-11').hide()
        $('#container-fase-12').show()
        break;
      case '13':
        $('#container-fase-12').hide()
        $('#container-fase-13').show()
        break;
      case '14':
        $('#container-fase-13').hide()
        $('#container-fase-14').show()
        break;
      case '15':
        $('#container-fase-14').hide()
        $('#container-fase-15').show()
        break;
      case '16':
        $('#container-fase-15').hide()
        $('#container-fase-16').show()
        break;
    	default:
    		$('.container-interactiu').html("<div>Error</div>")
    }	
  }
});
