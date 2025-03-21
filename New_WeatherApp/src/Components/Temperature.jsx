import windy from "../assets/windy.png";

const Temperature = ({nameCity, weatherData, loading, error}) => {
  return (
    <div className="temperature">
        <span>{nameCity}</span>
        <img src={windy} alt="" />
        <span>14º</span>
        <h1>So, it's Windy.</h1>
    </div>
  )
}

export default Temperature