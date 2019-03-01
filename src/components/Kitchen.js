import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    dropContainer: {
        borderTop: '2px solid #d3d3d3'
    },
    dropContainerDiv: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 12,
        marginBottom: 12,
        height: 72 
    },
    checkWrap: {
        minHeight: 360
    },
    buttonBottom: {
        float: 'right'
    }
})

class Kitchen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            countertop: false,
            cabinets: false,
            appliances: false,
            totalValue: 0
        }
        this.prices = {
            countertop: 9000,
            cabinets: 5500,
            appliances: 12000
        }
    }
    
    handleChange = name => event => {
        event.stopPropagation()
        let newTotal = this.state.totalValue
        console.log('before conditional: '+this.state[name])
        if(name === 'total'){
            this.sendTotal()
        } else {
        if(this.state[name] === true){
            newTotal = newTotal - this.prices[name]
            this.setState({
                totalValue: newTotal,
                [name]: false,
            })
            console.log(this.state.totalValue)
        } else if(this.state[name] === false){
            newTotal = newTotal + this.prices[name]
            this.setState({
                totalValue: newTotal,
                [name]: true,
            })
            console.log(this.state.totalValue)
        }
        console.log('after conditional: '+this.state[name])
    }
        
    }

    sendTotal = () => {
        this.props.update(this.state.totalValue, 'kitchen')
        this.props.next()
    }
  

    getTotal = () => {
        return this.state.totalValue
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.dropContainer}>
                <div className={classes.checkWrap}>
                    <div className={classes.dropContainerDiv}>
                        <Typography variant="h6">Countertop</Typography>
                        <Checkbox
                            checked={this.state.countertop}
                            onChange={this.handleChange('countertop')}
                            value="countertop"
                        />
                    </div>
                    <div className={classes.dropContainerDiv}>
                        <Typography variant="h6">Cabinets</Typography>
                        <Checkbox
                            checked={this.state.cabinets}
                            onChange={this.handleChange('cabinets')}
                            value="cabinets"
                        />
                    </div>
                    <div className={classes.dropContainerDiv}>
                        <Typography variant="h6">Appliances</Typography>
                        <Checkbox
                            checked={this.state.appliances}
                            onChange={this.handleChange('appliances')}
                            value="appliances"
                        />
                    </div>
                </div>
                <Button color="primary" onClick={this.sendTotal} className={classes.buttonBottom}>Next</Button>
            </div>
        )
    }
}

Kitchen.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Kitchen);