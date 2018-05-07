class AddCoordinatesColumnToItems < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :coordinates, :text
  end
end
