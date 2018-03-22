(function () {
    'use strict';

    angular
        .module('blog')
        .factory('blogService', blogService);

    function blogService() {
        var mockBlog = [
            {
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
                "likes": 20,
                "comments": []
            },
            {
                "id": 2,
                "title": "qui est esse",
                "body": "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
                "likes": 15,
                "comments": [
                    {'id': 1, 'blogId':2, 'comment': 'est rerum tempore vitae', 'likes': 3},
                    {'id': 2, 'blogId':2, 'comment': 'est rerum vitae', 'likes': 6},
                    {'id': 3, 'blogId':2, 'comment': 'tempore vitae', 'likes': 5}
                ]
            },
            {
                "id": 3,
                "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                "body": "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut",
                "likes": 3,
                "comments": [
                    {'id': 1, 'blogId':3, 'comment': 'est rerum tempore vitae', 'likes': 0},
                    {'id': 2, 'blogId':3, 'comment': 'est rerum vitae', 'likes': 1}
                ]
            }
        ];

        return {
            addBlog: addBlog,
            addComments: addComments,
            addLikes: addLikes,
            deleteBlog: deleteBlog,
            getBlog: getBlog,
            getPosts: getPosts,
            likeComment: likeComment,
            updateBlog: updateBlog
        };

        ////////////////

        function addBlog(blog) {
            mockBlog.push(blog);
        }

        function addComments(id, comment) {
            mockBlog.forEach(function (blog) {
                if (blog.id === parseInt(id)) {
                    blog.comments.push(comment);
                }
            });
        }

        function addLikes(id) {
            mockBlog.forEach(function (blog) {
                if (blog.id === parseInt(id)) {
                    blog.likes += 1;
                }
            });
        }

        function deleteBlog(id) {
            mockBlog.splice(id, 1);
        }

        function getBlog(id) {
            var blog = {};
            mockBlog.forEach(function (tempBlog) {
                if (tempBlog.id === parseInt(id)) {
                    blog = tempBlog;
                }
            });
            return blog;
        }

        function getPosts() {
            return mockBlog;
        }

        function likeComment(blogId, commentId) {
            mockBlog.forEach(function(blog) {
                blog.comments.forEach(function(comment) {
                    if (blog.id === parseInt(blogId)) {
                        if (comment.id === parseInt(commentId)) {
                            comment.likes += 1;
                        }
                    }
                });
            });
        }

        function updateBlog(blog) {
            mockBlog.forEach(function (tempBlog) {
               if (tempBlog.id === blog.id) {
                   tempBlog.title = blog.title;
                   tempBlog.body = blog.body;
               }
            });
        }
    }
})();
