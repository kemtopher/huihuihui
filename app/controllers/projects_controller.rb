class ProjectsController < ApplicationController
	before_action :find_project, only: [ :show, :edit, :update, :destroy]

  def new
    @project = Project.new
  end

  def create
    @project = Project.new(project_params)
    if @project.save
      redirect_to projects_new_path
    else
      render :new
    end 
  end

  def update
    if @project.update(project_params)
      redirect_to projects_path, notice: "Update Successful"
    else
      render 'edit'
    end
  end

  def edit
  end

  def destroy
    @project.destroy
    redirect_to root_path, notice: "Project Destroyed"
  end

  def index
    @projects = Project.order(:position)
  end

  def sort
    params[:project].each_with_index do |id, index|
      Project.where(id: id).update_all(position: index + 1)
    end
  end

  def show
    @project = Project.friendly.find(params[:id])
    @project_images = @project.images
  end

  private 
    def project_params
      params.require(:project).permit(:title, :tags, :description, :cursor, :poster_image, images:[])
    end

    def find_project
      @project = Project.friendly.find(params[:id])
    end


end
