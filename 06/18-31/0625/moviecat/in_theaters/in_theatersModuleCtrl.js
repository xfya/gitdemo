angular.module('myApp.in_theatersModuleCtrl',[])

	.controller('in_theatersCtrl',['$scope','$http','myService','$routeParams','$location',function($scope,$http,myService,$routeParams,$location){

		/*$http({
			url:'./js/in_theaters.json',
			method:'get'
		}).then(function(res){

			$scope.result = res.data;

			console.log(res.data)
	
		})*/

		/*
			angular.callbacks._0

			豆瓣不支持函数名字带点的形式

		 */

		/*$http.jsonp('https://api.douban.com/v2/movie/in_theaters').then(function(res){

			console.log( res )

		})
		*/
	
		/*
			$location 页面跳转

			$location.path() 获取路径
			$location.path('路径') 设置路径

		 */
		
		// 获取页码
		var page = Number($routeParams['page']);

		/*1 0 10
		2 10 10
		3 20 10*/
		
		var count = 10;

		var start = page*count-count;

		var totalPage = 0;


		
		// 发送请求获取数据
		myService.myJsonp('https://api.douban.com/v2/movie/in_theaters',{
			count:count,
			start:start
		},function(res){

			// 将数据展现到页面中
			$scope.result = res;

			console.log(res);

			// 计算总页数
			totalPage = Math.ceil(res.total/count)

			// 通知angular更新数据
			$scope.$apply();

		});

		// 改变页码
		$scope.changePage = function(type){

			if(type == 'up'){

				// 上一页
				page = page - 1;

				if(page < 1){
					page = 1;
				}

				$location.path('/in_theaters/' + page)


			}else if(type == 'down'){

				// 下一页
				page = page + 1;

				if(page > totalPage){

					page = totalPage;

				}

				$location.path('/in_theaters/' + page)
 
			}

		}


	}])