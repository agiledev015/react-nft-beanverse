import {Box, Container, Typography, Hidden} from '@material-ui/core';
import useStyles from './Roadmap.styles';
import Fade from 'react-reveal/Fade';

const Roadmap = () => {
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <Container className={classes.roadmapWhiteArea} maxWidth="lg">
                <Container maxWidth="md">
                    <Fade bottom duration={1500}>
                        <Box textAlign="center">
                            <Typography variant="h2" color="textSecondary">BEANVERSE ROADMAP</Typography>
                            <Box className={classes.underLine} mt={1}></Box>
                            <Box className={classes.roadmapArea} mt={4}>
                                <Hidden smDown>
                                    <Box className={classes.roadmapRow1}>
                                        <Box className={classes.roadmapItem}>
                                            <Typography variant="h3">STAGE ONE</Typography>
                                            <Typography variant="h6" color="secondary">
                                                • Bean Fund Initiated. <br />
                                                • Town Hall created for community governance.
                                            </Typography>
                                        </Box>
                                        <Box className={classes.roadmapItem}>
                                            <Typography variant="h3">STAGE TWO</Typography>
                                            <Typography variant="h6" color="secondary">
                                                • Member Exclusive Beanverse Merch Store gets unlocked, featuring limited Edition clothing and other goodies. 
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box className={classes.roadmapRow2}>
                                        <Box className={classes.roadmapItem}>
                                            <Typography variant="h3">STAGE FOUR</Typography>
                                            <Typography variant="h6" color="secondary">
                                                • We give back. Firstly to charities and the Beanverse Community, featuring a special minigame with a large SOL reward! 
                                            </Typography>
                                        </Box>
                                        <Box className={classes.roadmapItem}>
                                            <Typography variant="h3">STAGE THREE</Typography>
                                            <Typography variant="h6" color="secondary">
                                                • Beanverse land (our very own land on the Metaverse) gets airdropped to 5 lucky Bean holders.
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box className={classes.roadmapRow3}>
                                        <Box className={classes.roadmapItem}>
                                            <Typography variant="h3">STAGE FIVE</Typography>
                                            <Typography variant="h6" color="secondary">
                                                • Bean Breeding machines go online…
                                                • Tesla Model 3 Giveaway ($45,000 in SOL) to a lucky Bean Holder.
                                            </Typography>
                                        </Box>
                                        <Box className={classes.roadmapItem}>
                                            <Typography variant="h3">?????</Typography>
                                            <Typography variant="h6" color="secondary">
                                                • Join our discord for updates... <br/>
                                                • https://discord.gg/D2SVZV3RGN
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Hidden>
                                <Hidden mdUp>
                                    <Box className={classes.roadmapItem}>
                                        <Typography variant="h3">STAGE ONE</Typography>
                                        <Typography variant="h6" color="secondary">
                                            • Bean Fund Initiated. <br />
                                            • Town Hall created for community governance.
                                        </Typography>
                                    </Box>
                                    <Box className={classes.roadmapItem}>
                                        <Typography variant="h3">STAGE TWO</Typography>
                                        <Typography variant="h6" color="secondary">
                                            • Member Exclusive Beanverse Merch Store gets unlocked, featuring limited Edition clothing and other goodies. 
                                        </Typography>
                                    </Box>
                                    <Box className={classes.roadmapItem}>
                                        <Typography variant="h3">STAGE THREE</Typography>
                                        <Typography variant="h6" color="secondary">
                                            • Beanverse land (our very own land on the Metaverse) gets airdropped to 5 lucky Bean holders.
                                        </Typography>
                                    </Box>
                                    <Box className={classes.roadmapItem}>
                                        <Typography variant="h3">STAGE FOUR</Typography>
                                        <Typography variant="h6" color="secondary">
                                            • We give back. Firstly to charities and the Beanverse Community, featuring a special minigame with a large SOL reward! 
                                        </Typography>
                                    </Box>
                                    <Box className={classes.roadmapItem}>
                                        <Typography variant="h3">STAGE FIVE</Typography>
                                        <Typography variant="h6" color="secondary">
                                            • Bean Breeding machines go online…
                                            • Tesla Model 3 Giveaway ($45,000 in SOL) to a lucky Bean Holder.
                                        </Typography>
                                    </Box>
                                    <Box className={classes.roadmapItem}>
                                        <Typography variant="h3">?????</Typography>
                                        <Typography variant="h6" color="secondary">
                                            • Join our discord for updates... <br/>
                                            • https://discord.gg/D2SVZV3RGN
                                        </Typography>
                                    </Box>
                                </Hidden>
                            </Box>
                        </Box>
                    </Fade>
                </Container>
            </Container>
        </Box>
    )
}

export default Roadmap
