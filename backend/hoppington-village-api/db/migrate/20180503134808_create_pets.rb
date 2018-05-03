class CreatePets < ActiveRecord::Migration[5.2]
  def change
    create_table :pets do |t|
      t.integer :user_id
      t.integer :animal_id

      t.timestamps
    end
  end
end
