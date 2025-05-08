define(['pipAPI','https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/iat10.js'], function(APIConstructor, iatExtension){
	var API = new APIConstructor();
    return iatExtension({
      attribute1 : {
			name : 'Male', //Will appear in the data.
			title : {
				media : {word : 'Male'}, //Name of the category presented in the task.
				css : {color:'#0000FF','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'Man'},
				{word: 'Son'},
				{word: 'Father'},
				{word: 'Boy'},
				{word: 'Uncle'},
				{word: 'Grandpa'},
				{word: 'Husband'},
				{word: 'Male'}	
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},	
		attribute2 :	{
			name : 'Female', //Will appear in the data.
			title : {
				media : {word : 'Female'}, //Name of the category presented in the task.
				css : {color:'#0000FF','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'Mother'},
				{word: 'Wife'},
				{word: 'Aunt'},
				{word: 'Woman'},
				{word: 'Girl'},
				{word: 'Female'},
				{word: 'Grandma'},
				{word: 'Daughter'}
			], 
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		category1 : 
		{
			name : 'Science', 
			title : {
				media : {word : 'Sustainable food'}, 
				css : {color:'#31940F','font-size':'1.8em'}, 
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'Green'},
				{word: 'Eco-friendly'},
				{word: 'Healthy'},
				{word: 'Nutritious'},
				{word: 'Ethical'},
				{word: 'Fairtrade'},
				{word: 'Animal-friendly'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'2.3em'} 
		},
		category2 : 
		{
			name : 'Liberal Arts', 
			title : {
				media : {word : 'Standard food'}, 
				css : {color:'#31940F','font-size':'1.8em'}, 
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'Conventional'},
				{word: 'Mainstream'},
				{word: 'Processed'},
				{word: 'Traditional'},
				{word: 'Commercial'},
				{word: 'Convenient'}, 
				{word: 'Normal'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'2.3em'}
		},
		isTouch : API.getGlobal().isTouch
    });
});
