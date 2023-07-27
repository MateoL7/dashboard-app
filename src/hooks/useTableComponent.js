import data from "../data/sample.json";
import { v4 as uuid } from "uuid";
import { useUpdate } from "../context/context";

export default function useTableComponent() {
  const rows = [];

  const setRowInfo = useUpdate();

  const colors = {
    red: "#ff4850",
    orange: "#f69e3d",
    green: "#8ac55f",
    greyCircle: "#ebebeb",
    greyText: "#8b8b8b",
    redText: "#ff6269",
    redBg: "#ffd8d9",
    greyCards: "#f9f9f9",
  };

  const extractInfo = () => {
    let sites = data.sites;
    for (let site of sites) {
      let row = {
        id: uuid(),
        site: site.Name,
        alerts: site.Alerts,
        highAlerts: site.Alerts.high.count,
        medAlerts: site.Alerts.med.count,
        lowAlerts: site.Alerts.low.count,
        uptime: site.Uptime,
        savings: site.Savings,
        power: site.Power,
      };
      rows.push(row);
    }
  };

  return {
    rows,
    extractInfo,
    setRowInfo,
    colors,
  };
}
