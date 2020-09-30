import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import imgdarke from './23517947_10203655683748827_386243953407582758_n.jpg'
import { boardMembers, execMembers } from "./membersInfo"

class teamMembers extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    renderMembers() {
        const type = this.props.type === "boardMembers" ? boardMembers : execMembers;
        const members = type.map(member => 
        <Grid item xs={12} sm={8} md={6} lg={4} xl={3}>
            <Card>
                        <CardMedia
                            component="img"
                            height="400"
                            image={imgdarke}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {member.name}
                        </Typography>
                        </CardContent>
                    </Card>
        </Grid>);

        return members;
        
    }

    renderMemberGrid() {
        const members = this.renderMembers();

        return (
            <div className="gridContainer">
            <Grid container spacing={4} justify={"center"}>
                {members}
            </Grid>
            </div>
        )
    }

    render() {
        const members = this.renderMemberGrid();
        return members;
    }
}

export default teamMembers;