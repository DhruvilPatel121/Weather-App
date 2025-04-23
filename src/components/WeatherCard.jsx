// import React, {useState, memo} from 'react';
// import WeatherInfo from './WeatherInfo';
// import ForecastCard from './ForecastCard';
// import ForecastToggle from './ForecastToggle';


// const MemoizedForecastCard = memo(ForecastCard);
// const MemoizedWeatherInfo = memo(WeatherInfo);
// function WeatherCard ({ currentWeather, forecast })  {

//   const [forecastView, setForecastView] = useState('daily');

//   const getForecastData = () => {
    
//     switch (forecastView) {
//       case 'hourly':
//         return forecast.hourly;
//       case 'daily':
//         return forecast.daily;
//       case 'monthly':
//         return forecast.monthly;
//       default:
//         return forecast.daily;
//     }
//   }

//   return (
//     <div style={{
//       background: 'rgba(255, 255, 255, 0.7)',
//       borderRadius: '20px',
//       padding: '20px',
//       margin: '20px auto',
//       maxWidth: '800px',
//       boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
//       maxHeight: '80vh',
//       overflow: 'auto',
//       display: 'flex',
//       flexDirection: 'column'
//     }}>
//       <MemoizedWeatherInfo weather={currentWeather} />
//       {/* <WeatherInfo weather={currentWeather} /> */}
//       <ForecastToggle 
//       activeView={forecastView}
//       onViewChange={setForecastView}
//       />
//       <div style={{
//         display: 'flex',
//         justifyContent: 'space-around',
//         flexWrap: 'wrap',
//         marginTop: '20px'
//       }}>
//         {getForecastData().map((item, index) => (
//           <MemoizedForecastCard
//           // <ForecastCard
//             key={index}
//             day={forecastView === 'monthly' ? item.month : forecastView === 'hourly' ? item.time : item.day}
//             temp={item.temp}
//             condition={item.condition}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default WeatherCard





















import React, { useState } from 'react';
import CustomCard from './common/CustomCard';
import WeatherInfo from './WeatherInfo';
import ForecastCard from './ForecastCard';
import ForecastToggle from './ForecastToggle';


function WeatherCard({ currentWeather, forecast }) {
  const [forecastView, setForecastView] = useState('daily');

  const getForecastData = () => {
    switch (forecastView) {
      case 'hourly':
        return forecast.hourly;
      case 'daily':
        return forecast.daily;
      case 'monthly':
        return forecast.monthly;
      default:
        return forecast.daily;
    }
  };

  return (
    <CustomCard variant="weather">
      <WeatherInfo weather={currentWeather} />
      <ForecastToggle 
        activeView={forecastView}
        onViewChange={setForecastView}
      />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        marginTop: '20px'
      }}>
        {getForecastData().map((item, index) => (
          <ForecastCard
            key={index}
            day={forecastView === 'monthly' ? item.month : forecastView === 'hourly' ? item.time : item.day}
            temp={item.temp}
            condition={item.condition}
          />
        ))}
      </div>
    </CustomCard>
  )
}

export default WeatherCard