import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
    dropContainer: {
        marginRight: 24
    },
})

class Bathroom extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            countertop: false,
            cabinets: false,
            appliances: false,
            totalValue: 0
        }
    }
    handleChange = name => event => {
        let newTotal = this.state.totalValue
        if(event.target.value === 'countertop' && this.state.kitchen === false){
            newTotal = newTotal + 9000
            this.setState({
                totalValue: newTotal,
                countertop: true,
            })
        } else if(event.target.value === 'countertop' && this.state.kitchen === true){
            newTotal = newTotal - 9000
            this.setState({
                totalValue: newTotal,
                countertop: false,
            })
        }

    }

    getTotal = () => {
        return this.state.totalValue
    }

    render() {
        const { classes } = this.props;

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
            </div>
        )
    }
}

Bathroom.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Bathroom);