angular.module('orgafilerApp', []).factory('FileFactory', function() {

    return {
        getAllFiles: function() {

            $http.get('/getFiles').success(function(data, status, header, config) {
                return data;
            });

        }
    };

});