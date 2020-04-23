import React from 'react';
import classes from './Dashboard.module.css';
import { Line, HorizontalBar, Pie, Doughnut } from 'react-chartjs-2';

class Dashboard extends React.Component {

    state = {
        lineDataArr: JSON.parse(localStorage.getItem('getData')).dasbhoardPage.latestHits,
        getBarData: JSON.parse(localStorage.getItem('getData')).dasbhoardPage.performance,
        getPieData: JSON.parse(localStorage.getItem('getData')).dasbhoardPage.storage,
        getNotificationData: JSON.parse(localStorage.getItem('getData')).dasbhoardPage.notifications,
        getOrdersData: JSON.parse(localStorage.getItem('getData')).dasbhoardPage.orders
    }
    //--------------------------------------line chart------------
    linedata = {
        labels: [...this.state.lineDataArr.months],
        fillColor: 'white',
        datasets: [
            {
                label: 'featured',
                data: [...this.state.lineDataArr.featured],
                borderColor: '#f05837',
                backgroundColor: 'transparent',
                pointBackgroundColor: '#f05837',
            },
            {
                label: 'latest',
                data: [...this.state.lineDataArr.latest],
                borderColor: '#888c46',
                backgroundColor: 'transparent',
                pointBackgroundColor: '#888c46'
            },
            {
                label: 'popular',
                data: [...this.state.lineDataArr.popular],
                borderColor: '#0abda0',
                backgroundColor: 'transparent',
                pointBackgroundColor: '#0abda0'
            }
        ]
    }
    lineoptions = {
        title: {
            display: true,
            fontColor: 'white',
            text: 'Hits',
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontColor: 'white'
                },
            }],
            xAxes: [{
                ticks: {
                    fontColor: 'white'
                },
            }]
        },
        legend: {
            labels: {
                fontColor: 'white'
            }
        }
    }
    //------------------------------------------------------------bar chart---
    // getting data from localstorage and use spread operator to copy the array to labels
    tifs = { ...this.state.getBarData };
    getKeys = Object.keys(this.tifs).map(function (item) {
        return item
    });
    getPairs = Object.values(this.tifs).map(function (item) {
        return (
            item
        )

    })
    bardata = {
        labels: [...this.getKeys],
        datasets: [
            {
                label: '# of Hits',
                data: [...this.getPairs],
                barThickness: 4,
                backgroundColor: [...this.getKeys],
                fontColor: 'white',
            }
        ]
    };
    barOptions = {
        title: {
            display: true,
            fontColor: 'white',
            text: 'Performance',
        },
        scales: {
            yAxes: [{
                barPercentage: 0.5,
                ticks: {
                    fontColor: 'white',
                }

            }],
            xAxes: [{
                ticks: {
                    fontColor: 'white',
                },
            }]
        },
        legend: {
            labels: {
                fontColor: 'white'
            }
        }
    };
    //--------------------------------------------pie chart----------------------
    pieObject = { ...this.state.getPieData };
    getKeysPie = Object.keys(this.pieObject).map(function (item) {
        return item
    });
    getPairsPie = Object.values(this.pieObject).map(function (item) {
        return (
            item
        )
    })
    piedata = {
        labels: [...this.getKeysPie],
        datasets: [
            {
                label: 'Storage',
                data: [...this.getPairsPie],
                backgroundColor: ['#36688d', '#423a01', '#fc5226'],
                fontColor: 'white',
            }
        ]
    };
    pieOptions = {
        title: {
            display: true,
            fontColor: 'white',
            text: 'Storage',
        },
        legend: {
            labels: {
                fontColor: 'white'
            }
        }
    };
    //--------------notifications------
    getCards = this.state.getNotificationData.map((item, pos) => {
        return (
            // console.log(item.message)
            <div className={classes.card} >
                <img src={item.pic} />
                <div >
                    <p>{item.message}</p>
                    <p>{item.time}.</p>
                </div>
            </div>
        )
    })
    //---------orders------
    getOrders = this.state.getOrdersData.map((item, pos) => {
        return (
            // console.log(item)
            < tr >
            <td>{item.orderNo}</td>
            <td>{item.status}</td>
            <td>{item.operators}</td>
            <td>{item.location}</td>
            <td>{item.distance}</td>
            <td>{item.startDate}</td>
            <td>{item.deliveryDate}</td>
           </tr >

        )
})
render() {

    console.log(this.state.getBarData)
    return (
        <div>
            <br/>
            <p className={classes.mPara}>Welcome back, <b>Admin</b></p>
            <div className={classes.chartsflex}>
                <div className={classes.chart}>
                    <Line data={this.linedata} options={this.lineoptions} height={200} />
                </div>
                <div className={classes.chart}>
                    <HorizontalBar data={this.bardata} options={this.barOptions} height={200} />
                </div>
                <div className={classes.chart} >
                    <Pie data={this.piedata} options={this.pieOptions} height={200} />
                </div>
                {/* //notifications */}
                    <div className={[classes.chart, classes.notifySection].join(' ')}>
                    {this.getCards}
                </div>
            </div>
            <div className={classes.tableWrapper}>
                <h3>Orders</h3>
            <div className={classes.table}>
                <table>
                    <tr>
                        <th>Order No</th>
                        <th>Status</th>
                        <th>Operator</th>
                        <th>Location</th>
                        <th>Distance</th>
                        <th>Start Date</th>
                        <th>Delivery Date</th>
                    </tr>
                    {this.getOrders}
                </table>
            </div>
            </div>
        </div>
    )
}
}
export default Dashboard;
