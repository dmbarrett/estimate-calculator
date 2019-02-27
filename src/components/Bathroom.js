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
            plumbing: false,
            porcelain: false,
            tile: false,
            totalValue: 0
        }
        this.prices = {
            plumbing: 4500,
            porcelain: 8000,
            tile: 3300
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

    componentDidUpdate = () => {

    }
    sendTotal = () => {
        this.props.update(this.state.totalValue, 'bathroom')
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
                    <h4>Plumbing</h4>
                    <Checkbox
                        checked={this.state.plumbing}
                        onChange={this.handleChange('plumbing')}
                        value="plumbing"
                    />
                </div>
                <div>
                    <h4>Bathtub, Sink, Toilet</h4>
                    <Checkbox
                        checked={this.state.porcelain}
                        onChange={this.handleChange('porcelain')}
                        value="porcelain"
                    />
                </div>
                <div>
                    <h4>Tile</h4>
                    <Checkbox
                        checked={this.state.tile}
                        onChange={this.handleChange('tile')}
                        value="tile"
                    />
                </div>
                <button onClick={this.sendTotal}>Next</button>
            </div>
        )
    }
}

Bathroom.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Bathroom);