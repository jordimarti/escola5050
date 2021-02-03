class FasesController < ApplicationController
  def canvi_fase
  	ActionCable.server.broadcast "stage_channel", stage_id: params[:fase]
  end

  def canvi_fase_2
  	ActionCable.server.broadcast "stage_channel", stage_id: params[:fase]
  end
end
