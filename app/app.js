'use strict';
var $ = require('./bower_components/jquery/dist/jquery');
var d3 = require('./bower_components/d3/d3');
var _ = require('./bower_components/lodash/dist/lodash');

var calendar = require('./calendar')
var calendarObject = new calendar.D3();

// require('./bar-chart-example')(d3);
/******************************** calendar size ********************************/


/******************************** format & scale ********************************/
// var format = d3.time.format('%H:%M');
// var scale = d3.time.scale()
//   .domain([format.parse("00:00"), format.parse("24:00")]);

// /******************************** time intervals ********************************/
// var ticks = scale.ticks(d3.time.minute, 5);
// var intervalHeight = 10;

// /******************************* using invtervals to get calendar height *******************************
// var calendarHeight = ticks.length * intervalHeight;
// scale.range([0, calendarHeight]);

// /******************************** calendar ********************************/
// var calendar = d3.select('.calendar')
//     .attr('width', width + margin.left + margin.right)
//     .attr('height', calendarHeight);

/******************************** xAxis ********************************/
var calendarHeader = new calendar.Header(calendarObject);
var calendarLegend = new calendar.Legend(calendarObject);

  // .append('g')
  //   .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

/******************************** axis ********************************/
// var axis = d3.svg.axis()
//     .scale(scale)
//     .tickValues(scale.ticks(d3.time.minute, 20))
//     .tickFormat(format)
//     .orient('left');

// calendar.append("g")
//   .attr("class", "y axis")
//   .attr('transform', 'translate(20,0)')
//   .call(axis);

// /******************************* grid lines *******************************
// calendar.append("g")
//   .attr("class", "grid")
//   .call(d3.svg.axis()
//     .scale(scale)
//     .orient('left')
//     .ticks(ticks.length)
//     .tickSize(-width, 0, 0)
//     .tickFormat('')
//   );
/*
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
    .data(ticks)
  .enter().append('rect')
    .attr('y', function(d, i) { return intervalHeight * i; })
    .attr('height', intervalHeight)
    .attr('width', roomWidth);

var eventsData = require('./eventsData');

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
*/