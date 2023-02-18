import React from 'react'
import { Link } from 'react-router-dom'
import Mendata from './Mendata';
import Mencard from './Mencard';

const Menhome = () => {
    console.log(Mendata.productData)
    return (
        <>
            <h1 className="text-center mt-3">All items</h1>
            <section className=" container">
                <div className="row ">
                    {Mendata.productData.map((item, index)=>{
                      return(
                        <Mencard img={item.img} 
                        title={item.title} 
                        desc={item.desc} 
                        price={item.price} 
                        item={item}
                        rate={item.rate} 
                        key={index} 
                        />
                        )
                    })}
                </div>
            </section>
            <Link to="/" className="btn btn-info ms-10 ">Home</Link>
        </>
    )
}

export default Menhome