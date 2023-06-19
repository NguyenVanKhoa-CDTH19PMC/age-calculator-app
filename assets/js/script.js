window.onload = function () {
    const form = document.getElementById('date-form');
  
    form.addEventListener('submit', function (e) {
        e.preventDefault();  // stop form submission
        let date = {
            day : form.elements["day"],
            month : form.elements["month"],
            year : form.elements["year"]
        }
        let totalYear;
        let totalMonth;
        let totalDay;
        if (validDate(date.day,date.month,date.year)) {
            const oneDay = 24 * 60 * 60 * 1000;
            let temp = Math.floor(Math.abs((new Date() - new Date(date.year.value + "-" + date.month.value + "-" + date.day.value)) / oneDay));
                console.log(temp);
            totalYear = Math.floor(temp/365);
            console.log(temp / 365);
            totalMonth = Math.floor((temp - totalYear * 365) / 30);
             console.log((temp - totalYear * 365) / 30);
            totalDay = Math.floor(temp - totalYear * 365 - totalMonth * 30);
              console.log(temp - totalYear * 365 - totalMonth * 30);
            document.getElementById("total-year").innerHTML = totalYear;
            document.getElementById("total-month").innerHTML = totalMonth;
            document.getElementById("total-day").innerHTML = totalDay;

       }
        else {
                document.getElementById("total-year").innerHTML = "--";
            document.getElementById("total-month").innerHTML = "--";
            document.getElementById("total-day").innerHTML = "--";
       }
         
    });
    function validDate(day, month, year) {
        let monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let valid = true;
        if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
        { monthLength[1] = 29; }
        
        if (day.value == "") {
            day.style.borderColor = "red";
            let error = document.getElementById("day-error");
            error.innerHTML = "This flield is required";
            error.style.display = "block";
            document.getElementById("day-label").style.color = "red";
            valid = false;
        }
        else if (day.value <= 0 || (day.value > monthLength[month.value - 1] && month.value!="")) { day.style.borderColor = "red";
            let error = document.getElementById("day-error");
            error.innerHTML = "Must be a valid day";
            error.style.display = "block";
            document.getElementById("day-label").style.color = "red";
        valid = false;}
        else {
            day.style= "null";
            let error = document.getElementById("day-error");
            error.style = "null";
            document.getElementById("day-label").style = "null"
            
            }
        if (month.value == "") {
            month.style.borderColor = "red";
            let error = document.getElementById("month-error");
            error.innerHTML = "This flield is required";
            error.style.display = "block";
            document.getElementById("month-label").style.color = "red";
            valid = false;
        }
        else if (month.value <= 0 || month.value > 12) {
            month.style.borderColor = "red";
            let error = document.getElementById("month-error");
            error.innerHTML = "Must be a valid month";
            error.style.display = "block";
            document.getElementById("month-label").style.color = "red";
            valid = false;
        }else {
            month.style= "null";
            let error = document.getElementById("month-error");
            error.style = "null";
            document.getElementById("month-label").style="null"
            }
        if (year.value == "") {
            year.style.borderColor = "red";
            let error = document.getElementById("year-error");
            error.innerHTML = "This flield is required";
            error.style.display = "block";
            document.getElementById("year-label").style.color = "red";
            valid = false;
        }
        else if (year.value <= 0 || new Date(year.value + "-" + month.value + "-" + day.value) > new Date()) { 
year.style.borderColor = "red";
            let error = document.getElementById("year-error");
            error.innerHTML = "Must be a valid year";
            error.style.display = "block";
            document.getElementById("year-label").style.color = "red";
            valid = false;
        }else {
            year.style= "null";
            let error = document.getElementById("year-error");
            error.style = "null";
            document.getElementById("year-label").style="null"
        }
        return valid;
    }
}

