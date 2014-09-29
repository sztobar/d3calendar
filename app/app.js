'use strict'
var $ = require('./bower_components/jquery/dist/jquery');
var d3 = require('./bower_components/d3/d3');

// require('./bar-chart-example')(d3);
var width = 960,
    height = 500;


var from = 0;
var interval = 5;
var to = 24 * 60 / interval;
var intervalsData = [];
for (var i = 0; i <= to; ++i) {
  intervalsData.push(i);
};
var intervalHeight = 10;

var calendar = d3.select('.calendar')
  .attr('width', width)
  .attr('height', intervalHeight * intervalsData.length);

var rooms = 5;
var roomData = [1, 2, 3, 4, 5];
var roomWidth = width / rooms;

var y = d3.scale.linear()
    .range([0, height])
    .domain([0, d3.max(intervalsData)]);

var rooms = calendar.selectAll('g')
    .data(roomData)
  .enter().append('g')
    .attr('transform', function(d, i) { return 'translate(' + i * roomWidth + ', 0)' });

rooms.selectAll('rect')
    .data(intervalsData)
  .enter().append('rect')
    .attr('y', function(d, i) { return intervalHeight * i; })
    .attr('height', intervalHeight)
    .attr('width', roomWidth);