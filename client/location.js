Template.location.onCreated(function(){
  this.location = new ReactiveVar(null);
  var loc = this.location;
  navigator.geolocation.getCurrentPosition(function(position) {
    var z = {lat:position.coords.latitude, lng:position.coords.longitude};
    console.dir(z);
    loc.set(z);
});

})

Template.location.helpers({
  position(){
    var instance = Template.instance();
    console.dir(instance);
    return instance.location.get();
  }
})
