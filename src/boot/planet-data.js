export const planetChartData = {
    type: "doughnut", //doughnut bar, line
    data: {
      labels: ["Población", "especies", "exportaciones", "premios", "lorem", "moret", "lomren2", "test2"],
      datasets: [
        {
          label: "Numbero quantificador",
          data: [0, 0, 1, 2, 79, 82, 27, 14],
          backgroundColor: "rgb(255 0 0 / 22%)",
          borderColor: "rgb(255 0 0 / 3%)",
          borderWidth: 3
        },
        {
          label: "Datos del departamento",
          data: [0.166, 2.081, 3.003, 0.323, 954.792, 285.886, 43.662, 51.514],
          backgroundColor: "rgb(255 0 0 / 22%)",
          borderColor: "rgb(255 0 0 / 3%)",
          borderWidth: 3
        }
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              padding: 25
            }
          }
        ]
      }
    }
  };
  
  export default planetChartData;