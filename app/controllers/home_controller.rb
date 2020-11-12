class HomeController < ApplicationController
  before_action :authenticate_user!, only: [:index]
  
  def index
  	@missatge = Missatge.new
    @missatges = Missatge.all
    
  end

  def video
  	@video = 'wHiat6z6W00dCJjlnoLnx5Fln2mzR9bnuWRIlHeSjZ01E'
  end
end
