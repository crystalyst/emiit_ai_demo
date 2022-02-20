
const ctx3 = document.getElementById('third_chart');

const myChart3 = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: ['전기', '가스', '수도', '출장'],
        datasets: [{
            label: '탄소 배출량',
            data: [300, 253, 181, 432],
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
        responsive: false,
        legend: {
            position: 'bottom',
          },
          title: {
            display: false,
            text: 'Chart.js Doughnut Chart'
          },
          animation: {
            animateScale: true,
            animateRotate: true
          },
        tooltips: {
            callbacks: {
              label: function(tooltipItem, data) {
                var dataset = data.datasets[tooltipItem.datasetIndex];
                var meta = dataset._meta[Object.keys(dataset._meta)[0]];
                var total = meta.total;
                var currentValue = dataset.data[tooltipItem.index];
                var percentage = parseFloat((currentValue/total*100).toFixed(1));
                return currentValue + ' (' + percentage + '%)';
              },
              title: function(tooltipItem, data) {
                return data.labels[tooltipItem[0].index];
              }
            }
          },
    }
});