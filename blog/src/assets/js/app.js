var routerApp = angular.module('blog', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('manage', {
            url: '/blog-manage',
            templateUrl: 'blog/manage/manage.html',
            controller: 'ManageBlogController',
            controllerAs: 'vm'
        })
        .state('add', {
            url: '/blog-add',
            controller: 'AddBlogController',
            controllerAs: 'vm',
            templateUrl: 'blog/add/add.html'

        })
        .state('view', {
            url: '/view/:blogId',
            controller: 'ViewBlogController',
            controllerAs: 'vm',
            templateUrl: 'blog/view/view.html'

        });

});
