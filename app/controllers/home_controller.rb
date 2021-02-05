class HomeController < ApplicationController
  before_action :authenticate_user!, only: [:index, :taller2, :casa, :talleracasa]
  
  def index
  	@missatge = Missatge.new
    @missatges = Missatge.all
    
  end

  def taller2
    @missatge = Missatge.new
    @missatges = Missatge.all
  end

  def video
  	@video = 'wHiat6z6W00dCJjlnoLnx5Fln2mzR9bnuWRIlHeSjZ01E'
  end

  def casa
  	@missatge = Missatge.new
    @missatges = Missatge.all
    @video = 'wHiat6z6W00dCJjlnoLnx5Fln2mzR9bnuWRIlHeSjZ01E'
  end

  def talleracasa
    @missatge = Missatge.new
    @missatges = Missatge.all
    @video = 'wHiat6z6W00dCJjlnoLnx5Fln2mzR9bnuWRIlHeSjZ01E'
  end
end
