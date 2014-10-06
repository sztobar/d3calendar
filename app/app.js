'use strict';
var $ = require('./bower_components/jquery/dist/jquery');
var d3 = require('./bower_components/d3/d3');
var _ = require('./bower_components/lodash/dist/lodash');

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
var roomsData = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}];
var roomWidth = width / rooms;

var y = d3.scale.linear()
    .range([0, height])
    .domain([0, d3.max(intervalsData)]);

var rooms = calendar.selectAll('g')
    .data(roomsData, function(d) { return d.id; })
  .enter().append('g')
    .attr('transform', function(d, i) { return 'translate(' + i * roomWidth + ', 0)' })
    .attr('class', 'room');

var intervalsGroup = rooms.append('g').attr('class', 'invtervals');

intervalsGroup.selectAll('rect')
    .data(intervalsData)
  .enter().append('rect')
    .attr('y', function(d, i) { return intervalHeight * i; })
    .attr('height', intervalHeight)
    .attr('width', roomWidth);

var eventsData = require('./teventsData');

function timeStrToInterval(timeStr) {
  var hours = timeStr.substr(0, 2);
  var minutes = timeStr.substr(3, 2);
  return (hours * 12) + (minutes / 5);
}

var roomGroupedEventsData = _.map(roomsData, function(el, i) {
  return _.filter(eventsData, {'roomId': el.id});
});

var eventsGroup = rooms.append('g').attr('class', 'events');

var events = eventsGroup
    .data(roomGroupedEventsData)
  .selectAll('rect')
    .data(function(d) { return d; })
  .enter().append('rect')
    .attr('y', function(d, i) { return timeStrToInterval(d.from) * intervalHeight; })
    .attr('height', function(d, i) { return (timeStrToInterval(d.to) - timeStrToInterval(d.from)) * intervalHeight; })
    .attr('width', roomWidth)
    .attr('class', 'event')
    .attr('draggable', 'draggable')
    .on('mouseenter', function(d, i, j) {
      this.setAttribute('style', 'fill: red');
    })
    .on('mouseleave', function() {
      this.removeAttribute('style');
    });
