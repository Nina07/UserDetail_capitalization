class User < ApplicationRecord
	validates :first_name, :last_name, :occupation, :address, :phone, presence: true
end
