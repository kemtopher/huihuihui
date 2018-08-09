class AddPositionToProject < ActiveRecord::Migration[5.2]
  def change
    add_column :projects, :position, :string
    add_column :projects, :integer, :string
  end
end
