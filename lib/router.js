Router.configure({
  layoutTemplate: 'layout',
});

Router.route('main', {path: '/'});
Router.route('Article');
Router.route('contact');
Router.route('articles');
Router.route('chat');
Router.route('account');
Router.route('submitpost');
Router.route('forgotpassword');
Router.route('termsofservice');
Router.route('login');
Router.route('register');
Router.route('users');
Router.route('about');



/*
Router.route("news/:tag",
 {template:"news",
  data: function(){
		const tag = this.params.tag;
		console.log("looking up the tag: "+tag);
		console.log(tag=="all");
		if (tag=="all"){

			return {all:News.find()};
		}

    const pattern = new RegExp(tag,"i");
		console.log("pattern= "+pattern);
		const c =
		  Workouts.find({tag:pattern}).fetch();
			console.dir(c);
		return {all:c};
	}});

*/