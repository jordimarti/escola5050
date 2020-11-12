class HomeController < ApplicationController
  before_action :authenticate_user!
  
  def index
  	@missatge = Missatge.new
    @missatges = Missatge.all
    @video = 'wHiat6z6W00dCJjlnoLnx5Fln2mzR9bnuWRIlHeSjZ01E'
  end
end
