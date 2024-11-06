// AdminDashboardChart.js
import Chart from 'react-apexcharts';

const AdminDashboardChart = () => {

    const state = {
        series: [
            {
                name: "Orders",
                data: [31, 40, 28, 51, 42, 109, 100],
            },
            {
                name: "Revenue",
                data: [11, 32, 45, 32, 34, 52, 41]
            },
            {
                name: "Sellers",
                data: [15, 23, 54, 12, 78, 21, 43]
            }
        ],

        options: {
            colors: ['#FF5733', '#28A745', '#007BFF'],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '45%',
                    endingShape: 'rounded'
                },
            },
            chart: {
                background: "transparent",
                foreColor: '#333',
                toolbar: {
                    show: false
                },
            },
            dataLabels: {
                enabled: true,
                style: {
                    fontSize: '12px',
                    fontWeight: 'bold',
                    colors: ['gray'],
                },
            },
            stroke: {
                show: true,
                curve: 'smooth',
                lineCap: 'round',
                colors: ['#fff'],
                width: 0.5,
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                axisBorder: {
                    show: true,
                    color: '#DADADA',
                },
                axisTicks: {
                    show: true,
                    color: '#DADADA',
                },
                labels: {
                    style: {
                        colors: '#777',
                        fontSize: '14px',
                    }
                },
            },
            legend: {
                position: 'top',
                horizontalAlign: 'center',
                fontSize: '14px',
                labels: {
                    colors: '#777',
                },
            },
            responsive: [
                {
                    breakpoint: 565,
                    options: {
                        plotOptions: {
                            bar: {
                                horizontal: true,
                            }
                        },
                        xaxis: {
                            labels: {
                                style: {
                                    fontSize: '12px',
                                }
                            },
                        },
                    }
                }
            ]
        }
    }

    return (
        <div className="w-full h-full flex justify-center mt-7">
            <div className="w-full lg:w-full p-6 bg-white shadow-lg rounded-lg transition-all duration-300 hover:scale-105">
                <div className="text-center text-2xl font-semibold mb-4 text-gray-800">
                    <h2>Monthly Data Overview</h2>
                </div>
                <Chart options={state.options} series={state.series} type="bar" height={350} />
            </div>
        </div>
    )
}

export default AdminDashboardChart;
