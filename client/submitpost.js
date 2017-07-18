Template.submitpost.onCreated(function(){
  this.location = new ReactiveVar(null);
  var loc = this.location;
  navigator.geolocation.getCurrentPosition(function(position) {
    var z = {lat:position.coords.latitude, lng:position.coords.longitude};
    console.dir(z);
    loc.set(z);
});

})






Template.submitpost.helpers({
  chatlines: function(){
    // return the last five chats
    // sorted by when they were created (most recent, first)
    return Chats.find({},
                      {limit:20,
                        sort: {createdAt: -1}})},
  position(){
    var instance = Template.instance();
    console.dir(instance);
    return instance.location.get();
  },


  now(){return new Date()},

})

Template.submitpost.events({
  "click #js-chatsubmit": function(event){
    event.preventDefault();
    console.log("News submitted")
    var theTitle = $("#js-posttitle").val();  // read the user's post title ...
    var theText = $("#js-chatinput").val();  // read the user's chat text ...
    var lat = $("#js-lat").val();
    var lng = $("#js-lng").val();
    var pos = {type:"Point",coordinates:[lat,lng]};
    var chatline = {title:theTitle, text:theText, pos:pos, createdAt:new Date(), createdBy:Meteor.userId()};
    console.log(theText);


    Chats.insert(chatline);
    //Resets all textboxes
    $('#js-posttitle').val('');
    $('#js-chatinput').val('');
    //Creates a fading alert
    $(".alert").removeClass("in").show();
	  $(".alert").delay(400).addClass("in").fadeOut(9500);
  },

})
