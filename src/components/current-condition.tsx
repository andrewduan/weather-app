import { getDay } from "../util/dateHelper";
export function CurrentCondition(props:any) {
    const {location, current, isMetric} = props;
    const dayName = getDay(current.date);
    const precipitation = isMetric? current.precipitation.metric : current.precipitation.imperial;
    const temperature = isMetric? current.temperature.metric : current.temperature.imperial;
    const {direction} = current.wind;
    const speed = isMetric? current.wind.speed.metric : current.wind.speed.imperial;
    return (
        <>
            <div>
                <h1>{location}</h1>
                <span>{dayName}</span>
                <span>{current.weatherDetail.icon}</span>
                <span>{current.weatherDetail.text}</span>
            </div>
            <div>
                <span>Temperature: {temperature.value} {temperature.unit}</span>
                <span>Precipitation: {precipitation.value} {precipitation.unit}</span>
                <span>Humidity: {current.humidity}%</span>
                <span>Wind: {direction.locolized} {speed.value} {speed.unit}</span>
            </div>
        </>
    );

}
