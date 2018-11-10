
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
                    var x = (new Date()).getTime(), // current time
                        pred_y = Math.random(),
                        calc_y = calculate_rt();

                    predicted.addPoint([x, pred_y], false, true);
                    calculated.addPoint([x, calc_y], true, true);
                }, 1000);
            }
        }
    },

    time: {
        useUTC: true
    },

    title: {
        text: 'Live random data'
    },
    xAxis: {
        type: 'datetime',
        tickPixelInterval: 150
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

            for (i = -19; i <= 0; i += 1) {
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

            for (i = -19; i <= 0; i += 1) {
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