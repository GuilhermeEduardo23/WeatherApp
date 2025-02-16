export default interface IWeather {
    temp: number,
    temp_min: number,
    temp_max: number,
    humidity: number,
    error: "Não foi possível localizar a cidade" | "Cidade não encontrada"
};