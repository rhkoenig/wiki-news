Template.submitpost.helpers({
  chatlines: function(){
    // return the last five chats
    // sorted by when they were created (most recent, first)
    return Chats.find({},
                      {limit:20,
                        sort: {createdAt: -1}})},

})


Template.submitpost.events({
  "click #js-chatsubmit": function(event){
    event.preventDefault();
    console.log("News submitted")
    var theText = $("#js-chatinput").val();  // read the user's chat text ...
    var chatline = {text:theText, createdAt:new Date(), createdBy:Meteor.userId()};
    console.log(theText);
    Chats.insert(chatline);
  },

})
