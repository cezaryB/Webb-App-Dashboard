//LINE CHART

var lineChartPlaceholder = document.getElementById("lineChart");


var dataDaily = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    data: [830, 1200, 1100, 1450, 1800, 1500, 1750, 2000]
};

var dataHourly = {
    labels: ["00:00 - 06:00", "06:00 - 12:00", "12:00 - 18:00", "18:00 - 00:00"],
    data: [600, 700, 900, 650, 750, 1000]
};

var dataWeekly = {
    labels: ["", "16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    data: [500, 550, 1200, 700, 1350, 1680, 1250, 1500, 2000, 1750, 1500, 2000, 2500]
};

var dataMonthly = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    data: [600, 1200, 1020, 1075, 1400, 1630, 1580, 1700, 1630, 2000, 1830, 1920, 2500]
};


var lineChart = new Chart(lineChartPlaceholder, {
    type: 'line',
    data: {
        labels: dataWeekly.labels,
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
                data: dataWeekly.data,
                spanGaps: false,
                }
        ]
    },
    responsive: true,
    options: {
    	legend: {
    		display: false,
    		labels: {
    			fontFamily: "Titillium Web",
    			fontColor: "#d9d9d9",
    			fontSize: 3
    		}	
    	},
    	responsive: true
    }
});


//BAR CHART

var barChartPlaceholder = document.getElementById("barChart");

var dataBarChart = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
        {
            label: "male",
            backgroundColor: [
                'rgb(115, 119, 191)',
                'rgb(115, 119, 191)',
                'rgb(115, 119, 191)',
                'rgb(115, 119, 191)',
                'rgb(115, 119, 191)',
                'rgb(115, 119, 191)',
                'rgb(115, 119, 191)'

            ],
            borderColor: [
                'rgb(115, 119, 191)',
                'rgb(115, 119, 191)',
                'rgb(115, 119, 191)',
                'rgb(115, 119, 191)',
                'rgb(115, 119, 191)',
                'rgb(115, 119, 191)',
                'rgb(115, 119, 191)'
                
            ],
            borderWidth: 1,
            data: [50, 75, 150, 100, 200, 225, 75],
        },
        {
            label: "female",
            backgroundColor: [
                '#4d4c72',
                '#4d4c72',
                '#4d4c72',
                '#4d4c72',
                '#4d4c72',
                '#4d4c72',
                '#4d4c72'

            ],
            borderColor: [
                '#4d4c72',
                '#4d4c72',
                '#4d4c72',
                '#4d4c72',
                '#4d4c72',
                '#4d4c72',
                '#4d4c72'
                
            ],
            borderWidth: 1,
            data: [30, 55, 135, 105, 180, 205, 65],
        }

    ]
};

var barChart = new Chart(barChartPlaceholder, {
    type: 'bar',
    data: dataBarChart,
    options: {
        scales: {
            yAxes: [{
                stacked: false
            }]
        },
        legend: {
        	display: false
        },
        responsive: true
    }
});




//PIE CHART


var pieChartPlaceholder = document.getElementById("pieChart");

var dataPieChart = {
    labels: [
        "Phones",
        "Tablets",
        "Desktop",
        "Smart TV"
    ],
    datasets: [
        {
            data: [20, 80, 40, 2],
            backgroundColor: [
            	"#81c98f",
                "#74b1bf",
                "#7377bf",
                "#33d6ff"
            ],
            hoverBackgroundColor: [
            	"#81c98f",
                "#74b1bf",
                "#7377bf",
                "#33d6ff"
            ],
            borderWidth: 0
        }]
};


var pieChart = new Chart(pieChartPlaceholder,{
    type: 'doughnut',
    data: dataPieChart,
    options: {
    	legend: {
    		labels: {
    			fontFamily: "Titillium Web",
    			fontColor: "#999",
    			fontSize: 10,
    			padding: 4
    		}	
    	},
    	responsive: true
    }
});


//WEB APP INTERACTIVITY


//1. Turning notifications on and off
var bell = document.getElementsByClassName("bell")[0];


bell.addEventListener("click", function(){
    var notifications = document.getElementsByClassName("alert-overlay")[0];
    var notificationsDot = document.getElementsByClassName("dot")[0];
    notifications.classList.toggle("hidden");
    notificationsDot.classList.add("hidden");
});


//2. Turning alert off

var closeAlert = document.getElementsByClassName("close")[0];

closeAlert.addEventListener("click", function() {
    var alert = document.getElementsByClassName("alert")[0];
    alert.classList.add("hidden");
});

