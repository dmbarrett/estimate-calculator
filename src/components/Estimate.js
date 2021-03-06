import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Kitchen from './Kitchen';
import Bathroom from './Bathroom';
import Addition from './Addition';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: '',
    width: 250,
    margin: '0 auto',
    padding: '25px 50px',
    minHeight: 360,
    minWidth: 480
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
//   kitDrop: {
//       display: 'none',
//   },
//   batDrop: {
//       display: 'none'
//   },
//   addDrop: {
//       display: 'none'
//   }
});

class Estimate extends React.Component {
  state = {
    totalValue: 0,
    kitchenTotal: 0,
    bathroomTotal: 0,
    additionTotal: 0,
    getStarted: true,
    kitchen: false,
    bathroom: false,
    addition: false,
    commercial: false,
    summary: false
  };

  totalValue = 0;

  handleChange = name => event => {
    this.toggle(event.target.value)
  };

  toggle = name => {
    const menu = document.getElementById(name+'Drop')
    if(this.state[name] === false){
        menu.style.display = 'block'
        this.setState({
            [name]:true
        })
    } else if (this.state[name] === true){
        menu.style.display = 'none'
        this.setState({
            [name]:false
        })
    }
  }

  updateTotal = (total, name) => {
      name = name + "Total"
      this.setState({
          totalValue: this.state.totalValue + total,
          [name]: total
      })
    
  }

  checkTotal = () => {
      return this.state.totalValue
  }

  showKitchen = () => {
       this.setState({
           kitchen: !this.state.kitchen,
           getStarted: !this.state.getStarted
       })
  }

  showBathroom = () => {
      this.setState({
          bathroom: !this.state.bathroom,
          kitchen: !this.state.kitchen
      })
  }

  showAddition = () => {
      this.setState({
          addition: !this.state.addition,
          bathroom: !this.state.bathroom
      })
  }

  showSummary = () => {
      this.setState({
          summary: !this.state.summary,
          addition: !this.state.addition
      })
  }
  
  

  render() {
    const { classes } = this.props;
    let kitchen;
    let start;
    let bathroom;
    let addition;
    let summary;
    if(this.state.getStarted){
        start = (
            <div>
                <h2>Ready to get a rough estimate?</h2>
                <p>Let's get started!</p>
                <Button color="primary" onClick={this.showKitchen}>Begin</Button>
            </div>
        )
    }
    if(this.state.kitchen){
        kitchen = (
            <div>
            <Typography variant="h4">Kitchen</Typography>
                <div className={classes.kitDrop} id="kitchenDrop">
                    <Kitchen update={this.updateTotal} next={this.showBathroom}/>
                </div>
            </div>
        )
    }
    if (this.state.bathroom){
        bathroom = (
            <div>
            <Typography variant="h4">Bathroom</Typography>
                <div className={classes.bathroomDrop} id="bathroomDrop">
                    <Bathroom update={this.updateTotal} next={this.showAddition}/>
                </div>
            </div>
        )
    }
    if (this.state.addition){
        addition = (
            <div>
                <Typography variant="h4">Addition</Typography>
                <div className={classes.additionDrop} id="additionDrop">
                    <Addition update={this.updateTotal} next={this.showSummary}/>
                </div>
            </div>
        )
    }
    if(this.state.summary){
        summary = (
            <div>
                <h2>Here is your rough estimate:</h2>
                <p>Please note that this tool is only meant to give you a rough idea of what it might cost to complete a project.</p>
                <h4>Kitchen: ${this.state.kitchenTotal}</h4>
                <h4>Bathroom: ${this.state.bathroomTotal}</h4>
                <h4>Addition: ${this.state.additionTotal}</h4>
                <h2>Grand Total: ${this.state.totalValue}</h2>
            </div>
        )
    }
    return (
      <Paper className={classes.root}>
            {start}
            {kitchen}
            {bathroom}
            {addition}
            {summary}
      </Paper>
    );
  }
}

Estimate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Estimate);