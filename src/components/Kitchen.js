import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
    dropContainer: {
        marginRight: 24
    },
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
                <div>
                    <h4>Countertop</h4>
                    <Checkbox
                        checked={this.state.countertop}
                        onChange={this.handleChange('countertop')}
                        value="countertop"
                    />
                </div>
                <div>
                    <h4>Cabinets</h4>
                    <Checkbox
                        checked={this.state.cabinets}
                        onChange={this.handleChange('cabinets')}
                        value="cabinets"
                    />
                </div>
                <div>
                    <h4>Appliances</h4>
                    <Checkbox
                        checked={this.state.appliances}
                        onChange={this.handleChange('appliances')}
                        value="appliances"
                    />
                </div>
                <button onClick={this.sendTotal}>Next</button>
            </div>
        )
    }
}

Kitchen.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Kitchen);