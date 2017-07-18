Template.chat.onCreated(function(){
  this.radius= new ReactiveVar(1000);
  this.location = new ReactiveVar({lat:0,lng:0});
  var loc = this.location;
  navigator.geolocation.getCurrentPosition(function(position) {
    var z = {lat:position.coords.latitude, lng:position.coords.longitude};
    console.dir(z);
    loc.set(z);
});
})

Template.chat.helpers({
  pos(){var pos = Template.instance().location.get();
  console.log(JSON.stringify(pos));
  if (pos)
    return pos;
  else {
    return {lat:0,lng:0}
  }},

  chatlines: function(){
    // return the last five chats
    // sorted by when they were created (most recent, first)
    var instance = Template.instance();
    console.log(instance.radius.get());
    var z = instance.location.get();
    if (!z) z={lat:0,lng:0}
    return Chats.find(
      {pos:{$near:
             {$geometry:
                {type:"Point",
                  coordinates:[z.lat,z.lng]},
                $maxDistance:instance.radius.get()*1000}}},
      {limit:20,
              sort: {createdAt: -1}})},

})


Template.chat.events({
  "change #js-radius"(event,instance){
        const radius = parseFloat($("#js-radius").val());  // read the user's chat text ...
        instance.radius.set(radius);
        console.log(instance.radius.get());
  },

  "click .js-chatsubmit": function(event){
    event.preventDefault();
    console.log("News submitted")
    const theText = $(".js-chatinput").val();  // read the user's chat text ...

    const chatline = {text:theText, createdAt:new Date(), createdBy:Meteor.userId()};
    Chats.insert(chatline);
  },

})
