import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

import useTableComponent from "../hooks/useTableComponent.js";

export default function TableComponent() {
  const { rows, extractInfo, setRowInfo, colors } = useTableComponent();

  extractInfo();

  return (
    <TableContainer
      component={Paper}
      sx={{
        minWidth: "60%",
        boxShadow: "3px 3px 3px 3px rgba(100,100,100,0.08)",
      }}
    >
      <Table sx={{ minWidth: 650, bgcolor: "#0000" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: colors.greyText }}>Site</TableCell>
            <TableCell align="left" sx={{ color: colors.greyText }}>
              Alerts
            </TableCell>
            <TableCell align="left" sx={{ color: colors.greyText }}>
              Savings
            </TableCell>
            <TableCell align="left" sx={{ color: colors.greyText }}>
              Uptime
            </TableCell>
            <TableCell align="left" sx={{ color: colors.greyText }}>
              Power
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.site} onClick={() => setRowInfo(row)}>
              <TableCell component="th" scope="row">
                <Typography fontWeight={"bold"}>{row.site}</Typography>
              </TableCell>
              <TableCell align="right">
                <Stack spacing={1} alignItems="right" direction="row">
                  <Chip
                    label={row.highAlerts}
                    sx={{
                      backgroundColor:
                        row.highAlerts > 0 ? colors.red : "default",
                      color: "#FFF",
                    }}
                  />
                  <Chip
                    label={row.medAlerts}
                    sx={{
                      backgroundColor:
                        row.medAlerts > 0 ? colors.orange : "default",
                      color: "#FFF",
                    }}
                  />
                  <Chip
                    label={row.lowAlerts}
                    sx={{
                      backgroundColor:
                        row.lowAlerts > 0 ? colors.red : "default",
                      color: "#FFF",
                    }}
                  />
                </Stack>
              </TableCell>
              <TableCell align="center">
                {parseInt(row.savings) < 100 ? (
                  <Paper
                    sx={{
                      padding: 0.5,
                      textAlign: "center",
                      color: colors.redText,
                      alignItems: "center",
                      alignContent: "center",
                      backgroundColor: colors.redBg,
                      width: "70%",
                      boxShadow: 0,
                    }}
                  >
                    {row.savings}
                  </Paper>
                ) : (
                  <>{row.savings}</>
                )}
              </TableCell>
              <TableCell align="left" sx={{ color: colors.greyText }}>
                {row.uptime}
              </TableCell>
              <TableCell align="left">
                <Typography color={colors.green} fontWeight={"bold"}>
                  {row.power}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
