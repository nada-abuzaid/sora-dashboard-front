import React, { useEffect, useState } from 'react';
import { Chart as ChartComponents } from 'primereact/chart';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import ChartStyle from './style';

export default function Chart({ type }) {
  const [featuresData, setFeaturesData] = useState([]);
  const [interestsData, setInterestsData] = useState([]);
  const [topHealthConditionsData, setTopHealthConditionsData] = useState([]);
  const [healthConditionsData, setHealthConditionsData] = useState([]);

  const [id, setId] = useState(0);

  useEffect(() => {
    setId(4);
    const fetchData = async () => {
      try {
        const { data: { data: { company: { totalEngagements } } } } = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/companies/${id}/users-engagements`);
        const { data: { data: { company: { totalInterests } } } } = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/companies/${id}/users-interests`);
        const { data: { data: { company: { topThreeHealthConditions, allHealthConditions } } } } = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/companies/${id}/users-health-conditions`);
        setFeaturesData(totalEngagements);
        setInterestsData(totalInterests);
        setHealthConditionsData(allHealthConditions);
        setTopHealthConditionsData(topThreeHealthConditions);
        return totalEngagements;
      } catch (error) {
        return error;
      }
    };
    fetchData();
  }, [id]);

  const chartData = {
    labels:
    featuresData.map(({ label, percentage }) => ` ${label} - ${Math.round(percentage)}%`),
    datasets: [
      {
        data: featuresData.map(({ percentage }) => percentage),
        backgroundColor: ['#73314F', '#275C61', '#89AAAD', '#E3E3E3'],
        hoverBackgroundColor: ['#80445f', '#346266', '#a4c6c9', '#eeeeee'],
      },
    ],
  };

  const [lightOptions] = useState({
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
          padding: 20,
          color: '#495057',
          usePointStyle: true,
          boxWidth: 7,
        },
      },
    },
    maintainAspectRatio: false,
    scale: {
      y: { beginAtZero: true },
    },
  });

  const HorizontalChartData = {
    labels: interestsData.map(({ label }) => label),
    datasets: [
      {
        data: interestsData.map(({ percentage }) => percentage),
        backgroundColor: ['#73314F', '#9E6F85', '#9E6F85', '#9E6F85'],
        hoverBackgroundColor: ['#80445f', '#9e6f8597', '#9e6f8597', '#9e6f8597'],
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
          crossAlign: 'far', // to align the label to the left
        },
        grid: {
          display: false,
        },
      },
    },
  };

  const VerticalChartData = {
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

  const VerticalOptions = {
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

  return (
    <ChartStyle>
      {type === 'bar' ? (
        <p>Top topics of interest</p>
      ) : type === 'doughnut' ? (
        <p>Top features used</p>
      ) : (
        <div className="texts">
          <p>Health conditions</p>
          <p className="text2">
            Based on the logged data of your employees in SORA.
          </p>
          <Link to="/dashboard/charts">Find resources</Link>
        </div>
      )}

      <div className={type === 'bar-health' ? 'chart-bar' : 'chart'}>
        <ChartComponents
          type={type === 'doughnut' ? 'doughnut' : 'bar'}
          data={
            type === 'bar'
              ? HorizontalChartData
              : type === 'bar-health'
                ? VerticalChartData
                : chartData
          }
          options={
            type === 'bar'
              ? horizontalOptions
              : type === 'bar-health'
                ? VerticalOptions
                : lightOptions
          }
          style={{ height: '90%' }}
        />
      </div>
      {
        type === 'bar-health' && (
        <div className="topThree">
          <p className="topThree-title">Top 3 Health conditions</p>
          {
            topHealthConditionsData.map(({ label, percentage }, index) => (
              <div className="topthree-item">
                {' '}
                <span className="top-number">
                  {' '}
                  {index + 1}
                  #
                  {' '}
                </span>
                <p className="top-item">
                  {label}
                  {' '}
                  -
                  {' '}
                  {Math.round(percentage)}
                  {' '}
                  %
                </p>

              </div>

            ))
          }
        </div>
        )
      }
    </ChartStyle>
  );
}

Chart.propTypes = {
  type: PropTypes.string.isRequired,
};
