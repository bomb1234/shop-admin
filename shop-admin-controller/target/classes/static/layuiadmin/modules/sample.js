/**
 * 
 * @Name：layuiAdmin 主页示例
 * @Author：star1029
 * @Site：http://www.layui.com/admin/
 * @License：GPL-2
 * 
 */

layui
		.define(function(exports) {
			var admin = layui.admin;

			// 区块轮播切换
			layui
					.use(
							[ 'admin', 'carousel' ],
							function() {
								var $ = layui.$, admin = layui.admin, carousel = layui.carousel, element = layui.element, device = layui
										.device();

								// 轮播切换
								$('.layadmin-carousel')
										.each(
												function() {
													var othis = $(this);
													carousel
															.render({
																elem : this,
																width : '100%',
																arrow : 'none',
																interval : othis
																		.data('interval'),
																autoplay : othis
																		.data('autoplay') === true,
																trigger : (device.ios || device.android) ? 'click'
																		: 'hover',
																anim : othis
																		.data('anim')
															});
												});

								element.render('progress');

							});

			// 八卦新闻
			layui
					.use(
							[ 'carousel', 'echarts' ],
							function() {
								var $ = layui.$, carousel = layui.carousel, echarts = layui.echarts;

								var echartsApp = [], options = [ {
									title : {
										subtext : '完全实况球员数据',
										textStyle : {
											fontSize : 14
										}
									},
									tooltip : {
										trigger : 'axis'
									},
									legend : {
										x : 'left',
										data : [ '罗纳尔多', '舍普琴科' ]
									},
									polar : [ {
										indicator : [ {
											text : '进攻',
											max : 100
										}, {
											text : '防守',
											max : 100
										}, {
											text : '体能',
											max : 100
										}, {
											text : '速度',
											max : 100
										}, {
											text : '力量',
											max : 100
										}, {
											text : '技巧',
											max : 100
										} ],
										radius : 130
									} ],
									series : [ {
										type : 'radar',
										center : [ '50%', '50%' ],
										itemStyle : {
											normal : {
												areaStyle : {
													type : 'default'
												}
											}
										},
										data : [ {
											value : [ 97, 42, 88, 94, 90, 86 ],
											name : '舍普琴科'
										}, {
											value : [ 97, 32, 74, 95, 88, 92 ],
											name : '罗纳尔多'
										} ]
									} ]
								} ], elemDataView = $('#LAY-index-pageone')
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

			// 访问量
			layui
					.use(
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
									var oMoth = (today.getMonth() + 1)
											.toString();
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
									[y[0]+'年'+m[0]+'月'+d[0]+'日',y[1]+'年'+m[1]+'月'+d[1]+'日',
									 y[2]+'年'+m[2]+'月'+d[2]+'日',y[3]+'年'+m[3]+'月'+d[3]+'日',
									 y[4]+'年'+m[4]+'月'+d[4]+'日',y[5]+'年'+m[5]+'月'+d[5]+'日',
									 y[6]+'年'+m[6]+'月'+d[6]+'日',y[7]+'年'+m[7]+'月'+d[7]+'日',
									 y[8]+'年'+m[8]+'月'+d[8]+'日',y[9]+'年'+m[9]+'月'+d[9]+'日'
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

			// 地图
			layui
					.use(
							[ 'carousel', 'echarts' ],
							function() {
								var $ = layui.$, carousel = layui.carousel, echarts = layui.echarts;

								var echartsApp = [], options = [ {
									title : {
										text : '全国的 layui 用户分布',
										subtext : '不完全统计'
									},
									tooltip : {
										trigger : 'item'
									},
									dataRange : {
										orient : 'horizontal',
										min : 0,
										max : 60000,
										text : [ '高', '低' ],
										splitNumber : 0
									},
									series : [ {
										name : '全国的 layui 用户分布',
										type : 'map',
										mapType : 'china',
										selectedMode : 'multiple',
										itemStyle : {
											normal : {
												label : {
													show : true
												}
											},
											emphasis : {
												label : {
													show : true
												}
											}
										},
										data : [ {
											name : '西藏',
											value : 60
										}, {
											name : '青海',
											value : 167
										}, {
											name : '宁夏',
											value : 210
										}, {
											name : '海南',
											value : 252
										}, {
											name : '甘肃',
											value : 502
										}, {
											name : '贵州',
											value : 570
										}, {
											name : '新疆',
											value : 661
										}, {
											name : '云南',
											value : 8890
										}, {
											name : '重庆',
											value : 10010
										}, {
											name : '吉林',
											value : 5056
										}, {
											name : '山西',
											value : 2123
										}, {
											name : '天津',
											value : 9130
										}, {
											name : '江西',
											value : 10170
										}, {
											name : '广西',
											value : 6172
										}, {
											name : '陕西',
											value : 9251
										}, {
											name : '黑龙江',
											value : 5125
										}, {
											name : '内蒙古',
											value : 1435
										}, {
											name : '安徽',
											value : 9530
										}, {
											name : '北京',
											value : 51919
										}, {
											name : '福建',
											value : 3756
										}, {
											name : '上海',
											value : 59190
										}, {
											name : '湖北',
											value : 37109
										}, {
											name : '湖南',
											value : 8966
										}, {
											name : '四川',
											value : 31020
										}, {
											name : '辽宁',
											value : 7222
										}, {
											name : '河北',
											value : 3451
										}, {
											name : '河南',
											value : 9693
										}, {
											name : '浙江',
											value : 62310
										}, {
											name : '山东',
											value : 39231
										}, {
											name : '江苏',
											value : 35911
										}, {
											name : '广东',
											value : 55891
										} ]
									} ]
								} ], elemDataView = $('#LAY-index-pagethree')
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

			// 项目进展
			layui.use('table', function() {
				var $ = layui.$, table = layui.table;

				table.render({
					elem : '#LAY-index-prograss',
					url : layui.setter.base + 'json/console/prograss.js' // 模拟接口
					,
					cols : [ [
							{
								type : 'checkbox',
								fixed : 'left'
							},
							{
								field : 'prograss',
								title : '任务'
							},
							{
								field : 'time',
								title : '所需时间'
							},
							{
								field : 'complete',
								title : '完成情况',
								templet : function(d) {
									if (d.complete == '已完成') {
										return '<del style="color: #5FB878;">'
												+ d.complete + '</del>'
									} else if (d.complete == '进行中') {
										return '<span style="color: #FFB800;">'
												+ d.complete + '</span>'
									} else {
										return '<span style="color: #FF5722;">'
												+ d.complete + '</span>'
									}
								}
							} ] ],
					skin : 'line'
				});
			});

			// 回复留言
			admin.events.replyNote = function(othis) {
				var nid = othis.data('id');
				layer.prompt({
					title : '回复留言 ID:' + nid,
					formType : 2
				}, function(value, index) {
					// 这里可以请求 Ajax
					// …
					layer.msg('得到：' + value);
					layer.close(index);
				});
			};

			exports('sample', {})
		});