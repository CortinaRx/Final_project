import Quagga from 'quagga';
import { useContext, useEffect, useState } from "react"; // ES6
import { Link, useNavigate } from 'react-router-dom';
import { ProductContext } from '../../shared/contexts/ProductContext';
import './BarcodeScanner.scss'
export function BarcodeScanner () {
    const {product, setProduct}=useContext(ProductContext);
    const [bandera, setBandera]= useState(false);
    const navigate = useNavigate();

    

    const initBarcode = () => {
        
    //    console.log('blaladvab',userAllergies)
        Quagga.init({
            inputStream: {             
                
                name: "Live",
                type: "LiveStream",
                target: document.querySelector(".c-barcode-scanner--video")    // Or '#yourElement' (optional)
            },
            decoder: {
                readers: ["ean_reader"]
            }
        }, function (err) {
            if (err) {
                console.log(err);
                return
            }
            console.log("Initialization finished. Ready to start");
            Quagga.start();
        });
        Quagga.onDetected((code) => {
            
            setProduct({code});       

            setBandera(true);
  
        }
        )
    }
    useEffect(initBarcode, [product])


    console.log('bandera2', bandera)
    if(bandera ===true){  
        navigate("/resultscanner")  
    }

    return (<div className="c-barcode-scanner">

        <div className="c-barcode-scanner-leave">
            <Link to="/home" ><img src="./Images/barcodeLeaveImg.png" alt="Leave Icon"/></Link> 
        </div>

        <div className="c-barcode-scanner-title">
            <h2>Escaneando...</h2>

            <h6>Tan solo tienes que centrar el <span>código de barras</span> del producto en el recuadro.</h6>

        </div>
    
        <div className="c-barcode-scanner--video">

        
        </div>

    </div>
    )
}
