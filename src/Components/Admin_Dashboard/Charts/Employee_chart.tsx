import { Box, Typography } from "@mui/material";

import DateRangePick from "../DateRange/DateRangePick";
import Bar_Chart from "../Charts/Bar_Chart";

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false, // Hide the legend
    },
  },
};

const chartData = {
  labels: [
    "Rithik",
    "bob",
    "alby",
    "riya",
    "tom",
    "emma",
    "sanjay",
    "jhon",
    "hob",
    "pappu",
  ],
  datasets: [
    {
      data: [300, 400, 150, 200, 50, 350, 10, 300, 230, 90],
      backgroundColor: "#06C",
    },
  ],
};

const Employee_chart = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "15%",
          pr: "2%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            width: "65%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            pl: "4%",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              height: "60%",
              width: "100%",
              fontWeight: "bold", // Makes the text bold
              textAlign: "start", // Centers the text
              fontSize: {
                xs: "4vw", // Extra small devices (phones, 600px and down)
                sm: "3.5vw", // Small devices (tablets, 600px and up)
                md: "3vw", // Medium devices (desktops, 900px and up)
                lg: "2vw", // Large devices (large desktops, 1200px and up)
                xl: "2.15vw", // Extra large devices (larger desktops, 1536px and up)
              },
            }}
          >
            Employee Performance
          </Typography>
          <Typography
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              height: "40%",
              width: "100%",
              fontWeight: "bold", // Makes the text bold
              textAlign: "start", // Centers the text
              fontSize: {
                xs: "3vw", // Extra small devices (phones, 600px and down)
                sm: "2vw", // Small devices (tablets, 600px and up)
                md: "1.5vw", // Medium devices (desktops, 900px and up)
                lg: "1vw", // Large devices (large desktops, 1200px and up)
                xl: "1vw", // Extra large devices (larger desktops, 1536px and up)
              },
            }}
          >
            Points/Employee
          </Typography>
        </Box>
        <Box
          sx={{
            width: "35%",
            height: "100%",
            display: "flex",
            padding: "0%",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <DateRangePick />
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "75%",
        }}
      >
        <Bar_Chart chartData={chartData} chartOptions={chartOptions} />
      </Box>
    </>
  );
};

export default Employee_chart;
