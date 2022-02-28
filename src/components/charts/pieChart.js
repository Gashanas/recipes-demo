import * as React from 'react';
import {Doughnut} from 'react-chartjs-2';
import {ArcElement, Chart} from 'chart.js'
import {Box} from "../box";
import theme from "../../theme";

Chart.register(ArcElement);

const PieChart = ({amount = 0, requiredAmount, imageUrl}) => {
  const isMoreThanRequired = requiredAmount - amount < 0;
  const dataItem1 = isMoreThanRequired ? Math.abs(requiredAmount - amount) : amount;
  const dataItem2 = requiredAmount - dataItem1;

  const data = {
    title: 'asd',
    datasets: [{
      label: 'Test',
      title: 'asd',
      labels: ['asd', 'asd23', 'asd4'],
      data: [dataItem1, dataItem2],
      height: "50px",
      width: "50px",
      backgroundColor: [
        isMoreThanRequired ? theme.colors.warning : theme.colors.success,
        isMoreThanRequired ? theme.colors.success : 'rgba(181,190,206,0)',
        theme.colors.warning,
      ],
      margin: 10,
      borderColor: 'rgb(183,182,182)',
      hoverBorderColor: [
        theme.colors.success_40,
        theme.colors.danger_40,
      ],
      borderWidth: 1,

      hoverOffset: 0,
      cutout: 16,

      options: {
        responsive: false,
      }
    }],
  };

  return (
    <Box height={50} width={50} position="relative">
      <Box
        position="absolute"
        zIndex={0}
        width={50}
        height={50}
        display="flex"
        justifyContent="center"
        alignItems="center"
        margin="auto">
        <img height="30" src={imageUrl}
             alt="product"/>
      </Box>
      <Box zIndex={1} position="relative" padding="5%">
        <Doughnut data={data}/>
      </Box>
    </Box>
  );
}

export default PieChart;