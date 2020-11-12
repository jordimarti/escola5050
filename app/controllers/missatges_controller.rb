class MissatgesController < ApplicationController
  before_action :set_missatge, only: [:show, :edit, :update, :destroy]

  # GET /missatges
  # GET /missatges.json
  def index
    @missatges = Missatge.all
  end

  # GET /missatges/1
  # GET /missatges/1.json
  def show
  end

  # GET /missatges/new
  def new
    @missatge = Missatge.new
  end

  # GET /missatges/1/edit
  def edit
  end

  # POST /missatges
  # POST /missatges.json
  def create
    @missatge = Missatge.create(missatge_params)
    if @missatge.save
      ActionCable.server.broadcast "room_channel", user_id: @missatge.user_id, nom: current_user.first_name, contingut: @missatge.contingut
    else
    end
  end

  # PATCH/PUT /missatges/1
  # PATCH/PUT /missatges/1.json
  def update
    respond_to do |format|
      if @missatge.update(missatge_params)
        format.html { redirect_to @missatge, notice: 'Missatge was successfully updated.' }
        format.json { render :show, status: :ok, location: @missatge }
      else
        format.html { render :edit }
        format.json { render json: @missatge.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /missatges/1
  # DELETE /missatges/1.json
  def destroy
    @missatge.destroy
    respond_to do |format|
      format.html { redirect_to missatges_url, notice: 'Missatge was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_missatge
      @missatge = Missatge.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def missatge_params
      params.require(:missatge).permit(:user_id, :contingut)
    end
end
