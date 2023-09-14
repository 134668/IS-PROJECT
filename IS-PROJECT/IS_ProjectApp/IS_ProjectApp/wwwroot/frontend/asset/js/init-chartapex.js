$(document).ready(function () {
    "use strict";
    var chart = "";
    //Code for apex_line1
    var options = {
        series: [{
            name: "Generators",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 152]
        }],
        chart: {
            height: 350,
            type: "line",
            zoom: {
                enabled: !1
            }
        },
        colors: ["#1ab394"],
        dataLabels: {
            enabled: !1
        },
        stroke: {
            curve: "straight",
            width: [3]
        },
        title: {
            text: "Sales Trends by Month",
            align: "left"
        },
        grid: {
            row: {
                colors: ["#f3f3f3", "transparent"],
                opacity: .5
            }
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"]
        }
    };
    (chart = new ApexCharts(document.querySelector("#apex_line1"), options)).render();
});

//Code for apex_line2
for (var ts2 = 14844186e5, dates = [], spikes = [5, -5, 3, -3, 8, -8], i = 0; i < 120; i++) {
    var innerArr = [ts2 += 864e5, dataSeries[1][i].value];
    dates.push(innerArr)
}
options = {
    series: [{
        name: "GE MOTORS",
        data: dates
    }],
    chart: {
        type: "area",
        stacked: !1,
        height: 350,
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
            text: "Price"
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



// Code For apex_area1
options = {
    chart: {
        height: 360,
        type: "area",
        stacked: !0,
        toolbar: {
            show: !1,
            autoSelected: "zoom"
        }
    },
    colors: ["#1ab394", "#a5c2f1"],
    dataLabels: {
        enabled: !1
    },
    stroke: {
        curve: "smooth",
        width: [3, 3],
        dashArray: [0, 4],
        lineCap: "round"
    },
    grid: {
        borderColor: "#45404a2e",
        padding: {
            left: 0,
            right: 0
        },
        strokeDashArray: 4
    },
    markers: {
        size: 0,
        hover: {
            size: 0
        }
    },
    series: [{
        name: "New Visits",
        data: [0, 65, 22, 98, 48, 111, 50, 120, 40, 120, 70, 130]
    }, {
        name: "Unique Visits",
        data: [0, 40, 10, 85, 40, 95, 35, 110, 30, 115, 60, 120]
    }],
    xaxis: {
        type: "month",
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        axisBorder: {
            show: !0,
            color: "#45404a2e"
        },
        axisTicks: {
            show: !0,
            color: "#45404a2e"
        }
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: .4,
            opacityTo: .3,
            stops: [0, 90, 100]
        }
    },
    tooltip: {
        x: {
            format: "dd/MM/yy HH:mm"
        }
    },
    legend: {
        position: "top",
        horizontalAlign: "right"
    }
};
(chart = new ApexCharts(document.querySelector("#apex_area1"), options)).render();

$(document).ready(function () {
    var e = {
        annotations: {
            yaxis: [{
                y: 30,
                borderColor: "#999",
                label: {
                    show: !0,
                    text: "Support",
                    style: {
                        color: "#fff",
                        background: "#3a94d8"
                    }
                }
            }],
            xaxis: [{
                x: new Date("30 Feb 2020").getTime(),
                borderColor: "#999",
                yAxisIndex: 0,
                label: {
                    show: !0,
                    text: "Rally",
                    style: {
                        color: "#fff",
                        background: "#f0ad4e"
                    }
                }
            }]
        },
        chart: {
            type: "area",
            height: 350
        },
        stroke: {
            width: [3]
        },
        dataLabels: {
            enabled: !1
        },
        series: [{
            data: [
                [15793596e5, 30.95],
                [1579446e6, 31.34],
                [15795324e5, 31.18],
                [15796188e5, 31.05],
                [1579878e6, 31],
                [15799644e5, 30.95],
                [15800508e5, 31.24],
                [15801372e5, 31.29],
                [15802236e5, 31.85],
                [15804828e5, 31.86],
                [15805692e5, 32.28],
                [15806556e5, 32.1],
                [1580742e6, 32.65],
                [15808284e5, 32.21],
                [15820876e5, 32.35],
                [1582174e6, 32.44],
                [15822604e5, 32.46],
                [15823468e5, 32.86],
                [15824332e5, 32.75],
                [15827788e5, 32.54],
                [15828652e5, 32.33],
                [15829516e5, 32.97],
                [1580038e6, 33.41],
                [15802972e5, 33.27],
                [15803836e5, 33.27],
                [158047e7, 32.89],
                [15805564e5, 33.1],
                [15806428e5, 33.73],
                [1580902e6, 33.22],
                [15809884e5, 31.99],
                [15810748e5, 32.41],
                [15811612e5, 33.05],
                [15812476e5, 33.64],
                [15815068e5, 33.56],
                [15815932e5, 34.22],
                [15816796e5, 33.77],
                [1581766e6, 34.17],
                [15818524e5, 33.82],
                [15821116e5, 34.51],
                [1582198e6, 33.16],
                [15822844e5, 33.56],
                [15823708e5, 33.71],
                [15824572e5, 33.81],
                [15827128e5, 34.4],
                [15827992e5, 34.63],
                [15828856e5, 34.46],
                [1582972e6, 34.48],
                [15830584e5, 34.31],
                [15833176e5, 34.7],
                [1583404e6, 34.31],
                [15834904e5, 33.46],
                [15835768e5, 33.59],
                [15839224e5, 33.22],
                [15840088e5, 32.61],
                [15840952e5, 33.01],
                [15841816e5, 33.55],
                [1584268e6, 33.18],
                [15845272e5, 32.84],
                [15846161e5, 33.84],
                [15847161e5, 33.39],
                [15847864e5, 32.91],
                [15848728e5, 33.06],
                [1585132e6, 32.62],
                [15852184e5, 32.4],
                [15853048e5, 33.13],
                [15853912e5, 33.26],
                [15854776e5, 33.58],
                [15857368e5, 33.55],
                [15858232e5, 33.77],
                [15859096e5, 33.76],
                [1585996e6, 33.32],
                [15860824e5, 32.61],
                [15863416e5, 32.52],
                [1586428e6, 32.67],
                [15865144e5, 32.52],
                [15866008e5, 31.92],
                [15866872e5, 32.2],
                [15869464e5, 32.23],
                [15870328e5, 32.33],
                [15871192e5, 32.36],
                [15872056e5, 32.01],
                [1587292e6, 31.31],
                [15875512e5, 32.01],
                [15876376e5, 32.01],
                [1587724e6, 32.18],
                [15878104e5, 31.54],
                [15878968e5, 31.6],
                [15882424e5, 32.05],
                [15883288e5, 31.29],
                [15884152e5, 31.05],
                [15885016e5, 29.82],
                [15887608e5, 30.31],
                [15888472e5, 30.7],
                [15889336e5, 31.69],
                [158902e7, 31.32],
                [15891064e5, 31.65],
                [15893656e5, 31.13],
                [1589452e6, 31.77],
                [15895384e5, 31.79],
                [15896248e5, 31.67],
                [15897112e5, 32.39],
                [15899704e5, 32.63],
                [15900568e5, 32.89],
                [15901432e5, 31.99],
                [15902296e5, 31.23],
                [1590316e6, 31.57],
                [15905752e5, 30.84],
                [15906616e5, 31.07],
                [1590748e6, 31.41],
                [15908344e5, 31.17],
                [15909208e5, 32.37],
                [159118e7, 32.19],
                [15912664e5, 32.51],
                [15914392e5, 32.53],
                [15915256e5, 31.37],
                [15917848e5, 30.43],
                [15918712e5, 30.44],
                [15919576e5, 30.2],
                [1592044e6, 30.14],
                [15921304e5, 30.65],
                [15923896e5, 30.4],
                [1592476e6, 30.65],
                [15925624e5, 31.43],
                [15926488e5, 31.89],
                [15927352e5, 31.38],
                [15929944e5, 30.64],
                [15930808e5, 30.02],
                [15931672e5, 30.33],
                [15932536e5, 30.95],
                [159334e7, 31.89],
                [15935992e5, 31.01],
                [15936856e5, 30.88],
                [1593772e6, 30.69],
                [15938584e5, 30.58],
                [15939448e5, 32.02],
                [1594204e6, 32.14],
                [15942904e5, 32.37],
                [15943768e5, 32.51],
                [15944632e5, 32.65],
                [15945496e5, 32.64],
                [15948088e5, 32.27],
                [15948952e5, 32.1],
                [15949816e5, 32.91],
                [1595068e6, 33.65],
                [15951544e5, 33.8],
                [15954161e5, 33.92],
                [15955e8, 33.75],
                [15955864e5, 33.84],
                [15956728e5, 33.5],
                [15957592e5, 32.26],
                [15960184e5, 32.32],
                [15961048e5, 32.06],
                [15961912e5, 31.96],
                [15962776e5, 31.46],
                [1596364e6, 31.27],
                [15967096e5, 31.43],
                [1596796e6, 32.26],
                [15968824e5, 32.79],
                [15969688e5, 32.46],
                [1597228e6, 32.13],
                [15973144e5, 32.43],
                [15974008e5, 32.42],
                [15974872e5, 32.81],
                [15975736e5, 33.34],
                [15978328e5, 33.41],
                [15979192e5, 32.57],
                [15980056e5, 33.12],
                [1598092e6, 34.53],
                [15981784e5, 33.83],
                [15984376e5, 33.41],
                [1598524e6, 32.9],
                [15986104e5, 32.53],
                [15986968e5, 32.8],
                [15987832e5, 32.44],
                [15990424e5, 32.62],
                [15991288e5, 32.57],
                [15992152e5, 32.6],
                [15993016e5, 32.68],
                [1599388e6, 32.47],
                [15996472e5, 32.23],
                [15997336e5, 31.68],
                [159982e7, 31.51],
                [15999064e5, 31.78],
                [15999928e5, 31.94],
                [1600252e6, 32.33],
                [16003384e5, 33.24],
                [16004248e5, 33.44],
                [16005112e5, 33.48],
                [16005976e5, 33.24],
                [16008568e5, 33.49],
                [16009432e5, 33.31],
                [16010296e5, 33.36],
                [1601116e6, 33.4],
                [16012024e5, 34.01],
                [1601638e6, 34.02],
                [16017244e5, 34.36],
                [16018108e5, 34.39],
                [160207e7, 34.24],
                [16021564e5, 34.39],
                [16022428e5, 33.47],
                [16023292e5, 32.98],
                [16024156e5, 32.9],
                [16026748e5, 32.7],
                [16027612e5, 32.54],
                [16028476e5, 32.23],
                [1602934e6, 32.64],
                [16030204e5, 32.65],
                [16032796e5, 32.92],
                [1603366e6, 32.64],
                [16034524e5, 32.84],
                [16036252e5, 33.4],
                [16038844e5, 33.3],
                [16039708e5, 33.18],
                [16040572e5, 33.88],
                [16041436e5, 34.09],
                [160423e7, 34.61],
                [16044892e5, 34.7],
                [16045756e5, 35.3],
                [1604662e6, 35.4],
                [16047484e5, 35.14],
                [16048348e5, 35.48],
                [1605094e6, 35.75],
                [16051804e5, 35.54],
                [16052668e5, 35.96],
                [16053532e5, 35.53],
                [16054396e5, 37.56],
                [16056988e5, 37.42],
                [16057852e5, 37.49],
                [16058716e5, 38.09],
                [1605958e6, 37.87],
                [16060444e5, 37.71],
                [16063036e5, 37.53],
                [16064764e5, 37.55],
                [16065628e5, 37.3],
                [16066492e5, 36.9],
                [16069084e5, 37.68],
                [16070812e5, 38.34],
                [16071676e5, 37.75],
                [1607254e6, 38.13],
                [16075132e5, 37.94],
                [16075996e5, 38.14],
                [1607686e6, 38.66],
                [16077724e5, 38.62],
                [16078588e5, 38.09],
                [1608118e6, 38.16],
                [16082044e5, 38.15],
                [16082908e5, 37.88],
                [16083772e5, 37.73],
                [16084636e5, 37.98],
                [16088092e5, 37.95],
                [16088956e5, 38.25],
                [1608982e6, 38.1],
                [16090684e5, 38.32],
                [16093276e5, 38.24],
                [1609414e6, 38.52],
                [16095004e5, 37.94],
                [16095868e5, 37.83],
                [16096732e5, 38.34],
                [16099324e5, 38.1],
                [16100188e5, 38.51],
                [16101052e5, 38.4],
                [16101916e5, 38.07],
                [1610278e6, 39.12],
                [16105372e5, 38.64],
                [16106236e5, 38.89],
                [161071e7, 38.81],
                [16107964e5, 38.61],
                [16108828e5, 38.63],
                [16112284e5, 38.99],
                [16113148e5, 38.77],
                [16114012e5, 38.34],
                [16114876e5, 38.55],
                [16117468e5, 38.11],
                [16118332e5, 38.59],
                [16119196e5, 39.6]
            ]
        }],
        markers: {
            size: 0,
            style: "hollow"
        },
        xaxis: {
            type: "datetime",
            min: new Date("01 Feb 2020").getTime(),
            tickAmount: 6,
            axisBorder: {
                show: !0,
                color: "#bec7e0"
            },
            axisTicks: {
                show: !0,
                color: "#bec7e0"
            }
        },
        colors: ["#1ab394"],
        tooltip: {
            x: {
                format: "dd MMM yyyy"
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: .7,
                opacityTo: .4,
                stops: [0, 100]
            }
        }
    },
        t = new ApexCharts(document.querySelector("#apex_area2"), e);
    t.render();
    var a = function (e) {
        var t = document.querySelectorAll("button");
        Array.prototype.forEach.call(t, function (e) {
            e.classList.remove("active")
        }), e.target.classList.add("active")
    };
    document.querySelector("#one_month").addEventListener("click", function (e) {
        a(e), t.updateOptions({
            xaxis: {
                min: new Date("1 Feb 2020").getTime(),
                max: new Date("28 Feb 2020").getTime()
            }
        })
    }), document.querySelector("#six_months").addEventListener("click", function (e) {
        a(e), t.updateOptions({
            xaxis: {
                min: new Date("1 Feb 2020").getTime(),
                max: new Date("27 Jun 2020").getTime()
            }
        })
    }), document.querySelector("#one_year").addEventListener("click", function (e) {
        a(e), t.updateOptions({
            xaxis: {
                min: new Date("1 Feb 2020").getTime(),
                max: new Date("27 Dec 2020").getTime()
            }
        })
    }), document.querySelector("#ytd").addEventListener("click", function (e) {
        a(e), t.updateOptions({
            xaxis: {
                min: new Date("01 Jan 2020").getTime(),
                max: new Date("27 Jan 2021").getTime()
            }
        })
    }), document.querySelector("#all").addEventListener("click", function (e) {
        a(e), t.updateOptions({
            xaxis: {
                min: void 0,
                max: void 0
            }
        })
    }), document.querySelector("#ytd").addEventListener("click", function () { });

    // For appex_cloumn1
    options = {
        chart: {
            height: 396,
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

    // For apex-column2
    options = {
        chart: {
            height: 390,
            type: "bar",
            toolbar: {
                show: !1
            }
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    position: "top"
                }
            }
        },
        dataLabels: {
            enabled: !0,
            formatter: function (e) {
                return e + "%"
            },
            offsetY: -20,
            style: {
                fontSize: "12px",
                colors: ["#304758"]
            }
        },
        colors: ["#1ab394"],
        series: [{
            name: "Inflation",
            data: [2.5, 3.2, 4, 10.2, 4, 3.9, 3.8, 2.3, 2, 1.8, .3, .1]
        }],
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            position: "top",
            labels: {
                offsetY: -18
            },
            axisBorder: {
                show: !0,
                color: "#28365f"
            },
            axisTicks: {
                show: !0,
                color: "#28365f"
            },
            crosshairs: {
                fill: {
                    type: "gradient",
                    gradient: {
                        colorFrom: "#D8E3F0",
                        colorTo: "#BED1E6",
                        stops: [0, 100],
                        opacityFrom: .4,
                        opacityTo: .5
                    }
                }
            },
            tooltip: {
                enabled: !0,
                offsetY: -20
            }
        },
        fill: {
            gradient: {
                enabled: !1,
                shade: "light",
                type: "horizontal",
                shadeIntensity: .25,
                gradientToColors: void 0,
                inverseColors: !0,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [50, 0, 100, 100]
            }
        },
        yaxis: {
            axisBorder: {
                show: !1
            },
            axisTicks: {
                show: !1
            },
            labels: {
                show: !1,
                formatter: function (e) {
                    return e + "%"
                }
            }
        },
        title: {
            text: "Monthly Inflation in Australia, 2020",
            floating: !0,
            offsetY: 365,
            align: "center",
            style: {
                color: "#6c757d"
            }
        },
        grid: {
            row: {
                colors: ["#afb7d21a", "transparent"],
                opacity: .2
            },
            borderColor: "#f1f3fa"
        }
    };
    (chart = new ApexCharts(document.querySelector("#apex_column2"), options)).render();

    // For appex-bar
    options = {
        chart: {
            height: 360,
            type: "bar",
            toolbar: {
                show: !1
            }
        },
        plotOptions: {
            bar: {
                horizontal: !0
            }
        },
        dataLabels: {
            enabled: !1
        },
        series: [{
            data: [390, 400, 420, 460, 510, 550, 680, 1000, 1150, 1250]
        }],
        colors: ["#1ab394"],
        yaxis: {
            axisBorder: {
                show: !0,
                color: "#bec7e0"
            },
            axisTicks: {
                show: !0,
                color: "#bec7e0"
            }
        },
        xaxis: {
            categories: ["China", "United States", "India", "Japan", "Germany", "Russia", "United Kingdom", "France", "Brazil", "Indonesia"]
        },
        states: {
            hover: {
                filter: "none"
            }
        },
        grid: {
            borderColor: "#f1f3fa"
        }
    };
    (chart = new ApexCharts(document.querySelector("#apex_bar"), options)).render();

    // For apex-mixxed
    options = {
        chart: {
            height: 380,
            type: "line",
            stacked: !1,
            toolbar: {
                show: !1
            }
        },
        dataLabels: {
            enabled: !1
        },
        stroke: {
            width: [0, 0, 3]
        },
        series: [{
            name: "Income",
            type: "column",
            data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
        }, {
            name: "Cashflow",
            type: "column",
            data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
        }, {
            name: "Revenue",
            type: "line",
            data: [20, 29, 37, 36, 44, 45, 50, 58]
        }],
        colors: ["#dee2e6", "#1ab394", "#f0ad4f"],
        xaxis: {
            categories: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
            axisBorder: {
                show: !0,
                color: "#bec7e0"
            },
            axisTicks: {
                show: !0,
                color: "#bec7e0"
            }
        },
        yaxis: [{
            axisTicks: {
                show: !0
            },
            axisBorder: {
                show: !0,
                color: "#6c757d"
            },
            labels: {
                style: {
                    color: "#6c757d"
                }
            },
            title: {
                text: "Income (thousand crores)"
            }
        }, {
            axisTicks: {
                show: !0
            },
            axisBorder: {
                show: !0,
                color: "#77d0ba"
            },
            labels: {
                style: {
                    color: "#77d0ba"
                },
                offsetX: 10
            },
            title: {
                text: "Operating Cashflow (thousand crores)"
            }
        }, {
            opposite: !0,
            axisTicks: {
                show: !0
            },
            axisBorder: {
                show: !0,
                color: "#d9534f"
            },
            labels: {
                style: {
                    color: "#d9534f"
                }
            },
            title: {
                text: "Revenue (thousand crores)"
            }
        }],
        tooltip: {
            followCursor: !0,
            y: {
                formatter: function (e) {
                    return void 0 !== e ? e + " thousand crores" : e
                }
            }
        },
        grid: {
            borderColor: "#f1f3fa"
        },
        legend: {
            offsetY: 6
        },
        responsive: [{
            breakpoint: 600,
            options: {
                yaxis: {
                    show: !1
                },
                legend: {
                    show: !1
                }
            }
        }]
    };

    function generateData1(e, t, a) {
        for (var o = 0, r = []; o < t;) {
            var n = Math.floor(Math.random() * (a.max - a.min + 1)) + a.min,
                s = Math.floor(61 * Math.random()) + 15;
            r.push([e, n, s]), e += 864e5, o++
        }
        return r
    } (chart = new ApexCharts(document.querySelector("#apex_mixed"), options)).render();



    // For apex candle stick
    options = {
        chart: {
            height: 320,
            type: "candlestick",
            toolbar: {
                show: !1
            }
        },
        series: [{
            data: [{
                x: new Date(15987786e5),
                y: [6629.81, 6650.5, 6623.04, 6633.33]
            }, {
                x: new Date(15987804e5),
                y: [6632.01, 6643.59, 6620, 6630.11]
            }, {
                x: new Date(15987822e5),
                y: [6630.71, 6648.95, 6623.34, 6635.65]
            }, {
                x: new Date(1598784e6),
                y: [6635.65, 6651, 6629.67, 6638.24]
            }, {
                x: new Date(15987858e5),
                y: [6638.24, 6640, 6620, 6624.47]
            }, {
                x: new Date(15987876e5),
                y: [6624.53, 6636.03, 6621.68, 6624.31]
            }, {
                x: new Date(15987894e5),
                y: [6624.61, 6632.2, 6617, 6626.02]
            }, {
                x: new Date(15987912e5),
                y: [6627, 6627.62, 6584.22, 6603.02]
            }, {
                x: new Date(1598793e6),
                y: [6605, 6608.03, 6598.95, 6604.01]
            }, {
                x: new Date(15987948e5),
                y: [6604.5, 6614.4, 6602.26, 6608.02]
            }, {
                x: new Date(15987966e5),
                y: [6608.02, 6610.68, 6601.99, 6608.91]
            }, {
                x: new Date(15987984e5),
                y: [6608.91, 6618.99, 6608.01, 6612]
            }, {
                x: new Date(15988002e5),
                y: [6612, 6615.13, 6605.09, 6612]
            }, {
                x: new Date(1598802e6),
                y: [6612, 6624.12, 6608.43, 6622.95]
            }, {
                x: new Date(15988038e5),
                y: [6623.91, 6623.91, 6615, 6615.67]
            }, {
                x: new Date(15988056e5),
                y: [6618.69, 6618.74, 6610, 6610.4]
            }, {
                x: new Date(15988074e5),
                y: [6611, 6622.78, 6610.4, 6614.9]
            }, {
                x: new Date(15988092e5),
                y: [6614.9, 6626.2, 6613.33, 6623.45]
            }, {
                x: new Date(1598811e6),
                y: [6623.48, 6627, 6618.38, 6620.35]
            }, {
                x: new Date(15988128e5),
                y: [6619.43, 6620.35, 6610.05, 6615.53]
            }, {
                x: new Date(15988146e5),
                y: [6615.53, 6617.93, 6610, 6615.19]
            }, {
                x: new Date(15988164e5),
                y: [6615.19, 6621.6, 6608.2, 6620]
            }, {
                x: new Date(15988182e5),
                y: [6619.54, 6625.17, 6614.15, 6620]
            }, {
                x: new Date(159882e7),
                y: [6620.33, 6634.15, 6617.24, 6624.61]
            }, {
                x: new Date(15988218e5),
                y: [6625.95, 6626, 6611.66, 6617.58]
            }, {
                x: new Date(15988236e5),
                y: [6619, 6625.97, 6595.27, 6598.86]
            }, {
                x: new Date(15988254e5),
                y: [6598.86, 6598.88, 6570, 6587.16]
            }, {
                x: new Date(15988272e5),
                y: [6588.86, 6600, 6580, 6593.4]
            }, {
                x: new Date(1598829e6),
                y: [6593.99, 6598.89, 6585, 6587.81]
            }, {
                x: new Date(15988308e5),
                y: [6587.81, 6592.73, 6567.14, 6578]
            }, {
                x: new Date(15988326e5),
                y: [6578.35, 6581.72, 6567.39, 6579]
            }, {
                x: new Date(15988344e5),
                y: [6579.38, 6580.92, 6566.77, 6575.96]
            }, {
                x: new Date(15988362e5),
                y: [6575.96, 6589, 6571.77, 6588.92]
            }, {
                x: new Date(1598838e6),
                y: [6588.92, 6594, 6577.55, 6589.22]
            }, {
                x: new Date(15988398e5),
                y: [6589.3, 6598.89, 6589.1, 6596.08]
            }, {
                x: new Date(15988416e5),
                y: [6597.5, 6600, 6588.39, 6596.25]
            }, {
                x: new Date(15988434e5),
                y: [6598.03, 6600, 6588.73, 6595.97]
            }, {
                x: new Date(15988452e5),
                y: [6595.97, 6602.01, 6588.17, 6602]
            }, {
                x: new Date(1598847e6),
                y: [6602, 6607, 6596.51, 6599.95]
            }, {
                x: new Date(15988488e5),
                y: [6600.63, 6601.21, 6590.39, 6591.02]
            }, {
                x: new Date(15988506e5),
                y: [6591.02, 6603.08, 6591, 6591]
            }, {
                x: new Date(15988524e5),
                y: [6591, 6601.32, 6585, 6592]
            }, {
                x: new Date(15988542e5),
                y: [6593.13, 6596.01, 6590, 6593.34]
            }, {
                x: new Date(1598856e6),
                y: [6593.34, 6604.76, 6582.63, 6593.86]
            }, {
                x: new Date(15988578e5),
                y: [6593.86, 6604.28, 6586.57, 6600.01]
            }, {
                x: new Date(15988596e5),
                y: [6601.81, 6603.21, 6592.78, 6596.25]
            }, {
                x: new Date(15988614e5),
                y: [6596.25, 6604.2, 6590, 6602.99]
            }, {
                x: new Date(15988632e5),
                y: [6602.99, 6606, 6584.99, 6587.81]
            }, {
                x: new Date(1598865e6),
                y: [6587.81, 6595, 6583.27, 6591.96]
            }, {
                x: new Date(15988668e5),
                y: [6591.97, 6596.07, 6585, 6588.39]
            }, {
                x: new Date(15988686e5),
                y: [6587.6, 6598.21, 6587.6, 6594.27]
            }, {
                x: new Date(15988704e5),
                y: [6596.44, 6601, 6590, 6596.55]
            }, {
                x: new Date(15988722e5),
                y: [6598.91, 6605, 6596.61, 6600.02]
            }, {
                x: new Date(1598874e6),
                y: [6600.55, 6605, 6589.14, 6593.01]
            }, {
                x: new Date(15988758e5),
                y: [6593.15, 6605, 6592, 6603.06]
            }, {
                x: new Date(15988776e5),
                y: [6603.07, 6604.5, 6599.09, 6603.89]
            }, {
                x: new Date(15988794e5),
                y: [6604.44, 6604.44, 6600, 6603.5]
            }, {
                x: new Date(15988812e5),
                y: [6603.5, 6603.99, 6597.5, 6603.86]
            }, {
                x: new Date(1598883e6),
                y: [6603.85, 6605, 6600, 6604.07]
            }, {
                x: new Date(15988848e5),
                y: [6604.98, 6606, 6604.07, 6606]
            }]
        }],
        xaxis: {
            type: "datetime",
            axisBorder: {
                show: !0,
                color: "#6c757d"
            },
            axisTicks: {
                show: !0,
                color: "#6c757d"
            }
        },
        yaxis: {
            labels: {
                formatter: function (e) {
                    return "$" + e
                }
            },
            tooltip: {
                enabled: !0
            }
        },
        grid: {
            strokeDashArray: 4
        }
    };
    (chart = new ApexCharts(document.querySelector("#apex_candlestick"), options)).render();

    // For Pie Chart
    options = {
        chart: {
            height: 320,
            type: "pie"
        },
        stroke: {
            show: !0,
            width: 2,
            colors: ["transparent"]
        },
        series: [50, 50, 50],
        labels: ["Active", "Inactive", "Pending"],
        colors: ["#1ab394", "#3a94d8", "#f0ad4e"],
        legend: {
            show: !0,
            position: "bottom",
            horizontalAlign: "center",
            verticalAlign: "middle",
            floating: !1,
            fontSize: "14px",
            offsetX: 0,
            offsetY: 6
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


});