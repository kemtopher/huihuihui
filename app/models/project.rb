class Project < ApplicationRecord
	validates :title, :tags, :description, presence: true

	has_many_attached :images
	has_one_attached :cursor
	has_one_attached :poster_image


	def next
		Project.where("id > ?", id).order("id ASC").first || Project.first
	end 

	def prev
		Project.where("id < ?", id).order("id DESC").first || Project.last
	end

end
