import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Match({match}) {
    return (
        <Grid key={match.id} item xs="auto">
            <Item>Home: {match.homeTeam.name}</Item>
            <Item>Away: {match.awayTeam.name}</Item>
            <Item>{match.score.fullTime.homeTeam} - {match.score.fullTime.awayTeam}</Item>
        </Grid> 
    );
}