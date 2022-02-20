
const ctx2 = document.getElementById('second_chart');

const myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['한국', '중국', '베트남', '기타'],
        datasets: [{
            label: '탄소 배출량',
            data: [250, 400, 300, 100],
            backgroundColor: [
                '#ccdff4',
                '#b4c5e4',
                 '#3066be',
                 '#090c9b',     
            ],
            borderColor: [
                '#ccdff4',
                '#b4c5e4',
                 '#3066be',
                 '#090c9b',           
            ],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});