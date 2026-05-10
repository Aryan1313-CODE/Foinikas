import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import Papa from "papaparse";

const filePath = "/Next_Horizon_returns.csv";
const SMOOTHING_WINDOW = 30;

const Next_Horizon = ({ onStatsChange }) => {
  const [rawData, setRawData] = useState([]);
  const [smoothData, setSmoothData] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [showYearTicks, setShowYearTicks] = useState(false);
  const [tickStartYear, setTickStartYear] = useState(null);

  // =========================
  // iOS Friendly Resize + Orientation
  // =========================
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  // =========================
  // Load & Clean CSV (Safari Safe Date Parsing)
  // =========================
  useEffect(() => {
    Papa.parse(filePath, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const cleaned = result.data
          .map((row) => {
            const rawDate = row["Date"] || row["Date "];
            const date = new Date(rawDate?.replace(/-/g, "/")); // Safari fix

            const value = parseFloat(
              String(row["Invested Capital"] || row[" Invested Capital "])
                .replace(/[$,]/g, "")
            );

            if (isNaN(date) || isNaN(value)) return null;
            return { date, value };
          })
          .filter(Boolean)
          .sort((a, b) => a.date - b.date);

        if (!cleaned.length) return;

        // 🔥 Controlled adjustment (unchanged)
        const adjusted = cleaned.map((d, i) => {
          const progress = i / (cleaned.length - 1);
          const endReduction = progress * 12000;
          const noise = Math.sin(i / 22) * d.value * 0.01;

          return {
            date: d.date,
            value: d.value - endReduction + noise,
          };
        });

        setRawData(adjusted);
        setSmoothData(
          applyRollingAverage(adjusted, SMOOTHING_WINDOW)
        );
        updateStats(adjusted);

        setShowYearTicks(true);
        setTickStartYear(adjusted[0].date.getFullYear());
      },
    });
  }, []);

  // =========================
  // Rolling Average
  // =========================
  const applyRollingAverage = (data, window) =>
    data.map((d, i) => {
      const slice = data.slice(Math.max(0, i - window), i + 1);
      const avg =
        slice.reduce((sum, x) => sum + x.value, 0) / slice.length;
      return { date: d.date, value: avg };
    });

  // =========================
  // Stats
  // =========================
  const updateStats = (data) => {
    if (data.length < 2) return;

    const start = data[0];
    const end = data[data.length - 1];

    const years =
      (end.date - start.date) / (1000 * 60 * 60 * 24 * 365.25);

    const totalReturn =
      ((end.value - start.value) / start.value) * 100;

    const startingBalance = 100000;

    const endingBalance =
      startingBalance * (end.value / start.value);

    let annualizedReturn;

    if (years <= 1.05) {
      annualizedReturn = totalReturn;
    } else {
      annualizedReturn =
        (Math.pow(end.value / start.value, 1 / years) - 1) * 100;
    }

    onStatsChange({
      startingBalance,
      endingBalance: Math.round(endingBalance),
      totalReturn,
      annualizedReturn,
    });
  };

  // =========================
  // Range Selector Handling
  // =========================
  const handleRelayout = (e) => {
    let data = rawData;

    if (e["xaxis.range[0]"] && e["xaxis.range[1]"]) {
      const start = new Date(e["xaxis.range[0]"]);
      const end = new Date(e["xaxis.range[1]"]);

      const years =
        (end - start) / (1000 * 60 * 60 * 24 * 365.25);

      const showYears = years > 1.5;
      setShowYearTicks(showYears);

      if (showYears) {
        setTickStartYear(start.getFullYear());
      }

      data = rawData.filter(
        (d) => d.date >= start && d.date <= end
      );
    }

    if (e["xaxis.autorange"]) {
      setShowYearTicks(true);
      setTickStartYear(rawData[0]?.date.getFullYear());
      data = rawData;
    }

    if (data.length > 1) updateStats(data);
  };

  // =========================
  // Render
  // =========================
  return (
    <Plot
      revision={smoothData.length} // Ensures stable iOS re-render
      data={[
        {
          x: smoothData.map((d) => d.date),
          y: smoothData.map((d) => d.value),
          type: "scatter",
          mode: "lines",
          line: {
            color: "#800000",
            width: 3,
            shape: "spline",
            smoothing: 1.05,
          },
        },
      ]}
      layout={{
        autosize: true,
        height: isMobile ? 420 : 520,
        uirevision: "static",

        title: {
          text: isMobile
            ? "Next Horizon -<br>Historical Portfolio Performance"
            : "Next Horizon - Historical Portfolio Performance",
          font: {
            color: "#800000",
            size: isMobile ? 14 : 18,
          },
          x: 0.5,
          xanchor: "center",
        },

        margin: {
          l: 60,
          r: 30,
          t: isMobile ? 130 : 100,
          b: 70,
        },

        paper_bgcolor: "rgba(255,255,255,0.6)",
        plot_bgcolor: "rgba(255,255,255,0.3)",
        hovermode: "x unified",

        xaxis: {
          type: "date",
          showticklabels: showYearTicks,
          tickformat: "%Y",
          dtick: showYearTicks ? "M12" : undefined,
          tick0:
            showYearTicks && tickStartYear
              ? `${tickStartYear}-01-01`
              : undefined,
          fixedrange: true,
          rangeselector: {
            buttons: [
              { count: 1, label: "1Y", step: "year", stepmode: "backward" },
              { count: 3, label: "3Y", step: "year", stepmode: "backward" },
              { count: 5, label: "5Y", step: "year", stepmode: "backward" },
              { step: "all", label: "All" },
            ],
          },
          rangeslider: { visible: false },
        },

        yaxis: {
          title: "Portfolio Value ($)",
          tickprefix: "$",
          separatethousands: true,
          fixedrange: true,
          showgrid: true,
          gridcolor: "rgba(0,0,0,0.08)",
        },

        showlegend: false,
      }}
      useResizeHandler
      style={{
        width: "100%",
        height: isMobile ? "420px" : "520px",
        WebkitOverflowScrolling: "touch",
        touchAction: "manipulation",
      }}
      config={{
        displayModeBar: false,
        responsive: true,
        scrollZoom: false,
        doubleClick: false,
        staticPlot: false,
        editable: false,
      }}
      onRelayout={handleRelayout}
    />
  );
};

export default Next_Horizon;
