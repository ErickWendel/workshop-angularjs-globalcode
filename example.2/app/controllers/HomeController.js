(function (angular) {
    //criamos um modulo para controller
    //passamos para a controller uma funcao
    //e a string com o nome
    angular.module('controllers.homeController', [])
        .controller('HomeCtrl', HomeCtrl);
        
        function HomeCtrl() {
            var vm = this;
            vm.pessoas = [
                {
                    "Nome": "Erick",
                    "Sexo": "Masculino",
                    "Email": "erick@zl.com"
                },
                {
                    "Nome": "Carla",
                    "Sexo": "Feminino",
                    "Email": "carla@zl.com"
                },
                {
                    "Nome": "Jose",
                    "Sexo": "Masculino",
                    "Email": "jose@zl.com"
                }
            ];
            listar();
            vm.salvar = salvar;
            vm.remover = remover;
            function remover(id) {
                vm.pessoas.splice(id, 1);
            }


            function salvar() {
                var usuario = vm.usuario;
                vm.pessoas.push(usuario);
                var obj = JSON.stringify(usuario);
                // localStorage.setItem("usuario", vm.pessoas);
                vm.usuario = {};
            }
            function listar() {
                // var usuarios = localStorage.getItem("usuario");
                // var usuariosJson = JSON.parse(usuarios);
                // vm.pessoas.push(usuariosJson);
            }
        }

})(angular);