Template.article.helpers({
  articlelist(){return people.find();},

})

Template.article.events({
  "click #js-submit"(event,instance){
    console.log("hey it worked");
    var Title = $("#js-Title").val();
    var Content = $("#js-Content").val();
    var Author= $("#js-Author").val();
    p = {Title:Title,
         Content:Content,
         Author:Author,
         createdAt: new Date(),
         createdBy:Meteor.userId()
       };
    console.dir(p);
    People.insert(p);
  },
})
