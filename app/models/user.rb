class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  def name
    [first_name, last_name].compact.join(' ')
  end

  validates :first_name, :presence => true
  validates :last_name, :presence => true

  has_many :puntuacions, dependent: :destroy
  has_many :missatges, dependent: :destroy

  def self.online
    ids = ActionCable.server.pubsub.redis_connection_for_subscriptions.smembers "online"
    where(id: ids)
  end
end
