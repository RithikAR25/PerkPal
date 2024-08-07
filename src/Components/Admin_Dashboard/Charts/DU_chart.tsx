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
    "DU1",
    "DU2",
    "DU3",
    "DU4",
    "DU5",
    "DU6",
    "DU7",
    "DU8",
    "DU9",
    "DU10",
    "DU11",
  ],
  datasets: [
    {
      data: [30, 20, 50, 40, 70, 20, 50, 30, 10, 70, 90, 40],
      backgroundColor: "#06C",
    },
  ],
};

const DU_chart = () => {
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
                xs: "6vw", // Extra small devices (phones, 600px and down)
                sm: "4vw", // Small devices (tablets, 600px and up)
                md: "3vw", // Medium devices (desktops, 900px and up)
                lg: "2vw", // Large devices (large desktops, 1200px and up)
                xl: "2.15vw", // Extra large devices (larger desktops, 1536px and up)
              },
            }}
          >
            DU Performance
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
            Points/DU
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

export default DU_chart;
