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
      redirect_to @project, notice: "Update Successful"
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
    @projects = Project.all
  end

  def show
    @project = Project.find(params[:id])
    @project_images = @project.images
  end

  private 
    def project_params
      params.require(:project).permit(:title, :tags, :description, :cursor, :poster_image, images:[])
    end

    def find_project
      @project = Project.find(params[:id])
    end


end
