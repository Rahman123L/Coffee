const chartPie = new Chart("chartPie", {
    type: "doughnut",
    data: {
    labels: ["Total Pesanan", "Pesanan Selesai", "Pesanan Dibatalkan"],
    datasets: [
        {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
        ],
        },
    ],
    },
    options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
        position: "right",
        labels: {
            usePointStyle: true,
            pointStyle: "circle",
            padding: 20,
            pointRadius: 6,
        },
        },
    },
    elements: {
        arc: {
        borderWidth: 1,
        },
    },
    cutout: "70%", 
    },
});