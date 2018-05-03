class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :name
      t.string :color
      t.string :sprite
      t.string :type_of_item

      t.timestamps
    end
  end
end
