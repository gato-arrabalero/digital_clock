


// Auto-invocate function

(function(){

    //Function update-date
    const updateDate = ()=>{
        // declarate  variables that use object date

        let date = new Date(),
            hours = date.getHours(),
            ampm,
            minute = date.getMinutes(),
            second = date.getSeconds(),
            weekday = date.getDay(),
            day = date.getDate(),
            month = date.getMonth(),
            year = date.getFullYear();
            

        // declarate variables that get id the document 

        let phours = document.getElementById('hours'),
            pampm = document.getElementById('ampm'),
            pminutes = document.getElementById('minutes'),
            pseconds = document.getElementById('seconds'),
            pweekday = document.getElementById('weekday'),
            pday = document.getElementById('day'),
            pmonth = document.getElementById('month'),
            pyear = document.getElementById('year');
        
        /* for get the day in string use a list with them , and inyect the day in the variable 
        pweekday with the value that returns the object day making match with the list */

        let weeks = ['sunday','monday','thuesday','wensday','Thursday','friday','saturday'];
        pweekday.textContent = weeks[weekday];

        // insert parrafs with your variable matched

        pday.textContent = day;
        pyear.textContent = year;

        // same work who weeks

        let months = ['January', 'Febrary','March','April','May','June','July','Agoust','September','October','November','December'];
        pmonth.textContent = months[month];

        // Hours and minutes
                
        
        // Conditional if for am and pm and to use the 12 hours format

        if (hours>=12){
            hours -= 12;
            ampm = 'PM'
        } else {
            ampm = 'AM';
        };
        if (hours == 0){
            hours = 12;
        };

        phours.textContent = hours;
        pampm.textContent = ampm;

        // Conditional seconds and minutes to use tens format

        if (second < 10){
            second = '0'+ second
        };

        if (minute < 10){
            minute = '0'+ minute
        };

        pminutes.textContent = minute;
        pseconds.textContent = second

    };


    updateDate();

    // Function to update the function updateDate() through the use function setIntervale()

    let intervale  = setInterval(updateDate,1000);

}());

