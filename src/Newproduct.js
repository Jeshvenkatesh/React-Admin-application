import React from 'react'
import classes from './newproduct.module.css';

const Newproduct =()=>{

    const fileSelectHandler=(e)=>{
            console.log(e.target.files[0]);
    }
    return(
        <div className={classes.pagewrapper}>
            <h3>Add Product</h3>
        <div className={classes.maindiv}>
            <div className={classes.formdiv}> 
                <form >
                <p>Product Name</p>
                <input type="text"/>
                <p>Description</p>
                <textarea></textarea>
                <p>Category</p>
                <select>
                    <option>Select Category</option>
                    <option>New Arrival</option>
                    <option>Most Popular</option>
                    <option>Trending</option>
                </select>
                <div>
                    <div>
                        <p>Expire Date</p>
                        <input type="text"/>
                    </div>
                    <div>
                        <p>Units In Stock</p>
                        <input type="text"/>
                    </div>
                </div>
                </form>
                
            </div>
            <div className={classes.subdiv}>
                <div className={classes.icondiv}>
                    <i className="fas fa-cloud-upload-alt tm-upload-icon"></i>
                </div>
                <button>UPLOAD PRODUCT IMAGE</button>
            </div>
        </div>
        <button> ADD PRODUCT NOW</button>
        <input type="file" onChange={fileSelectHandler}/>
        </div>
    )
}

export default Newproduct;