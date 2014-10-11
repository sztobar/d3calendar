'use strict';
var d3 = require('../bower_components/d3/d3');

function CalendarLegend(calendar) {
  this.calendar = calendar;
  this.svg = calendar.svg.append('g')
      .attr('transform', 'translate(0, 50)')
      .attr('class', 'calendar-legend');

  this.init();
};

CalendarLegend.prototype.init = function() {
  this.intervalsGrid();
  this.intervalsAxis();
};

CalendarLegend.prototype.intervalsGrid = function() {
  this.gridAxis = d3.svg.axis()
      .scale(this.calendar.scale)
      .orient('left')
      .ticks(this.calendar.ticks.length)
      .tickSize(-this.calendar.width, 0)
      .tickFormat('');

  this.gridGroup = this.svg.append("g")
      .attr("class", "grid")
      .attr('transform', 'translate(50,0)')
      .call(this.gridAxis);
};

CalendarLegend.prototype.intervalsAxis = function() {
  var scale = this.calendar.scale;
  var format = this.calendar.format;
  var intervalHeight = this.calendar.intervalHeight;

  this.axis = d3.svg.axis()
      .scale(scale)
      .tickValues(scale.ticks(d3.time.minute, 10))
      .tickFormat(format)
      .orient('left');

  this.axisGroup = this.svg.append("g")
      .attr("class", "y axis")
      .attr('transform', 'translate(50,0)')
      .call(this.axis);

  this.axisGroup
    .selectAll('.tick text')
      .attr('y', (intervalHeight / 2) + 1);

  this.axisGroup
    .selectAll('.tick line')
      .attr('x2', -50);
};


module.exports = CalendarLegend;