class PuntuacionsController < ApplicationController
  def index
    @puntuacions_fase1 = Puntuacio.where(fase: 1)
    @puntuacions_fase2 = Puntuacio.where(fase: 2)
    @puntuacions_fase3 = Puntuacio.where(fase: 3)
    @puntuacions_fase4 = Puntuacio.where(fase: 4)
    @puntuacions_fase5 = Puntuacio.where(fase: 5)
    @puntuacions_fase6 = Puntuacio.where(fase: 6)
    @puntuacions_fase7 = Puntuacio.where(fase: 7)
    @puntuacions_fase8 = Puntuacio.where(fase: 8)
    @puntuacions_fase9 = Puntuacio.where(fase: 9)
    @puntuacions_fase10 = Puntuacio.where(fase: 10)

    # Aquí fer query per tenir llistat d'usuaris amb suma de puntuacions
    usuaris = User.all
    @llistat_usuaris = Array.new
    usuaris.each do |u|
      nom = u.first_name + ' ' + u.last_name
      puntuacions_positives = u.puntuacions.where(correcte: true)
      puntuacions_positives_uniques = puntuacions_positives.map(&:fase).uniq
      nombre_positius = puntuacions_positives_uniques.count
      @llistat_usuaris.push [nom, nombre_positius]
    end
    
  end

  def create
    @puntuacio = Puntuacio.create(puntuacio_params)
    @puntuacio.user_id = current_user.id
    @puntuacio.save
  end

  def grava_puntuacio
    @puntuacio = Puntuacio.new
    @puntuacio.user_id = current_user.id
    @puntuacio.fase = params[:fase].to_i
    if params[:correcte] == 'true'
      @puntuacio.correcte = true
    else
      @puntuacio.correcte = false
    end
    @puntuacio.save
  end

  def esborrar
  end

  def recarregar
    redirect_to puntuacions_path
  end

  def esborrar_tot
    users = User.all
    users.each do |u|
      u.destroy
    end
    redirect_to puntuacions_path
  end

  private
    def puntuacio_params
      params.require(:puntuacio).permit(:fase, :correcte)
    end
end
