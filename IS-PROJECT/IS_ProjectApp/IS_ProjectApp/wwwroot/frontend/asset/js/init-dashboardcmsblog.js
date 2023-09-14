$(document).ready(function () {

    "use strict";

    var chart = "";
    //Code for apex_line2
    for (var ts2 = 14844186e5, dates = [], spikes = [5, -5, 3, -3, 8, -8], i = 0; i < 120; i++) {
        var innerArr = [ts2 += 864e5, dataSeries[1][i].value];
        dates.push(innerArr)
    }
  var  options = {
        series: [{
            name: "Page View",
            data: dates
        }],
        chart: {
            type: "area",
            stacked: !1,
            height: 375,
            zoom: {
                type: "x",
                enabled: !0,
                autoScaleYaxis: !0
            },
            toolbar: {
                autoSelected: "zoom"
            }
        },
        stroke: {
            width: [3]
        },
        dataLabels: {
            enabled: !1
        },
        markers: {
            size: 0
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                inverseColors: !1,
                opacityFrom: .5,
                opacityTo: 0,
                stops: [0, 90, 100]
            }
        },
        yaxis: {
            labels: {
                formatter: function (e) {
                    return (e / 1e6).toFixed(0)
                }
            },
            title: {
                text: "Views"
            }
        },
        xaxis: {
            type: "datetime"
        },
        tooltip: {
            shared: !1,
            y: {
                formatter: function (e) {
                    return (e / 1e6).toFixed(0)
                }
            }
        }
    };
    (chart = new ApexCharts(document.querySelector("#apex_line2"), options)).render();
});