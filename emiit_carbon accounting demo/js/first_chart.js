
const ctx1 = document.getElementById('first_chart');


const myChart1 = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
        datasets: [{
            label: '탄소 배출량',
            data: [500, 1200, 1300, 900, 2000, 2300],
            backgroundColor: [
                '#090c9e',     
            ],
            borderColor: [
                '#090c9b',            
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

