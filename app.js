var app= angular.module("TodoApp",[]);


app.controller("TodoController", function($scope){

    $scope.todos = [
        {
            "ad":"yapılacak " ,
            "isDone":false
         },
         {
             "ad":"deneme 1-2",
             "isDone":true
         }
    ];
    $scope.NewTodo = function (){
        $scope.todos.push({
            "ad":$scope.todo,
            "isDone":false
        });
        $scope.todo= "";
    }
    $scope.DeleteTodos = function (){
        $scope.todos = $scope.todos.filter(function(item){
            return !item.isDone;
        })
    }

})