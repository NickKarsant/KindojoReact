import * as React from 'react';
import {Box, Grid, Typography, Container, Link } from '@mui/material';
import cyr from '../images/cyr_twinpeaks.jpg'
import {ChunkyUnderline} from '../components/ChunkyUnderline'







const About = () => {
 
  return (
    <Container>
    <Grid sx={{py:1}}>
      <Typography variant='h4' sx={{pb:0}} color='white'>
        <ChunkyUnderline>
        Nicholas Karsant
        </ChunkyUnderline>
      </Typography>
      <Typography variant='h6' fontStyle='italic' sx={{pb:0}} color='white'>
          Instructor
      </Typography>
      <Grid container sx={{display:'flex', py:2, alignItems:'flex-start'}}>
        <Grid item xs={12} sm={6} xl={5} sx={{p:1}}>
          <Typography paragraph sx={{lineHeight:'2'}} color='white'>
            Nick's passion for the flow arts began one day, six years ago, when he observed the beauty
            of a flow performance at a regional festival. While serving coffee, Nick noticed someone
            spinning a rope dart, saw the power and mystique of the prop's movements, and fell in love immediately.
            He started to learn everything he could about the flow arts, expanding to a new prop every few months, and
            quickly learning it was something he could never live without.
          </Typography>
          <Typography paragraph sx={{lineHeight:'2' }} color='white'>
          After spending six years exploring different kinds of flow props, from dragon staff to bull whip,
          Nick decided to focus his efforts into circus and acrobatic training. Being an avid
          sports player growing up, as well as having experience studying martial arts, both
          as a child and as an adult, has led Nick's technique to be both playful and precise. The process of
          deepening his acrobatic training with flow has led Nick to the Cyr Wheel, which is his current focus.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} xl={7} sx={{display: 'flex', justifyContent:'center'}}>
          <img src={cyr} style={{'maxWidth': '400px', width: '100%', height: '100%', maxHeight: '400px'}} />
        </Grid>
      <Typography sx={{lineHeight:'2', p: 1, pb:0}} color='white'>
        In addition to his extensive experience spinning since 2013, Nick also worked as a Behavior Therapist
        with Autistic children in the Bay Area. His love for children and the flow arts has led him to be a
        teacher of Introduction Acrobatics for children between the ages of 7 and 14 at Circus Center in San Francisco.
      </Typography>
      </Grid>
    </Grid>

    <Grid sx={{pb: 2}}>
      <Typography variant='h4' color='white'>
        <ChunkyUnderline>
          What is Flow?
        </ChunkyUnderline>
      </Typography>
      <Typography sx={{lineHeight:'2', p: 1}} color='white'>
      Flow is a mental state where a person is entirely immersed in the activity; where one's skills are in balance
			with the
			challenges that arise. Click <a href="https://en.wikipedia.org/wiki/Flow_(psychology)" style={{'color':'lightblue'}} target="_blank">here</a> to read a more comprehensive definition of flow.
      </Typography>
    </Grid>

    <Grid sx={{py: 1}}>
      <Typography variant='h4' color='white'>
        <ChunkyUnderline>
          What is Flow Arts?
        </ChunkyUnderline>
      </Typography>
      <Typography sx={{lineHeight:'2', p: 1}} color='white'>
      From <a href="http://fundtheflowarts.org/the-flow-arts/" style={{'color':'lightblue'}} target="_ blank">fundtheflowarts.org</a>:
			" 'Flow Arts' has become an overarching term for the emerging movement-based artforms that integrate
			dance and creative exploration of movement with skill-based prop manipulation. The Flow Arts draw
			from a multitude of ancient and modern movement disciplines from taichi and Maori poi spinning, to
			martial arts and juggling, to circus arts, hula hooping and modern firedancing. Sometimes called the
			spinning arts (not to be confused with spinning stationary bikes), the Flow Arts have evolved to
			encompass more than spinning poi and staffs to include the artistic manipulation of many other props,
			such as hoops, swords, balls, whips, fans and levitation wands. New props such as the buugeng are also emerging
			to create fresh possibilities. The Flow Arts are at once a sport and a leisure activity, a new way to dance,
			explore and interact with the physical world, a movement meditation practice, a fun and creative outlet, and
			a serious technical pursuit of mastery. For many of its practitioners, it is a way to achieve the mind-state
			known as 'flow'."
      </Typography>
    </Grid>


    </Container>
    );
}

export default About;



