//create liquidity concentration chart for high grade and high yield in USA
function traded_cusips_trax_hghy_chart() {
    //var to catch any issues while getting data 
    var jqxhr_traded_cusips_trax_hghy = $.get('../../datafiles/widget_data/traded_cusips_trax_hghy.csv', function (data) {
        //set up chart 
        
        var options = {
            //set chart type
            chart: {
                type: 'line',
                //set chart to its container
                renderTo: 'traded_cusips_trax_hghy_container'
            },
            //set title
            title: {
                text: 'TRAX Traded CUSIPs',
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
                type: 'datetime'
            },
            //set y-axis
            yAxis: {
                title: {
                    text: 'TRAX Traded CUSIPs',
                    style: {
                        color: '#4D759E',
                        fontWeight: 'bold'
                    }
                },
                //make y-axis labels percents
                labels: {
                    //give y-axis labels commas for thousands place seperator
                    formatter: function () {
                        return Highcharts.numberFormat(this.value, 0, '', ',');
                    }
                }
            },
            //set tooltip
            tooltip: {
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
                },
                line: {
                    marker: {
                        enabled: false
                    }
                },
                series: {
                    turboThreshold: 0
                }
            },

            //set name of chart downloads
            exporting: {
                filename: 'MarketAxess_traded_cusips_trax_hghy',
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
        var names = ['HG', 'HY'];
        //get csv file, multiply by 100 (divide by .01) and populate chart
        readCSV(options, data, 1, names);
        var chart = new Highcharts.Chart(options);
    })
        //if errors while gettting data, display them
        .fail(function (jqxhr_traded_cusips_trax_hghy, exception) {
            ajaxError(jqxhr_traded_cusips_trax_hghy, exception, '#traded_cusips_trax_hghy_container');
    });
}

(function () {

    //set high level chart options for all charts
    Highcharts.setOptions({
        lang: {
            thousandsSep: ','
        }
    });

    traded_cusips_trax_hghy_chart();
})();