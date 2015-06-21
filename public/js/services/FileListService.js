angular.module('orgafilerApp', [])
    .service('FileListService', function ($http) {

        var FileListService = this;

        FileListService.getAllFiles = function () {

            return $http.get('/api/getFiles', {
                params: {"suffix": "png"}
            });

        };


    });