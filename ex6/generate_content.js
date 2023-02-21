window.onload = function() {

    var h1 = document.createElement("h1");  // to create h1 element with text
    var text = document.createTextNode("Content Created by JavaScript Code");
    h1.appendChild(text);
    document.body.appendChild(h1);


    var isBlue = true;
    for (var i = 0; i < 10; i++) {    // for creating 10x10 chessboard-like pattern of HTML elements
      for (var j = 0; j < 10; j++) {
        var div = document.createElement("div");
        var id = padNumber(i * 10 + j);
        div.setAttribute("id", id);
        div.style.width = "50px";
        div.style.height = "50px";
        div.style.display = "inline-block";

        //condition for checking background color and adding the text color
        if (isBlue) {
          div.style.backgroundColor = "blue";
          div.style.color = "white";
        } else {
          div.style.backgroundColor = "white";
          div.style.color = "black";
        }


        var num = document.createElement("p"); // to add numbered text to each square
        num.style.textAlign = "center";
        num.style.marginTop = "10px";
        var numText = document.createTextNode(padNumber(i * 10 + j));
        num.appendChild(numText);
        div.appendChild(num);
        document.body.appendChild(div);

        // toggle color for next square
        isBlue = !isBlue;
        if (j === 9) {

          // to start new row after the 10th cube in each row
          var br = document.createElement("br");
          document.body.appendChild(br);
        }
      }

      // start each row with the opposite color from the previous row
      isBlue = !isBlue;
    }
  };

  // function to pad/add 0 to single-digit numbers
  function padNumber(num) {
    return num < 10 ? "0" + num : num.toString();
  }
