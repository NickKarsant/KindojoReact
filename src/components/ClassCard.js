import React from 'react'
import {Card, Grid, Link, CardActions, CardContent,CardMedia,Typography} from '@mui/material';
import ThemeButton from '../components/ThemeButton'




const ClassCard = ({lesson, image}) => {

  let buttons;
  if (typeof lesson.videoLink === 'string') {
    buttons = <ThemeButton text='See this prop in action!' link={lesson.videoLink} />
  } else if (typeof lesson.videoLink === 'object' &&  lesson.videoLink !== null) {
    buttons = [<ThemeButton text='See this prop fight!' key={0} link={lesson.videoLink[0]} />,
    <ThemeButton text='See this prop dance!' key={1} link={lesson.videoLink[1]} />
    ]
  } 

  let description;
  if (lesson.title === 'Cyr Wheel'){
    description = (
      <>
        <span>{lesson.description} </span>
        <Link sx={{color: 'lightblue' }} href="http://circuscenter.org/classes" rel='noreferrer' target="_blank">Circus Center</Link>
      </>
    )
  } else if (lesson.title === 'Dragon Staff') {
    description = (
      <>
        <span> {lesson.description.slice(0,70)}</span><Link sx={{color:'lightblue'}} class="link" rel='noreferrer' href="https://www.youtube.com/watch?v=Pa6lb2AEf-I&ab_channel=NathanRae" target="_blank">fei-cha</Link><span> {lesson.description.slice(70)}</span>

      </>
    )
  } else {
    description = lesson.description
  }


let body;
// flip flop pictures
  if (lesson.id % 2 === 0){
    body = (
      <>
      <Grid item xs={4}>
      <CardMedia
        component="img"
        height="auto"
        image={image}
        alt={lesson.imageAlt}
      />
    </Grid>

    <Grid item xs={8}>
      <CardContent sx={{pb: 0}}>
  
      <Typography color='white' variant="h4" component="div">
        {lesson.title}
      </Typography>
      {lesson.privatePrice &&
      <Typography color='white' variant="body2">
      Private/Semi-private:${lesson.privatePrice}/person/hour
      </Typography>}
      {lesson.groupPrice &&
      <Typography color='white' variant="body2">
        Groups of 5+: ${lesson.groupPrice}/person/hour
      </Typography>}
      {lesson.prerequisites &&
      <Typography color='white' variant="body2">
        Prerequisites: {lesson.prerequisites}
      </Typography>}

      </CardContent>
      <CardContent>
        <Typography color='white' variant="body1">
          {description}
        </Typography>
      </CardContent>
    <CardActions sx={{pl: 2}}>
      {buttons}
    </CardActions>
    </Grid>
    </>
    )
  } else {
    body =(
      <>
      <Grid item xs={8}>
        <CardContent sx={{pb: 0}}>
    
        <Typography color='white' variant="h4" component="div">
          {lesson.title}
        </Typography>
        {lesson.privatePrice &&
        <Typography color='white' variant="body2">
        Private/Semi-private:${lesson.privatePrice}/person/hour
        </Typography>}
        {lesson.groupPrice &&
        <Typography color='white' variant="body2">
          Groups of 5+: ${lesson.groupPrice}/person/hour
        </Typography>}
        {lesson.prerequisites &&
        <Typography color='white' variant="body2">
          Prerequisites: {lesson.prerequisites}
        </Typography>}

        </CardContent>
        <CardContent>
          <Typography color='white' variant="body1">
            {description}
          </Typography>
        </CardContent>
      <CardActions sx={{pl: 2}}>
        {buttons}
      </CardActions>
      </Grid>
      <Grid item xs={4}>
        <CardMedia
          component="img"
          height="auto"
          image={image}
          alt={lesson.imageAlt}
        />
      </Grid>
      </>
    )
  }
  
    

  return (
    <Card sx={{py: 0, boxShadow:'none',  px: 2, orderRadius: 0,
      display:"flex",
      flexDirection:"row", 
      alignItems:'center',
      backgroundColor: '#21212121'
      }}>
      {body}
    </Card>
  )
}

export default ClassCard;