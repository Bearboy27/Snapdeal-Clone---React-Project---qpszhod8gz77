import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'


class Layout extends React.Component {
    constructor(props) {
        super(props)
      }
 render() {
  return(
   <React.Fragment>
    <Header/>
    {this.props.children}
    <Footer/>
   </React.Fragment>
    )
   }
 }


Layout.propTypes = {}
export default Layout