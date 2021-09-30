import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { getMatches } from '../services/football';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Matches() {
    const [matches, setMatches] = useState([]);

    //
    useEffect(() => {
        const getAll = async () => {
            const result = await getMatches();
            console.log('result:', result);
            setMatches(result);
        };

        getAll();
    }, []);

    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
            {matches.map((match) => {
                return (
                    <Grid key={match.id} item xs="auto">
                        <Item>Home: {match.homeTeam.name}</Item>
                        <Item>Away: {match.awayTeam.name}</Item>
                        <Item>{match.score.fullTime.homeTeam} - {match.score.fullTime.awayTeam}</Item>
                    </Grid>
                );
            })}
        </Grid>
        </Box>
    );
}
