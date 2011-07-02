class CreateTodo < ActiveRecord::Migration
  def up
    create_table :my_todos do |t|
      t.date :due
      t.string :message

      t.timestamps
    end
  end

  def down
    drop_table :my_todos
  end
end
