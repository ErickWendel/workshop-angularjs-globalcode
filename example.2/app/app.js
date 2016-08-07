(function inicia(angular) {
    //criamos um modulo e passamos como parametro as dependencias
    angular.module('app', ['controllers', 'ui.router']);
    angular.module('controllers', ['controllers.homeController']);
    // angular.module('services', []);

    angular.module('app')
        .config(function
                ($stateProvider) {
                    $stateProvider
                        .state('home', {
                            url: '/home',
                            controller: "HomeCtrl",
                            //colocamos o atributo
                            //para trabalhar com o contexto da pagina
                            // e usar a palavra chave this
                            controllerAs: "vm",
                            templateUrl: "app/templates/home.html"
                        });
        });

})(angular);