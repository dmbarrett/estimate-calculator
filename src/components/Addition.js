import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
    dropContainer: {
        marginRight: 24
    },
})

class Addition extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            single: false,
            double: false,
            basement: false,
            totalValue: 0
        }
        this.prices = {
            single: 25000,
            double: 50000,
            basement: 75000
        }
    }
    handleChange = name => event => {
        let newTotal = this.state.totalValue
        console.log('before conditional: '+this.state[name])
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
    sendTotal = () => {
        this.props.update(this.state.totalValue, 'addition')
        this.props.next()
    }
    getTotal = () => {
        return this.state.totalValue
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.dropContainer}>
                <div>
                    <h4>One Floor Addition</h4>
                    <Checkbox
                        checked={this.state.countertop}
                        onChange={this.handleChange('single')}
                        value="single"
                    />
                </div>
                <div>
                    <h4>Two Floor Addition</h4>
                    <Checkbox
                        checked={this.state.cabinets}
                        onChange={this.handleChange('double')}
                        value="double"
                    />
                </div>
                <div>
                    <h4>Basement Addition</h4>
                    <Checkbox
                        checked={this.state.appliances}
                        onChange={this.handleChange('basement')}
                        value="basement"
                    />
                </div>
                <button onClick={this.sendTotal}>Finish</button>
            </div>
        )
    }
}

Addition.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Addition);