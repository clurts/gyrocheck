import { useEffect, useState } from "react"; 

const Gyro = () => {

    const [deviceAlpha, setDeviceAlpha] = useState();
    const [deviceBeta, setDeviceBeta] = useState();
    const [deviceGamma, setDeviceGamma] = useState();
    const [isiOS, setIsiOS] = useState(false);

    let date =  new Date();
    console.log(date)

    useEffect(() => {
      if(navigator.userAgent.match(/iPhone/i)) {
        setIsiOS(true)
     }
    }, []);



useEffect(() => {
  if (isiOS) {
    DeviceMotionEvent.requestPermission().then(response => {
      if (response === 'granted') {
          window.addEventListener('deviceorientation',(e) => {
            setDeviceAlpha(e.alpha.toFixed(1))
            setDeviceBeta(e.beta.toFixed(1))
            setDeviceGamma(e.gamma.toFixed(1))
          });       
       }
  })
  } else {
  window.addEventListener("deviceorientation", e => {
    setDeviceAlpha(e.alpha.toFixed(1))
    setDeviceBeta(e.beta.toFixed(1))
    setDeviceGamma(e.gamma.toFixed(1))
  }) 
}  
 }, [isiOS]);



    return ( 
        <div>
            <h1>hallo....</h1>
            { isiOS && <p>Du er på en iPhone!!!</p>}
            <h2>Readings from gyroscope:</h2>
            <p>alpha: {deviceAlpha}</p>
            <p>beta: {deviceBeta}</p>
            <p>gamma: {deviceGamma}</p>
        </div>
     );


}
 
export default Gyro;