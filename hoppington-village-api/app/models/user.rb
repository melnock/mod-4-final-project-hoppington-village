class User < ApplicationRecord
  has_secure_password
  has_one :pet
  has_one :animal, through: :pets

end
