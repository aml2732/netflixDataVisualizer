console.log("Helloworld!!!!");
import * as d3 from "d3";
import data from "./data.js";

var graph1 = {};
data.forEach(function(item){
  var region = item.region || "unspecified";
  if(region == "unspecified"){console.log(item);}
  if(!graph1[region]){
    graph1[region] = 1;
  }
  else{
    graph1[region] = graph1[region]+1;
  }
});

console.log('graph1: ');
console.log(graph1);


var graph1Dimensions = {
  width: 500,
  height: 500
}
var svg = d3.select(".graphHere").append("svg")
  .attr("width", graph1Dimensions.width)
  .attr("height", graph1Dimensions.height)
  .append("g")
    .attr("class", "graph");

var graph1MaxX = Object.keys(graph1).reduce(function(total, currentValue){
  return total> graph1[currentValue]? total : graph1[currentValue];
},0);

var scalex = d3.scaleLinear()
  .domain([0, graph1MaxX])
  .range([0, graph1Dimensions.width]);

Object.keys(graph1).forEach(function(item, index, keyarray){
  svg.append("rect")
    .attr("x", scalex(0))
    .attr("y", 20*index)
    .attr("width", scalex(graph1[item]))
    .attr("height", 10);
});
