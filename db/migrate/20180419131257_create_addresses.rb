class CreateAddresses < ActiveRecord::Migration[5.1]
  def change
    create_table :addresses do |t|
      t.belongs_to :contact
      t.float :latitude, null: false, default: '49.8326241'
      t.float :longitude, null: false, default: '23.9968828'

      t.timestamps
    end
  end
end
