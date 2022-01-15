import { useEffect, useState } from "react"; 

const Gyro = () => {

    const [deviceAlpha, setDeviceAlpha] = useState();
    const [deviceBeta, setDeviceBeta] = useState();
    const [deviceGamma, setDeviceGamma] = useState();
    const [gyroavail, setGyroavail] = useState(false);

    let date =  new Date();
    console.log(date)


    useEffect(() => {
        if ("geolocation" in navigator) {
            console.log("Geolocation available");
          } else {
            console.log("Geolocation not Available");
          }


          if ("gyroscope" in navigator) {
            console.log("Gyroscope available");
            setGyroavail(true)
          } else {
            console.log("Gyroscope not Available");
          }
    }, []);
useEffect(() => {
  window.addEventListener("deviceorientation", e => {
    setDeviceAlpha(e.alpha)
    setDeviceBeta(e.beta)
    setDeviceGamma(e.gamma)
  })   
 }, [gyroavail]);

    return ( 
        <div>
            <h1>hallo....</h1>
            <h2>Readings from gyroscope:</h2>
            <p>alpha: {deviceAlpha}</p>
            <p>beta: {deviceBeta}</p>
            <p>gamma: {deviceGamma}</p>
        </div>
     );


}
 
export default Gyro;