$(document).ready(function () {
    "use strict";
    var chart = "";
    // For appex_cloumn1
  var  options = {
        chart: {
            height: 370,
            type: "bar",
            toolbar: {
                show: !1
            }
        },
        plotOptions: {
            bar: {
                horizontal: !1,
                endingShape: "rounded",
                columnWidth: "55%"
            }
        },
        dataLabels: {
            enabled: !1
        },
        stroke: {
            show: !0,
            width: 2,
            colors: ["transparent"]
        },
        colors: ["#dee2e6", "#1ab394", "#f0ad4e"],
        series: [{
            name: "Net Profit",
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
            name: "Revenue",
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }, {
            name: "Free Cash Flow",
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }],
        xaxis: {
            categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
            axisBorder: {
                show: !0,
                color: "#bec7e0"
            },
            axisTicks: {
                show: !0,
                color: "#bec7e0"
            }
        },
        legend: {
            offsetY: 6
        },
        yaxis: {
            title: {
                text: "$ (thousands)"
            }
        },
        fill: {
            opacity: 1
        },
        grid: {
            row: {
                colors: ["transparent", "transparent"],
                opacity: .2
            },
            borderColor: "#f1f3fa"
        },
        tooltip: {
            y: {
                formatter: function (e) {
                    return "$ " + e + " thousands"
                }
            }
        }
    };
    (chart = new ApexCharts(document.querySelector("#apex_column1"), options)).render();

    // For Pie Chart
    options = {
        chart: {
            height: 270,
            type: "donut"
        },
        stroke: {
            show: true,
            width: 2,
            colors: ["transparent"]
        },
        series: [50, 70, 50],
        labels: ["India", "USA", "Australia"],
        colors: ["#1ab394", "#3a94d8", "#f0ad4e"],
        legend: {
            show: !0,
            position: "bottom",
            horizontalAlign: "center",
            verticalAlign: "middle",
            floating: !1,
            fontSize: "14px",
            offsetX: 0,
            offsetY: 6,
            formatter: function (seriesName, opts) {
                return [seriesName, " - ", opts.w.globals.series[opts.seriesIndex]]
            }
        },
        responsive: [{
            breakpoint: 600,
            options: {
                chart: {
                    height: 240
                },
                legend: {
                    show: !1
                }
            }
        }]
    };

    (chart = new ApexCharts(document.querySelector("#apex_pie1"), options)).render();

    
    options = {
        chart: {
            height: 270,
            type: "pie"
        },
        stroke: {
            show: true,
            width: 2,
            colors: ["transparent"]
        },
        series: [50, 70, 50],
        labels: ["New York", "Quensland", "Florida"],
        colors: ["#1ab394", "#3a94d8", "#f0ad4e"],
        legend: {
            show: !0,
            position: "bottom",
            horizontalAlign: "center",
            verticalAlign: "middle",
            floating: !1,
            fontSize: "14px",
            offsetX: 0,
            offsetY: 6,
            formatter: function (seriesName, opts) {
                return [seriesName, " - ", opts.w.globals.series[opts.seriesIndex]]
            }
        },
        responsive: [{
            breakpoint: 600,
            options: {
                chart: {
                    height: 240
                },
                legend: {
                    show: !1
                }
            }
        }]
    };
    (chart = new ApexCharts(document.querySelector("#apex_pie2"), options)).render();

    // For Usa Map
    jQuery('#vmap').vectorMap({
        map: 'usa_en',
        enableZoom: false,
        showTooltip: true,
        hoverOpacity: .7,
        hoverColor: !1,
        colors: {
            mo: '#1ab394',
            fl: '#1ab394',
            or: '#1ab394'
        }, onRegionClick: function (element, code, region) {
            var message = 'You clicked "'
                + region
                + '" which has the code: '
                + code.toUpperCase();
            //alert(message);
        }
    });


});