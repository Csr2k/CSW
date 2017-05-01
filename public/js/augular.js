var app = angular.module("proApp",['ngResource'])
app.controller("ProCtrl", function($scope, $resource){
var Pro = $resource('/api/peoples/:pro_id',{pro_id: '@id'},
    { 
        update: {method:'PUT' } 
    })
    $scope.editPro = {}
    $scope.result = {}
    $scope.peoples = Pro.query()
    $scope.get = function(id) {
    Pro.get({pro_id:id}, function(pro) {
	$scope.result = pro
    console.log('ผลทายนิสัย : ' + pro.bg )
    })
    }   

    $scope.add =  function() {
    //  var givenBear = new Bear($scope.addPro)
    // givenBear.$save(function(data){ 
                //     console.log(data.message)                    
                // }) 

                Pro.save({name: $scope.addPro.name,
                         sex: $scope.addPro.sex, 
                         
                         bg: $scope.addPro.bg,
                         color: $scope.addPro.color
                        })
                $scope.peoples = Pro.query()
            }

            $scope.edit = function(id) {
                Pro.get({pro_id:id}, function(pro) {
                    $scope.editPro.id = id
                    $scope.editPro.name = pro.name
                    $scope.editPro.sex = pro.sex
                    
                    $scope.editPro.bg = pro.bg
                    $scope.editPro.color = pro.color
                    $scope.result = pro
                    $scope.message = 'Edited pro ' +  id
                    $scope.get(id)
                })
            }

$scope.edit = function(id) {
    pro.get({
      pro_id: id
    }, function(pro) {
      $scope.editPro.id = id
      $scope.editPro.name = pro.name
      $scope.editPro.sex = pro.sex
      $scope.editPro.bg = pro.bg
      $scope.editPro.color = color
      $scope.result = 'Edit pro ' + id
      console.log('result comment = ' +   $scope.result)
      $scope.get(id)
    })
  }

            $scope.update = function(id) {
                Pro.update( {pro_id: id}, { name: $scope.editPro.name,
                         					sex: $scope.editPro.sex, 
                         					bg: $scope.editPro.bg,
                         					color: $scope.editPro.color
                                              })                
                $scope.result = 'Update pro ' + id
                $scope.peoples = Pro.query()
                $scope.get(id)
            }

            $scope.delete = function(id) {
                Pro.delete( {pro_id: id})
                $scope.result = 'Delete pro ' + id
                $scope.peoples = Pro.query()
            }

            $scope.isEmpty = function(pro) {
                return Object.keys(pro).length == 0
            }

            $scope.select = function(id, pro) {
                return id == pro.id
            }

        })

