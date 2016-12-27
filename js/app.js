//LINE CHART

var lineChartPlaceholder = document.getElementById("lineChart");
var dataWeekly = {
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

var dataDaily = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
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
            data: [830, 1200, 1100, 1450, 1800, 1500, 1750, 2000],
            spanGaps: false,
        }
    ]
};


var dataMonthly = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
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
            data: [600, 1200, 1020, 1075, 1400, 1630, 1580, 1700, 1630, 2000, 1830, 1920, 2500],
            spanGaps: false,
        }
    ]
};

var dataHourly = {
    labels: ["00:00 - 06:00", "06:00 - 12:00", "12:00 - 18:00", "18:00 - 00:00"],
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
            data: [600, 1800, 1500, 1700, 2000],
            spanGaps: false,
        }
    ]
};


var lineChart = new Chart(lineChartPlaceholder, {
    type: 'line',
    data: dataWeekly,
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


//BAR CHART

var barChartPlaceholder = document.getElementById("barChart");


var lineChart = new Chart(barChartPlaceholder, {
    type: 'line',
    data: dataWeekly,
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


//PIE CHART


var pieChartPlaceholder = document.getElementById("pieChart");


var lineChart = new Chart(pieChartPlaceholder, {
    type: 'line',
    data: dataWeekly,
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