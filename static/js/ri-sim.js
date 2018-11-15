

var gaugeOptions = {

    chart: { type: 'solidgauge' },
    title: null,
    pane: {
        center: ['50%', '80%'],
        size: '140%',
        startAngle: -90,
        endAngle: 90,
        background: {
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
            innerRadius: '60%',
            outerRadius: '100%',
            shape: 'arc'
        }
    },
    tooltip: { enabled: false },
    yAxis: {
        stops: [
            [0.4, '#DF5353'], // red
            [0.8, '#ffd966ff'], // yellow
            [1, '#55BF3B'], // green
        ],
        lineWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        title: { y: -100 },
        labels: { y: 16 }
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                y: 5,
                borderWidth: 0,
                useHTML: true,
                formatter: function() {
                    return this.percentage.toFixed(2) + '%';
                }
            }
        }
    }
};


var chartRiSim = Highcharts.chart('container-ri-sim', Highcharts.merge(gaugeOptions, {
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: 'Simulated Reliability Index'
        }
    },

    credits: {
        enabled: false
    },

    series: [{
        name: 'Simulated Reliability Index',
        data: [0],
        dataLabels: {
            format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.2f}</span><br/>' +
                   '<span style="font-size:12px;color:silver"></span></div>'
        },
        tooltip: {
            valueSuffix: ' %'
        }
    }]

}));

$("#sim-calc").click(function(){
    value = simulate_dp_ri()
    point = chartRiSim.series[0].points[0]
    console.log(value)
    point.update(value*100)
})


//var chartRiRt = Highcharts.chart('container-ri-rt', Highcharts.merge(gaugeOptions, {
//    pane: {
//        center: ['50%', '80%'],
//        size: '100%',
//        startAngle: -90,
//        endAngle: 90,
//        background: {
//            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
//            innerRadius: '60%',
//            outerRadius: '100%',
//            shape: 'arc'
//        }
//    },
//    yAxis: {
//        min: 0,
//        max: 100,
//        title: {
//            text: 'Real Time Reliability Index'
//        }
//    },
//
//    credits: {
//        enabled: false
//    },
//
//    series: [{
//        name: 'Real Time Reliability Index',
//        data: [0],
//        dataLabels: {
//            format: '<div style="text-align:center"><span style="font-size:25px;color:' +
//                ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
//                   '<span style="font-size:12px;color:silver"></span></div>'
//        },
//        tooltip: {
//            valueSuffix: ' %'
//        }
//    }]
//
//}));
//
//
//setInterval(function () {
//    var point,
//        newVal,
//        inc;
//
//    if (chartRiRt) {
//        point = chartRiRt.series[0].points[0];
//        value = (Math.round(calculate_rt() * 100) / 100)* 100
//        point.update(value);
//    }
//}, 1000);