class PagesController < ApplicationController
  include Rails.application.routes.url_helpers


  
  def index
  	@projects = Project.all
  	# @top_projects = @projects[0..3]
  	# @mid_projects = @projects[4..8]
  	# @special_project = Project.find(9)
  	# @bottom_projects = @projects[10..17]

  	@top_projects = @sorted.limit(4)
  	@mid_projects = @sorted.offset(4).limit(4)
  	@special_project = @sorted[8]
  	@bottom_projects = @sorted.offset(9).limit(8)  
  end


  
  

end
