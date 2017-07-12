Template.friends.helpers({
  friendlist(){return people.find();},

})

Template.friends.events({
  "click #js-submit"(event,instance){
    console.log("hey it worked");
    var name = $("#js-name").val();
    var age = $("#js-age").val();
    var favcolor= $("#js-favcolor").val();
    p = {name:name,
         age:age,
         favcolor:favcolor,
         createdAt: new Date(),
         createdBy:Meteor.userId()
       };
    console.dir(p);
    People.insert(p);
  },
})
