(function () {
    'use strict';

    angular
        .module('blog')
        .controller('ViewBlogController', ViewBlogController);

    function ViewBlogController($state, $stateParams, blogService) {
        var vm = this;

        vm.addComment = addComment;
        vm.checkComment = checkComment;
        vm.deleteBlog = deleteBlog;
        vm.likeComment = likeComment;
        vm.likeBlog = likeBlog;

        activate();

        /////////////////////

        function activate() {
            vm.blog = blogService.getBlog($stateParams.blogId);
        }

        function addComment() {
            var comment = {};
            comment.blogId = $stateParams.blogId;
            comment.id = vm.blog.comments.length + 1;
            comment.comment = vm.comment;
            comment.likes = 0;
            blogService.addComments($stateParams.blogId, comment);
            $state.reload();
        }
        
        function checkComment() {
            if (vm.comment === null || vm.comment === '') {
                return true;
            } else {
                return false;
            }
        }

        function deleteBlog(id) {
            blogService.deleteBlog(id);
            $state.go('manage');
        }

        function likeBlog(id) {
            blogService.addLikes(id);
            $state.reload();
        }

        function likeComment(blogId, commentId) {
            blogService.likeComment(blogId, commentId);
            $state.reload();
        }

    }
})();