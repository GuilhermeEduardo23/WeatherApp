import windy from "../assets/windy.png";

const Temperature = () => {
  return (
    <div className="temperature">
        <img src={windy} alt="" />
        <span>14º</span>
        <p>So, it's Windy.</p>
    </div>
  )
}

export default Temperature