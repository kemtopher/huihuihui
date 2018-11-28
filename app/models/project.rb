class Project < ApplicationRecord
	extend FriendlyId
	friendly_id :title, :use => :slugged
	validates :title, :tags, :description, presence: true

	has_one_attached :cursor
	has_one_attached :poster_image
	has_many_attached :images

	## PROJECTS NAVIGATION LOOPS AT END AND BEGINNING 

	def next
		Project.where(:position => 1..17).where("position > ?", position).order(position: :asc).first || Project.where(:position => 1..17).order(position: :asc).first
	end 

	def prev
		Project.where(:position => 1..17).where("position < ?", position).order(position: :desc).first || Project.where(:position => 1..17).order(position: :desc).first
	end
end
