class BiosController < ApplicationController

	def new 
		@bio = Bio.new
	end

	def create
		@bio = Bio.create(bio_params)
		if @bio.update(bio_params)
		
	    else
	      render 'edit'
	    end
	end 

	def edit
		@bio = Bio.find(params[:id])
	end 	

	private

	def bio_paramas
		params.require(:bio).permit(:copy)
	end
end
