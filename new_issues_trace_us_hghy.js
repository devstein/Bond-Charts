//create high grade turnover for USA chart 
function new_issues_trace_us_hg_chart() {
    //var to record any errors while getting data
    var jqxhr_new_issues_trace_us_hg = $.get('../../datafiles/widget/new_issues_trace_us_hg.csv', function (data) {
        //set up chart 
        var options = {
            //set chart type
            chart: {
                type: 'spline',
                //set chart to its container
                renderTo: 'new_issues_trace_us_hg_container'
            },
            //set title
            title: {
                text: 'TRACE US High Grade New Issues',
                style: {
                    color: '#4D759E'
                },
                align: 'center'
            },
            //set x-axis
            xAxis: {
                title: {
                    text: 'Date',
                    style: {
                        color: '#4D759E',
                        fontWeight: 'bold'
                    }
                },
                gridLineWidth: 1,
                //need datetime to display dates on x-axis
                type: 'datetime'
            },
            //set y-axis
            yAxis: {
                title: {
                    text: 'TRACE High Grade New Issues ( Billions USD )',
                    style: {
                        color: '#4D759E',
                        fontWeight: 'bold'
                    }
                },
                //make y-axis labels percents
                labels: {
                    formatter: function () {
                        return this.value + '%';
                    }
                }
            },
            //set tooltip
            tooltip: {
                valuePrefix: '€',
                valueDecimals: 2,
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>'
            },
            //set legend
            legend: {
                layout: 'horizontal',
                align: 'center',
                borderWidth: 1,
                borderRadius: 5
            },
            //instantiate series
            series: [],
            //define series color scheme
            colors: ['#002244', '#DBBB33', '#639741', '#43C5F3'],
            //set general plot options
            plotOptions: {
                spline: {
                    marker: {
                        enabled: false
                    }
                }
            },
            //set name of chart downloads
            exporting: {
                filename: 'MarketAxess_new_issues_trace_us_hg',
                //enable download icon
                enabled: true,
                //add image to download
                chartOptions: {
                    chart: {
                        events: {
                            load: function () {
                                this.renderer.image('http://www.marketaxess.com/images/marketaxess_logo2.gif', 90, 75, 300, 48).attr({
                                    opacity: 0.1
                                    }).add();
                            }
                        }
                    }
                }
            },
            //disable credits
            credits: {
                enabled: false
            }
        };
        //names of labels in order of series
        var names = ['All', 'Top 1000 CUSIPs by Volume', 'Ex-Top 1000 CUSIPs'];
        //get csv file, multiply by 100 (diviide by 0.01) and populate chart
        readCSV(options, data, 0.01, names);
        var chart = new Highcharts.Chart(options);
    })
        //if cannot get data display errors
        .fail(function (jqxhr_new_issues_trace_us_hg, exception) {
            ajaxError(jqxhr_new_issues_trace_us_hg, exception, '#new_issues_trace_us_hg_container');
    });
}

//create high grade turnover for USA chart 
function new_issues_trace_us_hy_chart() {
    //var to record any errors while getting data
    var jqxhr_new_issues_trace_us_hy = $.get('../../datafiles/widget/new_issues_trace_us_hy.csv', function (data) {
        //set up chart 
        var options = {
            //set chart type
            chart: {
                type: 'spline',
                //set chart to its container
                renderTo: 'new_issues_trace_us_hy_container'
            },
            //set title
            title: {
                text: 'TRACE US High Yield New Issues',
                style: {
                    color: '#4D759E'
                },
                align: 'center'
            },
            //set x-axis
            xAxis: {
                title: {
                    text: 'Date',
                    style: {
                        color: '#4D759E',
                        fontWeight: 'bold'
                    }
                },
                gridLineWidth: 1,
                //need datetime to display dates on x-axis
                type: 'datetime'
            },
            //set y-axis
            yAxis: {
                title: {
                    text: 'TRACE High Yield New Issues ( Billions USD )',
                    style: {
                        color: '#4D759E',
                        fontWeight: 'bold'
                    }
                },
                //make y-axis labels percents
                labels: {
                    formatter: function () {
                        return this.value + '%';
                    }
                }
            },
            //set tooltip
            tooltip: {
                valueSuffix: '%',
                valueDecimals: 2,
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>'
            },
            //set legend
            legend: {
                layout: 'horizontal',
                align: 'center',
                borderWidth: 1,
                borderRadius: 5
            },
            //instantiate series
            series: [],
            //define series color scheme
            colors: ['#002244', '#DBBB33', '#639741', '#43C5F3'],
            //set general plot options
            plotOptions: {
                spline: {
                    marker: {
                        enabled: false
                    }
                }
            },
            //set name of chart downloads
            exporting: {
                filename: 'MarketAxess_new_issues_trace_us_hy',
                //enable download icon
                enabled: true,
                //add image to download
                chartOptions: {
                    chart: {
                        events: {
                            load: function () {
                                this.renderer.image('http://www.marketaxess.com/images/marketaxess_logo2.gif', 90, 75, 300, 48).attr({
                                    opacity: 0.1
                                    }).add();
                            }
                        }
                    }
                }
            },
            //disable credits
            credits: {
                enabled: false
            }
        };
        //names of labels in order of series
        var names = ['All', 'Top 1000 CUSIPs by Volume', 'Ex-Top 1000 CUSIPs'];
        //get csv file, multiply by 100 (diviide by 0.01) and populate chart
        readCSV(options, data, 0.01, names);
        var chart = new Highcharts.Chart(options);
    })
        //if cannot get data display errors
        .fail(function (jqxhr_new_issues_trace_us_hy, exception) {
            ajaxError(jqxhr_new_issues_trace_us_hy, exception, '#new_issues_trace_us_hy_container');
    });
}


(function () {

    //set high level chart options for all charts
    Highcharts.setOptions({
        lang: {
            thousandsSep: ','
        }
    });

    $('.chart_container').toggle(false);
    new_issues_trace_us_hg_chart();
    $('#new_issues_trace_us_hg_container').toggle(true);
    new_issues_trace_us_hy_chart();
    auto_assign_toggle_chart_buttons();
})();