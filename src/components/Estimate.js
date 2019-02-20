import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: ''
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class Estimate extends React.Component {
  state = {
    totalValue: 0,
    kitchen: false,
    bathroom: false,
    addition: false,
    commercial: false
  };

  handleChange = name => event => {
    let newTotal = this.state.totalValue
    if(event.target.value === 'kitchen' && this.state.kitchen === false){
        newTotal = newTotal + 20000 
        this.setState({ 
            totalValue: newTotal,
            kitchen: true,
        })

    } else if(event.target.value === 'kitchen' && this.state.kitchen === true){
        newTotal = newTotal - 20000
        this.setState({
            totalValue: newTotal,
            kitchen: false,
        })
    }
    
    if(event.target.value === 'bathroom' && this.state.bathroom === false){
        newTotal = newTotal + 7500 
        this.setState({ 
            totalValue: newTotal,
            bathroom: true,
        })

    } else if(event.target.value === 'bathroom' && this.state.bathroom === true){
        newTotal = newTotal - 7500
        this.setState({
            totalValue: newTotal,
            bathroom: false,
        })
    }  

    if(event.target.value === 'addition' && this.state.addition === false){
        newTotal = newTotal + 44000 
        this.setState({ 
            totalValue: newTotal,
            addition: true,
        })

    } else if(event.target.value === 'addition' && this.state.addition === true){
        newTotal = newTotal - 44000
        this.setState({
            totalValue: newTotal,
            addition: false,
        })
    }  
    
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div>
            <h3>Kitchen</h3>
            <Checkbox
                checked={this.state.kitchen}
                onChange={this.handleChange('kitchen')}
                value="kitchen"
            />
        </div>
        <div>
            <h3>Bathroom</h3>
            <Checkbox
                checked={this.state.bathroom}
                onChange={this.handleChange('bathroom')}
                value="bathroom"
                color="primary"
            />
        </div>
        <div>
            <h3>Addition</h3>
            <Checkbox
                checked={this.state.addition}
                onChange={this.handleChange('addition')}
                value="addition"
                color="primary"
            />
        </div>
        <h1>${this.state.totalValue}</h1>
      </div>
    );
  }
}

Estimate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Estimate);