import React from "react";

export default function Weather() {
 return (
   <div className="container">
     <div className="weather-app" id="weather-app">
       <div className="row row1">
         <div class="col-sm-11"></div>
         <form className="search-city">
           <input
             type="search"
             placeholder="type a city..."
             class="searchInput"
             autocomplete="off"
           />
           <input type="submit" value="Search" class="btn btn-primary" />
         </form>
       </div>
       <div className="row2">
         <div className="col-sm-6 current-col1">
           <div class="clearfix">
             <h2>
               Singapore
             </h2>
             <p>Tuesday 14:42</p>
             <img
               src={require(`./images/sunny.gif`)} width={80} alt="sunny"/>
            <br />
             <span class="currentTemp" id="tempNow"></span>
             <span class="degrees">18 °C</span>
           </div>
         </div>
         <div className="col-sm-6">
             <p>Precipitation: 82%</p>
             <p>Wind: 4km/h</p>
         </div>
       </div>
     </div>
   </div>
 );   
}

