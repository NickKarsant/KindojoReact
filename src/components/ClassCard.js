import React from 'react'
import {Card, Grid, CardActions, CardContent,CardMedia,Typography} from '@mui/material';
import ThemeButton from '../components/ThemeButton'




const ClassCard = ({lesson, image}) => {

  let buttons;
  if (typeof lesson.videoLink === 'string') {
    buttons = <ThemeButton text='See this prop in action!' link={lesson.videoLink} />
  } else if (typeof lesson.videoLink === 'object' &&  lesson.videoLink !== null) {
    buttons = [<ThemeButton text='See this prop fight!' link={lesson.videoLink[0]} />,
    <ThemeButton text='See this prop dance!' link={lesson.videoLink[1]} />
    ]
  }
  
    

  return (
    <Card sx={{p: 2,orderRadius: 0,
      display:"flex",
      flexDirection:"row", 
      alignItems:'center',
      backgroundColor: '#21212121'
      }}>
      <Grid item xs={4}>
        <CardMedia marginRight='0'
          component="img"
          height="auto"
          image={image}
          alt={lesson.imageAlt}
        />
      </Grid>

      <Grid item xs={8}>
        <CardContent sx={{pb: 0}}>
        <Typography color='white' gutterBottom variant="h4" component="div">
            {lesson.title}
          </Typography>
          <Typography color='white' variant="body2">
            Private/Semi-private:${lesson.privatePrice}/person/hour
          </Typography>
          <Typography color='white' variant="body2">
            Groups of 5+: ${lesson.groupPrice}/person/hour
          </Typography>
        </CardContent>
        <CardContent>
          <Typography color='white' variant="body1">
            {lesson.description}
          </Typography>
        </CardContent>
      <CardActions>
      {buttons}
      </CardActions>
      </Grid>
    </Card>
  )
}

export default ClassCard;