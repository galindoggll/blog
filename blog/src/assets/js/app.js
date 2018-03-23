var routerApp = angular.module('blog', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('manage', {
            url: '/',
            controller: 'ManageBlogController',
            controllerAs: 'vm',
            templateUrl: 'blog/manage/manage.html'
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
