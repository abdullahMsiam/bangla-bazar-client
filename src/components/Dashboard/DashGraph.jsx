import { Chart } from "react-google-charts";


const DashGraph = () => {
    const data = [
        ["Day", "Sales", "Expenses"],
        ["Saturday", 1000, 400],
        ["Sunday", 970, 460],
        ["Monday", 660, 1120],
        ["Tuesday", 130, 540],
        ["Wednesday", 1300, 540],
        ["Thursday", 1030, 540],
        ["Friday", 150, 540],
    ];

    const options = {
        isStacked: true,
        height: 300,
        legend: { position: "top", maxLines: 3 },
        vAxis: { minValue: 0 },
    };
    return (
        <Chart
            chartType="AreaChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
        />
    );
};

export default DashGraph;