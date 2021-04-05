import React from "react"

import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CardActionArea from '@material-ui/core/CardActionArea'
import Hidden from '@material-ui/core/Hidden'

import castImage from '../../assets/images/blittle-league-still.jpg'
import zlobsImage from '../../assets/images/Zlobs.jpg'
import mindyImage from '../../assets/images/mindy.jpg'
import darbyImage from '../../assets/images/Darby.jpg'
import morganImage from '../../assets/images/Morgan.jpg'
import serpicoImage from '../../assets/images/Serpico.jpg'
import blaseballImage from '../../assets/images/blaseball-baseball.png'

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    heroButton: {
        fontFamily: 'Open Sans, sans-serif',
        fontWeight: '800',
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '100%', // 16:9
    },
    cardMediaGame: {
        width: 240,
    },
    cardContent: {
        flexGrow: 1,
    },
    cardDetails: {
        flex: 1,
    },
    media: {
        width: 200,
    },
    artistCaption: {
        paddingLeft: theme.spacing(1),
    },
    cardGame: {
        display: 'flex',
        height: '100%',
    },
    cardDetailsGame: {
        flex: 1,
    },
  }))

const cards = [1, 2, 3, 4]

const players = [
    {
        characterName: 'Mindy',
        actorName: 'Kayleigh Kane',
        actorFirstName: 'Kayleigh',
        bio: "A 'normal' girl with the ability to peer into minds and an insatieble book that demands secrets.",
        picture: mindyImage,
        twitterUrl: 'https://twitter.com/kayleighlkane'
    },
    {
        characterName: 'Zlobs',
        actorName: 'Joey T Badger',
        actorFirstName: 'Joey',
        bio: "This 10-year-old has a war van, a legal Massachuesetts drivers license, and a bandolier of grenades. He knows a guy.",
        picture: zlobsImage,
        twitterUrl: 'https://twitter.com/JoeyTBadger'
    },
    {
        characterName: 'Morgan',
        actorName: 'Marissa Farmer',
        actorFirstName: 'Marissa',
        bio: "She has seemly met anyone and pitches literal lightning. Prefers pizza over truffles.",
        picture: morganImage,
        twitterUrl: 'https://twitter.com/marissaleefarme'
    },
    {
        characterName: 'Darby',
        actorName: 'Bridget Copes',
        actorFirstName: 'Bridget',
        bio: "A literal angel exiled from Heaven. She has a flaming sword and acts like it.",
        picture: darbyImage,
        twitterUrl: 'https://twitter.com/bridgetjoco'
    },
]

const HomePage = () => {
    const classes = useStyles()

    return (
        <main>
            <div className={classes.heroContent}>
                <Container maxWidth="md">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Blittle League
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        A table top rpg live play set in the universe of Blaseball that will make you laugh and cry.
                    </Typography>
                    <img src={castImage}></img>
                    <div className={classes.heroButtons}>
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                                <Button size="large" variant="contained" color="primary" className={classes.heroButton}>
                                    Listen live
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button size="large" variant="outlined" color="primary" className={classes.heroButton}>
                                    Watch Episode 1
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>

            <Container className={classes.cardGrid} maxWidth="lg">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Meet the Team
                </Typography>
                <Grid container spacing={4}>
                    {players.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={3} key={card.characterName}>
                            <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    style={{height: 0, paddingTop: '100%'}}
                                    className={classes.cardMedia}
                                    image={card.picture}
                                    title={card.characterName}
                                />
                                <Typography variant="caption" color="textSecondary" className={classes.artistCaption}>
                                    Art by <a href='https://twitter.com/pikatzke'>@pikatzke</a>
                                </Typography>
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {card.characterName}
                                    </Typography>
                                    <Typography>
                                        {card.bio}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        Played by {card.actorName}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" href={card.twitterUrl}>
                                    Follow {card.actorFirstName}
                                </Button>
                            </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Container className={classes.cardGrid} maxWidth="lg">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    The Game
                </Typography>
                <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Card className={classes.cardGame}>
                        <div className={classes.cardDetailsGame}>
                        <CardActionArea component="a" href="#">
                            <CardContent>
                            <Typography component="h2" variant="h5">
                                John Serpico - The Game Master
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                John Serpico is your Game Master -- the conductor and adjudicator for our "game."
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                The players and the Game Master collaboratively build the world of Blittle League. As game master, John makes sure the players have something to do and adds plenty of stakes to the work.
                            </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                            <Button size="small" color="primary" href={"https://twitter.com/JohnSerpico"}>
                                Follow John
                            </Button>
                            </CardActions>
                        </div>
                        <Hidden xsDown>
                            <CardMedia
                                className={classes.cardMediaGame}
                                image={serpicoImage}
                                title='John Serpico the Game Master'
                            />
                        </Hidden>
                    </Card>

                </Grid>
                <Grid item xs={12} md={6}>
                    <Card className={classes.cardGame}>
                        <div className={classes.cardDetailsGame}>
                        <CardActionArea component="a" href="#">
                            <CardContent>
                            <Typography component="h2" variant="h5">
                                Blaseball
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                Blaseball is a horror-themed baseball simulation that is basically like a massively multiplayer table top role playing game made by The Game Band.
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                Blittle League is unaffiliated with Blaseball or The Game Band. This show is heavily inspired by its world and community.
                            </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                            <Button size="small" color="primary" href={"https://www.blaseball.com/"}>
                                Play Blaseball
                            </Button>
                            </CardActions>
                        </div>
                        <Hidden xsDown>
                            <CardMedia
                                className={classes.cardMediaGame}
                                image={blaseballImage}
                                title='Blaseball Icon'
                            />
                        </Hidden>
                    </Card>

                </Grid>
                </Grid>
            </Container>
        </main>
    )
}

export default HomePage