(function () {
    "use strict";
    angular.module("app.dataGuard.chart.ctrls", [])
        .controller("chartCtrl", ["$scope", function ($scope) {
        return $scope.easypiechart = {
            percent: 65,
            options: {
                animate: {
                    duration: 1e3,
                    enabled: !0
                },
                barColor: $scope.color.primary,
                lineCap: "round",
                size: 180,
                lineWidth: 5
            }
        }, $scope.easypiechart2 = {
            percent: 35,
            options: {
                animate: {
                    duration: 1e3,
                    enabled: !0
                },
                barColor: $scope.color.success,
                lineCap: "round",
                size: 180,
                lineWidth: 10
            }
        }, $scope.easypiechart3 = {
            percent: 68,
            options: {
                animate: {
                    duration: 1e3,
                    enabled: !0
                },
                barColor: $scope.color.info,
                lineCap: "square",
                size: 180,
                lineWidth: 20,
                scaleLength: 0
            }
        }, $scope.gaugeChart1 = {
            data: {
                maxValue: 3e3,
                animationSpeed: 40,
                val: 1375
            },
            options: {
                lines: 12,
                angle: 0,
                lineWidth: .47,
                pointer: {
                    length: .6,
                    strokeWidth: .03,
                    color: "#000000"
                },
                limitMax: "false",
                strokeColor: "#E0E0E0",
                generateGradient: !0,
                percentColors: [
                    [0, $scope.color.success],
                    [1, $scope.color.success]
                ]
            }
        }, $scope.gaugeChart2 = {
            data: {
                maxValue: 3e3,
                animationSpeed: 45,
                val: 1200
            },
            options: {
                lines: 12,
                angle: 0,
                lineWidth: .47,
                pointer: {
                    length: .6,
                    strokeWidth: .03,
                    color: "#464646"
                },
                limitMax: "true",
                colorStart: "#7ACBEE",
                colorStop: "#7ACBEE",
                strokeColor: "#F1F1F1",
                generateGradient: !0,
                percentColors: [
                    [0, $scope.color.info],
                    [1, $scope.color.info]
                ]
            }
        }, $scope.gaugeChart3 = {
            data: {
                maxValue: 3e3,
                animationSpeed: 50,
                val: 1100
            },
            options: {
                lines: 12,
                angle: 0,
                lineWidth: .47,
                pointer: {
                    length: .6,
                    strokeWidth: .03,
                    color: "#464646"
                },
                limitMax: "true",
                colorStart: "#FF7857",
                colorStop: "#FF7857",
                strokeColor: "#F1F1F1",
                generateGradient: !0,
                percentColors: [
                    [0, $scope.color.danger],
                    [1, $scope.color.danger]
                ]
            }
        }
        }])
        .controller("morrisChartCtrl", ["$scope", function ($scope) {
            var barColor, barData, comboColor, comboData, donutColor, donutData, mainColor, mainData, simpleColor, simpleData;
            return mainData = [{
                month: "2013-01",
                xbox: 294e3,
                will: 136e3,
                playstation: 244e3
            }, {
                month: "2013-02",
                xbox: 228e3,
                will: 335e3,
                playstation: 127e3
            }, {
                month: "2013-03",
                xbox: 199e3,
                will: 159e3,
                playstation: 13e4
            }, {
                month: "2013-04",
                xbox: 174e3,
                will: 16e4,
                playstation: 82e3
            }, {
                month: "2013-05",
                xbox: 255e3,
                will: 318e3,
                playstation: 82e3
            }, {
                month: "2013-06",
                xbox: 298400,
                will: 401800,
                playstation: 98600
            }, {
                month: "2013-07",
                xbox: 37e4,
                will: 225e3,
                playstation: 159e3
            }, {
                month: "2013-08",
                xbox: 376700,
                will: 303600,
                playstation: 13e4
            }, {
                month: "2013-09",
                xbox: 527800,
                will: 301e3,
                playstation: 119400
            }], mainColor = [$scope.color.infoAlt, $scope.color.danger, $scope.color.success], $scope.main = {
                data: mainData,
                type: "area",
                options: {
                    xkey: "month",
                    ykeys: ["xbox", "will", "playstation"],
                    labels: ["xbox", "will", "playstation"],
                    lineColors: mainColor,
                    lineWidth: 0,
                    behaveLikeLine: !0,
                    pointSize: 0
                }
            }, simpleData = [{
                year: "2008",
                value: 20
            }, {
                year: "2009",
                value: 10
            }, {
                year: "2010",
                value: 5
            }, {
                year: "2011",
                value: 5
            }, {
                year: "2012",
                value: 20
            }, {
                year: "2013",
                value: 19
            }], simpleColor = [$scope.color.primary], $scope.simple1 = {
                data: simpleData,
                type: "line",
                options: {
                    xkey: "year",
                    ykeys: ["value"],
                    labels: ["Value"],
                    lineWidth: "2",
                    lineColors: simpleColor
                }
            }, $scope.simple2 = {
                data: simpleData,
                type: "area",
                options: {
                    xkey: "year",
                    ykeys: ["value"],
                    labels: ["Value"],
                    lineWidth: "2",
                    lineColors: simpleColor
                }
            }, comboData = [{
                month: "1",
                a: 20,
                b: 30
            }, {
                month: "2",
                a: 30,
                b: 20
            }, {
                month: "3",
                a: 20,
                b: 10
            }, {
                month: "4",
                a: 10,
                b: 20
            }, {
                month: "5",
                a: 20,
                b: 30
            }, {
                month: "6",
                a: 30,
                b: 20
            }, {
                month: "7",
                a: 20,
                b: 10
            }, {
                month: "8",
                a: 10,
                b: 20
            }, {
                month: "9",
                a: 20,
                b: 30
            }, {
                month: "10",
                a: 30,
                b: 20
            }, {
                month: "11",
                a: 20,
                b: 10
            }, {
                month: "12",
                a: 10,
                b: 20
            }], comboColor = [$scope.color.success, $scope.color.danger, $scope.color.infoAlt], $scope.combo1 = {
                data: comboData,
                type: "line",
                options: {
                    xkey: "month",
                    ykeys: ["a", "b"],
                    labels: ["Value A", "Value B"],
                    lineWidth: "2",
                    lineColors: comboColor
                }
            }, $scope.combo2 = {
                data: comboData,
                type: "area",
                options: {
                    xkey: "month",
                    ykeys: ["a", "b"],
                    labels: ["Value A", "Value B"],
                    lineWidth: "2",
                    lineColors: comboColor
                }
            }, barData = [{
                year: "2008",
                a: 20,
                b: 16,
                c: 12
            }, {
                year: "2009",
                a: 10,
                b: 22,
                c: 30
            }, {
                year: "2010",
                a: 5,
                b: 14,
                c: 20
            }, {
                year: "2011",
                a: 5,
                b: 12,
                c: 19
            }, {
                year: "2012",
                a: 20,
                b: 19,
                c: 13
            }, {
                year: "2013",
                a: 28,
                b: 22,
                c: 20
            }], barColor = [$scope.color.infoAlt, $scope.color.success, $scope.color.warning], $scope.bar1 = {
                data: barData,
                type: "bar",
                options: {
                    xkey: "year",
                    ykeys: ["a", "b", "c"],
                    labels: ["Value A", "Value B", "Value C"],
                    barColors: barColor
                }
            }, $scope.bar2 = {
                data: barData,
                type: "bar",
                options: {
                    xkey: "year",
                    ykeys: ["a", "b", "c"],
                    labels: ["Value A", "Value B", "Value C"],
                    barColors: barColor,
                    stacked: !0
                }
            }, donutColor = [$scope.color.success, $scope.color.info, $scope.color.warning, $scope.color.danger], donutData = [{
                label: "Download Sales",
                value: 12
            }, {
                label: "In-Store Sales",
                value: 30
            }, {
                label: "Mail-Order Sales",
                value: 20
            }, {
                label: "Online Sales",
                value: 19
            }], $scope.donut1 = {
                data: donutData,
                type: "donut",
                options: {
                    xkey: "year"
                }
            }, $scope.donut2 = {
                data: donutData,
                type: "donut",
                options: {
                    xkey: "year",
                    colors: donutColor
                }
            }, $scope.donut3 = {
                data: donutData,
                type: "donut",
                options: {
                    xkey: "year",
                    formatter: "return '$' + y;"
                }
            }
        }])
        .controller("flotChartCtrl", ["$scope", function ($scope) {
            var areaChart, barChart, lineChart1;
            return lineChart1 = {}, lineChart1.data1 = [
                [1, 0],
                [2, 20],
                [3, 14],
                [4, 25],
                [5, 21],
                [6, 30],
                [7, 38]
            ], $scope.line1 = {}, $scope.line1.data = [{
                data: lineChart1.data1,
                label: ""
            }], $scope.line1.options = {
                series: {
                    lines: {
                        show: !0,
                        fill: !1,
                        fillColor: {
                            colors: [{
                                opacity: 0
                            }, {
                                opacity: .3
                            }]
                        }
                    },
                    points: {
                        show: !0,
                        lineWidth: 2,
                        fill: !0,
                        fillColor: "#ffffff",
                        symbol: "circle",
                        radius: 5
                    }
                },
                colors: [$scope.color.primary, $scope.color.infoAlt],
                tooltip: !0,
                tooltipOpts: {
                    defaultTheme: !1
                },
                grid: {
                    hoverable: !0,
                    clickable: !0,
                    tickColor: "#f9f9f9",
                    borderWidth: 1,
                    borderColor: "#eeeeee"
                },
                xaxis: {
                    ticks: [
                        [1, "JAN"],
                        [2, "FEB"],
                        [3, "MAR"],
                        [4, "APR"],
                        [5, "MAY"],
                        [6, "JUN"],
                        [7, "JUL"],
                        [8, "AUG"],
                        [9, "SEP"],
                        [10, "OCT"],
                        [11, "NOV"],
                        [12, "DEC"]
                    ]
                }
            }, areaChart = {}, areaChart.data1 = [
                [2007, 15],
                [2008, 20],
                [2009, 10],
                [2010, 5],
                [2011, 5],
                [2012, 20],
                [2013, 28]
            ], areaChart.data2 = [
                [2007, 15],
                [2008, 16],
                [2009, 22],
                [2010, 14],
                [2011, 12],
                [2012, 19],
                [2013, 22]
            ], $scope.area = {}, $scope.area.data = [{
                data: areaChart.data1,
                label: "Value A",
                lines: {
                    fill: !0
                }
            }, {
                data: areaChart.data2,
                label: "Value B",
                points: {
                    show: !0
                },
                yaxis: 2
            }], $scope.area.options = {
                series: {
                    lines: {
                        show: !0,
                        fill: !1
                    },
                    points: {
                        show: !0,
                        lineWidth: 2,
                        fill: !0,
                        fillColor: "#ffffff",
                        symbol: "circle",
                        radius: 5
                    },
                    shadowSize: 0
                },
                grid: {
                    hoverable: !0,
                    clickable: !0,
                    tickColor: "#f9f9f9",
                    borderWidth: 1,
                    borderColor: "#eeeeee"
                },
                colors: [$scope.color.success, $scope.color.infoAlt],
                tooltip: !0,
                tooltipOpts: {
                    defaultTheme: !1
                },
                xaxis: {
                    mode: "time"
                },
                yaxes: [{}, {
                    position: "right"
                }]
            }, barChart = {}, barChart.data1 = [
                [1, 40],
                [2, 50],
                [3, 40],
                [4, 30],
                [5, 35],
                [6, 25],
                [7, 20],
                [8, 28],
                [9, 48],
                [10, 28],
                [11, 38],
                [12, 28]
            ], barChart.data2 = [
                [1, 30],
                [2, 20],
                [3, 30],
                [4, 40],
                [5, 35],
                [6, 45],
                [7, 50],
                [8, 42],
                [9, 22],
                [10, 42],
                [11, 32],
                [12, 42]
            ], $scope.barChart = {}, $scope.barChart.data = [{
                label: "",
                data: barChart.data1
            }, {
                label: "",
                data: barChart.data2
            }], $scope.barChart.options = {
                series: {
                    stack: !0,
                    bars: {
                        show: !0,
                        fill: 1,
                        barWidth: .3,
                        align: "center",
                        horizontal: !1,
                        order: 1
                    }
                },
                grid: {
                    hoverable: !0,
                    borderWidth: 1,
                    borderColor: "#eeeeee"
                },
                tooltip: !1,
                tooltipOpts: {
                    defaultTheme: !1
                },
                xaxis: {
                    ticks: [
                        [1, "J"],
                        [2, "F"],
                        [3, "M"],
                        [4, "A"],
                        [5, "M"],
                        [6, "J"],
                        [7, "J"],
                        [8, "A"],
                        [9, "S"],
                        [10, "O"],
                        [11, "N"],
                        [12, "D"]
                    ]
                },
                yaxis: {
                    ticks: []
                },
                colors: [$scope.color.danger, $scope.color.success, $scope.color.info, $scope.color.warning]
            }, $scope.pieChart = {}, $scope.pieChart.data = [{
                label: "Download Sales",
                data: 12
            }, {
                label: "In-Store Sales",
                data: 30
            }, {
                label: "Mail-Order Sales",
                data: 20
            }, {
                label: "Online Sales",
                data: 19
            }], $scope.pieChart.options = {
                series: {
                    pie: {
                        show: !0
                    }
                },
                legend: {
                    show: !0
                },
                grid: {
                    hoverable: !0,
                    clickable: !0
                },
                colors: [$scope.color.success, $scope.color.info, $scope.color.warning, $scope.color.danger],
                tooltip: !0,
                tooltipOpts: {
                    content: "%p.0%, %s",
                    defaultTheme: !1
                }
            }, $scope.donutChart = {}, $scope.donutChart.data = [{
                label: "Download Sales",
                data: 12
            }, {
                label: "In-Store Sales",
                data: 30
            }, {
                label: "Mail-Order Sales",
                data: 20
            }, {
                label: "Online Sales",
                data: 19
            }], $scope.donutChart.options = {
                series: {
                    pie: {
                        show: !0,
                        innerRadius: .5
                    }
                },
                legend: {
                    show: !0
                },
                grid: {
                    hoverable: !0,
                    clickable: !0
                },
                colors: [$scope.color.success, $scope.color.info, $scope.color.warning, $scope.color.danger],
                tooltip: !0,
                tooltipOpts: {
                    content: "%p.0%, %s",
                    defaultTheme: !1
                }
            }, $scope.donutChart2 = {}, $scope.donutChart2.data = [{
                label: "Download Sales",
                data: 12
            }, {
                label: "In-Store Sales",
                data: 30
            }, {
                label: "Mail-Order Sales",
                data: 20
            }, {
                label: "Online Sales",
                data: 19
            }, {
                label: "Direct Sales",
                data: 15
            }], $scope.donutChart2.options = {
                series: {
                    pie: {
                        show: !0,
                        innerRadius: .45
                    }
                },
                legend: {
                    show: !1
                },
                grid: {
                    hoverable: !0,
                    clickable: !0
                },
                colors: ["#1BB7A0", "#39B5B9", "#52A3BB", "#619CC4", "#6D90C5"],
                tooltip: !0,
                tooltipOpts: {
                    content: "%p.0%, %s",
                    defaultTheme: !0
                }
            }
        }])
        .controller("sparklineCtrl", ["$scope", function ($scope) {
                return $scope.demoData1 = {
                    data: [3, 1, 2, 2, 4, 6, 4, 5, 2, 4, 5, 3, 4, 6, 4, 7],
                    options: {
                        type: "line",
                        lineColor: "#fff",
                        highlightLineColor: "#fff",
                        fillColor: $scope.color.success,
                        spotColor: !1,
                        minSpotColor: !1,
                        maxSpotColor: !1,
                        width: "100%",
                        height: "150px"
                    }
                }, $scope.simpleChart1 = {
                    data: [3, 1, 2, 3, 5, 3, 4, 2],
                    options: {
                        type: "line",
                        lineColor: $scope.color.primary,
                        fillColor: "#fafafa",
                        spotColor: !1,
                        minSpotColor: !1,
                        maxSpotColor: !1
                    }
                }, $scope.simpleChart2 = {
                    data: [3, 1, 2, 3, 5, 3, 4, 2],
                    options: {
                        type: "bar",
                        barColor: $scope.color.primary
                    }
                }, $scope.simpleChart3 = {
                    data: [3, 1, 2, 3, 5, 3, 4, 2],
                    options: {
                        type: "pie",
                        sliceColors: [$scope.color.primary, $scope.color.success, $scope.color.info, $scope.color.infoAlt, $scope.color.warning, $scope.color.danger]
                    }
                }, $scope.tristateChart1 = {
                    data: [1, 2, -3, -5, 3, 1, -4, 2],
                    options: {
                        type: "tristate",
                        posBarColor: $scope.color.success,
                        negBarColor: $scope.color.danger
                    }
                }, $scope.largeChart1 = {
                    data: [3, 1, 2, 3, 5, 3, 4, 2],
                    options: {
                        type: "line",
                        lineColor: $scope.color.info,
                        highlightLineColor: "#fff",
                        fillColor: $scope.color.info,
                        spotColor: !1,
                        minSpotColor: !1,
                        maxSpotColor: !1,
                        width: "100%",
                        height: "150px"
                    }
                }, $scope.largeChart2 = {
                    data: [3, 1, 2, 3, 5, 3, 4, 2],
                    options: {
                        type: "bar",
                        barColor: $scope.color.success,
                        barWidth: 10,
                        width: "100%",
                        height: "150px"
                    }
                }, $scope.largeChart3 = {
                    data: [3, 1, 2, 3, 5],
                    options: {
                        type: "pie",
                        sliceColors: [$scope.color.primary, $scope.color.success, $scope.color.info, $scope.color.infoAlt, $scope.color.warning, $scope.color.danger],
                        width: "150px",
                        height: "150px"
                    }
                }
            }])
}).call(this),
function () {
    "use strict";
    angular.module("app.dataGuard.chart.directives", [])
        .directive("gaugeChart", [function () {
            return {
                restrict: "A",
                scope: {
                    data: "=",
                    options: "="
                },
                link: function (scope, ele) {
                    var data, gauge, options;
                    return data = scope.data, options = scope.options, gauge = new Gauge(ele[0]).setOptions(options), gauge.maxValue = data.maxValue, gauge.animationSpeed = data.animationSpeed, gauge.set(data.val)
                }
            }
        }])
        .directive("flotChart", [function () {
            return {
                restrict: "A",
                scope: {
                    data: "=",
                    options: "="
                },
                link: function (scope, ele) {
                    var data, options, plot;
                    return data = scope.data, options = scope.options, plot = $.plot(ele[0], data, options)
                }
            }
        }])
        .directive("flotChartRealtime", [function () {
            return {
                restrict: "A",
                link: function (scope, ele) {
                    var data, getRandomData, plot, totalPoints, update, updateInterval;
                    return data = [], totalPoints = 300, getRandomData = function () {
                        var i, prev, res, y;
                        for (data.length > 0 && (data = data.slice(1)) ; data.length < totalPoints;) prev = data.length > 0 ? data[data.length - 1] : 50, y = prev + 10 * Math.random() - 5, 0 > y ? y = 0 : y > 100 && (y = 100), data.push(y);
                        for (res = [], i = 0; i < data.length;) res.push([i, data[i]]), ++i;
                        return res
                    }, update = function () {
                        plot.setData([getRandomData()]), plot.draw(), setTimeout(update, updateInterval)
                    }, data = [], totalPoints = 300, updateInterval = 200, plot = $.plot(ele[0], [getRandomData()], {
                        series: {
                            lines: {
                                show: !0,
                                fill: !0
                            },
                            shadowSize: 0
                        },
                        yaxis: {
                            min: 0,
                            max: 100
                        },
                        xaxis: {
                            show: !1
                        },
                        grid: {
                            hoverable: !0,
                            borderWidth: 1,
                            borderColor: "#eeeeee"
                        },
                        colors: ["#70b1cf"]
                    }), update()
                }
            }
        }])
        .directive("sparkline", [function () {
            return {
                restrict: "A",
                scope: {
                    data: "=",
                    options: "="
                },
                link: function (scope, ele) {
                    var data, options, sparkResize, sparklineDraw;
                    return data = scope.data, options = scope.options, sparkResize = void 0, sparklineDraw = function () {
                        return ele.sparkline(data, options)
                    }, $(window).resize(function () {
                        return clearTimeout(sparkResize), sparkResize = setTimeout(sparklineDraw, 200)
                    }), sparklineDraw()
                }
            }
        }])
        .directive("morrisChart", [function () {
            return {
                restrict: "A",
                scope: {
                    data: "=",
                    type: "=",
                    options: "="
                },
                link: function (scope, ele) {
                    var data, func, options, type;
                    switch (data = scope.data, type = scope.type) {
                        case "line":
                            return options = angular.extend({
                                element: ele[0],
                                data: data
                            }, scope.options), new Morris.Line(options);
                        case "area":
                            return options = angular.extend({
                                element: ele[0],
                                data: data
                            }, scope.options), new Morris.Area(options);
                        case "bar":
                            return options = angular.extend({
                                element: ele[0],
                                data: data
                            }, scope.options), new Morris.Bar(options);
                        case "donut":
                            return options = angular.extend({
                                element: ele[0],
                                data: data
                            }, scope.options), options.formatter && (func = new Function("y", "data", options.formatter), options.formatter = func), new Morris.Donut(options)
                    }
                }
            }
        }])
}.call(this),
function () {
    "use strict";
    angular.module("app.dataGuard.ui.form.ctrls", [])
        .controller("TagsDemoCtrl", ["$scope", function ($scope) {
            return $scope.tags = ["foo", "bar"]
        }])
        .controller("DatepickerDemoCtrl", ["$scope", function ($scope) {
            return $scope.today = function () {
                return $scope.dt = new Date
            }, $scope.today(), $scope.showWeeks = !0, $scope.toggleWeeks = function () {
                return $scope.showWeeks = !$scope.showWeeks
            }, $scope.clear = function () {
                return $scope.dt = null
            }, $scope.disabled = function (date, mode) {
                return "day" === mode && (0 === date.getDay() || 6 === date.getDay())
            }, $scope.toggleMin = function () {
                var _ref;
                return $scope.minDate = null != (_ref = $scope.minDate) ? _ref : {
                    "null": new Date
                }
            }, $scope.toggleMin(), $scope.open = function ($event) {
                return $event.preventDefault(), $event.stopPropagation(), $scope.opened = !0
            }, $scope.dateOptions = {
                "year-format": "'yy'",
                "starting-day": 1
            }, $scope.formats = ["dd-MMMM-yyyy", "yyyy/MM/dd", "shortDate"], $scope.format = $scope.formats[0]
        }])
        .controller("TimepickerDemoCtrl", ["$scope", function ($scope) {
            return $scope.mytime = new Date, $scope.hstep = 1, $scope.mstep = 15, $scope.options = {
                hstep: [1, 2, 3],
                mstep: [1, 5, 10, 15, 25, 30]
            }, $scope.ismeridian = !0, $scope.toggleMode = function () {
                return $scope.ismeridian = !$scope.ismeridian
            }, $scope.update = function () {
                var d;
                return d = new Date, d.setHours(14), d.setMinutes(0), $scope.mytime = d
            }, $scope.changed = function () {
                return void 0
            }, $scope.clear = function () {
                return $scope.mytime = null
            }
        }])
        .controller("TypeaheadCtrl", ["$scope", function ($scope) {
            return $scope.selected = void 0, $scope.states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
        }])
        .controller("RatingDemoCtrl", ["$scope", function ($scope) {
            return $scope.rate = 7, $scope.max = 10, $scope.isReadonly = !1, $scope.hoveringOver = function (value) {
                return $scope.overStar = value, $scope.percent = 100 * (value / $scope.max)
            }, $scope.ratingStates = [{
                stateOn: "glyphicon-ok-sign",
                stateOff: "glyphicon-ok-circle"
            }, {
                stateOn: "glyphicon-star",
                stateOff: "glyphicon-star-empty"
            }, {
                stateOn: "glyphicon-heart",
                stateOff: "glyphicon-ban-circle"
            }, {
                stateOn: "glyphicon-heart"
            }, {
                stateOff: "glyphicon-off"
            }]
        }])
}.call(this),
function () {
    angular.module("app.dataGuard.ui.form.directives", [])
        .directive("uiRangeSlider", [function () {
            return {
                restrict: "A",
                link: function (scope, ele) {
                    return ele.slider()
                }
            }
        }])
        .directive("uiFileUpload", [function () {
            return {
                restrict: "A",
                link: function (scope, ele) {
                    return ele.bootstrapFileInput()
                }
            }
        }])
        .directive("uiSpinner", [function () {
            return {
                restrict: "A",
                compile: function (ele) {
                    return ele.addClass("ui-spinner"), {
                        post: function () {
                            return ele.spinner()
                        }
                    }
                }
            }
        }])
        .directive("uiWizardForm", [function () {
            return {
                link: function (scope, ele) {
                    return ele.steps()
                }
            }
        }])
}.call(this),
function () {
    "use strict";
    angular.module("app.dataGuard.form.validation", [])
        .controller("wizardFormCtrl", ["$scope", function ($scope) {
            return $scope.wizard = {
                firstName: "some name",
                lastName: "",
                email: "",
                password: "",
                age: "",
                address: ""
            }, $scope.isValidateStep1 = function () {
                return void 0
            }, $scope.finishedWizard = function () {
                return void 0
            }
        }])
        .controller("formConstraintsCtrl", ["$scope", function ($scope) {
            var original;
            return $scope.form = {
                required: "",
                minlength: "",
                maxlength: "",
                length_rage: "",
                type_something: "",
                confirm_type: "",
                foo: "",
                email: "",
                url: "",
                num: "",
                minVal: "",
                maxVal: "",
                valRange: "",
                pattern: ""
            }, original = angular.copy($scope.form), $scope.revert = function () {
                return $scope.form = angular.copy(original), $scope.form_constraints.$setPristine()
            }, $scope.canRevert = function () {
                return !angular.equals($scope.form, original) || !$scope.form_constraints.$pristine
            }, $scope.canSubmit = function () {
                return $scope.form_constraints.$valid && !angular.equals($scope.form, original)
            }
        }])
        .controller("signinCtrl", ["$scope", function ($scope) {
            var original;
            return $scope.user = {
                email: "",
                password: ""
            }, $scope.showInfoOnSubmit = !1, original = angular.copy($scope.user), $scope.revert = function () {
                return $scope.user = angular.copy(original), $scope.form_signin.$setPristine()
            }, $scope.canRevert = function () {
                return !angular.equals($scope.user, original) || !$scope.form_signin.$pristine
            }, $scope.canSubmit = function () {
                return $scope.form_signin.$valid && !angular.equals($scope.user, original)
            }, $scope.submitForm = function () {
                return $scope.showInfoOnSubmit = !0, $scope.revert()
            }
        }])
        .controller("signupCtrl", ["$scope", function ($scope) {
            var original;
            return $scope.user = {
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
                age: ""
            }, $scope.showInfoOnSubmit = !1, original = angular.copy($scope.user), $scope.revert = function () {
                return $scope.user = angular.copy(original), $scope.form_signup.$setPristine(), $scope.form_signup.confirmPassword.$setPristine()
            }, $scope.canRevert = function () {
                return !angular.equals($scope.user, original) || !$scope.form_signup.$pristine
            }, $scope.canSubmit = function () {
                return $scope.form_signup.$valid && !angular.equals($scope.user, original)
            }, $scope.submitForm = function () {
                return $scope.showInfoOnSubmit = !0, $scope.revert()
            }
        }])
        .directive("validateEquals", [function () {
            return {
                require: "ngModel",
                link: function (scope, ele, attrs, ngModelCtrl) {
                    var validateEqual;
                    return validateEqual = function (value) {
                        var valid;
                        return valid = value === scope.$eval(attrs.validateEquals), ngModelCtrl.$setValidity("equal", valid), "function" == typeof valid ? valid({
                            value: void 0
                        }) : void 0
                    }, ngModelCtrl.$parsers.push(validateEqual), ngModelCtrl.$formatters.push(validateEqual), scope.$watch(attrs.validateEquals, function (newValue, oldValue) {
                        return newValue !== oldValue ? ngModelCtrl.$setViewValue(ngModelCtrl.$ViewValue) : void 0
                    })
                }
            }
        }])
}.call(this),
function () {
    "use strict";
    angular.module("app.dataGuard.page.ctrls", [])
        .controller("invoiceCtrl", ["$scope", "$window", function ($scope) {
            return $scope.printInvoice = function () {
                var originalContents, popupWin, printContents;
                return printContents = document.getElementById("invoice").innerHTML, originalContents = document.body.innerHTML, popupWin = window.open(), popupWin.document.open(), popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="styles/main.css" /></head><body onload="window.print()">' + printContents + "</html>"), popupWin.document.close()
            }
        }])
}.call(this),
function () {
    "use strict";
    angular.module("app.dataGuard.tables", [])
        .controller("tableCtrl", ["$scope", "$filter", function ($scope, $filter) {
            var init;
            return $scope.stores = [{
                name: "Nijiya Market",
                price: "$$",
                sales: 292,
                rating: 4
            }, {
                name: "Eat On Monday Truck",
                price: "$",
                sales: 119,
                rating: 4.3
            }, {
                name: "Tea Era",
                price: "$",
                sales: 874,
                rating: 4
            }, {
                name: "Rogers Deli",
                price: "$",
                sales: 347,
                rating: 4.2
            }, {
                name: "MoBowl",
                price: "$$$",
                sales: 24,
                rating: 4.6
            }, {
                name: "The Milk Pail Market",
                price: "$",
                sales: 543,
                rating: 4.5
            }, {
                name: "Nob Hill Foods",
                price: "$$",
                sales: 874,
                rating: 4
            }, {
                name: "Scratch",
                price: "$$$",
                sales: 643,
                rating: 3.6
            }, {
                name: "Gochi Japanese Fusion Tapas",
                price: "$$$",
                sales: 56,
                rating: 4.1
            }, {
                name: "Cost Plus World Market",
                price: "$$",
                sales: 79,
                rating: 4
            }, {
                name: "Bumble Bee Health Foods",
                price: "$$",
                sales: 43,
                rating: 4.3
            }, {
                name: "Costco",
                price: "$$",
                sales: 219,
                rating: 3.6
            }, {
                name: "Red Rock Coffee Co",
                price: "$",
                sales: 765,
                rating: 4.1
            }, {
                name: "99 Ranch Market",
                price: "$",
                sales: 181,
                rating: 3.4
            }, {
                name: "Mi Pueblo Food Center",
                price: "$",
                sales: 78,
                rating: 4
            }, {
                name: "Cucina Venti",
                price: "$$",
                sales: 163,
                rating: 3.3
            }, {
                name: "Sufi Coffee Shop",
                price: "$",
                sales: 113,
                rating: 3.3
            }, {
                name: "Dana Street Roasting",
                price: "$",
                sales: 316,
                rating: 4.1
            }, {
                name: "Pearl Cafe",
                price: "$",
                sales: 173,
                rating: 3.4
            }, {
                name: "Posh Bagel",
                price: "$",
                sales: 140,
                rating: 4
            }, {
                name: "Artisan Wine Depot",
                price: "$$",
                sales: 26,
                rating: 4.1
            }, {
                name: "Hong Kong Chinese Bakery",
                price: "$",
                sales: 182,
                rating: 3.4
            }, {
                name: "Starbucks",
                price: "$$",
                sales: 97,
                rating: 3.7
            }, {
                name: "Tapioca Express",
                price: "$",
                sales: 301,
                rating: 3
            }, {
                name: "House of Bagels",
                price: "$",
                sales: 82,
                rating: 4.4
            }], $scope.searchKeywords = "", $scope.filteredStores = [], $scope.row = "", $scope.select = function (page) {
                var end, start;
                return start = (page - 1) * $scope.numPerPage, end = start + $scope.numPerPage, $scope.currentPageStores = $scope.filteredStores.slice(start, end)
            }, $scope.onFilterChange = function () {
                return $scope.select(1), $scope.currentPage = 1, $scope.row = ""
            }, $scope.onNumPerPageChange = function () {
                return $scope.select(1), $scope.currentPage = 1
            }, $scope.onOrderChange = function () {
                return $scope.select(1), $scope.currentPage = 1
            }, $scope.search = function () {
                return $scope.filteredStores = $filter("filter")($scope.stores, $scope.searchKeywords), $scope.onFilterChange()
            }, $scope.order = function (rowName) {
                return $scope.row !== rowName ? ($scope.row = rowName, $scope.filteredStores = $filter("orderBy")($scope.stores, rowName), $scope.onOrderChange()) : void 0
            }, $scope.numPerPageOpt = [3, 5, 10, 20], $scope.numPerPage = $scope.numPerPageOpt[2], $scope.currentPage = 1, $scope.currentPageStores = [], (init = function () {
                return $scope.search(), $scope.select($scope.currentPage)
            })()
        }])
        .controller("enterpriseDataCtrl", ["$scope", "$filter", "$location", function ($scope, $filter, $location) {
            var init;
            return $scope.stores = [{
                title: "Enterprise Group A1",
                url: "/fleet/enterprise-group",
                desc: "Recent Activity & timestamp",
                type: "Enterprise Groups",
                date: "12-11-2014"
            }, {
                title: "Enterprise Group A2",
                url: "/fleet/enterprise-group",
                desc: "Recent Activity & timestamp",
                type: "Enterprise Groups",
                date: "12-11-2014"
            }, {
                title: "Enterprise Group A3",
                url: "/fleet/enterprise-group",
                desc: "Recent Activity & timestamp",
                type: "Enterprise Groups",
                date: "12-11-2014"
            }, {
                title: "Location B1",
                url: "/fleet/location",
                desc: "Recent Activity & timestamp",
                type: "Locations",
                date: "12-11-2014"
            }, {
                title: "Location B2",
                url: "/fleet/location",
                desc: "Recent Activity & timestamp",
                type: "Locations",
                date: "12-11-2014"
            }, {
                title: "Location B3",
                url: "/fleet/location",
                desc: "Recent Activity & timestamp",
                type: "Locations",
                date: "12-11-2014"
            }, {
                title: "Terminal C1",
                url: "/fleet/terminal",
                desc: "Recent Activity & timestamp",
                type: "Terminals",
                date: "12-11-2014"
            }, {
                title: "Terminal C2",
                url: "/fleet/terminal",
                desc: "Recent Activity & timestamp",
                type: "Terminals",
                date: "12-11-2014"
            }, {
                title: "Terminal C3",
                url: "/fleet/terminal",
                desc: "Recent Activity & timestamp",
                type: "Terminals",
                date: "12-11-2014"
            }, {
                title: "Endpoint Service F1",
                url: "/fleet/endpoint-service",
                desc: "Recent Activity & timestamp",
                type: "Endpoint Services",
                date: "12-11-2014"
            }, {
                title: "Endpoint Service F2",
                url: "/fleet/endpoint-service",
                desc: "Recent Activity & timestamp",
                type: "Endpoint Services",
                date: "12-11-2014"
            }, {
                title: "Endpoint Service F3",
                url: "/fleet/endpoint-service",
                desc: "Recent Activity & timestamp",
                type: "Endpoint Services",
                date: "12-11-2014"
            }, {
                title: "Peripheral D1",
                url: "/fleet/peripheral",
                desc: "Recent Activity & timestamp",
                type: "Peripherals",
                date: "12-11-2014"
            }, {
                title: "Peripheral D2",
                url: "/fleet/peripheral",
                desc: "Recent Activity & timestamp",
                type: "Peripherals",
                date: "12-11-2014"
            }, {
                title: "Peripheral D3",
                url: "/fleet/peripheral",
                desc: "Recent Activity & timestamp",
                type: "Peripherals",
                date: "12-11-2014"
            }, {
                title: "Endpoint E1",
                url: "/fleet/endpoint",
                desc: "Recent Activity & timestamp",
                type: "Endpoints",
                date: "12-11-2014"
            }, {
                title: "Endpoint E2",
                url: "/fleet/endpoint",
                desc: "Recent Activity & timestamp",
                type: "Endpoints",
                date: "12-11-2014"
            }, {
                title: "Endpoint E3",
                url: "/fleet/endpoint",
                desc: "Recent Activity & timestamp",
                type: "Endpoints",
                date: "12-11-2014"
            }], $scope.types = [
                "Enterprise Groups", "Locations", "Terminals", "Endpoint Services", "Peripherals", "Endpoints"
            ], $scope.searchKeywords = "", $scope.filteredStores = [], $scope.row = "", $scope.select = function (page) {
                var end, start;
                return start = (page - 1) * $scope.numPerPage, end = start + $scope.numPerPage, $scope.currentPageStores = $scope.filteredStores.slice(start, end)
            }, $scope.navigate = function (url) {
                $location.path(url);
            }, $scope.onFilterChange = function () {
                return $scope.select(1), $scope.currentPage = 1, $scope.row = ""
            }, $scope.onNumPerPageChange = function () {
                return $scope.select(1), $scope.currentPage = 1
            }, $scope.onOrderChange = function () {
                return $scope.select(1), $scope.currentPage = 1
            }, $scope.search = function () {
                return $scope.filteredStores = $filter("filter")($scope.stores, $scope.searchKeywords), $scope.onFilterChange()
            }, $scope.order = function (rowName) {
                return $scope.row !== rowName ? ($scope.row = rowName, $scope.filteredStores = $filter("orderBy")($scope.stores, rowName), $scope.onOrderChange()) : void 0
            }, $scope.numPerPageOpt = [3, 5, 10, 20], $scope.numPerPage = $scope.numPerPageOpt[3], $scope.currentPage = 1, $scope.currentPageStores = [], (init = function () {
                return $scope.search(), $scope.select($scope.currentPage)
            })()
        }])
        .controller("tableActivityCtrl", ["$scope", "$filter", function ($scope, $filter) {
            var init;
            return $scope.stores = [{
                title: "Title",
                img: "images/img-activity.png",
                desc: "Recent Activity & timestamp",
                type: "Fraud Concern",
                date: "12-11-2014"
            }, {
                title: "Title",
                img: "images/img-activity.png",
                desc: "Recent Activity & timestamp",
                type: "Fraud Concern",
                date: "12-11-2014"
            }, {
                title: "Title",
                img: "images/img-activity.png",
                desc: "Recent Activity & timestamp",
                type: "Issue",
                date: "12-11-2014"
            }, {
                title: "Title",
                img: "images/img-activity.png",
                desc: "Recent Activity & timestamp",
                type: "Info",
                date: "12-11-2014"
            }, {
                title: "Title",
                img: "images/img-activity.png",
                desc: "Recent Activity & timestamp",
                type: "Fraud Concern",
                date: "12-11-2014"
            }, {
                title: "Title",
                img: "images/img-activity.png",
                desc: "Recent Activity & timestamp",
                type: "Issue",
                date: "12-11-2014"
            }, {
                title: "Title",
                img: "images/img-activity.png",
                desc: "Recent Activity & timestamp",
                type: "Info",
                date: "12-11-2014"
            }, {
                title: "Title",
                img: "images/img-activity.png",
                desc: "Recent Activity & timestamp",
                type: "Fraud Concern",
                date: "12-11-2014"
            }, {
                title: "Title",
                img: "images/img-activity.png",
                desc: "Recent Activity & timestamp",
                type: "Issue",
                date: "12-11-2014"
            }, {
                title: "Title",
                img: "images/img-activity.png",
                desc: "Recent Activity & timestamp",
                type: "Info",
                date: "12-11-2014"
            }, {
                title: "Title",
                img: "images/img-activity.png",
                desc: "Recent Activity & timestamp",
                type: "Fraud Concern",
                date: "12-11-2014"
            }, {
                title: "Title",
                img: "images/img-activity.png",
                desc: "Recent Activity & timestamp",
                type: "Issue",
                date: "12-11-2014"
            }, {
                title: "Title",
                img: "images/img-activity.png",
                desc: "Recent Activity & timestamp",
                type: "Info",
                date: "12-11-2014"
            }, {
                title: "Title",
                img: "images/img-activity.png",
                desc: "Recent Activity & timestamp",
                type: "Fraud Concern",
                date: "12-11-2014"
            }], $scope.searchKeywords = "", $scope.filteredStores = [], $scope.row = "", $scope.select = function (page) {
                var end, start;
                return start = (page - 1) * $scope.numPerPage, end = start + $scope.numPerPage, $scope.currentPageStores = $scope.filteredStores.slice(start, end)
            }, $scope.typeClass = function (type) {
                var tc = "info";
                switch (type) {
                    case "Issue": tc = "warning"; break;
                    case "Fraud Concern": tc = "danger"; break;
                    case "Info": tc = "dark"; break;
                }
                return tc;
            }, $scope.selectFilter = function (value) {
                return $scope.filterValue = value;
            }, $scope.onFilterChange = function () {
                return $scope.select(1), $scope.currentPage = 1, $scope.row = ""
            }, $scope.onNumPerPageChange = function () {
                return $scope.select(1), $scope.currentPage = 1
            }, $scope.onOrderChange = function () {
                return $scope.select(1), $scope.currentPage = 1
            }, $scope.search = function () {
                return $scope.filteredStores = $filter("filter")($scope.stores, $scope.searchKeywords), $scope.onFilterChange()
            }, $scope.order = function (rowName) {
                return $scope.row !== rowName ? ($scope.row = rowName, $scope.filteredStores = $filter("orderBy")($scope.stores, rowName), $scope.onOrderChange()) : void 0
            }, $scope.numPerPageOpt = [3, 5, 10, 20], $scope.numPerPage = $scope.numPerPageOpt[1], $scope.currentPage = 1, $scope.currentPageStores = [], $scope.filterValue = "All", (init = function () {
                return $scope.search(), $scope.select($scope.currentPage)
            })()
        }])
        .controller("tableEnterpriseGroupCtrl", ["$scope", "$filter", "$location", function ($scope, $filter, $location) {
            var init;
            return $scope.stores = [{
                id: 1,
                name: "Enterprise Group A1",
                desc: "This is longer content",
                field1: "Content",
                field2: "Content"
            }, {
                id: 2,
                name: "Enterprise Group A2",
                desc: "This is longer content",
                field1: "Content",
                field2: "Content"
            }, {
                id: 3,
                name: "Enterprise Group A3",
                desc: "This is longer content",
                field1: "Content",
                field2: "Content"
            }, {
                id: 4,
                name: "Enterprise Group A4",
                desc: "This is longer content",
                field1: "Content",
                field2: "Content"
            }, {
                id: 5,
                name: "Enterprise Group A5",
                desc: "This is longer content",
                field1: "Content",
                field2: "Content"
            }, {
                id: 6,
                name: "Enterprise Group A6",
                desc: "This is longer content",
                field1: "Content",
                field2: "Content"
            }, {
                id: 7,
                name: "Enterprise Group A7",
                desc: "This is longer content",
                field1: "Content",
                field2: "Content"
            }, {
                id: 8,
                name: "Enterprise Group A8",
                desc: "This is longer content",
                field1: "Content",
                field2: "Content"
            }, {
                id: 9,
                name: "Enterprise Group A9",
                desc: "This is longer content",
                field1: "Content",
                field2: "Content"
            }, {
                id: 10,
                name: "Enterprise Group A10",
                desc: "This is longer content",
                field1: "Content",
                field2: "Content"
            }], $scope.searchKeywords = "", $scope.filteredStores = [], $scope.row = "", $scope.select = function (page) {
                var end, start;
                return start = (page - 1) * $scope.numPerPage, end = start + $scope.numPerPage, $scope.currentPageStores = $scope.filteredStores.slice(start, end)
            }, $scope.navigate = function (url) {
                $location.path(url);
            }, $scope.onFilterChange = function () {
                return $scope.select(1), $scope.currentPage = 1, $scope.row = ""
            }, $scope.onNumPerPageChange = function () {
                return $scope.select(1), $scope.currentPage = 1
            }, $scope.onOrderChange = function () {
                return $scope.select(1), $scope.currentPage = 1
            }, $scope.dashboardFilter = function (item) {
                return item.id <= 5;
            }, $scope.search = function () {
                return $scope.filteredStores = $filter("filter")($scope.stores, $scope.searchKeywords), $scope.onFilterChange()
            }, $scope.order = function (rowName) {
                return $scope.row !== rowName ? ($scope.row = rowName, $scope.filteredStores = $filter("orderBy")($scope.stores, rowName), $scope.onOrderChange()) : void 0
            }, $scope.numPerPageOpt = [3, 5, 10, 20], $scope.numPerPage = $scope.numPerPageOpt[2], $scope.currentPage = 1, $scope.currentPageStores = [], $scope.filterValue = "All", (init = function () {
                return $scope.search(), $scope.select($scope.currentPage)
            })()
        }])
        .controller("tableLocationCtrl", ["$scope", "$filter", "$location", function ($scope, $filter, $location) {
            var init;
            return $scope.stores = [{
                id: 1,
                udid: "secure-id-24",
                name: "Location B1",
                servicetype: "This is longer content",
                servicelocation: "Content",
                desc: "Content"
            }, {
                id: 2,
                udid: "secure-id-25",
                name: "Location B2",
                servicetype: "This is longer content",
                servicelocation: "Content",
                desc: "Content"
            }, {
                id: 3,
                udid: "secure-id-26",
                name: "Location B3",
                servicetype: "This is longer content",
                servicelocation: "Content",
                desc: "Content"
            }, {
                id: 4,
                udid: "secure-id-27",
                name: "Location B4",
                servicetype: "This is longer content",
                servicelocation: "Content",
                desc: "Content"
            }, {
                id: 5,
                udid: "secure-id-28",
                name: "Location B5",
                servicetype: "This is longer content",
                servicelocation: "Content",
                desc: "Content"
            }], $scope.searchKeywords = "", $scope.filteredStores = [], $scope.row = "", $scope.select = function (page) {
                var end, start;
                return start = (page - 1) * $scope.numPerPage, end = start + $scope.numPerPage, $scope.currentPageStores = $scope.filteredStores.slice(start, end)
            }, $scope.navigate = function (url) {
                $location.path(url);
            }, $scope.onFilterChange = function () {
                return $scope.select(1), $scope.currentPage = 1, $scope.row = ""
            }, $scope.onNumPerPageChange = function () {
                return $scope.select(1), $scope.currentPage = 1
            }, $scope.onOrderChange = function () {
                return $scope.select(1), $scope.currentPage = 1
            }, $scope.search = function () {
                return $scope.filteredStores = $filter("filter")($scope.stores, $scope.searchKeywords), $scope.onFilterChange()
            }, $scope.order = function (rowName) {
                return $scope.row !== rowName ? ($scope.row = rowName, $scope.filteredStores = $filter("orderBy")($scope.stores, rowName), $scope.onOrderChange()) : void 0
            }, $scope.numPerPageOpt = [3, 5, 10, 20], $scope.numPerPage = $scope.numPerPageOpt[1], $scope.currentPage = 1, $scope.currentPageStores = [], $scope.filterValue = "All", (init = function () {
                return $scope.search(), $scope.select($scope.currentPage)
            })()
        }])
        .controller("tableTerminalCtrl", ["$scope", "$filter", "$location", function ($scope, $filter, $location) {
            var init;
            return $scope.stores = [{
                id: 1,
                name: "Terminal C1",
                model: "This is longer content",
                desc: "Content",
                serial: "Content",
                manifest: "Manifest ABC",
                status: "Active"
            }, {
                id: 2,
                name: "Terminal C2",
                model: "This is longer content",
                desc: "Content",
                serial: "Content",
                manifest: "Manifest ABC",
                status: "Active"
            }, {
                id: 3,
                name: "Terminal C3",
                model: "This is longer content",
                desc: "Content",
                serial: "Content",
                manifest: "Manifest ABC",
                status: "Active"
            }, {
                id: 4,
                name: "Terminal C4",
                model: "This is longer content",
                desc: "Content",
                serial: "Content",
                manifest: "Manifest ABC",
                status: "Active"
            }, {
                id: 5,
                name: "Terminal C5",
                model: "This is longer content",
                desc: "Content",
                serial: "Content",
                manifest: "Manifest ABC",
                status: "Active"
            }], $scope.searchKeywords = "", $scope.filteredStores = [], $scope.row = "", $scope.select = function (page) {
                var end, start;
                return start = (page - 1) * $scope.numPerPage, end = start + $scope.numPerPage, $scope.currentPageStores = $scope.filteredStores.slice(start, end)
            }, $scope.navigate = function (url) {
                $location.path(url);
            }, $scope.onFilterChange = function () {
                return $scope.select(1), $scope.currentPage = 1, $scope.row = ""
            }, $scope.onNumPerPageChange = function () {
                return $scope.select(1), $scope.currentPage = 1
            }, $scope.onOrderChange = function () {
                return $scope.select(1), $scope.currentPage = 1
            }, $scope.search = function () {
                return $scope.filteredStores = $filter("filter")($scope.stores, $scope.searchKeywords), $scope.onFilterChange()
            }, $scope.order = function (rowName) {
                return $scope.row !== rowName ? ($scope.row = rowName, $scope.filteredStores = $filter("orderBy")($scope.stores, rowName), $scope.onOrderChange()) : void 0
            }, $scope.numPerPageOpt = [3, 5, 10, 20], $scope.numPerPage = $scope.numPerPageOpt[1], $scope.currentPage = 1, $scope.currentPageStores = [], $scope.filterValue = "All", (init = function () {
                return $scope.search(), $scope.select($scope.currentPage)
            })()
        }])
        .controller("tableEndpointServiceCtrl", ["$scope", "$filter", "$location", function ($scope, $filter, $location) {
            var init;
            return $scope.stores = [{
                id: 1,
                udid: "secure-id-34",
                name: "Endpoint Service E1",
                servicetype: "This is longer content",
                servicelocation: "Content",
                desc: "Content"
            }, {
                id: 2,
                udid: "secure-id-35",
                name: "Endpoint Service E2",
                servicetype: "This is longer content",
                servicelocation: "Content",
                desc: "Content"
            }, {
                id: 3,
                udid: "secure-id-36",
                name: "Endpoint Service E3",
                servicetype: "This is longer content",
                servicelocation: "Content",
                desc: "Content"
            }, {
                id: 4,
                udid: "secure-id-37",
                name: "Endpoint Service E4",
                servicetype: "This is longer content",
                servicelocation: "Content",
                desc: "Content"
            }, {
                id: 5,
                udid: "secure-id-38",
                name: "Endpoint Service E5",
                servicetype: "This is longer content",
                servicelocation: "Content",
                desc: "Content"
            }], $scope.searchKeywords = "", $scope.filteredStores = [], $scope.row = "", $scope.select = function (page) {
                var end, start;
                return start = (page - 1) * $scope.numPerPage, end = start + $scope.numPerPage, $scope.currentPageStores = $scope.filteredStores.slice(start, end)
            }, $scope.navigate = function (url) {
                $location.path(url);
            }, $scope.onFilterChange = function () {
                return $scope.select(1), $scope.currentPage = 1, $scope.row = ""
            }, $scope.onNumPerPageChange = function () {
                return $scope.select(1), $scope.currentPage = 1
            }, $scope.onOrderChange = function () {
                return $scope.select(1), $scope.currentPage = 1
            }, $scope.search = function () {
                return $scope.filteredStores = $filter("filter")($scope.stores, $scope.searchKeywords), $scope.onFilterChange()
            }, $scope.order = function (rowName) {
                return $scope.row !== rowName ? ($scope.row = rowName, $scope.filteredStores = $filter("orderBy")($scope.stores, rowName), $scope.onOrderChange()) : void 0
            }, $scope.numPerPageOpt = [3, 5, 10, 20], $scope.numPerPage = $scope.numPerPageOpt[1], $scope.currentPage = 1, $scope.currentPageStores = [], $scope.filterValue = "All", (init = function () {
                return $scope.search(), $scope.select($scope.currentPage)
            })()
        }])
        .controller("tablePeripheralCtrl", ["$scope", "$filter", "$location", function ($scope, $filter, $location) {
            var init;
            return $scope.stores = [{
                id: 1,
                name: "Peripheral D1",
                model: "This is longer content",
                serial: "Content",
                desc: "Content"
            }, {
                id: 2,
                name: "Peripheral D2",
                model: "This is longer content",
                serial: "Content",
                desc: "Content"
            }, {
                id: 3,
                name: "Peripheral D3",
                model: "This is longer content",
                serial: "Content",
                desc: "Content"
            }, {
                id: 4,
                name: "Peripheral D4",
                model: "This is longer content",
                serial: "Content",
                desc: "Content"
            }, {
                id: 5,
                name: "Peripheral D5",
                model: "This is longer content",
                serial: "Content",
                desc: "Content"
            }], $scope.searchKeywords = "", $scope.filteredStores = [], $scope.row = "", $scope.select = function (page) {
                var end, start;
                return start = (page - 1) * $scope.numPerPage, end = start + $scope.numPerPage, $scope.currentPageStores = $scope.filteredStores.slice(start, end)
            }, $scope.navigate = function (url) {
                $location.path(url);
            }, $scope.onFilterChange = function () {
                return $scope.select(1), $scope.currentPage = 1, $scope.row = ""
            }, $scope.onNumPerPageChange = function () {
                return $scope.select(1), $scope.currentPage = 1
            }, $scope.onOrderChange = function () {
                return $scope.select(1), $scope.currentPage = 1
            }, $scope.search = function () {
                return $scope.filteredStores = $filter("filter")($scope.stores, $scope.searchKeywords), $scope.onFilterChange()
            }, $scope.order = function (rowName) {
                return $scope.row !== rowName ? ($scope.row = rowName, $scope.filteredStores = $filter("orderBy")($scope.stores, rowName), $scope.onOrderChange()) : void 0
            }, $scope.numPerPageOpt = [3, 5, 10, 20], $scope.numPerPage = $scope.numPerPageOpt[1], $scope.currentPage = 1, $scope.currentPageStores = [], $scope.filterValue = "All", (init = function () {
                return $scope.search(), $scope.select($scope.currentPage)
            })()
        }])
        .controller("tableEndpointCtrl", ["$scope", "$filter", "$location", function ($scope, $filter, $location) {
            var init;
            return $scope.stores = [{
                id: 1,
                udid: "secure-id-14",
                name: "Endpoint E1",
                servicetype: "This is longer content",
                servicelocation: "Content",
                desc: "Content"
            }, {
                id: 2,
                udid: "secure-id-15",
                name: "Endpoint E2",
                servicetype: "This is longer content",
                servicelocation: "Content",
                desc: "Content"
            }, {
                id: 3,
                udid: "secure-id-16",
                name: "Endpoint E3",
                servicetype: "This is longer content",
                servicelocation: "Content",
                desc: "Content"
            }, {
                id: 4,
                udid: "secure-id-17",
                name: "Endpoint E4",
                servicetype: "This is longer content",
                servicelocation: "Content",
                desc: "Content"
            }, {
                id: 5,
                udid: "secure-id-18",
                name: "Endpoint E5",
                servicetype: "This is longer content",
                servicelocation: "Content",
                desc: "Content"
            }], $scope.searchKeywords = "", $scope.filteredStores = [], $scope.row = "", $scope.select = function (page) {
                var end, start;
                return start = (page - 1) * $scope.numPerPage, end = start + $scope.numPerPage, $scope.currentPageStores = $scope.filteredStores.slice(start, end)
            }, $scope.navigate = function (url) {
                $location.path(url);
            }, $scope.onFilterChange = function () {
                return $scope.select(1), $scope.currentPage = 1, $scope.row = ""
            }, $scope.onNumPerPageChange = function () {
                return $scope.select(1), $scope.currentPage = 1
            }, $scope.onOrderChange = function () {
                return $scope.select(1), $scope.currentPage = 1
            }, $scope.search = function () {
                return $scope.filteredStores = $filter("filter")($scope.stores, $scope.searchKeywords), $scope.onFilterChange()
            }, $scope.order = function (rowName) {
                return $scope.row !== rowName ? ($scope.row = rowName, $scope.filteredStores = $filter("orderBy")($scope.stores, rowName), $scope.onOrderChange()) : void 0
            }, $scope.numPerPageOpt = [3, 5, 10, 20], $scope.numPerPage = $scope.numPerPageOpt[1], $scope.currentPage = 1, $scope.currentPageStores = [], $scope.filterValue = "All", (init = function () {
                return $scope.search(), $scope.select($scope.currentPage)
            })()
        }])
}.call(this),
function () {
    "use strict";
    angular.module("app.dataGuard.task", [])
        .factory("taskStorage", function () {
            var DEMO_TASKS, STORAGE_ID;
            return STORAGE_ID = "tasks", DEMO_TASKS = '[ {"title": "Finish homework", "completed": true}, {"title": "Make a call", "completed": true}, {"title": "Build a snowman :)", "completed": false}, {"title": "Apply for monster university!", "completed": false}, {"title": "Play games with friends", "completed": true}, {"title": "Shopping", "completed": false}, {"title": "One more dance", "completed": false}, {"title": "Try Google glass", "completed": false} ]', {
                get: function () {
                    return JSON.parse(localStorage.getItem(STORAGE_ID) || DEMO_TASKS)
                },
                put: function (tasks) {
                    return localStorage.setItem(STORAGE_ID, JSON.stringify(tasks))
                }
            }
        })
        .directive("taskFocus", ["$timeout", function ($timeout) {
            return {
                link: function (scope, ele, attrs) {
                    return scope.$watch(attrs.taskFocus, function (newVal) {
                        return newVal ? $timeout(function () {
                            return ele[0].focus()
                        }, 0, !1) : void 0
                    })
                }
            }
        }])
        .controller("taskCtrl", ["$scope", "taskStorage", "filterFilter", "$rootScope", "logger", function ($scope, taskStorage, filterFilter, $rootScope, logger) {
            var tasks;
            return tasks = $scope.tasks = taskStorage.get(), $scope.newTask = "", $scope.remainingCount = filterFilter(tasks, {
                completed: !1
            }).length, $scope.editedTask = null, $scope.statusFilter = {
                completed: !1
            }, $scope.filter = function (filter) {
                switch (filter) {
                    case "all":
                        return $scope.statusFilter = "";
                    case "active":
                        return $scope.statusFilter = {
                            completed: !1
                        };
                    case "completed":
                        return $scope.statusFilter = {
                            completed: !0
                        }
                }
            }, $scope.add = function () {
                var newTask;
                return newTask = $scope.newTask.trim(), 0 !== newTask.length ? (tasks.push({
                    title: newTask,
                    completed: !1
                }), logger.logSuccess('New task: "' + newTask + '" added'), taskStorage.put(tasks), $scope.newTask = "", $scope.remainingCount++) : void 0
            }, $scope.edit = function (task) {
                return $scope.editedTask = task
            }, $scope.doneEditing = function (task) {
                return $scope.editedTask = null, task.title = task.title.trim(), task.title ? logger.log("Task updated") : $scope.remove(task), taskStorage.put(tasks)
            }, $scope.remove = function (task) {
                var index;
                return $scope.remainingCount -= task.completed ? 0 : 1, index = $scope.tasks.indexOf(task), $scope.tasks.splice(index, 1), taskStorage.put(tasks), logger.logError("Task removed")
            }, $scope.completed = function (task) {
                return $scope.remainingCount += task.completed ? -1 : 1, taskStorage.put(tasks), task.completed ? $scope.remainingCount > 0 ? logger.log(1 === $scope.remainingCount ? "Almost there! Only " + $scope.remainingCount + " task left" : "Good job! Only " + $scope.remainingCount + " tasks left") : logger.logSuccess("Congrats! All done :)") : void 0
            }, $scope.clearCompleted = function () {
                return $scope.tasks = tasks = tasks.filter(function (val) {
                    return !val.completed
                }), taskStorage.put(tasks)
            }, $scope.markAll = function (completed) {
                return tasks.forEach(function (task) {
                    return task.completed = completed
                }), $scope.remainingCount = completed ? 0 : tasks.length, taskStorage.put(tasks), completed ? logger.logSuccess("Congrats! All done :)") : void 0
            }, $scope.$watch("remainingCount == 0", function (val) {
                return $scope.allChecked = val
            }), $scope.$watch("remainingCount", function (newVal) {
                return $rootScope.$broadcast("taskRemaining:changed", newVal)
            })
        }])
}.call(this),
function () {
    "use strict";
    angular.module("app.dataGuard.ui.map", [])
        .directive("uiJqvmap", [function () {
            return {
                restrict: "A",
                scope: {
                    options: "="
                },
                link: function (scope, ele) {
                    var options;
                    return options = scope.options, ele.vectorMap(options)
                }
            }
        }])
        .controller("jqvmapCtrl", ["$scope", function ($scope) {
            var sample_data;
            return sample_data = {
                af: "16.63",
                al: "11.58",
                dz: "158.97",
                ao: "85.81",
                ag: "1.1",
                ar: "351.02",
                am: "8.83",
                au: "1219.72",
                at: "366.26",
                az: "52.17",
                bs: "7.54",
                bh: "21.73",
                bd: "105.4",
                bb: "3.96",
                by: "52.89",
                be: "461.33",
                bz: "1.43",
                bj: "6.49",
                bt: "1.4",
                bo: "19.18",
                ba: "16.2",
                bw: "12.5",
                br: "2023.53",
                bn: "11.96",
                bg: "44.84",
                bf: "8.67",
                bi: "1.47",
                kh: "11.36",
                cm: "21.88",
                ca: "1563.66",
                cv: "1.57",
                cf: "2.11",
                td: "7.59",
                cl: "199.18",
                cn: "5745.13",
                co: "283.11",
                km: "0.56",
                cd: "12.6",
                cg: "11.88",
                cr: "35.02",
                ci: "22.38",
                hr: "59.92",
                cy: "22.75",
                cz: "195.23",
                dk: "304.56",
                dj: "1.14",
                dm: "0.38",
                "do": "50.87",
                ec: "61.49",
                eg: "216.83",
                sv: "21.8",
                gq: "14.55",
                er: "2.25",
                ee: "19.22",
                et: "30.94",
                fj: "3.15",
                fi: "231.98",
                fr: "2555.44",
                ga: "12.56",
                gm: "1.04",
                ge: "11.23",
                de: "3305.9",
                gh: "18.06",
                gr: "305.01",
                gd: "0.65",
                gt: "40.77",
                gn: "4.34",
                gw: "0.83",
                gy: "2.2",
                ht: "6.5",
                hn: "15.34",
                hk: "226.49",
                hu: "132.28",
                is: "12.77",
                "in": "1430.02",
                id: "695.06",
                ir: "337.9",
                iq: "84.14",
                ie: "204.14",
                il: "201.25",
                it: "2036.69",
                jm: "13.74",
                jp: "5390.9",
                jo: "27.13",
                kz: "129.76",
                ke: "32.42",
                ki: "0.15",
                kr: "986.26",
                undefined: "5.73",
                kw: "117.32",
                kg: "4.44",
                la: "6.34",
                lv: "23.39",
                lb: "39.15",
                ls: "1.8",
                lr: "0.98",
                ly: "77.91",
                lt: "35.73",
                lu: "52.43",
                mk: "9.58",
                mg: "8.33",
                mw: "5.04",
                my: "218.95",
                mv: "1.43",
                ml: "9.08",
                mt: "7.8",
                mr: "3.49",
                mu: "9.43",
                mx: "1004.04",
                md: "5.36",
                mn: "5.81",
                me: "3.88",
                ma: "91.7",
                mz: "10.21",
                mm: "35.65",
                na: "11.45",
                np: "15.11",
                nl: "770.31",
                nz: "138",
                ni: "6.38",
                ne: "5.6",
                ng: "206.66",
                no: "413.51",
                om: "53.78",
                pk: "174.79",
                pa: "27.2",
                pg: "8.81",
                py: "17.17",
                pe: "153.55",
                ph: "189.06",
                pl: "438.88",
                pt: "223.7",
                qa: "126.52",
                ro: "158.39",
                ru: "1476.91",
                rw: "5.69",
                ws: "0.55",
                st: "0.19",
                sa: "434.44",
                sn: "12.66",
                rs: "38.92",
                sc: "0.92",
                sl: "1.9",
                sg: "217.38",
                sk: "86.26",
                si: "46.44",
                sb: "0.67",
                za: "354.41",
                es: "1374.78",
                lk: "48.24",
                kn: "0.56",
                lc: "1",
                vc: "0.58",
                sd: "65.93",
                sr: "3.3",
                sz: "3.17",
                se: "444.59",
                ch: "522.44",
                sy: "59.63",
                tw: "426.98",
                tj: "5.58",
                tz: "22.43",
                th: "312.61",
                tl: "0.62",
                tg: "3.07",
                to: "0.3",
                tt: "21.2",
                tn: "43.86",
                tr: "729.05",
                tm: 0,
                ug: "17.12",
                ua: "136.56",
                ae: "239.65",
                gb: "2258.57",
                us: "14624.18",
                uy: "40.71",
                uz: "37.72",
                vu: "0.72",
                ve: "285.21",
                vn: "101.99",
                ye: "30.02",
                zm: "15.69",
                zw: "5.57"
            }, $scope.worldMap = {
                map: "world_en",
                backgroundColor: null,
                color: "#ffffff",
                hoverOpacity: .7,
                selectedColor: "#666666",
                enableZoom: !0,
                showTooltip: !0,
                values: sample_data,
                scaleColors: ["#C8EEFF", "#006491"],
                normalizeFunction: "polynomial"
            }, $scope.USAMap = {
                map: "usa_en",
                backgroundColor: null,
                color: "#ffffff",
                hoverColor: "#999999",
                selectedColor: "#666666",
                enableZoom: !0,
                showTooltip: !0,
                selectedRegion: "MO"
            }, $scope.europeMap = {
                map: "europe_en",
                backgroundColor: null,
                color: "#ffffff",
                hoverOpacity: .7,
                hoverColor: "#999999",
                enableZoom: !1,
                showTooltip: !1,
                values: sample_data,
                scaleColors: ["#C8EEFF", "#006491"],
                normalizeFunction: "polynomial"
            }
        }])
}.call(this),
function () {
    "use strict";
    angular.module("app.dataGuard.ui.ctrls", [])
        .controller("NotifyCtrl", ["$scope", "logger", function ($scope, logger) {
            return $scope.notify = function (type) {
                switch (type) {
                    case "info":
                        return logger.log("Heads up! This alert needs your attention, but it's not super important.");
                    case "success":
                        return logger.logSuccess("Well done! You successfully read this important alert message.");
                    case "warning":
                        return logger.logWarning("Warning! Best check yo self, you're not looking too good.");
                    case "error":
                        return logger.logError("Oh snap! Change a few things up and try submitting again.")
                }
            }
        }])
        .controller("AlertCtrl", ["$scope", "$location", function ($scope, $location) {
            return $scope.alerts = [{
                type: "normal",
                title: "Terminal 22",
                issue: "Fraud Concern",
                msg: "Recent Activity & timestamp"
            }, {
                type: "normal",
                title: "Terminal 22",
                issue: "Fraud Concern",
                msg: "Recent Activity & timestamp"
            }, {
                type: "normal",
                title: "Terminal 22",
                issue: "Fraud Concern",
                msg: "Recent Activity & timestamp"
            }, {
                type: "normal",
                title: "Terminal 22",
                issue: "Fraud Concern",
                msg: "Recent Activity & timestamp"
            }, {
                type: "normal",
                title: "Terminal 22",
                issue: "Fraud Concern",
                msg: "Recent Activity & timestamp"
            }], $scope.navigate = function (url) {
                $location.path(url);
            }, $scope.addAlert = function () {
                var num, type;
                switch (num = Math.ceil(4 * Math.random()), type = void 0, num) {
                    case 0:
                        type = "info";
                        break;
                    case 1:
                        type = "success";
                        break;
                    case 2:
                        type = "info";
                        break;
                    case 3:
                        type = "warning";
                        break;
                    case 4:
                        type = "danger"
                }
                return $scope.alerts.push({
                    type: type,
                    msg: "Another alert!"
                })
            }, $scope.closeAlert = function (index) {
                return $scope.alerts.splice(index, 1)
            }
        }])
        .controller("ProgressDemoCtrl", ["$scope", function ($scope) {
            return $scope.max = 200, $scope.random = function () {
                var type, value;
                value = Math.floor(100 * Math.random() + 10), type = void 0, type = 25 > value ? "success" : 50 > value ? "info" : 75 > value ? "warning" : "danger", $scope.showWarning = "danger" === type || "warning" === type, $scope.dynamic = value, $scope.type = type
            }, $scope.random()
        }])
        .controller("AccordionDemoCtrl", ["$scope", function ($scope) {
            $scope.oneAtATime = !0, $scope.groups = [{
                title: "Dynamic Group Header - 1",
                content: "Dynamic Group Body - 1"
            }, {
                title: "Dynamic Group Header - 2",
                content: "Dynamic Group Body - 2"
            }, {
                title: "Dynamic Group Header - 3",
                content: "Dynamic Group Body - 3"
            }], $scope.items = ["Item 1", "Item 2", "Item 3"], $scope.status = {
                isFirstOpen: !0,
                isFirstOpen1: !0,
                isFirstOpen2: !0,
                isFirstOpen3: !0,
                isFirstOpen4: !0,
                isFirstOpen5: !0,
                isFirstOpen6: !0
            }, $scope.addItem = function () {
                var newItemNo;
                newItemNo = $scope.items.length + 1, $scope.items.push("Item " + newItemNo)
            }
        }])
        .controller("CollapseDemoCtrl", ["$scope", function ($scope) {
            return $scope.isCollapsed = !1
        }])
        .controller("ModalDemoCtrl", ["$scope", "$modal", "$log", function ($scope, $modal, $log) {
            $scope.items = ["item1", "item2", "item3"], $scope.open = function () {
                var modalInstance;
                modalInstance = $modal.open({
                    templateUrl: "myModalContent.html",
                    controller: "ModalInstanceCtrl",
                    resolve: {
                        items: function () {
                            return $scope.items
                        }
                    }
                }), modalInstance.result.then(function (selectedItem) {
                    $scope.selected = selectedItem
                }, function () {
                    $log.info("Modal dismissed at: " + new Date)
                })
            }
        }])
        .controller("ModalInstanceCtrl", ["$scope", "$modalInstance", "items", function ($scope, $modalInstance, items) {
            $scope.items = items, $scope.selected = {
                item: $scope.items[0]
            }, $scope.ok = function () {
                $modalInstance.close($scope.selected.item)
            }, $scope.cancel = function () {
                $modalInstance.dismiss("cancel")
            }
        }])
        .controller("PaginationDemoCtrl", ["$scope", function ($scope) {
            return $scope.totalItems = 64, $scope.currentPage = 4, $scope.setPage = function (pageNo) {
                return $scope.currentPage = pageNo
            }, $scope.maxSize = 5, $scope.bigTotalItems = 175, $scope.bigCurrentPage = 1
        }])
        .controller("TabsDemoCtrl", ["$scope", function ($scope) {
            return $scope.tabs = [{
                title: "Dynamic Title 1",
                content: "Dynamic content 1.  Consectetur adipisicing elit. Nihil, quidem, officiis, et ex laudantium sed cupiditate voluptatum libero nobis sit illum voluptates beatae ab. Ad, repellendus non sequi et at."
            }, {
                title: "Disabled",
                content: "Dynamic content 2.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, quidem, officiis, et ex laudantium sed cupiditate voluptatum libero nobis sit illum voluptates beatae ab. Ad, repellendus non sequi et at.",
                disabled: !0
            }], $scope.navType = "pills"
        }])
        .controller("TreeDemoCtrl", ["$scope", function ($scope) {
            return $scope.list = [{
                id: 1,
                title: "Item 1",
                items: []
            }, {
                id: 2,
                title: "Item 2",
                items: [{
                    id: 21,
                    title: "Item 2.1",
                    items: [{
                        id: 211,
                        title: "Item 2.1.1",
                        items: []
                    }, {
                        id: 212,
                        title: "Item 2.1.2",
                        items: []
                    }]
                }, {
                    id: 22,
                    title: "Item 2.2",
                    items: [{
                        id: 221,
                        title: "Item 2.2.1",
                        items: []
                    }, {
                        id: 222,
                        title: "Item 2.2.2",
                        items: []
                    }]
                }]
            }, {
                id: 3,
                title: "Item 3",
                items: []
            }, {
                id: 4,
                title: "Item 4",
                items: [{
                    id: 41,
                    title: "Item 4.1",
                    items: []
                }]
            }, {
                id: 5,
                title: "Item 5",
                items: []
            }, {
                id: 6,
                title: "Item 6",
                items: []
            }, {
                id: 7,
                title: "Item 7",
                items: []
            }], $scope.selectedItem = {}, $scope.options = {}, $scope.remove = function (scope) {
                scope.remove()
            }, $scope.toggle = function (scope) {
                scope.toggle()
            }, $scope.newSubItem = function (scope) {
                var nodeData;
                nodeData = scope.$modelValue, nodeData.items.push({
                    id: 10 * nodeData.id + nodeData.items.length,
                    title: nodeData.title + "." + (nodeData.items.length + 1),
                    items: []
                })
            }
        }])
        .controller("MapDemoCtrl", ["$scope", "$http", "$interval", function ($scope, $http, $interval) {
            var i, markers;
            for (markers = [], i = 0; 8 > i;) markers[i] = new google.maps.Marker({
                title: "Marker: " + i
            }), i++;
            $scope.GenerateMapMarkers = function () {
                var d, lat, lng, loc, numMarkers;
                for (d = new Date, $scope.date = d.toLocaleString(), numMarkers = Math.floor(4 * Math.random()) + 4, i = 0; numMarkers > i;) lat = 43.66 + Math.random() / 100, lng = -79.4103 + Math.random() / 100, loc = new google.maps.LatLng(lat, lng), markers[i].setPosition(loc), markers[i].setMap($scope.map), i++
            }, $interval($scope.GenerateMapMarkers, 2e3)
        }])
}.call(this),
function () {
    "use strict";
    angular.module("app.dataGuard.ui.directives", [])
        .directive("uiTime", [function () {
            return {
                restrict: "A",
                link: function (scope, ele) {
                    var checkTime, startTime;
                    return startTime = function () {
                        var h, m, s, t, time, today;
                        return today = new Date, h = today.getHours(), m = today.getMinutes(), s = today.getSeconds(), m = checkTime(m), s = checkTime(s), time = h + ":" + m + ":" + s, ele.html(time), t = setTimeout(startTime, 500)
                    }, checkTime = function (i) {
                        return 10 > i && (i = "0" + i), i
                    }, startTime()
                }
            }
        }])
        .directive("uiWeather", [function () {
            return {
                restrict: "A",
                link: function (scope, ele, attrs) {
                    var color, icon, skycons;
                    return color = attrs.color, icon = Skycons[attrs.icon], skycons = new Skycons({
                        color: color,
                        resizeClear: !0
                    }), skycons.add(ele[0], icon), skycons.play()
                }
            }
        }])
        .directive("uiNotCloseOnClick", [function () {
            return {
                restrict: "A",
                compile: function (ele) {
                    return ele.on("click", function (event) {
                        return event.stopPropagation()
                    })
                }
            }
        }])
        .directive("slimScroll", [function () {
            return {
                restrict: "A",
                link: function (scope, ele, attrs) {
                    return ele.slimScroll({
                        height: attrs.scrollHeight || "100%"
                    })
                }
            }
        }])
}.call(this),
function () {
    "use strict";
    angular.module("app.dataGuard.ui.services", [])
        .factory("logger", [function () {
            var logIt;
            return toastr.options = {
                closeButton: !0,
                positionClass: "toast-bottom-right",
                timeOut: "3000"
            }, logIt = function (message, type) {
                return toastr[type](message)
            }, {
                log: function (message) {
                    logIt(message, "info")
                },
                logWarning: function (message) {
                    logIt(message, "warning")
                },
                logSuccess: function (message) {
                    logIt(message, "success")
                },
                logError: function (message) {
                    logIt(message, "error")
                }
            }
        }])
}.call(this),
function () {
    "use strict";
    // UI PROTOTYPE 30037693 adding app.dataguard.services as dependency.
    angular.module("app.dataGuard", ["ngRoute", "ngAnimate", "ui.bootstrap", "easypiechart", "mgo-angular-wizard", "textAngular", "ui.tree", "ngMap", "ngTagsInput", "app.dataGuard.controllers", "app.dataGuard.directives", "app.dataGuard.localization", "app.dataGuard.nav", "app.dataGuard.ui.ctrls", "app.dataGuard.ui.directives", "app.dataGuard.ui.services", "app.dataGuard.ui.map", "app.dataGuard.form.validation", "app.dataGuard.ui.form.ctrls", "app.dataGuard.ui.form.directives", "app.dataGuard.tables", "app.dataGuard.task", "app.dataGuard.chart.ctrls", "app.dataGuard.chart.directives", "app.dataGuard.page.ctrls", "app.dataGuard.services"])
        .config(["$routeProvider", function ($routeProvider) {
            var routes, setRoutes;
            // Added new routes for 30047923
            return routes = ["dashboard", "fleet/enterprise-group", "fleet/location", "fleet/terminal", "fleet/endpoint-service", "fleet/peripheral", "fleet/endpoint", "ui/typography", "ui/buttons", "ui/icons", "ui/grids", "ui/widgets", "ui/components", "ui/timeline", "ui/nested-lists", "ui/pricing-tables", "ui/maps", "tables/static", "tables/dynamic", "tables/responsive", "forms/elements", "forms/layouts", "forms/validation", "forms/wizard", "charts/charts", "charts/flot", "charts/morris", "pages/404", "pages/500", "pages/blank", "pages/forgot-password", "pages/invoice", "pages/lock-screen", "pages/profile", "pages/signin", "pages/signup", "mail/compose", "mail/inbox", "mail/single", "tasks/tasks", "reports/main", "users/users", "inventory/main", "manifest/manifest"], setRoutes = function (route) {
                var config, url;
                return url = "/" + route, config = {
                    templateUrl: "views/" + route + ".html"
                }, $routeProvider.when(url, config), $routeProvider
            }, routes.forEach(function (route) {
                return setRoutes(route)
            }), $routeProvider.when("/", {
                redirectTo: "/pages/signin"
            }), $routeProvider.when("/fleet", {
                redirectTo: "/fleet/enterprise-group"
            }).when("/404", {
                templateUrl: "views/pages/404.html"
            }).otherwise({
                redirectTo: "/404"
            })
        }])
}.call(this),
/**
 * Challenge 30047693 start
 */
