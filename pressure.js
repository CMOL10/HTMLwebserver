
google.charts.load('current', {
  'packages': ['corechart', 'line'],
});
google.charts.setOnLoadCallback(initialize);

function initialize() {
  var queryString = encodeURIComponent('select B, F limit 400 label F "hPa"');
  var query = new google.visualization.Query(
    'https://docs.google.com/spreadsheets/d/18_CfVYM0iMZPsUYZF9rINTBGo2ntZjdMA0OMoVq-NYs/gviz/tq?sheet=Sheet1&headers=0&tq=' + queryString);
  query.send(handleSampleDataQueryResponse);
}

function handleSampleDataQueryResponse(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  var data = response.getDataTable();

  var options = {
    height: 600,
    hAxis: {
      title: 'Hour',
      direction: -1
    },
    vAxis: {
      title: 'Pressure'
    }
  };
  var chart = new google.visualization.LineChart(document.getElementById('graph'));
  chart.draw(data, options);
}