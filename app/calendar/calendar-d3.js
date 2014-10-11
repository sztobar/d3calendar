'use strict';
var $ = require('../bower_components/jquery/dist/jquery');
var d3 = require('../bower_components/d3/d3');
var _ = require('../bower_components/lodash/dist/lodash');
var rooms = require('../rooms.json');

function CalendarD3() {
  this.margin = {
    top: 40,
    right: 40,
    bottom: 40,
    left: 40
  };
  this.width = 960 - this.margin.left - this.margin.right;
  this.height = 500 - this.margin.top - this.margin.bottom;

  this.format = d3.time.format('%H:%M');
  this.scale = d3.time.scale()
    .domain([this.format.parse("00:00"), this.format.parse("24:00")]);

  this.ticks = this.scale.ticks(d3.time.minute, 5);
  this.intervalHeight = 10;

  this.calendarHeight = this.ticks.length * this.intervalHeight;
  this.scale.range([0, this.calendarHeight]);

  this.svg = d3.select('.calendar')
    .append('svg')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.calendarHeight);
};

module.exports = CalendarD3;