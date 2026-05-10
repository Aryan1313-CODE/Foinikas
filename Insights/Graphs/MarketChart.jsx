import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import './chart.css'

const sampleData = [
  { symbol: "SPX", value: 4300, change: 0.5 },
  { symbol: "DJI", value: 34500, change: -0.2 },
  { symbol: "NASDAQ", value: 13700, change: 1.1 },
  { symbol: "FTSE", value: 7100, change: 0.3 },
  { symbol: "NIKKEI", value: 29000, change: -0.4 },
  { symbol: "DAX", value: 15800, change: 0.7 },
];

const D3BarChart = ({ data = sampleData, width = 700, height = 400 }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!data.length) return;
  
    d3.select(svgRef.current).selectAll("*").remove();
  
    const margin = { top: 40, right: 60, bottom: 50, left: 60 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
  
    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height);
  
    // Define gradient
    const defs = svg.append("defs");
    const gradient = defs.append("linearGradient")
      .attr("id", "barGradient")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "0%")
      .attr("y2", "100%");  // 180deg vertical
  
    gradient.append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "#72FFBB");
  
    gradient.append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "#3CFE38");
  
    const chart = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);
  
    const xScale = d3.scaleBand()
      .domain(data.map(d => d.symbol))
      .range([0, innerWidth])
      .padding(0.2);
  
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value) * 1.1])
      .range([innerHeight, 0])
      ;
  
    chart.append("g")
      .attr("transform", `translate(0,${innerHeight})`)
      .call(d3.axisBottom(xScale))
      .selectAll("text")
      .style("color","#fff")
      .style("font-weight", "bold");
  
    chart.append("g")
      .call(d3.axisLeft(yScale));
  
    // Bars with gradient fill
    chart.selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .attr("x", d => xScale(d.symbol))
      .attr("y", d => yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("height", d => innerHeight - yScale(d.value))
      .attr("fill", "url(#barGradient)")  // <--- gradient fill here
      .attr("rx", 5)
      .attr("ry", 5);

  
  }, [data, width, height]);
  

  return <svg ref={svgRef}></svg>;
};

export default D3BarChart;