//3. Switching between line charts

var timePeriodsButtons = document.getElementsByClassName("time-period-button");
var lineChartLabels = [dataHourly.labels, dataDaily.labels, dataWeekly.labels, dataMonthly.labels];
var lineChartData = [dataHourly.data, dataDaily.data, dataWeekly.data, dataMonthly.data];


timePeriodsButtons[0].addEventListener("click", function(event){
    var currentPeriod = document.getElementsByClassName("active-period")[0];
    currentPeriod.classList.remove("active-period");
    event.target.classList.add("active-period");
    lineChart.data.labels = lineChartLabels[0];
    lineChart.data.datasets[0].data = lineChartData[0];
    lineChart.update();
});
   
timePeriodsButtons[1].addEventListener("click", function(event){
    var currentPeriod = document.getElementsByClassName("active-period")[0];
    currentPeriod.classList.remove("active-period");
    event.target.classList.add("active-period");
    lineChart.data.labels = lineChartLabels[1];
    lineChart.data.datasets[0].data = lineChartData[1];
    lineChart.update();
});

timePeriodsButtons[2].addEventListener("click", function(event){
    var currentPeriod = document.getElementsByClassName("active-period")[0];
    currentPeriod.classList.remove("active-period");
    event.target.classList.add("active-period");
    lineChart.data.labels = lineChartLabels[2];
    lineChart.data.datasets[0].data = lineChartData[2];
    lineChart.update();
});

timePeriodsButtons[3].addEventListener("click", function(event){
    var currentPeriod = document.getElementsByClassName("active-period")[0];
    currentPeriod.classList.remove("active-period");
    event.target.classList.add("active-period");
    lineChart.data.labels = lineChartLabels[3];
    lineChart.data.datasets[0].data = lineChartData[3];
    lineChart.update();
});


//4. Autocomplete for message field

new autoComplete({
    selector: '#userSearch',
    minChars: 1,
    source: function(term, suggest){
        term = term.toLowerCase();
        var choices = ['Victoria Chambers', 'Dale Byrd', 'Dawn Wood', 'Dan Oliver'];
        var matches = [];
        for (i=0; i<choices.length; i++)
            if (~choices[i].toLowerCase().indexOf(term)) matches.push(choices[i]);
        suggest(matches);
    }
});

//5. Prevent Default for message field + information that message  was sent successfuly

var submitButton = document.getElementById("message-submit");
var searchField = document.getElementById("userSearch");
var userMessage = document.getElementById("user-message");
var messageAlert = document.getElementsByClassName("message-alert")[0];
var searchFieldValue;
var userMessageValue;

searchField.addEventListener("keydown", function() {
    var searchFieldValue = searchField.value;
    console.log(searchFieldValue);
});

userMessage.addEventListener("keydown", function() {
    userMessageValue = userMessage.value;
    console.log(userMessageValue);
});

submitButton.addEventListener("click", function(event){
    searchFieldValue = searchField.value;
    userMessageValue = userMessage.value;
    if (searchFieldValue == "") {
        event.preventDefault();
        messageAlert.classList.add("show");
        messageAlert.style.background = "#7477bf";
        messageAlert.innerText = "Choose the user!";
    }
    else if (userMessageValue == "") {
        event.preventDefault();
        messageAlert.classList.add("show");
        messageAlert.style.background = "#7477bf";
        messageAlert.innerText = "Write the message!";
    }

    else {
        messageAlert.classList.add("show");
        messageAlert.style.background = "#1DE592";
        messageAlert.innerText = "Message was sent to the user";
    }

});


//6. Use local storage to save the settings

var emailNotifications = document.getElementById("email-switch");
var publicProfile = document.getElementById("profile-switch");
var timezone = document.getElementById("timezone");
var saveButton = document.getElementById("save-button");

saveButton.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem("email", emailNotifications.checked);
    localStorage.setItem("profile", publicProfile.checked);
    localStorage.setItem("timezone", timezone.value);
});

function load() {
    var checked01 = JSON.parse(localStorage.getItem("email"));
    emailNotifications.checked = checked01;
    var checked02 = JSON.parse(localStorage.getItem("profile"));
    publicProfile.checked = checked02;
    timezone.value = localStorage.getItem("timezone");
}

load();

//7. Clear local storage and setting when button "reset" is pressed

var resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", function(){
    location.reload();
    localStorage.clear();
    emailNotifications.checked = false;
    publicProfile.checked = false;
});