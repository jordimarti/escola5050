class CreateMissatges < ActiveRecord::Migration[6.0]
  def change
    create_table :missatges do |t|
      t.integer :user_id
      t.text :contingut

      t.timestamps
    end
  end
end
