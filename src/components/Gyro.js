import { useEffect, useState } from "react"; 

const Gyro = () => {

    const [gyroX, setGyroX] = useState(null);
    const [gyroY, setGyroY] = useState(null);
    const [gyroZ, setGyroZ] = useState(null);

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
  if (gyroavail) {

    setGyroX(navigator.gyroscope.x);
    setGyroY(navigator.gyroscope.y)
    setGyroZ(navigator.gyroscope.z)
  }

        
 }, [gyroavail]);

    return ( 
        <div>
            <h1>hallo....</h1>
            <h2>Readings from gyroscope:</h2>
            <p>X: {gyroX}</p>
            <p>Y: {gyroY}</p>
            <p>Z: {gyroZ}</p>
            {gyroavail ? (<p>Yaaay</p>) : (<p>naaah!!</p>)}
        </div>
     );


}
 
export default Gyro;