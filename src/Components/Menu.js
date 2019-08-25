import React from 'react'
import {HashLink as Link} from "react-router-hash-link";
import {Grid} from "@material-ui/core";

export const Menu = ({list})=> {

  return (
    <Grid container item md={3} style={{position: 'sticky', top:'0', height:'fit-content'}}>
      {list.map(item =>
        <Grid container item xs={12} style={{paddingRight:'20px', justifyContent:'flex-end'}}>
          <Link smooth to={`#${item}`}>{item}</Link>
        </Grid>)}

      {/*<Link smooth to="#Experiences">Experiences</Link>
      <Link smooth to="#Education">Education</Link>
      <Link smooth to="#Skills">Skills</Link>*/}
    </Grid>
  )
};
