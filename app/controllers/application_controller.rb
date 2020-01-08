class ApplicationController < ActionController::Base
	helper_method :bio_info


	private 
	
	def bio_info
		render html: '<p>Hui OY is a multidisciplinary designer based in New York. She has spent her life living in various cities: Surabaya, Indonesia; Taipei, Taiwan; San Francisco, U.S.A.; and now calls New York City her home. Hui has worked at places such as Apple, 2×4, Siegel+Gale, and her work has been recognized by the Type Directors Club and Art Director’s Club Chinese Young Guns. Currently, she is going through a lot of underground feminist comix, listening to occult podcasts, and making essential oil blends.</p>'.html_safe
	end

end
