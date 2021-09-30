import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { getMatches } from '../services/football';
import Match from '../components/match';

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
                    <Match key={match.id} match={match}/>
                );
            })}
        </Grid>
        </Box>
    );
}