function() {
    angular.module("app.dataGuard.services", [])
        /**
         * Statistics service.
         * This service return a list of all statistics. It is shown in reports page
         */
        .factory("statistics", ["$http", function($http) {
            return {
                getList: function() {
                    return $http.get('../data/statistics.json').then(function(payload) {
                        return payload.data;
                    });
                }
            };
        }])
        /**
         * Users service.
         */
        .factory("users", ["$http", function($http) {
            return {
                /**
                 * Retrives a list of all NCR DATAGUARD enterprise users
                 */
                getAllUsers: function() {
                    return $http.get('../data/users.json').then(function(payload) {
                        return payload.data;
                    });
                },
                /**
                 * The distinct array of roles the user has from the union of all groups they belong to.
                 */
                getAllRoles: function() {
                    return $http.get('../data/roles.json').then(function(payload) {
                        return payload.data;
                    });
                },
                /**
                 * The list of groups a user belongs to.
                 */
                getAllGroups: function(userId) {
                    return $http.get('../data/groups.json').then(function(payload) {
                        return payload.data;
                    });
                }
            };
        }])
        .factory("enterpriseGroups", ["$http", function($http) {
            return {
                /**
                 * Retrieve the enterprise group hierarchy in the form of a tree with a single parent node, a first level list of enterprise groups and any children within each.
                 */
                getEnterpriseGroups: function() {
                    return $http.get('../data/enterpriseGroups.json').then(function(payload) {
                        return payload.data;
                    });
                },
                /**
                 * Retrieve the list of all locations. This is a flat list and does not provide the location hierarchy organized in enterprise groups.
                 */
                getLocations: function() {
                    return $http.get('../data/enterpriseLocations.json').then(function(payload) {
                        return payload.data;
                    });
                },
                /**
                 * Retrieve the list of all endpoint services. This is a flat list and does not provide the endpoint services organized by location
                 */
                getEndpointServices: function() {
                    return $http.get('../data/endpointServices.json').then(function(payload) {
                        return payload.data;
                    });
                },
                /**
                 * Retrieve the list of all terminals. This is a flat list and does not provide the terminals organized by location.
                 */
                getTerminals: function() {
                    return $http.get('../data/terminals.json').then(function(payload) {
                        return payload.data;
                    });
                },
                /**
                 * Retrieve the list of all peripherals. This is a flat list and does not provide the peripherals organized by terminal.
                 */
                getPeripherals: function() {
                    return $http.get('../data/peripherals.json').then(function(payload) {
                        return payload.data;
                    });
                },
                /**
                 * Retrieve an array of endpoints matching query. This is a flat list and does not provide the endpoints organized by peripheral.
                 */
                getEndpoints: function() {
                    return $http.get('../data/endpoints.json').then(function(payload) {
                        return payload.data;
                    });
                }
            };
        }])
        .factory("manifests", ["$http", function($http) {
            return {
                /**
                 * Retrieve a list of all manifests. This is a flat list
                 */
                getAll: function() {
                    return $http.get('../data/manifest.json').then(function(payload) {
                        return payload.data;
                    });
                }
            };
        }])
}.call(this),
/**
 * Challenge 30047693 end
 */
