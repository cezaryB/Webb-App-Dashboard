var chartPlaceholder01 = document.getElementById("myChart01");
var data = {
    labels: ["", "16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [
        {
            label: "",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(226,227,246, .5)",
            borderColor: "rgb(226,227,246)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgb(115,119,191)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointRadius: 10,
            pointHoverRadius: 10,
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 8,
            pointHitRadius: 10,
            data: [0, 550, 1200, 700, 1350, 1680, 1250, 1500, 2000, 1750, 1500, 2000, 2500],
            spanGaps: false,
        }
    ]
};

var newChart01 = new Chart(chartPlaceholder01, {
    type: 'line',
    data: data,
    options: {
    	legend: {
    		display: false,
    		labels: {
    			fontFamily: "Titillium Web",
    			fontColor: "#d9d9d9",
    			fontSize: 3
    		}	
    	}
    }
});