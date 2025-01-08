import React from 'react'
import styles from "@frontend/src/app/components/IndexApartments/page.module.css";
import DevelopersList from "@frontend/src/components/DevelopersList";
import data from '../../../developers.json'
import {Container, Box, Button, Typography} from '@mui/material';

const IndexDevelopers: React.FC = () => {
    return (
        <Container>
            <div className={styles.apartments} id='developers'>
                <Box>
                    <Typography variant='h2' fontSize={'32px'} lineHeight={'32px'} fontWeight={'bold'} marginBottom={'32px'}>
                        Cписок застройщиков
                    </Typography>
                </Box>

                <Box marginBottom={'16px'}>
                    <DevelopersList total={data.total} items={data.items} />
                </Box>
            </div>
        </Container>
    )
}

export default IndexDevelopers;