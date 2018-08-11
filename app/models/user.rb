class User < ApplicationRecord

  # REMOVED :registerable, so that only one user may exist. 
  # place back below if you want to open up registation abilities again
  
  devise :database_authenticatable,
         :recoverable, :rememberable, :trackable, :validatable
end
