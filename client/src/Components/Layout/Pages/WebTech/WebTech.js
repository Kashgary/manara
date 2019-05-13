import React, { Fragment, Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const styles = {
    Paper: {
        padding: 25,
        marginTop: 10,
        marginbottom: 10,
        overFlowY: 'auto',
    }
}
const url1 = 'https://medium.freecodecamp.org/top-web-development-trends-to-look-out-for-in-2019-4f6a03007f22'
const url2 = 'https://www.cleveroad.com/blog/web-development-trends'
const url3 = 'https://99designs.co.uk/blog/trends/web-design-trends-2019/'

export default class WebTech extends Component {

    render() {
        return (
            <Fragment>
                <Grid container>
                    <Grid item sm style={{ margin: 5 }}>
                        <Paper style={styles.Paper}>
                            <Typography variant="display1">
                                Leatest Web Development Trend in 2019
                            </Typography>
                            <Typography variant="h5" style={{ marginTop: 15 }}>
                                1. Progressive Web Apps (PWA)
                            </Typography>
                            <Typography variant="subtitle2">
                                Progressive web apps are web pages that appear like mobile applications for users.
                                If they are preloaded on the device then the user can access them even without an internet connection.
                            </Typography>
                            <Typography variant="h5" style={{ marginTop: 15 }}>
                                2. JS Frameworks
                            </Typography>
                            <Typography variant="subtitle2">
                                A freamwork is reusable design platform which helps in providing support for the best programming languages.
                            </Typography>
                            <Typography variant="h5" style={{ marginTop: 15 }}>
                                3. Single Page Applications
                            </Typography>
                            <Typography variant="subtitle2">
                                This is a fast-paced world, and no one really has enough time to go through different pages of a website. Single page applications are nothing but a single page website where everything is provided on one page only.
                            </Typography>
                            <Typography variant="h5" style={{ marginTop: 15 }}>
                                4. API-First Development
                            </Typography>
                            <Typography variant="subtitle2">
                                Current trends in website development suggest that web solutions have to be well-prepared for connectivity with other applications. It’s no surprise considering the rise of mobiles, wearables, and other devices that should integrate with one another.
                            </Typography>
                            <Typography variant="h5" style={{ marginTop: 15 }}>
                                5. Motion UI
                            </Typography>
                            <Typography variant="subtitle2">
                                Current trends in website development suggest that web solutions have to be well-prepared for connectivity with other applications. It’s no surprise considering the rise of mobiles, wearables, and other devices that should integrate with one another.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item sm style={{ margin: 5 }}>
                        <Paper style={styles.Paper}>
                            <Typography variant="display1">
                                Leatest Web Development Trend in 2019
                            </Typography>
                            <Typography variant="h5" style={{ marginTop: 15 }}>
                                1. Natural, organic shapes
                            </Typography>
                            <Typography variant="subtitle1">
                                Organic shapes are naturally imperfect and asymmetrical, they can provide depth to a web design that makes page elements stand out.
                            </Typography>
                            <Typography variant="h5" style={{ marginTop: 15 }}>
                                2. Micro-interactions
                            </Typography>
                            <Typography variant="subtitle1">
                                Web pages with micro-interactions will heavily feature their more interactive incarnations. Hover and scrolling animations, chimes, and much more. All in all, this is a way to involve your audience in your website, to subtly transmit information to the users about their actions and usage, and make web pages feel a little smarter.
                            </Typography>
                            <Typography variant="h5" style={{ marginTop: 15 }}>
                                3. Minimalism
                            </Typography>
                            <Typography variant="subtitle1">
                                Animations and fade-in effects that make scrolling more engaging will give web pages freedom to space out their content and thus result in more whitespace, contrast and clear typography without too many distracting elements.
                            </Typography>
                            <Typography variant="h5" style={{ marginTop: 15 }}>
                                4. Thumb-friendly navigation
                            </Typography>
                            <Typography variant="subtitle1">
                                Users will encounter navigation tailored to the thumb, such as the hamburger menu moved to the bottom of mobile screens.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item sm style={{ margin: 5 }}>
                        <Paper style={styles.Paper}>
                            <Typography variant="display1">
                                Refrences
                            </Typography>
                            <Typography variant="subtitle1" style={{ marginTop: 15 }}>
                                <Link href={url1} >
                                    Top Web Development trends to look out for in 2019
                                </Link>
                            </Typography>
                            <Typography variant="subtitle1" style={{ marginTop: 15 }}>
                                <Link href={url2} >
                                    8 Web Development Trends Every CTO Should Be Ready for in 2019
                                </Link>
                            </Typography>
                            <Typography variant="subtitle1" style={{ marginTop: 15 }}>
                                <Link href={url3} >
                                    10 innovative web design trends for 2019
                                </Link>
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Fragment>
        )
    }
}