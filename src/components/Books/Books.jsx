import { useEffect, useState } from 'react';
import './Books.css';
import axios from 'axios';
export default function Books(){

    const [data, setData] = useState([]);

    const API = "https://alphasilver.productsalphawizz.com/app/v1/api/get_categories";

    const get_categories = async () => {
        try {
            const res = await axios.get(API);
            console.log(res.data.data, "data");
            setData(res.data.data[6].children);
            console.log(res.data.data[6]);

        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        get_categories();
    }, []);





    return(
<>
<div className="header-section">
        <h1>BOOKS</h1>
        <nav>
          <a href="/">Home</a> / <a href="/seeall">Category</a> / Products
        </nav>
      </div>
<div className="books-container">
            <h2>BOOKS CATEGORY</h2>
            {/* <div className="books-items">
                <div className="books-item">
                    <img
                        src="https://alphasilver.productsalphawizz.com/uploads/media/2024/Fiction.jpeg"
                        alt="Fiction"
                        className="books-image"
                    />
                    <p>Fiction</p>
                </div>
            </div> */}
            <div className="beauty-items">
          {data.map((value) => {
            return (
              <div className="beauty-item">
                <img src={value.image} alt={value.name} />
                <p>{value.name}</p>
              </div>
            );
          })}
        </div>
            
        </div>




</>
    );
}