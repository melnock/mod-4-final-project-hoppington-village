class Item < ApplicationRecord
  serialize :coordinates, Hash
  has_many :outfits
  has_many :pets, through: :outfits

end
