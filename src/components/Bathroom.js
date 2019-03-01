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
                <div className={classes.checkWrap}>
                    <div className={classes.dropContainerDiv}>
                        <Typography variant="h6">Plumbing</Typography>                        
                        <Checkbox
                            checked={this.state.plumbing}
                            onChange={this.handleChange('plumbing')}
                            value="plumbing"
                        />
                    </div>
                    <div className={classes.dropContainerDiv}>
                        <Typography variant="h6">Bathtub, Sink, Toilet</Typography>                        
                        <Checkbox
                            checked={this.state.porcelain}
                            onChange={this.handleChange('porcelain')}
                            value="porcelain"
                        />
                    </div>
                    <div className={classes.dropContainerDiv}>
                        <Typography variant="h6">Tile</Typography>                        
                        <Checkbox
                            checked={this.state.tile}
                            onChange={this.handleChange('tile')}
                            value="tile"
                        />
                    </div>
                </div>
                <Button className={classes.buttonBottom} color="primary" onClick={this.sendTotal}>Next</Button>
            </div>
        )
    }
}

Bathroom.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(Bathroom);