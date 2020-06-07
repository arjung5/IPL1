function fetchAndVisualizeData() {
    fetch("./data.json")
      .then(r => r.json())
      .then(visualizeData);
  }
  
  fetchAndVisualizeData();
  
  function visualizeData(data) {
    visualizeMatchesPlayedPerYear(data.matchesplayedperyear);
    return;
  }
  
  function visualizeMatchesPlayedPerYear(matchesplayedperyear) {
    const seriesData = [];
    for (let year in matchesplayedperyear) {
      seriesData.push([year, matchesplayedperyear[year]]);
    }
    Highcharts.chart('matches-played-per-year', {
      chart: {
          type: 'column',
          options3d: {
              enabled: true,
              alpha: 10,
              beta: 25,
              depth: 70
          }
      },
      title: {
          text: 'Matches Played Per Year'
      },
      subtitle: {
          text: 'Notice the difference between a 0 value and a null point'
      },
      plotOptions: {
          column: {
              depth: 25
          }
      },
      xAxis: {
          categories: Highcharts.getOptions().lang.shortMonths,
          labels: {
              skew3d: true,
              style: {
                  fontSize: '16px'
              }
          }
      },
      yAxis: {
          title: {
              text: null
          }
      },
      series: [{
          name: 'Years',
          data: seriesData
      }]
  });
  
}  
function fetchandvisualizedata() {
    fetch("./data.json")
      .then(r => r.json())
      .then(visualizedata);
  }
  fetchandvisualizedata();
  function visualizedata(data) {
    visualizematcheswonbyteam(data.matcheswonbyteam);
    return;
  }
  
  function visualizematcheswonbyteam(matcheswonbyteam) {
    // const teamname=[];
    const seriesData = [];
    const seriesData1 = [];
    const seriesData2 = [];
    const seriesData3 = [];
    // const seriesData4 = [];
    const seriesData5 = [];
    const seriesData6= [];
    const seriesData7 = [];
    const seriesData8 = [];
    const seriesData9= [];
    // const seriesData10 = [];
    const seriesData11 = [];
    // const seriesData12= [];
    const seriesData13= [];
    const seriesData14= [];
    const seriesData15= [];
    const seriesData16= [];
    const seriesData17= [];
    const seriesData18= [];
    
  
    for (let year in matcheswonbyteam) {
    seriesData.push(["Kolkata Knight Riders",matcheswonbyteam[year]["Kolkata Knight Riders"]]);
  }
  for (let year in matcheswonbyteam) {
    seriesData1.push(["Kings XI Punjab",matcheswonbyteam[year]["Kings XI Punjab"]]);
  }
  for (let year in matcheswonbyteam) {
    seriesData2.push(["Mumbai Indians",matcheswonbyteam[year]["Mumbai Indians"]]);
  }
  for (let year in matcheswonbyteam) {
    seriesData3.push(["Pune Warriors",matcheswonbyteam[year]["Pune Warriors"]]);
  }
  for (let year in matcheswonbyteam) {
    seriesData5.push(["Rising Pune Supergiants",matcheswonbyteam[year]["Rising Pune Supergiants"]]);
  }
  for (let year in matcheswonbyteam) {
    seriesData6.push(["Delhi Capitals",matcheswonbyteam[year]["Delhi Capitals"]]);
  }
  for (let year in matcheswonbyteam) {
    seriesData7.push(["Royal Challengers Bangalore",matcheswonbyteam[year]["Royal Challengers Bangalore"]]);
  }
  for (let year in matcheswonbyteam) {
    seriesData8.push(["Rajasthan Royals",matcheswonbyteam[year]["Rajasthan Royals"]]);
  }
  for (let year in matcheswonbyteam) {
    seriesData9.push(["Deccan Chargers",matcheswonbyteam[year]["Deccan Chargers"]]);
  }
  for (let year in matcheswonbyteam) {
    seriesData11.push(["noResult",matcheswonbyteam[year]["noResult"]]);
  }
  
  
  for (let year in matcheswonbyteam) {
    seriesData13.push(["Gujarat Lions",matcheswonbyteam[year]["Gujarat Lions"]]);
  }
  for (let year in matcheswonbyteam) {
    seriesData14.push(["Chennai Super Kings",matcheswonbyteam[year]["Chennai Super Kings"]]);
  }
  for (let year in matcheswonbyteam) {
    seriesData15.push(["Delhi Daredevils",matcheswonbyteam[year]["Delhi Daredevils"]]);
  }
  for (let year in matcheswonbyteam) {
    seriesData16.push(["Kochi Tuskers Kerala",matcheswonbyteam[year]["Kochi Tuskers Kerala"]]);
  }
  for (let year in matcheswonbyteam) {
    seriesData17.push(["Sunrisers Hyderabad",matcheswonbyteam[year]["Sunrisers Hyderabad"]]);
  }
  for (let year in matcheswonbyteam) {
    seriesData18.push(["Rising Pune Supergiant",matcheswonbyteam[year]["Rising Pune Supergiant"]]);
  }
  Highcharts.chart('matches-played-per-year1', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Matches won by each Team'
    },
    subtitle: {
        text: 'Source: WorldClimate.com'
    },
    xAxis: {
        categories: [
            '2008',
            '2009',
            '2010',
            '2011',
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017',
            '2018',
            '2019'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Matches Won'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: "Kolkata Knight Riders",
        data: seriesData
    },{
      name: "Kings XI Punjab",
      data: seriesData1
    },{
      name: "Mumbai Indians",
      data: seriesData2
    },{
      name: "Pune Warriors",
      data: seriesData3
    },{
      name: "Rising Pune Supergiants",
      data: seriesData5
    },{
      name: "Delhi Capitals",
      data: seriesData6
    },{
      name: "Royal Challengers Bangalore",
      data: seriesData7
    },{
      name: "Rajasthan Royals",
      data: seriesData8
    },{
      name: "Deccan Chargers",
      data: seriesData9
    },{
      name: "noResult",
      data: seriesData11  },{
      name: "Gujarat Lions",
      data: seriesData13
    },{
      name: "Chennai Super Kings",
      data: seriesData14
    },{
      name: "Delhi Daredevils",
      data: seriesData15
    },{
      name: "Kochi Tuskers Kerala",
      data: seriesData16
    },{
      name: "Sunrisers Hyderabad",
      data: seriesData17
    },{
      name: "Rising Pune Supergiant",
      data: seriesData18
    }]
  });
  }
  


