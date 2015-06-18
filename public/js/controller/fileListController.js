var orgafileApp = angular.module('orgafilerApp', []).controller('FileListController', function($scope, FileFactory) {

    $scope.files = FileFactory.getAllFiles();

});