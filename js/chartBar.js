const chartBar = new Chart("chartBar", {
    type: "bar",
    data: {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
        {
        label: "",
        data: [100, 50, 100, 150, 200, 250, 200],
        backgroundColor: [
            "rgb(75, 192, 192)",
            "rgb(75, 192, 192, 0.3)",
            "rgb(75, 192, 192, 0.3)",
            "rgb(75, 192, 192, 0.3)",
            "rgb(75, 192, 192, 0.3)",
            "rgb(75, 192, 192, 0.3)",
            "rgb(75, 192, 192, 0.3)",
        ],
        borderWidth: 0,
        fill: true,
        borderRadius: 10,
        },
    ],
    },
    options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
        display: false,
        },
    },
    scales: {
        y: {
        grid: {
            color: "rgb(209 213 219)",
            display: true,
        },
        border: {
            dash: [2, 4],
        },
        ticks: {
            color: "rgb(51 65 85)",
            beginAtZero: true,
        },
        },
        x: {
        grid: {
            color: "rgb(209 213 219)",
            display: false,
        },
        border: {
            dash: [2, 4],
        },
        ticks: {
            color: "rgb(51 65 85)",
            beginAtZero: true,
        },
        },
    },
    },
});