class CreateAnimals < ActiveRecord::Migration[5.2]
  def change
    create_table :animals do |t|
      t.string :name
      t.string :sprites
      t.integer :hunger_level
      t.integer :energy_level
      t.string :mood
      t.integer :cleanliness

      t.timestamps
    end
  end
end
