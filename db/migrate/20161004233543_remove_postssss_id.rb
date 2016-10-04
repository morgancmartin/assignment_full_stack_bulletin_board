class RemovePostssssId < ActiveRecord::Migration[5.0]
  def change
    remove_column :comments, :posts_id
  end
end
