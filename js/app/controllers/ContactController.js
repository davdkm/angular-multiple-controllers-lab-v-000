function ContactController() {
  var vm = this;
  vm.name = 'Steve Jobs';
  vm.phone = '555-555-1234';
  vm.email = 'steve@apple.com';

  this.changeName = function() {
    vm.name = 'Something else!';
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController);
