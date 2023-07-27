import { createContext, useContext, useState } from "react";

const RowContext = createContext();
const UpdateRowContext = createContext();

export function useRow() {
  return useContext(RowContext);
}

export function useUpdate() {
  return useContext(UpdateRowContext);
}

export function RowProvider({ children }) {
  const [rowInfo, setRowInfo] = useState({ allAlerts: [] });
  function updateRow(row) {
    let site = row;
    let alerts = [];
    let highAlerts = site.alerts.high;
    let medAlerts = site.alerts.med;
    let lowAlerts = site.alerts.low;

    if (highAlerts.count > 0) {
      alerts = alerts.concat(highAlerts.details);
    }

    if (medAlerts.count > 0) {
      alerts = alerts.concat(medAlerts.details);
    }

    if (lowAlerts.count > 0) {
      alerts = alerts.concat(lowAlerts.details);
    }
    site.allAlerts = alerts;
    setRowInfo(site);
  }
  return (
    <RowContext.Provider value={rowInfo}>
      <UpdateRowContext.Provider value={updateRow}>
        {children}
      </UpdateRowContext.Provider>
    </RowContext.Provider>
  );
}
