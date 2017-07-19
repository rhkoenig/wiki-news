Template.articles.helpers({
  articles() {
    return Articles.find({}, {sort: {createdAt: -1}});
  }
})

Template.article.helpers({
  owner(a) {
    console.dir(a);
    console.log(Meteor.userId());
    return a.user == Meteor.userId();
  }
})

Template.articles.events({
  "click span#remove" (event, instance) {
    console.dir(this);
    Articles.remove(this.article._id);
  },

  "click #findtagsubmit" (event, instance) {
    console.log("Test1");
    var tagsearch = $("#findtag").val(); //Return search value
    var finaltagsearch = "/articles/" + tagsearch;
    console.log(tagsearch);
    Router.go(finaltagsearch);
  },





})
