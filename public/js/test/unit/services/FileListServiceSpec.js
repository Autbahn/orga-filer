describe("FileListService Test", function () {

    var service, $httpBackend, fileRequestHandler, allFiles = ['file1.png', 'file2.png'];


    beforeEach(
        module("orgafilerApp")
    );

    beforeEach(function () {

        inject(function ($injector) {
            service = $injector.get("FileListService");

            $httpBackend = $injector.get('$httpBackend');
            fileRequestHandler = $httpBackend.when('GET', '/api/getFiles')
                .respond({files: allFiles});
        });
    });

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe("When call getFiles", function () {
        it("it should return an array with 3 files", function () {
            $httpBackend.expectGET('/api/getFiles');

            service.getAllFiles().success(function (data) {
                expect(data.files).toBeDefined();
                expect(data.files).toEqual(allFiles);
            });

            $httpBackend.flush();
        });
    });
});