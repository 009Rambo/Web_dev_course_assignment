let API = "http://webapi19sa-1.course.tamk.cloud/v1/weather/";
let type = '';

function setType(measurement_type) {
    type = measurement_type;
    var input, filter, table, tr, td, i, txtValue;
    filter = type.replace(/_/g, ' ').toUpperCase();
    table = document.getElementById("data-output");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
    return;
}

function setParams(query) {
    if (type.length < 1) {
        window.alert("Please select the type first...");
        if (!query) {
            return;
        }
        return;
    }
    API = API.concat(query.toString());
    this.fetch(API);
    return API = "http://webapi19sa-1.course.tamk.cloud/v1/weather/";
}

fetch(API)
    .then(function (response) {
        return response.json();
    })
    .then(function (weaterdata) {
        // sort the weather data in reverse chronological order
        weaterdata.sort((a, b) => new Date(b.date_time) - new Date(a.date_time));
        let latestData = weaterdata.slice(0, 25).reverse();
        let labels = latestData.map(data => new Date(data.date_time).toLocaleString());
        let dataset = latestData.map(data => data.data.weaterdata);


        let placeholder = document.querySelector('#data-output');
        let out = "";
        for (const [i, data] of latestData.entries()) {
            out += `
                <tr>
                <td>${i + 1}</td>
                <td>${new Date(data.date_time).toDateString()}</td>
                <td>${new Date(data.date_time).toTimeString()}</td>
                <td>${Object.keys(data.data).toString().replace(/_/g, ' ')
                }</td >
                <td>${Object.values(data.data)}</td>
                </tr >
                `;
        }
        placeholder.innerHTML = out;

        const data = {
            labels: labels,
            datasets: [{
              label: 'Measurement Record',
              data: dataset,
              backgroundColor: 'rgba(255, 99, 132, 0.8)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
            }]
          };

          const config = {
            type: 'line',
            data: data,
            options: {
              scales: {
                y: {
                  title: {
                    display: true,
                    text: 'Measurement Scale'
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
        td = tr[i].getElementsByTagName("td")[3];
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

$(document).ready(function(){
    $(".dropdown-toggle").click(function(){
      $(".dropdown-menu").toggle();
    });
  });