class ProjectsController < ApplicationController
	before_action :find_project, only: [ :show, :edit, :update, :destroy ]
  # before_action :must_be_admin, only: [ :destroy, :create, :new ]
  before_action :authenticate_user!, :except => [:show]

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
      # redirect_to projects_path, notice: "Update Successful"
      redirect_back fallback_location: projects_path
    else
      render 'edit'
    end
  end

  def edit
  end

  def destroy
    @project.destroy
    redirect_to projects_path, notice: "Project Destroyed"
  end

  def delete_image_attachment
    @image = ActiveStorage::Attachment.find(params[:id])
    @image.purge
    redirect_back fallback_location: projects_path
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
    # def must_be_admin
    #   unless current_user
    #     redirect_to new_user_session_path, notice: "Admin Needed."
    #   end
    # end

    def project_params
      params.require(:project).permit( :title, :tags, :description, :cursor, :poster_image, images:[] )
    end

    def find_project
      @project = Project.friendly.find(params[:id])
    end


end
