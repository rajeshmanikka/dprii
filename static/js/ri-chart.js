
Highcharts.chart('ri-graph', {
    chart: {
        type: 'spline',
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
            load: function () {
                // set up the updating of the chart each second
                var predicted = this.series[0];
                var calculated = this.series[1];
                setInterval(function () {
                    var x = (new Date()).getTime() // current time
                    var calc_y = calculate_rt();
                    calculated.addPoint([x, calc_y], true, true);

                    var [a1, w1, a2, w2, a3, w3, a4, w4, a5, w5, a6, w6, a7, w7, k] = get_rt_values();
                    $.ajax({
                        type: "GET",
                        url: "/predicted",
                        data:{  "a1":a1, "w1":w1, "a2":a2, "w2":w2, "a3":a3, "w3":w3, "a4":a4,
                                "w4":w4, "a5":a5, "w5":w5, "a6":a6, "w6":w6, "a7":a7, "w7":w7, "k":k },
                        success: function(response){
                            console.log(response)
                            pred_y = parseFloat(response)
                            predicted.addPoint([x, pred_y], false, true);
                        },
                        error: function(xhr){
                            console.log("error fetching predicted value!")
                            predicted.addPoint([x, 0], false, true);
                        },
                        cache: false
                    })
                }, 1000);
            }
        }
    },
    credits: {enabled: false},
    time: {
        useUTC: true
    },

    title: {
        text: 'Real time DP-RI data'
    },
    xAxis: {
        type: 'datetime',
        tickPixelInterval: 200
    },
    yAxis: {
        title: {
            text: 'Value'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    plotOptions: {
        series:{
            dataLabels:{
                enabled: true,
                formatter: function() {
                    return this.y.toFixed(2);
                }
            }
        }
    },
    tooltip: {
        headerFormat: '<b>{series.name}</b><br/>',
        pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
    },
    legend: {
        enabled: true
    },
    exporting: {
        enabled: false
    },
    series: [{
        name: 'Predicted',
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -9; i <= 0; i += 1) {
                data.push({
                    x: time + i * 1000,
                    y: 0.1
                });
            }
            return data;
        }())
    },
    {
        name: 'Calculated',
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -9; i <= 0; i += 1) {
                data.push({
                    x: time + i * 1000,
                    y: 0
                });
            }
            return data;
        }())
    }
    ]
});