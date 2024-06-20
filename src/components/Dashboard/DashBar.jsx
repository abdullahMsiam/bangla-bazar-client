import { Chart } from "react-google-charts";

const DashBar = () => {
    const data = [
        ["Year", "Sales", "Profit"],
        ["2020", 1000, 200],
        ["2021", 1170, 250],
        ["2022", 660, 300],
        ["2023", 1030, 350],
    ];

    const options = {
        chart: {
            title: "Company Performance",
            subtitle: "Sales and Profit: 2020-2014",
        },
    };
    return (
        <Chart
            chartType="Bar"
            width="100%"
            height="400px"
            data={data}
            options={options}
        />
    );
};

export default DashBar;