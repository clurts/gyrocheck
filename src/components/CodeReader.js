import { useState } from "react";
import QrReader from "react-qr-reader"

const CodeReader = () => {

    const [result, setResult] = useState();

    const handleScan = data => data && setResult(data)
    const handleError = error => console.error(error)

    return ( 
        <div>
                <QrReader
                    delay={300}
                    onScan={handleScan}
                    onError={handleError}
                    style={{width: '10em', margin: '0 auto'}}
                    />
                <p>{result}</p>
        </div>

     );
}
 
export default QrReader;