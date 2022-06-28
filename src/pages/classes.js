import * as React from 'react';
import { Grid, List, ListItem, Typography } from '@mui/material';
import ClassCard from '../components/ClassCard'
import ThemeButton from '../components/ThemeButton'
import cartwheel from '../images/cartwheel.png'
import poi from '../images/poi.jpg'
import ropedart from '../images/ropedart.jpg'
import dragon from '../images/dragonstaff.jpg'
import contact from '../images/contactstaff copy.jpg'
import whip from '../images/whip copy.jpg'
import nunchuck from '../images/nunchuck.jpg'
import firespinning from '../images/firespinning.jpg'
import puppyhammer from '../images/puppyhammer.jpg'
import cyr from '../images/cyr_twinpeaks.jpg'

const classData = { beginnerClasses: [
  {id: 0, prerequisites: null ,title: 'Body Fundamentals', privatePrice: 30, groupPrice: 15, description: 'Aimed toward absolute beginners, this class will explore the capabilities of the human body, providing a variety of exercises to improve strength, flexibility, coordination, range of motion, and agility. Goals for this class are cartwheels and rudimentary handstands.', imageAlt:'cartwheeling silhoutte against a sunset', videoLink: null},
  {
    id: 1, prerequisites: null ,title: 'Poi', privatePrice: 40, groupPrice: 20, description: 
    "Poi was first used as a traditional dance of Maori people of New Zealand to improve coordination, and strength, and has evolved to the international performance prop most commonly associated with fire spinning,or fire dancing. Although not necessarily the easiest to begin with, due to its ubiquitous presence poi is most often a person's introduction to the world of flow arts.", imageAlt:'a pair contact poi, orange ends with purple strings and green handles', videoLink: 'https://www.youtube.com/watch?v=LN-DD9eegB8'
  },
  {
    id: 2, prerequisites:null ,title: 'Rope Dart', privatePrice: 40, groupPrice: 20, description: 
    "Originally an ancient Chinese weapon, the rope dart has not changed in thousands of years. With a weighted end attached to a 10-12 foot rope, this soft-prop is used to make complex empty knots around the body that can be quickly, and surprisingly, released as a shot that can extend the full length of the rope. While the actual prop has not changed since its inception, its varied use has evolved to include many different styles.", imageAlt:'rope darty with black rope and red ball end', videoLink: ['https://www.youtube.com/watch?v=GOu0e6GY4ys', 'https://www.youtube.com/watch?v=vETp1DfmbI4']
  },
  {
    id: 3, prerequisites: null ,title: 'Dragon Staff', privatePrice: 40, groupPrice: 20, description: 
    'Derived from another Chinese weapon, turned performance art, known as or flying fork/trident, Dragon Staff is similar to Contact Staff but includes a rolling action, that significantly alters how the prop moves and is manipulated.  The constant rotation of the staff provides a stability in balance that makes it, arguably, more accessible to newcomers, while also providing sufficient complexity for advanced students to continue learning and exploring.', imageAlt:'Dark Monk brand fire dragon staff',  videoLink: 'https://www.youtube.com/watch?v=JqdTSEnAVeg'
  },
  {
    id: 4, prerequisites: null ,title: 'Contact Staff', privatePrice: 40, groupPrice: 20, description: 
    "Contact Staff refers to manipulating and balancing a staff on many different parts of the body limiting the use of hands to grip the staff. Many of the modern contact staff techniques come from baton twirling as well as the Chinese art of Fei-Cha. Contact Staff artists create remarkable visual effects since the staff movement seems so smooth and controlled while the performers movements remain subtle.", imageAlt:'practice contact staff with yellow golf ball ends', videoLink:'https://www.youtube.com/watch?v=nlSZd9NQj0M'
  }
],

advancedClasses:[
  {
    id: 5, prerequisites: null,title:'Bullwhip', privatePrice: 40, groupPrice: 20, description: 'There are a number of variations of whips designed with different purposes in mind. These classes center around bullwhip techniques (think Catwoman or Indiana Jones) and will demystify this loud, fear-inducing soft-prop incorporating smooth movements and transitions between cracks.', imageAlt:'blue coiled whip', videoLink: 'https://www.youtube.com/watch?v=t34PZy8JwDM'
  },
  {
    id: 6, prerequisites:'Competency with poi' ,title:'Nunchucks', privatePrice: 40, groupPrice: 20, description: 
    "Made popular by Bruce Lee and the Ninja Turtles, nunchucks, like rope dart, is a soft prop, or flexible weapon; fun to play with and infamously difficult to master. These classes will build upon abilities learned from the poi class, illustrating the differences, and teaching skills that favor exhibition and performances over weapon form.", imageAlt:'black soft practice nunchucks',videoLink: 'https://www.youtube.com/watch?v=ZRw-_a8mybs'
  },
  {
    id: 7, prerequisites:'Competency with at least one prop. Calmly recover from mistakes. Purchase a fire prop of your choosing.' ,title:'Introduction to Fire Spinning a.k.a. Fire-Bending', privatePrice: 150, groupPrice: null, description: 
    "This two class series will provide students with the ability to perform with fire, with heavy emphasis on safety protocols. First class will focus on safety, the nature of fire and manipulating it, and getting comfortable with flames close to your body. The second class will emphasize practicing musicality and being around other people spinning fire, as well as being able to put out a prop that is still lit and other tips for taking care of your fire prop.", imageAlt:'time-lapse photo of fire dancing creating a geometric shape',  videoLink: null
  },
  {
    id: 8, prerequisites:'Competency with poi and rope dart. Contact staff encouraged but not required.' ,title:'Introduction to Puppyhammer', privatePrice: 40, groupPrice: 20, description: 
    "The puppyhammer, another weapon-turned-performance-prop, is derived from a Chinese weapon known as meteor.  Meteors are characterized by a length of rope with an equal amount of weight at each end. Incorporating skills and movements from poi, rope dart, meteor, chain whip, and contact staff, puppyhammer is a unique mixture of props, offering a wide range of movements, tricks and unique combinations unrivaled by other flow props.", imageAlt:'partially disassembled practice puppyhammer with red rope and orange nodes', videoLink: 'https://www.youtube.com/watch?v=Td4q2tuFmWE'
  },
  {
    id: 9, prerequisites:null ,title:'Cyr Wheel', privatePrice: null, groupPrice: null, description: 
    `Pronounced "seer", cyr wheel is an acrobatic circus apparatus designed by Daniel Cyr in 1996. 
    Utilizing centrifugal forces and balance, a performer is able to complete amazing 
    and beautiful acrobatic movements while riding this relatively recent addition 
    to the circus arts.  Many classes/hours will be spent working up to the basic
    riding step called the waltz. These classes are offered at`, imageAlt:'black and white photo of cyr wheel in a house', videoLink: 'https://www.youtube.com/watch?v=GLlpi-0_lB0'
  }
]

}


