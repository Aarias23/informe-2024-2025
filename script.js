// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  // --- Datos Extraídos de la Tabla --- //

  // Cantidad de pasantes colocados por mes
  const colocacionesPorMes = {
    labels: [
      "Junio 2024",
      "Julio 2024",
      "Agosto 2024",
      "Septiembre 2024",
      "Octubre 2024",
    ],
    data: [1, 2, 12, 35, 2, 1, 1],
  };

  // Distribución por área técnica
  const distribucionAreaTecnica = {
    labels: ["Informática", "Mercadeo", "Logística", "Electricidad"],
    data: [30, 25, 15, 10],
  };

  // Empresas con mayor número de colocaciones
  const empresasTop = {
    labels: [
      "Marítima Dominicana",
      "Autoridad Portuaria Dominicana",
      "IPSPBV",
      "Librería Solano",
    ],
    data: [5, 4, 3, 2],
  };

  // --- Configuraciones de los Gráficos --- //

  // Gráfico de Colocaciones por Mes (Barra)
  const colocacionesPorMesCtx = document
    .getElementById("colocacionesPorMesChart")
    .getContext("2d");
  const colocacionesPorMesChart = new Chart(colocacionesPorMesCtx, {
    type: "bar",
    data: {
      labels: colocacionesPorMes.labels,
      datasets: [
        {
          label: "Número de Pasantes",
          data: colocacionesPorMes.data,
          backgroundColor: "rgba(255, 159, 64, 0.6)",
          borderColor: "rgba(255, 159, 64, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: { display: true, text: "Colocaciones de Pasantes por Mes" },
      },
      scales: {
        y: { beginAtZero: true },
      },
      accessibility: {
        enabled: true,
        description:
          "Gráfico de barras que muestra el número de pasantes colocados por mes.",
      },
    },
  });

  // Gráfico de Distribución por Área Técnica (Pie)
  const distribucionAreaTecnicaCtx = document
    .getElementById("distribucionAreaTecnicaChart")
    .getContext("2d");
  const distribucionAreaTecnicaChart = new Chart(distribucionAreaTecnicaCtx, {
    type: "pie",
    data: {
      labels: distribucionAreaTecnica.labels,
      datasets: [
        {
          label: "Número de Pasantes",
          data: distribucionAreaTecnica.data,
          backgroundColor: [
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 255, 0.6)",
          ],
          borderColor: [
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "top" },
        title: {
          display: true,
          text: "Distribución de Colocaciones por Área Técnica",
        },
      },
      accessibility: {
        enabled: true,
        description:
          "Gráfico de pastel que muestra la distribución de colocaciones por área técnica.",
      },
    },
  });

  // Gráfico de Empresas con Mayor Número de Colocaciones (Barra Horizontal)
  const empresasTopCtx = document
    .getElementById("empresasTopChart")
    .getContext("2d");
  const empresasTopChart = new Chart(empresasTopCtx, {
    type: "horizontalBar", // Nota: 'horizontalBar' está deprecated en Chart.js v3, usar 'bar' con opciones específicas
    data: {
      labels: empresasTop.labels,
      datasets: [
        {
          label: "Número de Pasantes",
          data: empresasTop.data,
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      indexAxis: "y", // Para barras horizontales en Chart.js v3+
      responsive: true,
      plugins: {
        legend: { display: false },
        title: {
          display: true,
          text: "Empresas con Mayor Número de Colocaciones",
        },
      },
      scales: {
        x: { beginAtZero: true },
      },
      accessibility: {
        enabled: true,
        description:
          "Gráfico de barras horizontales que muestra las empresas con mayor número de colocaciones de pasantes.",
      },
    },
  });
});
