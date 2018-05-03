class User < ApplicationRecord
  has_one :pet
  has_one :animal, through: :pets
  
end
