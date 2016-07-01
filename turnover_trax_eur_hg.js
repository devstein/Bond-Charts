//create high grade turnover for USA chart 
function turnover_trax_eur_hg_chart() {
    //var to record any errors while getting data
    var jqxhr_turnover_trax_eur_hg = $.get('../../datafiles/widget/turnover_trax_eur_hg.csv', function (data) {
        //set up chart 
        var options = {
            //set chart type
            chart: {
                type: 'spline',
                //set chart to its container
                renderTo: 'turnover_trax_eur_hg_container'
            },
            //set title
            title: {
                text: 'TRAX EUR High Grade Turnover (Trailing 12 Months)',
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
                    text: 'TRAX High Grade Turnover (Trailing 12 Months) ( % )',
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
                filename: 'MarketAxess_turnover_trax_eur_hg',
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
        .fail(function (jqxhr_turnover_trax_eur_hg, exception) {
            ajaxError(jqxhr_turnover_trax_eur_hg, exception, '#turnover_trax_eur_hg_container');
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
    turnover_trax_eur_hg_chart();
    $('#turnover_trax_eur_hg_container').toggle(true);

    auto_assign_toggle_chart_buttons();
})();