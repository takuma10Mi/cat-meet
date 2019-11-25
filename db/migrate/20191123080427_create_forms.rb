class CreateForms < ActiveRecord::Migration[5.2]
  def change
    create_table :forms do |t|
      t.string :name          #名前
      t.string :email         #メール
      t.text :content         #メッセージの内容
      t.timestamps
    end
  end
end
