import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Kitchen from './Kitchen';
import Bathroom from './Bathroom';
import Addition from './Addition';

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
  kitDrop: {
      display: 'none',
  },
  batDrop: {
      display: 'none'
  },
  addDrop: {
      display: 'none'
  }
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
    if(event.target.value === 'kitchen'){
        this.toggleKitchen()
    }
    
    if(event.target.value === 'bathroom'){
       this.toggleBathroom()

    }

    if(event.target.value === 'addition'){
       this.toggleAddition()

    }
    
  };

  toggleKitchen = () => {
    const menu = document.getElementById('kitDrop')
    if(this.state.kitchen === false){
        menu.style.display = 'block'
        this.setState({
            kitchen:true
        })
    } else if(this.state.kitchen === true){
        menu.style.display = 'none'
        this.setState({
            kitchen:false
        })
    }

  }

  toggleBathroom = () => {
    const menu = document.getElementById('batDrop')
    if(this.state.bathroom === false){
        menu.style.display = 'block'
        this.setState({
            bathroom:true
        })
    } else if(this.state.bathroom === true){
        menu.style.display = 'none'
        this.setState({
            bathroom:false
        })
    }

  }

  toggleAddition = () => {
    const menu = document.getElementById('addDrop')
    if(this.state.addition === false){
        menu.style.display = 'block'
        this.setState({
            addition:true
        })
    } else if(this.state.addition === true){
        menu.style.display = 'none'
        this.setState({
            addition:false
        })
    }

  }

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
            <div className={classes.kitDrop} id="kitDrop">
                <Kitchen />
            </div>
        </div>
        <div>
            <h3>Bathroom</h3>
            <Checkbox
                checked={this.state.bathroom}
                onChange={this.handleChange('bathroom')}
                value="bathroom"
                color="primary"
            />
            <div className={classes.batDrop} id="batDrop">
                <Bathroom />
            </div>
        </div>
        <div>
            <h3>Addition</h3>
            <Checkbox
                checked={this.state.addition}
                onChange={this.handleChange('addition')}
                value="addition"
                color="primary"
            />
            <div className={classes.batDrop} id="addDrop">
                <Addition />
            </div>
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