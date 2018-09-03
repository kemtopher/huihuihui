class RemovePositionFromAttachments < ActiveRecord::Migration[5.2]
  def change
    remove_column :active_storage_attachments, :position, :integer
  end
end