document.getElementById('btn').addEventListener('click',show_selected);
function show_selected() {
    var selector=document.getElementById("years");
    var value=selector[selector.selectedIndex].value;
    // alert(value);
   
    const season = Number(value);
  
    fetch("/create?year=" + season)
      .then(resp => resp.json())
      .then(answer => {
          visualizeExtraRuns(answer);
        function visualizeExtraRuns(answer) {
          const seriesData = [];
          for (let year in answer) {
            seriesData.push([year, answer[year]]);
          }
        //   console.log(seriesData);
          Highcharts.chart("matches-played-per-year2", {
            chart: {
              type: "column"
            },
            title: {
              text: `Extra Runs Conceded By Each Team in ${season}`
            },
            subtitle: {
              text:
                'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
            },
            xAxis: {
              title: {
                text: "Teams"
              },
              type: "category"
            },
            yAxis: {
              min: 0,
              title: {
                text: "Extra Runs"
              }
            },
            series: [
              {
                name: "Extra Runs",
                data: seriesData
              }
            ]
          });
        }
      }).catch(err => {
  console.error('Error: ', err);
});
}
function fetchANDvisualizedata() {
    fetch("./data.json")
      .then(r => r.json())
      .then(VISUALizeData);
  }
  
  fetchANDvisualizedata();
  
  function VISUALizeData(data) {
    Visualizeeconomical(data.economical);
    return;
  }
  
  function Visualizeeconomical(economical) {
    const seriesData = [];
    // for (var i=0;i<economical.length;i++) {
      for(let year in economical)
      {
        seriesData.push([economical[year]["bowler"], economical[year]["economy"]]);
      }
    // }
  console.log(seriesData);
  
  
  Highcharts.chart('matches-played-per-year3', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Top Economical Bowlers in 2015 season'
    },
    subtitle: {
        text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Economy'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>'
    },
    series: [{
        name: 'Population',
        data:seriesData,
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
  });
  }
  
  
