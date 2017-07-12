Template.account.helpers({
  accountlist(){return Profile.find({},{limit:20,sort:{age:-1}})},
})


Template.account.events({
  "click #js-submit"(event,instance){
    console.log("cool it did it");
    //if (Meteor.userId()!="Nu9A4gN9AEh3iMixm") return;
    var name = $("#js-name").val();
    var age = $("#js-age").val();
    var gender = $("#js-gender").val();
    var email = $("#js-email").val();
    //var x People.findOne({createdBy:Meteor.userId()})
    //People.remove(x._id);
    a = {name:name,
         age:age,
         gender:gender,
         email:email,
         updated: new Date(),

       };
    console.dir(a);
    Profile.insert(a);
  },
})
