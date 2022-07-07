import { getDay, isToday } from '../util/dateHelper';

export function Forecast(props:any) {

    const {forecast, isMetric} = props;
    let dayName = getDay(forecast.date);
    if (isToday(forecast.date)) {
        dayName = 'Today';
    }

    const now = new Date().getHours();
    const isDaytime = now >=7 && now <=19;

    const weather = isDaytime ? forecast.dayDetail : forecast.nightDetail;
    
    
    return (
        <>
            <div>
                <span>{dayName}</span>
                <span>{weather.icon} {weather.text}</span>
                <span>{forecast.temperatureRange.minimum.value} {forecast.temperatureRange.minimum.unit}</span>
                <span>{forecast.temperatureRange.maximum.value} {forecast.temperatureRange.maximum.unit}</span>
            </div>
        </>
    );

}
