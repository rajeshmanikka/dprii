
  var xAxisOptions = {
    type: 'datetime',
    tickPixelInterval: 100,
  };

  var yAxisOptions = {
    title: {text: ''},
    max: 1,
    min: 0
  };

  var tooltipOptions = {
    headerFormat: '<b>{series.name}</b><br/>',
    pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
  };

  var commonOptions = {
    time: { useUTC: true },
    title: { text: '' },
    xAxis: xAxisOptions,
    yAxis: yAxisOptions,
    tooltip: tooltipOptions,
    legend: {enabled: false},
    exporting: {enabled: false},
    credits: {enabled: false}
  }

  function chartSettings(metric){
    return {
            chart: {
            type: 'spline',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 0,
                events: {
                    load: function () {
                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                        var x = (new Date()).getTime(), // current time
                            y = getFromInput(metric);
                        series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            }
        }
  }
    

    function getFromInput(metric){
        var id =  "#"+metric+"-val";
        var random = Math.random();
        $(id).val(random);
        return parseFloat($(id).val());
    }

    function datapoint(metric){
        var data = [],
        time = (new Date()).getTime(),
        i;
        for (i = -19; i <= 0; i += 1) {
            data.push({
              x: time + i * 1000,
              y: getFromInput(metric)
            });
          }
          return data;
    }
  
  function seriesSettings(metric){
    return {series: [{
        name: metric.toUpperCase() + ' data',
        data: datapoint(metric)
      }]}
  }
  
  var a1ChartSetting = $.extend({}, chartSettings("a1"), commonOptions, seriesSettings("a1"))
  var a2ChartSetting = $.extend({}, chartSettings("a2"), commonOptions, seriesSettings("a2"))
  var a3ChartSetting = $.extend({}, chartSettings("a3"), commonOptions, seriesSettings("a3"))
  var a4ChartSetting = $.extend({}, chartSettings("a4"), commonOptions, seriesSettings("a4"))
  var a5ChartSetting = $.extend({}, chartSettings("a5"), commonOptions, seriesSettings("a5"))
  var a6ChartSetting = $.extend({}, chartSettings("a6"), commonOptions, seriesSettings("a6"))
  var a7ChartSetting = $.extend({}, chartSettings("a7"), commonOptions, seriesSettings("a7"))

  Highcharts.chart('a1-graph',a1ChartSetting);
  Highcharts.chart('a2-graph',a2ChartSetting);
  Highcharts.chart('a3-graph',a3ChartSetting);
  Highcharts.chart('a4-graph',a4ChartSetting);
  Highcharts.chart('a5-graph',a5ChartSetting);
  Highcharts.chart('a6-graph',a6ChartSetting);
  Highcharts.chart('a7-graph',a7ChartSetting);
