var roastData = {};
var $searchForm = $('#search');
var $searchField = $('#search-field');
var $searchQuery = $('#search-query');
var $submitBtn = $('#search-submit');
var $resultsList = $("#results");

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

function roastTitle(roast) {
  return roast.date + ' #' + roast.batch + ' ' + roast.coffee;
}

$searchField.change(function(){
  if ($searchField.val() === 'ALL') {
    $searchQuery.prop('disabled', true);
  } else {
    $searchQuery.prop('disabled', false);
  };
})

$resultsList.on('click', 'a', function(event){
  let roast = roastData[this.hash.substr(1)];
  $('#roast-header').text(roastTitle(roast));
  loadRoast(roast);
  event.preventDefault();
});

// Load roast data JSON
$submitBtn.prop('disabled', true).text("Loading...");
$.getJSON('script/roastData.json', function(data){
  roastData = data;

  $searchForm.submit(function(event){
    $resultsList.empty();
    $.each(roastData, function(i, roast){
      let field = $searchField.val();
      let q = $searchQuery.val().trim().toLowerCase();
      if (field === 'ALL' || (q && roast[field].toLowerCase().includes(q))) {
        $resultsList.append('<li><a href=#'+i+'>'+roastTitle(roast)+'</a></li>');
      }
    });
    event.preventDefault();
  }); // $searchForm.submit

  $submitBtn.prop('disabled', false).text("Search");
}); // getJSON
