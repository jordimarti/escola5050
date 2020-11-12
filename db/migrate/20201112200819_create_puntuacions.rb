class CreatePuntuacions < ActiveRecord::Migration[6.0]
  def change
    create_table :puntuacions do |t|
      t.integer :user_id
      t.integer :fase
      t.boolean :correcte

      t.timestamps
    end
  end
end
