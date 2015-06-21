angular.module('orgafilerApp').controller('FileListController',
    ['$scope', 'FileListService', function ($scope, FileListService) {

    var vm = this;
    vm.files = [];

    vm.initFiles = function () {
        FileListService.getAllFiles()
            .success(function (data) {
                vm.files = data.files;
            });
    };
    vm.initFiles();
}]);