const images = [cartwheel, poi, ropedart, dragon, contact, whip, nunchuck, firespinning, puppyhammer, cyr]


const Classes = () => {
  const beginnerClasses = classData.beginnerClasses.map((lesson) => {
    return (
      <ListItem key={lesson.id}>
        <ClassCard key={lesson.id} image={images[lesson.id]} lesson={lesson} />
      </ListItem>
    )
  })

  const advancedClasses = classData.advancedClasses.map((lesson) => {
    return (
      <ListItem key={lesson.id}> 
        <ClassCard key={lesson.id} image={images[lesson.id]}  lesson={lesson} />
      </ListItem>
    )
  })

  
  return (
    <>
      <Grid container sx={{borderBottom: '2px solid white'}}>
        <Grid container sx={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
          <Grid item>
            <Typography color='white'variant='h2'>
              Classes
            </Typography> 
            </Grid>
          </Grid>
        <Grid container sx={{py: 4, display: 'flex', alignItems:'center', justifyContent:'center'}}>
          <Grid item>
            <ThemeButton target="" text='Book a Class' link='/booking' />
          </Grid>
        </Grid>
      </Grid>

      <Grid container sx={{ display:'flex', alignItems:'center', justifyContent: 'flex-start'}}>
        <List>
          {beginnerClasses}
        </List> 
      </Grid>

      <Grid container sx={{borderBottom: '2px solid white', py: 4 }}>
        <Grid container sx={{display: 'flex', justifyContent:'center'}}>
          <Grid item >
            <Typography color='white' sx={{px:6}} variant='h3'>
              Advanced Classes
            </Typography>
          </Grid>
        </Grid>

        <Grid container sx={{display: 'flex', justifyContent:'center'}}>
            <Typography color='white' sx={{fontStyle:'italic', px:2, display:'flex', textAlign: 'center'}} variant='caption'>
            Certain skills are required to take an advanced class. Please speak with the instructor to see if you qualify.
            </Typography>
          </Grid>
      </Grid>

        <Grid container>
          <List>
            {advancedClasses}
          </List>
        </Grid>

        <Grid container sx={{display: 'flex', alignItems:'center', justifyContent:'center'}}>
          <Grid item>
            <ThemeButton sx={{p:3, mt: 5}} text='Book a Class' target='' link='/booking' />
          </Grid>
        </Grid>



    </>
    );
}

export default Classes;



