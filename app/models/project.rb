class Project < ApplicationRecord
	extend FriendlyId
	friendly_id :title, :use => :slugged
	validates :title, :tags, :description, presence: true
	
	has_many_attached :images
	has_one_attached :cursor
	has_one_attached :poster_image


	## GET THE NEXT AND PREVIOUS PROJECTS
	
	# def next
	# 	Project.where("id > ?", id).order("id ASC").first || Project.first
	# end 

	# def prev
	# 	Project.where("id < ?", id).order("id DESC").first || Project.last
	# end


	## PROJECTS NOT LOOPING FROM END TO BEGINNING 
	## PROJECTS ALLOWING IN-ACTIVE PRODUCTS TO SORT
	def next
		Project.where("position > ?", position).order("position ASC").first || Project.first
	end 

	def prev
		Project.where("position < ?", position).order("position DESC").first || Project.last
	end

end
