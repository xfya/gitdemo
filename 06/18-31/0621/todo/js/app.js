angular.module('myApp',[])

	.controller('todoCtrl',['$scope','$http',function($scope,$http){

		/*
			1.展示任务列表
				
				(1) 发送请求 获取数据
				(2) 将请求的数据展现到页面中

					注意：

						(1)请求的路径要相对于html文件
						(2)要以localhost方式浏览页面(ajax)

				
		 */
		
		// 存储任务列表的结果数组
		$scope.taskList = []; 
		
		// 请求数据 并展示到页面中
		$http({
			method:'get',
			url:'js/data.json'
		}).then(function(res){

			for(var i=0;i<res.data.length;i++){
				res.data[i].isEdit = false;
			}

			console.log(res.data)

			$scope.taskList = res.data;

		})

		/*
			2.添加任务

				(1) 获取任务名称
				(2) 点击回车 提交表单
				(3) 将当前任务放到任务列表中

		 */

		$scope.submitForm = function(){

			$scope.taskList.push({
				"id":Math.random(),
				"name":$scope.task,
				"isCompleted":false
			})

			$scope.task = '';

		}

		/*
			3.删除任务

				(1) 给删除按钮添加点击事件并将当前任务的ID传入事件函数中
				(2) 根据ID在结果数组中查找元素 并删除

		 */

		$scope.delete = function(id){

			for(var i=0;i<$scope.taskList.length;i++){

				if( $scope.taskList[i].id == id ){

					$scope.taskList.splice(i,1);

					break;

				}

			}

		}

		/*
			4.更改任务的状态( 未完成 已完成 )

				(1) 将 isCompleted 和 复选框进行绑定
				(2) 根据当前任务的 isCompleted 的值 来决定 当前的Li是否有completed 类名

		 */
		
		/*
			5.任务类型的过滤

				(1) 给过滤按钮添加点击事件
				(2) 利用filter过滤器 过滤数据

		 */
		
		$scope.condition = '';
		
		$scope.filterData = function(type){

			switch(type){

				case 'All':

					$scope.condition = '';

					break;

				case 'Active':

					$scope.condition = false;
					
					break;

				case 'Completed':

					$scope.condition = true;
					
					break;

			}

		}

		/*
			6.清除已完成

				(1) 给清除已完成按钮添加点击事件
				(2) 找到已完成的数据 并且删除

		 */
		
		/*
		
		['吃饭','睡觉','打豆豆']

			0      1       2

		['睡觉','打豆豆']

			0       1

		*/

		$scope.clearData = function(){

			for(var i=0;i<$scope.taskList.length;i++){

				if($scope.taskList[i].isCompleted){

					$scope.taskList.splice(i,1);

					i--;

				}

			}

		}


		/*
			7.修改任务名称

				1.给数据添加isEdit字段 代表当前任务是否是正在编辑状态
				2.给任务名称添加双击事件 并将任务ID传入函数
				3.将当前任务的isEdit字段设置为true
				4.根据isEdit字段来决定是否添加 editing类名
				5.将任务名称字段和input框做一个绑定
		
		 */

		$scope.modify = function(id){

			for(var i=0;i<$scope.taskList.length;i++){

				if($scope.taskList[i].id == id){

					$scope.taskList[i].isEdit = true;

				}else{

					$scope.taskList[i].isEdit = false;

				}

			}

		}

		$scope.blurFn = function(){

			for(var i=0;i<$scope.taskList.length;i++){

				$scope.taskList[i].isEdit = false;

			}

		}

		/*
			8.计算未完成任务的数量

		 */
		
		$scope.calcNum = function(){

			var num = 0;

			for(var i=0;i<$scope.taskList.length;i++){

				if(!$scope.taskList[i].isCompleted){

					num++;

				}

			}

			return num;

		}


		/*
			9.批量更改任务状态

				(1) 将全选按钮绑定一个数据
				(2) 将全选按钮绑定一个值改变事件 
				(3) 根据值来决定 任务列表的状态
			

		 */
		
		$scope.toggleStatus = function(){

			/*if($scope.toggle){

				for(var i=0;i<$scope.taskList.length;i++){
					$scope.taskList[i].isCompleted = true;	
				}

			}else{

				for(var i=0;i<$scope.taskList.length;i++){
					$scope.taskList[i].isCompleted = false;	
				}

			}*/


			/*for(var i=0;i<$scope.taskList.length;i++){

				if($scope.toggle){
					$scope.taskList[i].isCompleted = true;	
				}else{
					$scope.taskList[i].isCompleted = false;	
				}
				
			}*/

			for(var i=0;i<$scope.taskList.length;i++){

				$scope.taskList[i].isCompleted = $scope.toggle ? true : false;
				
			}


		}


		$scope.status = function(){

			for(var i=0;i<$scope.taskList.length;i++){

				if(!$scope.taskList[i].isCompleted){

					$scope.toggle = false;

					return;

				}

			}

			$scope.toggle = true;

		}


	}])
































