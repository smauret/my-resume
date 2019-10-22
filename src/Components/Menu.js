import React from 'react'
import {NavHashLink as NavLink} from "react-router-hash-link";
import {Grid, Hidden} from "@material-ui/core";
import {grey} from '@material-ui/core/colors';

export const Menu = ({list, visibleComponent}) => {
  return (
    <Grid container item md={3} style={{position: 'sticky', top: '0', height: 'fit-content', margin: '20px 8px'}}>
      {list.map(item =>
        <Hidden key={item} smDown>
          <Grid container item xs={12} style={{padding: '10px 20px', justifyContent: 'flex-end'}}>
            <NavLink isActive={() => {
              return window.location.pathname + window.location.hash === `/#${item}` || visibleComponent === item
            }}
                     smooth to={`/#${item}`}
                     activeStyle={{fontWeight: "bold", color:'black', fontSize: '36px', borderBottom: '3px solid black'}}
                     style={{textDecoration: 'none', fontSize: '20px', fontFamily: 'system-ui', color: grey['400']}}>
              {item}
            </NavLink>
          </Grid>
        </Hidden>
      )}
    </Grid>
  )
};
