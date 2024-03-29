import useCharts from '../../hooks/useCharts';

export default function ChartsData() {
  const {
    featuresData,
    interestsData,
    topHealthConditionsData,
    healthConditionsData,
  } = useCharts();

  const chartData = {
    labels: featuresData.map(
      ({ label, percentage }) => `   ${label} - ${Math.round(percentage)}%`,
    ),
    datasets: [
      {
        data: featuresData.map(({ percentage }) => percentage),
        backgroundColor: ['#73314F', '#275C61', '#89AAAD', '#E3E3E3'],
        hoverBackgroundColor: ['#80445f', '#346266', '#a4c6c9', '#eeeeee'],
      },
    ],
  };

  const lightOptions = {
    maintainAspectRatio: false,
    cutout: '60%',
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    plugins: {
      legend: {
        position: 'right',
        labels: {
          padding: 30,
          color: '#495057',
          usePointStyle: true,
          boxWidth: 10,
          boxHeight: 10,
          font: (context) => {
            const { width } = context.chart;
            if (width < 590) {
              const size = Math.round(width / 29);
              return {
                size,
                family: 'Nunito Sans',
              };
            }
            return {
              size: 15,
              family: 'Nunito Sans',
            };
          },
        },
      },
    },
    scale: {
      y: { beginAtZero: true },
    },
  };

  const horizontalChartData = {
    labels: interestsData.map(({ label }) => label),
    datasets: [
      {
        data: interestsData.map(({ percentage }) => percentage),
        backgroundColor: ['#73314F', '#9E6F85', '#9E6F85', '#9E6F85'],
        hoverBackgroundColor: [
          '#80445f',
          '#9e6f8597',
          '#9e6f8597',
          '#9e6f8597',
        ],
        borderRadius: '5',
      },
    ],
  };

  const horizontalOptions = {
    responsive: true,
    indexAxis: 'y',
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: '#36A2EB',
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        ticks: {
          color: '#495057',
          crossAlign: 'far',
          font: (context) => {
            const { width } = context.chart;
            if (width < 590) {
              const size = Math.round(width / 30);
              return {
                size,
                family: 'Nunito Sans',
              };
            }
            return {
              size: 16,
              family: 'Nunito Sans',
            };
          },
        },
        grid: {
          display: false,
        },
      },
    },
  };

  const verticalChartData = {
    labels: healthConditionsData.map(({ label }) => label),
    datasets: [
      {
        data: healthConditionsData.map(({ percentage }) => percentage),
        backgroundColor: '#4F7D7D',
        hoverBackgroundColor: '#4f7d7dd6',
        borderRadius: '8',
      },
    ],
  };

  const verticalOptions = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#495057',
          font: {
            size: 14,
            family: 'Nunito Sans',
            weight: 'bold',
          },
        },
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
      },
    },
  };

  return [
    chartData,
    lightOptions,
    horizontalOptions,
    horizontalChartData,
    verticalChartData,
    verticalOptions,
    topHealthConditionsData,
  ];
}
