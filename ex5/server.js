const express = require('express');
const app = express();
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

app.get('/json', (req, res) => {
  res.set({ 'Content-Type': 'application/json' });
  const daysJSON = daysOfWeek.reduce((obj, day, i) => {
    obj[day] = i;
    return obj;
  }, {});
  res.send(daysJSON);
});

app.get('/html', (req, res) => {
  res.set({ 'Content-Type': 'text/html' });
  const tableRows = daysOfWeek.map((day, i) => `<tr><td>${day}</td><td>${i}</td></tr>`).join('');
  const html = `
    <html>
      <head>
        <title>Days of the Week</title>
        <style>
        table {
          border-collapse: collapse;
          width: 100%;
          background-color: black;
        }
        td {
          color: white;
        }
          body { background-color: lightblue; }

        </style>
      </head>
      <body>
        <h1 style="color: black; text-align: left;">Days of the Week</h1>
        <table>

          <tr><th></th></tr>
          ${tableRows}
        </table>
      </body>
    </html>
  `;
  res.send(html);
});

app.get('/html/:id', (req, res) => {
  res.set({ 'Content-Type': 'text/html' });
  const id = req.params.id;
  if (id >= 0 && id <= 6) {
    const day = daysOfWeek[id];
    const html = `
      <html>
        <head>
          <title>Days of the Week</title>
          <style>
            body { background-color: lightblue; }
            table {
              border-collapse: collapse;
              width: 100%;
              background-color: black;
            }
            td {
              color: white;
            }
          </style>
        </head>
        <body>
          <h1 style="color: black; text-align: left;">Days of the Week</h1>
          <table>

            <tr>
              <td>${day}</td>
              <td>${id}</td>
            </tr>
          </table>
        </body>
      </html>
    `;
    res.send(html);
  } else {
    res.send('Invalid index');
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
