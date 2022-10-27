import React from "react";
import Chart from "chart.js";
import { useState,useEffect } from "react";
import axios from "axios";

export default function CardBarChart() {
 
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const fetchAllUsers = () => {
    axios.get('http://127.0.0.1:8000/api/user').then(res => {
      setUsers(res.data);
    })
  }

  React.useEffect((user) => {
    let config = {
      type: "bar",
      data: {
        labels: [
          "Transversale A",
          "Transversale B",
          "Transversale C",
          "Programmation A",
          "Programmation B",
          "Programmation C",
          "Programmation D",
          "Administration systemes et réseaux A",
          "Administration systemes et réseaux B",
          "Administration systemes et réseaux C",
          "Gestion de projets A",
          "Gestion de projets B",
          "Gestion de projets C",
          "Sécurité A",
          "Sécurité B",
          "Sécurité C",
          "Informatique décisionnelle/Marketing Digital A",
        ],
        datasets: [
          {
            label: "MIN",
            backgroundColor: "DodgerBlue",
            borderColor: "#ed64a6",
            data: [480000, 525000, 570000, 600000, 675000, 750000, 825000, 600000, 675000, 750000, 600000, 750000, 750000, 750000, 2775000, 6900000, 825000],
            fill: false,
            barThickness: 7,
          },
          {
            label: "MAX",
            fill: false,
            backgroundColor: "Orange",
            borderColor: "#4c51bf",
            data: [525000, 570000, 600000, 675000, 750000, 825000, 900000, 675000, 750000, 825000, 675000, 825000, 825000, 825000, 3000000, 7500000, 900000],
            barThickness: 7,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Orders Chart",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        legend: {
          labels: {
            fontColor: "rgba(0,0,0,.4)",
          },
          align: "end",
          position: "bottom",
        },
        scales: {
          xAxes: [
            {
              display: false,
              scaleLabel: {
                display: true,
                labelString: "Month",
              },
              gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
              },
              gridLines: {
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.2)",
                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    let ctx = document.getElementById("bar-chart").getContext("2d");
    window.myBar = new Chart(ctx, config);
  }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
          
              </h6>
              <h2 className="text-blueGray-700 text-xl font-semibold">
                Cout reel journalier Minimum Maximum des formations
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id="bar-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
