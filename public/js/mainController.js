nodeTodo.controller('mainController', function ($scope, $http) {
  $scope.formData = {};
  $scope.todos = [];
  $scope.cos = "Damiaś";

  // when landing on the page, get all todos and show them
  $http
    .get("/api/todos")
    .success(function(data) {
      $scope.todos = data;
    })
    .error(function(data) {
      console.log("Error: " + data);
    });

  // when submitting the add form, send the text to the node API
  $scope.createTodo = function() {
    $http
      .post("/api/todos", $scope.formData)
      .success(function(data) {
        document.getElementById("newTodo").value = "";
        $scope.todos = data;
      })
      .error(function(data) {
        console.log("Error: " + data);
      });
  };

  // update a todo after checking it
  $scope.updateTodo = function(id, done) {

    $http({ method: 'PATCH', url: "/api/todos/" + id, data: JSON.stringify({done: done}), headers: {'Content-Type': 'application/json'}})
    .success(function(data) {
      $scope.todos = data;
    })
    .error(function(data) {
      console.log("Error: " + data);
    });

  };

  // delete a todo after checking it
  $scope.deleteTodo = function(id) {
    $http
      .delete("/api/todos/" + id)
      .success(function(data) {
        $scope.todos = data;
      })
      .error(function(data) {
        console.log("Error: " + data);
      });
  };
})
