class PagesController < ApplicationController


	def index
		# @projects = Project.order(:created_at)
		@projects = Project.order(:position)

		@top_projects = @projects.limit(4)
		@mid_projects = @projects.limit(4).offset(4)
		@special_project = @projects[8]
		# @special_project = @projects.offset(8).limit(1)
		@bottom_projects = @projects.limit(8).offset(9)  
	end

end
