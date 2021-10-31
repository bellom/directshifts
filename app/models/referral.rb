class Referral < ApplicationRecord
  belongs_to :user
  validates_presence_of :email
  validates_uniqueness_of :email
  validates_presence_of :user_id
end
