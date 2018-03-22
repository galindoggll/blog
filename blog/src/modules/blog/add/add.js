(function () {
    'use strict';

    angular
        .module('blog')
        .controller('AddBlogController', AddBlogController);

    function AddBlogController($state, blogService) {
        var vm = this;

        vm.addBlog = addBlog;

        /////////////////////

        function addBlog() {
            var blogCount = blogService.getPosts().length;
            var blog = {};

            Object.keys(vm.blog).map(function (key) {
                blog[key] = vm.blog[key];
            });
            blog.id = blogCount + 1;
            blog.likes = 0;
            blog.comments = [];

            blogService.addBlog(blog);
            $state.go('manage');
        }
    }
})();