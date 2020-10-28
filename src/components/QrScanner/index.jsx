import React, { Component, Fragment } from 'react';
import QrReader from 'react-qr-scanner';

import Button from '@material-ui/core/Button';
import CropFreeSharpIcon from '@material-ui/icons/CropFreeSharp';

import styles from "./QrScanner.module.scss";
 
export default class QrScanner extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: 'No result',
      showScanner: false
    }
 
    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){
    const {scanSuccess} = this.props
    this.setState({
      result: data,
    })
    if(data){
      console.log("Succesfully scanned with ", data)
    }
  }
  handleError(err){
    const {scanFailure} = this.props
    scanFailure(err)
    console.error(err)
  }

  handleShowScanner(err){
    this.setState({showScanner: !this.state.showScanner})
  }
  render(){

    const { showScanner } = this.state

    const previewStyle = {
      width: 300,
      height:300,
      margin: "0 auto",
      objectFit: "cover",
      borderRadius: "30px",
      padding: "5px",
      boxShadow: "unset !important",
      outlineOffset: "-31px",
      outline: "5px solid red"
    }

    return(
      <Fragment>
          {!showScanner ?
          <div className={styles.scanBtn} onClick={() => this.handleShowScanner()}>
            <Button
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<CropFreeSharpIcon />}
            > 
                Scan
            </Button>
          </div>  
          :
            <div>
              <h3>Please scan the code</h3>
              <QrReader
                delay={this.state.delay}
                style={previewStyle}
                onError={this.handleError}
                onScan={this.handleScan}
              /> 
            </div>
          }


        <p>{this.state.result}</p>
      </Fragment>
    )
  }
}