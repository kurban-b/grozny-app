import React from 'react'
import styles from "@frontend/src/app/components/IndexApartments/page.module.css";
import ApartmentsList from "@frontend/src/components/ApartmentsList";
import appartnetsData from '../../../apartments.json'
import {Container, Box, Button} from '@mui/material';

const IndexApartments: React.FC = () => {
    return (
        <Container>
            <div className={styles.apartments}>
                <Box marginBottom={'16px'}>
                    <ApartmentsList total={appartnetsData.total} items={appartnetsData.items} />
                </Box>

                <Button style={{boxShadow: 'none'}} fullWidth variant="contained" color='primary' size="large">
                    Посмотреть все
                </Button>
            </div>
        </Container>
    )
}

export default IndexApartments;