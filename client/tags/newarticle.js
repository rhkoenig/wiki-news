Template.newarticle.events({
	"click #js-submit" (event, instance) {
    event.preventDefault();
		console.log("Test1");
		var title = $("#js-title").val(); //Title of the post
		var thepost = $("#js-thepost").val(); //The actual news post
		var tag = $("#js-tags").val(); //Tag System (General)

		p = { //Generates input information
			title: title,
			thepost: thepost,
			tag: tag,
			createdAt: new Date(),
			userpost: Meteor.userId()
		};

    console.log("Test2");
		console.dir(p);
		Articles.insert(p); //Inserts the information
    console.log("Test3");

    //Alerts System
    $(".alert").removeClass("in").show();
    $(".alert").delay(400).addClass("in").fadeOut(9500);
  },
})
