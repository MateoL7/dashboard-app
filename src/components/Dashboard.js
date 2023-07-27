import Box from "@mui/material/Box";
import TableComponent from "./TableComponent";
import useTableComponent from "../hooks/useTableComponent";
import { v4 as uuid } from "uuid";
import { Typography, Card } from "@mui/material";
import React from "react";
import { useRow } from "../context/context";

export default function Dashboard() {
  const topBar = require("../images/Top.png");
  const leftBar = require("../images/Left.png");

  const { colors } = useTableComponent();

  const rowInfo = useRow();

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "left",
            width: "30vh",
            height: "100vh",
          }}
        >
          <img
            src={leftBar}
            alt="Left Bar"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          ></img>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              boxShadow: "3px 3px 3px 3px rgba(100,100,100,0.07)",
              mb: 4,
            }}
          >
            <img
              src={topBar}
              alt="Top Bar"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            ></img>
          </Box>
          <Typography variant="h3" sx={{ pl: 4, pb: 4 }} color={"#444"}>
            Dashboard
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "row",
              pl: 4,
              m: 1,
              bgcolor: "background.paper",
              borderRadius: 1,
              gap: 5,
            }}
          >
            <TableComponent />
            <Box sx={{ height: "100%", width: "100%" }}>
              <Typography variant="h5" color={colors.greyText} mb={2}>
                Alerts
              </Typography>
              <Card
                sx={{
                  boxShadow: "3px 3px 3px 3px rgba(100,100,100,0.08)",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ m: 3, l: 5, t: 5, fontWeight: "bold" }}
                >
                  {rowInfo.site}
                </Typography>
                {rowInfo.allAlerts.length > 0 ? (
                  rowInfo.allAlerts.map(({ metric, value, unit, time }) => (
                    <Box
                      padding={3}
                      sx={{ m: 3, ml: 6, b: 3 }}
                      key={uuid()}
                      elevation={2}
                      bgcolor={colors.greyCards}
                      borderRadius={2}
                      width={"70%"}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Typography
                        sx={{ fontWeight: "bold" }}
                        align="left"
                        variant="subtitle1"
                      >
                        {metric}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          flexDirection: "row",
                          gap: 5,
                        }}
                      >
                        <Typography align="left" variant="subtitle1">
                          Value: {value} {unit}
                        </Typography>
                        <Typography align="left" variant="subtitle1">
                          {time}
                        </Typography>
                      </Box>
                    </Box>
                  ))
                ) : (
                  <Typography
                    sx={{ m: 3, l: 5, b: 3 }}
                    align="left"
                    variant="subtitle1"
                  >
                    No alerts
                  </Typography>
                )}
              </Card>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
