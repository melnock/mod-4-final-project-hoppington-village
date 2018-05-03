class CreateOutfits < ActiveRecord::Migration[5.2]
  def change
    create_table :outfits do |t|
      t.integer :pet_id
      t.integer :item_id

      t.timestamps
    end
  end
end
