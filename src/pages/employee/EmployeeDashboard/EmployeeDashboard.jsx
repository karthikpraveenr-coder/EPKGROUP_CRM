import React from "react";

const EmployeeDashboardPowerBIReport = () => {
  const embedUrl = "https://app.powerbi.com/reportEmbed?reportId=accdcefd-f8a8-4836-aa2d-1a3ae912849b&autoAuth=true&ctid=00cb49fd-707f-455b-add1-922f945adba5"; 

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        title="Power BI Report"
        src={embedUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
};

export default EmployeeDashboardPowerBIReport;