const labels = [];
const dataset = [];
let API = "http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_speed/";

function setParams(query) {
    API = API.concat(query.toString());
    this.fetch(API);
    return API;
}

fetch(API)
    .then(function (response) {
        return response.json();
    })
    .then(function (weaterdata) {
        let placeholder = document.querySelector('#data-output');
        let out = "";
        for (const [i, data] of weaterdata.entries()) {
           labels.push((new Date(data.date_time).getFullYear()+ "-" + new Date(data.date_time).getMonth()
       + "-" + new Date(data.date_time).getDate()+ "," + "T"  + new Date(data.date_time).getHours()
       + ":" + new Date(data.date_time).getMinutes() + ":" + new Date(data.date_time).getSeconds()).toLocaleString());
            dataset.push(data.wind_speed);
            out += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${new Date(data.date_time).toDateString()}</td>
                    <td>${new Date(data.date_time).toTimeString()}</td>
                    <td>${data.wind_speed}</td>
                </tr >
                `;
        }
        placeholder.innerHTML = out;

        const data = {
            labels: labels,
            datasets: [{
              label: 'wind_speed Record',
              data: dataset,
              backgroundColor: 'rgba(255, 99, 132, 0.8)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
            }]
          };

          const config = {
            type: 'bar',
            data: data,
            options: {
              scales: {
                y: {
                  title: {
                    display: true,
                    text: 'wind_speed km/hr'
                  }
                }
              }
            }
          };

          const myChart = new Chart(
            document.getElementById('myChart'),
            config
          );
        });

function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("data-output");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}