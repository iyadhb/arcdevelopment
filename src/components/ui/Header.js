import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typogrophy from '@material-ui/core/Typography'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';


function ElevationScroll(props) {
  const { children } = props;
  
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Header = () => {
    return (
        <ElevationScroll>
            <AppBar position="fixed" color='primary'>
            <Toolbar>
            <Typogrophy variant="h3" color="secondary"> 
            Arc Development
            </Typogrophy>
           
            </Toolbar>
        </AppBar>
        </ElevationScroll>
      
    )
}

export default Header