function fetchVisualizeData() {
    fetch("./data.json")
      .then(r => r.json())
      .then(visualizeata);
  }
  
  fetchVisualizeData();
  
  function visualizeata(data) {
    visualizewinnigteampervenue(data.winnigteampervenue);
    return;
  }
  
  function visualizewinnigteampervenue(winnigteampervenue) {
    const abcd=[];
    for (let year in winnigteampervenue) {
      abcd.push(year);
    }
   
    const seriesData = [];
    const seriesData1 = [];
    const seriesData2 = [];
    const seriesData3 = [];
    const seriesData5 = [];
    const seriesData6= [];
    const seriesData7 = [];
    const seriesData8 = [];
    const seriesData9= [];
    const seriesData11 = [];
    const seriesData13= [];
    const seriesData14= [];
    const seriesData15= [];
    const seriesData16= [];
    const seriesData17= [];
    const seriesData18= [];
  for (let year in winnigteampervenue) {
  seriesData.push(["Kolkata Knight Riders",winnigteampervenue[year]["Kolkata Knight Riders"]]);
  }
  for (let year in winnigteampervenue) {
    seriesData1.push(["Kings XI Punjab",winnigteampervenue[year]["Kings XI Punjab"]]);
  }
  for (let year in winnigteampervenue) {
    seriesData2.push(["Mumbai Indians",winnigteampervenue[year]["Mumbai Indians"]]);
  }
  for (let year in winnigteampervenue) {
    seriesData3.push(["Pune Warriors",winnigteampervenue[year]["Pune Warriors"]]);
  }
  for (let year in winnigteampervenue) {
    seriesData5.push(["Rising Pune Supergiants",winnigteampervenue[year]["Rising Pune Supergiants"]]);
  }
  for (let year in winnigteampervenue) {
    seriesData6.push(["Delhi Capitals",winnigteampervenue[year]["Delhi Capitals"]]);
  }
  for (let year in winnigteampervenue) {
    seriesData7.push(["Royal Challengers Bangalore",winnigteampervenue[year]["Royal Challengers Bangalore"]]);
  }
  for (let year in winnigteampervenue) {
    seriesData8.push(["Rajasthan Royals",winnigteampervenue[year]["Rajasthan Royals"]]);
  }
  for (let year in winnigteampervenue) {
    seriesData9.push(["Deccan Chargers",winnigteampervenue[year]["Deccan Chargers"]]);
  }
  for (let year in winnigteampervenue) {
    seriesData13.push(["Gujarat Lions",winnigteampervenue[year]["Gujarat Lions"]]);
  }
  for (let year in winnigteampervenue) {
    seriesData14.push(["Chennai Super Kings",winnigteampervenue[year]["Chennai Super Kings"]]);
  }
  for (let year in winnigteampervenue) {
    seriesData15.push(["Delhi Daredevils",winnigteampervenue[year]["Delhi Daredevils"]]);
  }
  for (let year in winnigteampervenue) {
    seriesData16.push(["Kochi Tuskers Kerala",winnigteampervenue[year]["Kochi Tuskers Kerala"]]);
  }
  for (let year in winnigteampervenue) {
    seriesData17.push(["Sunrisers Hyderabad",winnigteampervenue[year]["Sunrisers Hyderabad"]]);
  }
  for (let year in winnigteampervenue) {
    seriesData18.push(["Rising Pune Supergiant",winnigteampervenue[year]["Rising Pune Supergiant"]]);
  }
  
  
  Highcharts.chart('matches-played-per-year4', {
    chart: {
        type: 'bar'
    },
    title: {
        text: '5. Story: Matches Won by Each team per venue'
    },
    xAxis: {
        categories:abcd
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total fruit consumption'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
      name: "Kolkata Knight Riders",
      data: seriesData
  },{
    name: "Kings XI Punjab",
    data: seriesData1
  },{
    name: "Mumbai Indians",
    data: seriesData2
  },{
    name: "Pune Warriors",
    data: seriesData3
  },{
    name: "Rising Pune Supergiants",
    data: seriesData5
  },{
    name: "Delhi Capitals",
    data: seriesData6
  },{
    name: "Royal Challengers Bangalore",
    data: seriesData7
  },{
    name: "Rajasthan Royals",
    data: seriesData8
  },{
    name: "Deccan Chargers",
    data: seriesData9
   },{
    name: "Gujarat Lions",
    data: seriesData13
  },{
    name: "Chennai Super Kings",
    data: seriesData14
  },{
    name: "Delhi Daredevils",
    data: seriesData15
  },{
    name: "Kochi Tuskers Kerala",
    data: seriesData16
  },{
    name: "Sunrisers Hyderabad",
    data: seriesData17
  },{
    name: "Rising Pune Supergiant",
    data: seriesData18
  }]
  });
  }
  
  
  