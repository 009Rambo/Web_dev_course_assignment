fetch('http://webapi19sa-1.course.tamk.cloud/v1/weather')
    .then(function (response) {
        return response.json();
    })
    .then(function (weaterdata) {
        // sort the weather data in reverse chronological order
        weaterdata.sort((a, b) => new Date(b.date_time) - new Date(a.date_time));
        let latestData = weaterdata.slice(0, 30).reverse();

        let placeholder = document.querySelector('#data-output');
        let out = "";
        for (const [i, data] of latestData.entries()) {
            //let serialNumber = totalRows - (30 - i) + 1;
            out += `
                <tr>
                    <td>${i+1}</td>
                    <td>${new Date(data.date_time).toDateString()}</td>
                    <td>${new Date(data.date_time).toTimeString()}</td>
                    <td>${Object.keys(data.data).toString().replace(/_/g, ' ')}</td>
                    <td>${Object.values(data.data)}</td>
                </tr>
            `;
        }
        placeholder.innerHTML = out;
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
