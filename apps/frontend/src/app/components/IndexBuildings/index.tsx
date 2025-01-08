import React from 'react'
import styles from "@frontend/src/app/components/IndexApartments/page.module.css";
import BuildingsList from "@frontend/src/components/BuildingsList";
import data from '../../../buildings.json'
import {Container, Box, Button, Typography} from '@mui/material';

const IndexBuildings: React.FC = () => {
    return (
        <Container>
            <div className={styles.buildings} id='buildings'>
                <Box>
                    <Typography variant='h2' fontSize={'32px'} lineHeight={'32px'} fontWeight={'bold'} marginBottom={'32px'}>
                        Cписок ЖК для вас
                    </Typography>
                </Box>

                <Box marginBottom={'16px'}>
                    <BuildingsList total={data.total} items={data.items} />
                </Box>

                <Button style={{boxShadow: 'none'}} fullWidth variant="contained" color='primary' size="large">
                    Посмотреть все
                </Button>
            </div>
        </Container>
    )
}

export default IndexBuildings;