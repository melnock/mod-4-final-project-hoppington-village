class CreatePets < ActiveRecord::Migration[5.2]
  def change
    create_table :pets do |t|
      t.integer :user_id
      t.integer :animal_id
      t.integer :hunger_level
      t.integer :energy_level
      t.string :mood
      t.integer :cleanliness

      t.timestamps
    end
  end
end
