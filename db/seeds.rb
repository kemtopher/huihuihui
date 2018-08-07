# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Project.delete_all
projects = Project.create([
	{ 	title: 'Droppin Millibars',
		tags: 'Label Artwork',
		description: 'Beer label design for Droppin Millibars, a seasonal stout from Brooklyn-based brewery, Other Half.' 
	}, 
	{ 	title: 'Parasite Museum',
		tags: 'Brand Identity',
		description: 'Brand identity for a museum that focuses on the world of parasites. The identity reflects on the concept  of a parasitic relationship and the spacial quality of a museum.' 
	},
	{ 	title: 'Apple',
		tags: 'Various',
		description: 'Feel free to reach out for samples of work done during my time at Apple’s Marketing Communications Team.' 
	},
	{ 	title: 'About The Work',
		tags: 'Label Artwork',
		description: 'Wordmark and identity design for a development management company based in New York. In addition to that, we also designed and built a responsive website for the project <a href="www.atworkllc.com">www.atworkllc.com</a> ' 
	},
	{ 	title: 'Banned China Film Festival',
		tags: 'Brand Identity',
		description: 'Brand identity for The Banned China Film Festival, an annual film festival that showcases Chinese films that are banned in the People’s Republic of China.' 
	},
	{ 	title: "Eleni’s Cookies",
		tags: 'Art Direction, Identity',
		description: 'We helped Eleni’s Cookies launch a photographic campaign for their line of Color Me! Cookies. The art direction revolves around the idea that the cookies come to life through the creation of art.' 
	},
	{ 	title: 'Daily Headlines',
		tags: 'Editorial Design',
		description: "Daily Headlines is a project that re-imagines newspaper design using typographic illustration. News headlines from online sources are referenced each day and then expressed graphically with typography, latent with subtle commentary. Using the illustrations and the original article copy, a printed newspaper was designed out of digital content. This project was recognized by the Type Director's Club 61 for Student Award Winner, First Place."
	},
	{ 	title: '3D Work',
		tags: 'Motion Graphics, Image Making',
		description: 'Some work and experiments made with Cinema 4D and Maya. More to come!' 
	},
	{ 	title: 'Boston Prep',
		tags: 'Brand Identity, Environment Design',
		description: 'Boston Prep is a charter school in Boston that is expanding into a new campus, for which we were asked to develop the environmental graphics. Using existing brand guidelines, we extended the visual brand language by incorporating patterns, typographical treatments, and illustrations, while working closely with the school, architects and vendors. Project is still ongoing.' 
	},
	{ 	title: 'Squoval Sans',
		tags: 'Typeface Design',
		description: 'Typeface whose counters are inspired by the squoval nail. Still in progress.' 
	},
	{ 	title: 'Seasense Stationery',
		tags: 'Brand Identity',
		description: 'Identity and stationery system for a luxury yacht client.' 
	},
	{ 	title: 'Choking Victim Poster',
		tags: 'Poster Design',
		description: 'My interpretation of the ubiquitous and mandatory choking victim poster.' 
	},
	{ 	title: 'Baby Making Music Fortunes',
		tags: 'Concept, Packaging Design',
		description: 'My friend Shirley and I are very interested in the dialogue of our heritage: being Asian American and growing up in the 90s. So we decided to combine the two into our very own RnB fortune cookies. We baked the cookies ourselves, experimenting with the batter and flavoring, and created our own fortunes to slip into the cookies. We also sourced, designed and produced our own packaging. The final product, we hope, is the highest epitome of corny cultural references in edible form.' 
	},
	{ 	title: 'Nightsnack Club Totebags',
		tags: 'Totebag Design',
		description: 'With my partner in crime Shirley, we decided to call our burgeoning artistic activities Nightsnack Club and decided to print some totebags commemorating the decision.' 
	},
	{ 	title: 'Runaway Inequality Flyer',
		tags: 'Editorial Design',
		description: 'Proposed design for a flyer educating the public about the devastating effects of runaway equality to society.' 
	}, 
	{ 	title: 'Event Posters',
		tags: 'Poster Design',
		description: 'Screen printed posters for various music events.' 
	},
	{ 	title: 'Tri It At Home Cookbooks',
		tags: 'Book Design',
		description: 'A trilogy of cookbooks based on triangular shaped foods. The chemistry of cooking and the chemistry of colors. A record of the cooking (and waiting) process.' 
	}
])