function () {
    "use strict";
    angular.module("app.dataGuard.nav", [])
        .directive("toggleNavCollapsedMin", ["$rootScope", function ($rootScope) {
            return {
                restrict: "A",
                link: function (scope, ele) {
                    var app;
                    return app = $("#app"), ele.on("click", function (e) {
                        return app.hasClass("nav-collapsed-min") ? app.removeClass("nav-collapsed-min") : (app.addClass("nav-collapsed-min"), $rootScope.$broadcast("nav:reset")), e.preventDefault()
                    })
                }
            }
        }])
        .directive("collapseNav", [function () {
            return {
                restrict: "A",
                link: function (scope, ele) {
                    var $a, $aRest, $app, $lists, $listsRest, $nav, $window, Timer, prevWidth, updateClass;
                    return $window = $(window), $lists = ele.find("ul").parent("li"), $lists.append('<i class="fa fa-caret-down icon-has-ul-h"></i><i class="fa fa-caret-right icon-has-ul"></i>'), $a = $lists.children("a"), $listsRest = ele.children("li").not($lists), $aRest = $listsRest.children("a"), $app = $("#app"), $nav = $("#nav-container"), $a.on("click", function (event) {
                        var $parent, $this;
                        return $app.hasClass("nav-collapsed-min") || $nav.hasClass("nav-horizontal") && $window.width() >= 768 ? !1 : ($this = $(this), $parent = $this.parent("li"), $lists.not($parent).removeClass("open").find("ul").slideUp(), $parent.toggleClass("open").find("ul").slideToggle(), event.preventDefault())
                    }), $aRest.on("click", function () {
                        return $lists.removeClass("open").find("ul").slideUp()
                    }), scope.$on("nav:reset", function () {
                        return $lists.removeClass("open").find("ul").slideUp()
                    }), Timer = void 0, prevWidth = $window.width(), updateClass = function () {
                        var currentWidth;
                        return currentWidth = $window.width(), 768 > currentWidth && $app.removeClass("nav-collapsed-min"), 768 > prevWidth && currentWidth >= 768 && $nav.hasClass("nav-horizontal") && $lists.removeClass("open").find("ul").slideUp(), prevWidth = currentWidth
                    }, $window.resize(function () {
                        var t;
                        return clearTimeout(t), t = setTimeout(updateClass, 300)
                    })
                }
            }
        }])
        .directive("highlightActive", [function () {
            return {
                restrict: "A",
                controller: ["$scope", "$element", "$attrs", "$location", function ($scope, $element, $attrs, $location) {
                    var highlightActive, links, path;
                    return links = $element.find("a"), path = function () {
                        return $location.path()
                    }, highlightActive = function (links, path) {
                        return path = "#" + path, angular.forEach(links, function (link) {
                            var $li, $link, href;
                            return $link = angular.element(link), $li = $link.parent("li"), href = $link.attr("href"), $li.hasClass("active") && $li.removeClass("active"), 0 === path.indexOf(href) ? $li.addClass("active") : void 0
                        })
                    }, highlightActive(links, $location.path()), $scope.$watch(path, function (newVal, oldVal) {
                        return newVal !== oldVal ? highlightActive(links, $location.path()) : void 0
                    })
                }]
            }
        }])
        .directive("toggleOffCanvas", [function () {
            return {
                restrict: "A",
                link: function (scope, ele) {
                    return ele.on("click", function () {
                        return $("#app").toggleClass("on-canvas")
                    })
                }
            }
        }])
}.call(this),
function () {
    "use strict";
    angular.module("app.dataGuard.directives", [])
        .directive("imgHolder", [function () {
            return {
                restrict: "A",
                link: function (scope, ele) {
                    return Holder.run({
                        images: ele[0]
                    })
                }
            }
        }])
        .directive("customPage", function () {
            return {
                restrict: "A",
                controller: ["$scope", "$element", "$location", function ($scope, $element, $location) {
                    var addBg, path;
                    return path = function () {
                        return $location.path()
                    }, addBg = function (path) {
                        switch ($element.removeClass("body-wide body-lock"), path) {
                            case "/404":
                            case "/pages/404":
                            case "/pages/500":
                            case "/pages/signin":
                            case "/pages/signup":
                            case "/pages/forgot-password":
                                return $element.addClass("body-wide");
                            case "/pages/lock-screen":
                                return $element.addClass("body-wide body-lock")
                        }
                    }, addBg($location.path()), $scope.$watch(path, function (newVal, oldVal) {
                        return newVal !== oldVal ? addBg($location.path()) : void 0
                    })
                }]
            }
        })
        .directive("uiColorSwitch", [function () {
            return {
                restrict: "A",
                link: function (scope, ele) {
                    return ele.find(".color-option").on("click", function (event) {
                        var $this, hrefUrl, style;
                        if ($this = $(this), hrefUrl = void 0, style = $this.data("style"), "loulou" === style) hrefUrl = "styles/main.css", $('link[href^="styles/main"]').attr("href", hrefUrl);
                        else {
                            if (!style) return !1;
                            style = "-" + style, hrefUrl = "styles/main" + style + ".css", $('link[href^="styles/main"]').attr("href", hrefUrl)
                        }
                        return event.preventDefault()
                    })
                }
            }
        }])
        .directive("goBack", [function () {
            return {
                restrict: "A",
                controller: ["$scope", "$element", "$window", function ($scope, $element, $window) {
                    return $element.on("click", function () {
                        return $window.history.back()
                    })
                }]
            }
        }])
}.call(this),
function () {
    "use strict";
    angular.module("app.dataGuard.localization", [])
        .factory("localize", ["$http", "$rootScope", "$window", function ($http, $rootScope, $window) {
            var localize;
            return localize = {
                language: "",
                url: void 0,
                resourceFileLoaded: !1,
                successCallback: function (data) {
                    return localize.dictionary = data, localize.resourceFileLoaded = !0, $rootScope.$broadcast("localizeResourcesUpdated")
                },
                setLanguage: function (value) {
                    return localize.language = value.toLowerCase().split("-")[0], localize.initLocalizedResources()
                },
                setUrl: function (value) {
                    return localize.url = value, localize.initLocalizedResources()
                },
                buildUrl: function () {
                    return localize.language || (localize.language = ($window.navigator.userLanguage || $window.navigator.language).toLowerCase(), localize.language = localize.language.split("-")[0]), "i18n/resources-locale_" + localize.language + ".js"
                },
                initLocalizedResources: function () {
                    var url;
                    return url = localize.url || localize.buildUrl(), $http({
                        method: "GET",
                        url: url,
                        cache: !1
                    }).success(localize.successCallback).error(function () {
                        return $rootScope.$broadcast("localizeResourcesUpdated")
                    })
                },
                getLocalizedString: function (value) {
                    var result, valueLowerCase;
                    return result = void 0, localize.dictionary && value ? (valueLowerCase = value.toLowerCase(), result = "" === localize.dictionary[valueLowerCase] ? value : localize.dictionary[valueLowerCase]) : result = value, result
                }
            }
        }])
        .directive("i18n", ["localize", function (localize) {
            var i18nDirective;
            return i18nDirective = {
                restrict: "EA",
                updateText: function (ele, input, placeholder) {
                    var result;
                    return result = void 0, "i18n-placeholder" === input ? (result = localize.getLocalizedString(placeholder), ele.attr("placeholder", result)) : input.length >= 1 ? (result = localize.getLocalizedString(input), ele.text(result)) : void 0
                },
                link: function (scope, ele, attrs) {
                    return scope.$on("localizeResourcesUpdated", function () {
                        return i18nDirective.updateText(ele, attrs.i18n, attrs.placeholder)
                    }), attrs.$observe("i18n", function (value) {
                        return i18nDirective.updateText(ele, value, attrs.placeholder)
                    })
                }
            }
        }])
        .controller("LangCtrl", ["$scope", "localize", function ($scope, localize) {
            return $scope.lang = "English", $scope.setLang = function (lang) {
                switch (lang) {
                    case "English":
                        localize.setLanguage("EN-US");
                        break;
                    case "Español":
                        localize.setLanguage("ES-ES");
                        break;
                    case "日本語":
                        localize.setLanguage("JA-JP");
                        break;
                    case "中文":
                        localize.setLanguage("ZH-TW");
                        break;
                    case "Deutsch":
                        localize.setLanguage("DE-DE");
                        break;
                    case "français":
                        localize.setLanguage("FR-FR");
                        break;
                    case "Italiano":
                        localize.setLanguage("IT-IT");
                        break;
                    case "Portugal":
                        localize.setLanguage("PT-BR");
                        break;
                    case "Русский язык":
                        localize.setLanguage("RU-RU");
                        break;
                    case "한국어":
                        localize.setLanguage("KO-KR")
                }
                return $scope.lang = lang
            }, $scope.getFlag = function () {
                var lang;
                switch (lang = $scope.lang) {
                    case "English":
                        return "flags-american";
                    case "Español":
                        return "flags-spain";
                    case "日本語":
                        return "flags-japan";
                    case "中文":
                        return "flags-china";
                    case "Deutsch":
                        return "flags-germany";
                    case "français":
                        return "flags-france";
                    case "Italiano":
                        return "flags-italy";
                    case "Portugal":
                        return "flags-portugal";
                    case "Русский язык":
                        return "flags-russia";
                    case "한국어":
                        return "flags-korea"
                }
            }
        }])
}.call(this),
function () {
    "use strict";
    angular.module("app.dataGuard.controllers", [])
        .controller("AppCtrl", ["$scope", "$rootScope", function ($scope, $rootScope) {
            var $window;
            return $window = $(window), $scope.main = {
                brand: "NCR DataGuard",
                name: "Lisa Doe"
            }, $scope.admin = {
                layout: "wide",
                menu: "horizontal",
                fixedHeader: !0,
                fixedSidebar: !0
            }, $scope.$watch("admin", function (newVal, oldVal) {
                return "horizontal" === newVal.menu && "vertical" === oldVal.menu ? void $rootScope.$broadcast("nav:reset") : newVal.fixedHeader === !1 && newVal.fixedSidebar === !0 ? (oldVal.fixedHeader === !1 && oldVal.fixedSidebar === !1 && ($scope.admin.fixedHeader = !0, $scope.admin.fixedSidebar = !0), void (oldVal.fixedHeader === !0 && oldVal.fixedSidebar === !0 && ($scope.admin.fixedHeader = !1, $scope.admin.fixedSidebar = !1))) : (newVal.fixedSidebar === !0 && ($scope.admin.fixedHeader = !0), void (newVal.fixedHeader === !1 && ($scope.admin.fixedSidebar = !1)))
            }, !0), $scope.color = {
                primary: "#1BB7A0",
                success: "#94B758",
                info: "#56BDF1",
                infoAlt: "#7F6EC7",
                warning: "#F3C536",
                danger: "#FA7B58"
            }
        }])
        .controller("HeaderCtrl", ["$scope", function ($scope) {
            return $scope.introOptions = {
                steps: [{
                    element: "#step1",
                    intro: "<strong>Heads up!</strong> You can change the layout here",
                    position: "bottom"
                }, {
                    element: "#step2",
                    intro: "Select a different language",
                    position: "right"
                }, {
                    element: "#step3",
                    intro: "Runnable task App",
                    position: "left"
                }, {
                    element: "#step4",
                    intro: "Collapsed nav for both horizontal nav and vertical nav",
                    position: "right"
                }]
            }
        }])
        .controller("NavContainerCtrl", ["$scope", function () { }])
        .controller("NavCtrl", ["$scope", "taskStorage", "filterFilter", function ($scope, taskStorage, filterFilter) {
            var tasks;
            return tasks = $scope.tasks = taskStorage.get(), $scope.taskRemainingCount = filterFilter(tasks, {
                completed: !1
            }).length, $scope.$on("taskRemaining:changed", function (event, count) {
                return $scope.taskRemainingCount = count
            })
        }])
        .controller("DashboardCtrl", ["$scope", "$timeout", function ($scope, $timeout) {
            $timeout(function () {
                $('<span class="badge badge-danger">11</span>').insertAfter("#tab-alerts a");
            }, 1000, !1);
        }])
        // UI PROTOTYPE 30047923. Adding report controller
        .controller("ReportsCtrl", ["$scope", "statistics", function ($scope, statistics) {
            statistics.getList().then(function(data) {
                $scope.stats = data;
            });
        }])
        .controller("UsersCtrl", ["$scope", "users", function ($scope, users) {
            users.getAllUsers().then(function(data) {
                $scope.users = data;
            });
            users.getAllRoles().then(function(data) {
                $scope.roles = data;
            });
            users.getAllGroups().then(function(data) {
                $scope.groups = data;
            });
        }])
        .controller("InventoryCtrl", ["$scope", "enterpriseGroups", function ($scope, enterpriseGroups) {
            $scope.totalItems = {};
            $scope.pageIndexes = {
                enterpriseGroup: 1,
                location: 1,
                endpointService: 1,
                terminal: 1,
                peripheral: 1,
                endpoint: 1
            }
            enterpriseGroups.getEnterpriseGroups().then(function(data) {
                $scope.totalItems.enterpriseGroup = data.length;
                $scope.enterpriseGroups = data;
            });
            enterpriseGroups.getLocations().then(function(data) {
                $scope.totalItems.location = data.length;
                $scope.locations = data;
            });
            enterpriseGroups.getEndpointServices().then(function(data) {
                $scope.totalItems.endpointService = data.length;
                $scope.endpointServices = data;
            });
            enterpriseGroups.getTerminals().then(function(data) {
                $scope.totalItems.terminal = data.length;
                $scope.terminals = data;
            });
            enterpriseGroups.getPeripherals().then(function(data) {
                $scope.totalItems.peripheral = data.length;
                $scope.peripherals = data;
            });
            enterpriseGroups.getEndpoints().then(function(data) {
                $scope.totalItems.endpoint = data.length;
                $scope.endpoints = data;
            })
        }])
        .controller("ManifestCtrl", ["$scope", "manifests", function ($scope, manifests) {
            $scope.manifests = [];
            manifests.getAll().then(function(data) {
                $scope.manifests = data;
            });
        }]);
}.call(this);
