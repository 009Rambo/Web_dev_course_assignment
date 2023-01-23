function task1(){

    var num1 = Math.floor(Math.random() * 10) + 1;
    var num2 = Math.floor(Math.random() * 10) + 1;

    console.log(num1);
    console.log(num2);

    if
       (num1 < num2){

    console.log(num1 + " is less than " + num2)};


    if  (num1 > num2 ){

    console.log(num1 + " is greater than " + num2)};

    if (num1 == num2){
    console.log(num1 + " is equal to " + num2)};
    }

task1()

   console.log("-------------------------------------------------")

    function task2(min, max){

        for (var i=min; i<=max; i++) {
          if(i % 2 == 0) {
            console.log(i);
          }
        }

        for ( var xi=min; xi<=max; xi++) {
          if(xi % 2 !== 0) {
            console.log(xi);
          }
       }

      }

    task2(3,7)

   console.log("-------------------------------------------------")


    function task3(min, max){

     const screen = [];
      for (var i=min; i<=max; i++) {
       if(i % 2 == 0) {

          screen.push(i);
       }
     }

      for ( var di=max; di >=min; di--) {

       if(di % 2 !== 0) {

         screen.push(di);
       }
     }
     console.log(screen);
     }


    task3(3,7)


   console.log("-------------------------------------------------")

    function task4(testString)  {

       var tep;
       testString = testString.toLowerCase().replace(tep, '');
       testString = testString.toUpperCase().replace(tep, '');

       var fen = testString.length;

       for (var i = 0; i < fen/2; i++) {
         if (testString[i] !== testString[fen - 1 - i]) {
             return false;
         }
       }
       return true;
      }

    console.log(task4("REDer"));
