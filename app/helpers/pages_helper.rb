module PagesHelper


	def data_cursor_url(val)
		if (val)
			rails_blob_path( val, disposition: "attachment", only_path: true )
		else
			ActionController::Base.helpers.asset_url('cursor_default.png')
		end
	end 


	def data_poster_url(val)
		if (val)
			rails_blob_path( val, dispostition: "attachment", only_path: true )
		else
			ActionController::Base.helpers.asset_url('poster_default.png')
		end
	end

end
