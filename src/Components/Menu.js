import React from 'react'
import {NavHashLink as NavLink} from "react-router-hash-link";
import {Grid} from "@material-ui/core";
import {grey} from '@material-ui/core/colors';


export const Menu = ({list}) => {

  return (
    <Grid container item md={3} style={{position: 'sticky', top: '0', height: 'fit-content', marginTop:'20px'}}>
        {list.map(item =>
          <Grid container item key={item} xs={12} style={{padding: '10px 20px', justifyContent: 'flex-end'}}>
            <NavLink isActive={()=>{ return window.location.pathname + window.location.hash === `/#${item}`}}
                     smooth to={`/#${item}`} activeStyle={{fontWeight: "bold", fontSize:'36px', borderBottom: '3px solid black'}}
                     style={{textDecoration: 'none', fontSize:'31px',fontFamily:'system-ui', color: grey['800']}}>
              {item}
            </NavLink>
          </Grid>
        )}
    </Grid>
  )
};
