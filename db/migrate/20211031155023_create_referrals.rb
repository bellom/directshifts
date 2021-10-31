class CreateReferrals < ActiveRecord::Migration[6.1]
  def change
    create_table :referrals do |t|
      t.string :email
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
