Template.newsall.helpers({
  workouts() {
    return Workouts.find({
      tag: /ab/i
    });
  }
})

Template.news.helpers({
  owner(w) {
    console.dir(w);
    console.log(Meteor.userId());
    return w.user == Meteor.userId();
  }
})

Template.news.events({
  "click span#remove" (event, instance) {
    console.dir(this);
    Workouts.remove(this.workout._id);
  }
})
