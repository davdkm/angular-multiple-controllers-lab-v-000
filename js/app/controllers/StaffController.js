function StaffController() {
  vm = this;
  vm.name = 'Bill Gates';
  vm.phone = '555-555-0987';
  vm.email = 'bill@microsoft.com';
}

angular
  .module('app')
  .controller('StaffController', StaffController);
