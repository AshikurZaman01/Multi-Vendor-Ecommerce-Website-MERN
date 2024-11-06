import Chart from 'react-apexcharts';

const AdminDashboardChart = () => {

    const state = {
        series: [
            {
                name: "Orders",
                data: [31, 40, 28, 51, 42, 109, 100]
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
            color: ['#FF5733', '#28A745', '#007BFF'],
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
                    colors: ['#fff'],
                },
            },
            stroke: {
                show: true,
                curve: 'smooth',
                lineCap: 'round',
                colors: ['#fff'],
                width: 2,
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
        }
    }

    return (
        <div className="w-full flex justify-center mt-7">
            <div className="w-full lg:w-10/12 p-6 bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105">
                <div className="text-center text-2xl font-semibold mb-4 text-gray-800">
                    <h2>Monthly Data Overview</h2>
                </div>

                <Chart options={state.options} series={state.series} type="bar" height={350} />

            </div>
        </div>
    )
}

export default AdminDashboardChart