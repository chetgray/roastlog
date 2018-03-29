var roastData = {};
var $submitBtn = $('#search-submit');

// Generate list for 60-second tick marks
var xTicks = [];
for (i = 0; i <= 1200; i += 60) {
  xTicks.push(i);
}

// Create the chart
var roastChart = c3.generate({
  bindto: '#roast-chart',
  data: {
    json: {},
    x: 'ROAST TIME'
  },
  axis: {
    x: {
      tick: {
        values: xTicks
      }
    }
  },
  grid: {
    x: {
      lines: xTicks.map(function(x){return {value: x, class: 'c3-grid c3-xgrid'}})
    },
    y: {
      show: true
    }
  }
}); // c3.generate

function loadRoast(roast) {
  roastChart.load({
    unload: true,
    json: roast.data
  });
}

// Load roast data JSON
$submitBtn.prop('disabled', true).text("Loading...");
$.getJSON('script/roastData.json', function(data){
  $submitBtn.prop('disabled', false).text("Search");
  roastData = data;
  loadRoast(roastData[0]);
}); // getJSON
