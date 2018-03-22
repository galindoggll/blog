(function () {
    'use strict';

    angular
        .module('blog')
        .controller('ManageBlogController', ManageBlogController);

    function ManageBlogController($state, blogService) {
        var vm = this;

        vm.addBlog = addBlog;
        vm.addComment = addComment;
        vm.addLike = addLike;
        vm.viewBlog = viewBlog;


        activate();

        function activate() {
            vm.isAddComment = false;
            vm.isShowComments = false;
            vm.allPosts = blogService.getPosts();
        }

        function addBlog() {
            $state.go('add');
        }

        function addComment(id) {
            blogService.addComments(id);
            $state.go('manage');
        }

        function addLike(id) {
            blogService.addLikes(id);
            $state.go('manage');
        }

        function viewBlog(id) {
            $state.go('view', { blogId: id });
        }
    }
})();