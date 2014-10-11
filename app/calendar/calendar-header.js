'use strict';
var d3 = require('../bower_components/d3/d3');
var rooms = require('../rooms.json').roomData;

function CalendarHeader(calendar) {
  this.calendar = calendar;
  this.roomWidth = calendar.width / rooms.length;
  // this.svg = calendar.svg.append('g')
  this.svg = d3.select('.calendar-header-wrapper')
    .append('svg')
      .attr('class', 'calendar-header');

  this.init();
};

CalendarHeader.prototype.init = function() {
  this.roomsGroups();
  this.roomsAxis();
};

CalendarHeader.prototype.roomsGroups = function () {
  var self = this;
  this.rooms = this.svg.selectAll('g')
      .data(rooms, function(d) { return d.id; })
    .enter().append('g')
      .attr('transform', function(d, i) { return 'translate(' + i * self.roomWidth + ', 0)' })
      .attr('class', 'room');
};

CalendarHeader.prototype.roomsAxis = function () {
  var scale = d3.scale.linear()
      .domain([0, rooms.length])
      .range([0, this.calendar.width]);

  this.roomsAxis = d3.svg.axis()
      .scale(scale)
      .orient('top')
      .ticks(rooms.length)
      .tickFormat(function(d, i) {
        return rooms[i] ? rooms[i].name : '';
      });

  this.roomsAxisGroup = this.svg.append('g')
      .attr('transform', 'translate(50, 50)')
      .attr('class', 'room-axis axis')
      .call(this.roomsAxis)
    .selectAll('.tick text')
      .attr('x', this.roomWidth / 2);
};

module.exports = CalendarHeader;