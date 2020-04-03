/**
 * 得到各个账号的收益情况
 * @param exports
 * @returns
 */

layui.define(function(exports) {
			var admin = layui.admin;
			
			// 访问量
			layui.use(
				[ 'carousel', 'echarts' ],
				function() {
					var $ = layui.$, carousel = layui.carousel, echarts = layui.echarts;
					var myDate = new Date();
				
					var m = new Array([ 10 ]);
					var d = new Array([ 10 ]);
					var y = new Array([ 10 ]);
					for (var i = 9, o = 0; i >= 0; i--, o++) {
						
						var today = new Date();
						var nowTime = today.getTime();
						var ms = 24 * 3600 * 1000 * o;
						today.setTime(parseInt(nowTime - ms));
						var oYear = today.getFullYear();
						var oMoth = (today.getMonth() + 1).toString();
						if (oMoth.length <= 1)
							oMoth = '0' + oMoth;
						var oDay = today.getDate().toString();
						if (oDay.length <= 1)
							oDay = '0' + oDay;
                        d[i]=oDay;
                        m[i]=oMoth;
                        y[i]=oYear;
					}

					var echartsApp = [], options = [ {
						tooltip : {
							trigger : 'axis'
						},
						calculable : true,
						legend : {
							data : [ '最近10天收益' ]
						},

						xAxis : [ {
							show : true,
							type : 'category',
							
						 data :
							[y[0]+'年'+m[0]+'月'+d[0]+'日',
							 y[1]+'年'+m[1]+'月'+d[1]+'日',
							 y[2]+'年'+m[2]+'月'+d[2]+'日',
							 y[3]+'年'+m[3]+'月'+d[3]+'日',
							 y[4]+'年'+m[4]+'月'+d[4]+'日',
							 y[5]+'年'+m[5]+'月'+d[5]+'日',
							 y[6]+'年'+m[6]+'月'+d[6]+'日',
							 y[7]+'年'+m[7]+'月'+d[7]+'日',
							 y[8]+'年'+m[8]+'月'+d[8]+'日',
							 y[9]+'年'+m[9]+'月'+d[9]+'日'
							 ],
						 //强制显示过长标签方法
						axisLabel : {
							show : true,
							interval : 0,
							rotate : "25",
						}
						} ],
						yAxis : [ {
							type : 'value',
							name : '最近10天收益',
							axisLabel : {
								formatter : '{value} '
							}
						}

						],
						series : [ {
							name : '访问量',
							type : 'bar',
							data : [900, 850, 950, 1000, 1100,
									1050, 1000, 1150, 1250, 1370,
									1250, 1100]
						}

						]
					} ], elemDataView = $('#LAY-index-pagetwo')
							.children('div'), renderDataView = function(
							index) {
						echartsApp[index] = echarts.init(
								elemDataView[index],
								layui.echartsTheme);
						echartsApp[index].setOption(options[index]);
						window.onresize = echartsApp[index].resize;
					};
					// 没找到DOM，终止执行
					if (!elemDataView[0])
						return;
					renderDataView(0);

				});

			exports('shefu_profit', {})
		});