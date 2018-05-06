class Pet < ApplicationRecord
  belongs_to :user
  belongs_to :animal
  has_many :outfits
  has_many :items, through: :outfits
  
end
