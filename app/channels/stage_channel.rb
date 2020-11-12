class StageChannel < ApplicationCable::Channel
  def subscribed
    stream_from "stage_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
