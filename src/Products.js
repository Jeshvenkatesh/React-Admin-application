import React from 'react';
import classes from './Product.module.css';
import { Link } from 'react-router-dom';



class Products extends React.Component {

    state = {
        productsData: JSON.parse(localStorage.getItem('getData')).productsPage.products,
        categoriePage: JSON.parse(localStorage.getItem('getData')).productsPage.categories
    }

    getproducts = this.state.productsData.map((item, pos) => {
        return (
            < tr key={pos} >
                <td> <div className={classes.checkbox}>
                    <input type="checkbox" />
                </div></td>
                <td>{item.name}</td>
                {/* <td>{item.description}</td> */}
                <td>{item.stock}</td>
                <td>{item.unitSold}</td>
                <td>{item.expireDate}</td>
                <td> <div className={classes.icon}>
                    <i class="far fa-trash-alt tm-product-delete-icon"></i>
                </div></td>
            </tr >
        )
    })
    getcat = this.state.categoriePage.map((item, pos) => {

        return (
            <tr key={pos} className={classes.card}>
                <th>{item}</th>
                <td>
                    <div className={classes.icon}>
                        <i class="far fa-trash-alt tm-product-delete-icon"></i>
                    </div>
                </td>
            </tr>
        )
    })
    render() {
        console.log(this.state.productsData)
        console.log(this.state.categoriePage)
        return (
            <section className={classes.maindiv}>
                <div className={classes.subdiv}>
                <div className={classes.prodTableWrapper}>
                <div className={classes.prodTable}>
                    <table>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            {/* <th>Description</th> */}
                            <th>In Stock</th>
                            <th>Unit Sold</th>
                            <th>Expire Date</th>
                            <th></th>
                        </tr>
                        {this.getproducts}
                    </table>
                </div>
                </div>
               <Link to={'/Newproduct'}><button className={classes.btnWrapper}><b>ADD NEW PRODUCT</b></button></Link> 
                <button className={classes.btnWrapper}><b>DELETE SELECTED PRODUCT</b></button>
                </div>
                <div className={classes.prodCategoryWrapper}>
                    <h3>Product Categories</h3>
                    <div className={classes.prodCategory}>
                        {/* <h2>Product Categories</h2> */}
                        <table className={classes.table}>
                            {this.getcat}
                        </table>
                    </div>
                    <button className={classes.btnWrapper}><b>ADD NEW CATEGORY</b></button>
                </div>
            </section>
        )
    }
}

export default Products;