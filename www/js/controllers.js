angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$http) {

  $scope.SignUp = function (userdata) {

    var request = $http({
        method: "post",
        url: "http://localhost/ionic/signup.php",
        crossDomain : true,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        data: {
            username: userdata.username,
            email: userdata.email,
            password: userdata.password,
            gender:userdata.gender
        },
    });
        request.success(function(data) {
        if(data == "1"){
         $scope.responseMessage = "Account Created Successfully!";
        }
        if(data == "2"){
         $scope.responseMessage = "Can not Create Account";
        }
        else if(data == "0") {
         $scope.responseMessage = "Email Already Exists"
        }  
    });
}


})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
