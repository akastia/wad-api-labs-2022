import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";



export default function TvCard({ tv, action}) {
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={
          <Typography variant="h5" component="p">
            {tv.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          tv.poster_path
            ? `https://image.tmdb.org/t/p/w500/${tv.poster_path}`
            : img
        }
      />
      <CardContent>
          <Grid container>
            <Grid item xs={9}>
              <Typography variant="h6" component="p">
                <CalendarIcon fontSize="small" />
                {tv.first_air_date}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" component="p">
                <StarRateIcon fontSize="small" />
                {"  "} {tv.vote_average}{" "}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      
      
        <CardActions disableSpacing>
            {action (tv)}
            <Link to={`/tv_shows/${tv.id}`}> 
      
      
  { <Button variant="outlined" size="medium" color="primary" >
        More Info ...
      </Button>
      }
          </Link>
  
  
        </CardActions>
      </Card>
    );
  }