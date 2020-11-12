class FasesController < ApplicationController
  def canvi_fase
  	ActionCable.server.broadcast "stage_channel", stage_id: params[:fase]
  end
end
