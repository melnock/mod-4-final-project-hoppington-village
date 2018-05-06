class Animal < ApplicationRecord
  serialize :sprites, Hash
  has_many :pets
  has_many :users, through: :pets

end
