import { useState } from 'react';
import Chart from 'react-apexcharts';

const SellerDashboardChart = () => {

    const [chartData] = useState({
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
                name: "Sales",
                data: [15, 23, 54, 12, 78, 21, 43]
            }
        ],

        options: {
            colors: ['#FF5733', '#28A745', '#007BFF'],
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'light',
                    type: 'vertical',
                    shadeIntensity: 0.5,
                    gradientToColors: ['#FFC300', '#85C1E9', '#DAF7A6'],
                    opacityFrom: 0.9,
                    opacityTo: 0.7,
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '50%',
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
                    colors: ['#4A235A', '#1F618D', '#196F3D'],
                },
            },
            stroke: {
                show: true,
                curve: 'smooth',
                lineCap: 'round',
                width: 1.5,
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                axisBorder: {
                    show: true,
                    color: '#888888',
                },
                axisTicks: {
                    show: true,
                    color: '#888888',
                },
                labels: {
                    style: {
                        colors: ['#1A5276', '#7D3C98', '#138D75', '#B9770E'],
                        fontSize: '14px',
                    }
                },
            },
            yaxis: {
                labels: {
                    style: {
                        colors: '#5D6D7E',
                        fontSize: '14px'
                    }
                }
            },
            legend: {
                position: 'top',
                horizontalAlign: 'center',
                fontSize: '14px',
                labels: {
                    colors: ['#626567'],
                },
            },
            grid: {
                borderColor: '#EAEDED',
                strokeDashArray: 4,
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
    });

    return (
        <div className="w-full h-full flex justify-center mt-7">
            <div className="w-full lg:w-full p-6 bg-white shadow-lg rounded-lg transition-all duration-300 hover:scale-105">
                <div className="text-center text-2xl font-semibold mb-4 text-gray-800">
                    <h2>Monthly Data Overview</h2>
                </div>
                <Chart options={chartData.options} series={chartData.series} type="bar" height={350} />
            </div>
        </div>
    )
}

export default SellerDashboardChart