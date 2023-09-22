
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import '../fonts/B-NAZANIN.TTF';
import 'bootstrap/dist/css/bootstrap.css';
import Tooltip from 'react-bootstrap/Tooltip';import
{ Bar,Line,Doughnut } from "react-chartjs-2";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>

const Overview = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('/d.json');
            const data = await response.json();
            console.log(data);
            setData(data);
          } catch (error) {
            console.log(error);
          }
        };
 
        fetchData();
      }, []);

const polarities=data.map(i => (i.polarity));

  var positive=0;
  var negative=0;
  var neutral=0;

  for(var x in polarities ){
    if(polarities[x] === 'مثبت' ){
      positive++;
    }
    if(polarities[x] === 'منفی' ){
      negative++;
  }
    if(polarities[x] === 'خنثی' ){
      neutral++;
    }
  }

  const p=[neutral,positive,negative];

  const [userYear, setUserYear] = useState({
    labels:['خنثی','مثبت','منفی'],
    datasets: [
      {
        label: "  زبان ها",
        data: p,
        pointRadius: 5,
        backgroundColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(54, 150, 20, 1)',
            'rgba(310, 30, 20, 1)',
        ],
        borderColor: "gray",
        borderWidth: 1,     
      },],});

        return (
        <div>
    <div style={{ width: 300,marginBottom:100 }}>
    <Doughnut data={userYear}
     options={{
      plugins: {
        title: {
          display: true,
        },
        legend: {
          labels: {
            usePointStyle: true,
            boxWidth: 6
          }
        }
      },
      responsive: true,
    }}
    />
  </div>
        </div>
        )}
export default Overview;