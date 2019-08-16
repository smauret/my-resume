import React from 'react'
import {GridListTile, GridList, GridListTileBar} from '@material-ui/core/'

export const Skills = ({tileData}) => {
  return (
    <GridList cellHeight={160} cols={3}>
      {tileData.map(tile => (
        <GridListTile key={tile.name} cols={tile.cols || 1}>
          <img src={tile.img} alt={tile.name} style={{objectFit: 'cover'}} />
          <GridListTileBar
            title={tile.name}
          />
        </GridListTile>
      ))}
    </GridList>
      )
};
