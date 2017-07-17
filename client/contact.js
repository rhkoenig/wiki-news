Template.contact.events({
  "click #js-bugsubmit": function(event){
    event.preventDefault();
    console.log("bug repported")
    $(".alert").removeClass("in").show();
    $(".alert").delay(400).addClass("in");
    $('#js-yum').val('');
  },

})
