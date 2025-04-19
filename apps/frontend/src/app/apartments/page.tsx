import styles from "./page.module.css";
import React from "react";
import { Box, Checkbox, Container, FormControlLabel, FormGroup, Grid, Slider, TextField, Typography } from "@mui/material";
import ApartmentsList from "../../components/ApartmentsList";
import appartnetsData from '../../apartments.json'

export default function Apartments() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
            <div className={styles.bgprdx}>
            </div>

                <Box marginBottom={'16px'}>
                    <Container>
                        <Grid container spacing={2}>
                            <Grid item md={10}>
                                <Typography
                                    variant={'h1'} 
                                    fontSize={'32px'} 
                                    fontWeight={'bold'}
                                    marginBottom={'32px'}
                                >
                                    Квартиры в Грозном
                                </Typography>
                                
                                <ApartmentsList 
                                    variant="list" 
                                    total={appartnetsData.total} 
                                    items={appartnetsData.items} 
                                />
                            </Grid>

                            <Grid item md={2}>
                                <Box paddingLeft={'16px'}>
                                    <Box marginBottom={'12px'}>
                                        <Typography
                                            className={styles.apartmentTitle}
                                            fontSize={'16px'} 
                                            fontWeight={'bold'}
                                            marginBottom={'8px'}
                                        >
                                            Кол-во комнат
                                        </Typography>

                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox />} label="1 комн." />
                                            <FormControlLabel control={<Checkbox />} label="2 комн." />
                                            <FormControlLabel control={<Checkbox />} label="3 комн." />
                                            <FormControlLabel control={<Checkbox />} label="4 комн." />
                                        </FormGroup>
                                    </Box>

                                    <Typography
                                        className={styles.apartmentTitle}
                                        fontSize={'16px'} 
                                        fontWeight={'bold'}
                                        marginBottom={'8px'}
                                    >
                                        Площадь (м²)
                                    </Typography>

                                    <Grid container spacing={1} marginBottom={'12px'}>
                                        <Grid item md={6}>
                                            <TextField size="small" label="От м²" />
                                        </Grid> 

                                        <Grid item md={6}>
                                            <TextField size="small" label="До м²" />                                              
                                        </Grid>
                                    </Grid>

                                    <Typography
                                        className={styles.apartmentTitle}
                                        fontSize={'16px'} 
                                        fontWeight={'bold'}
                                        marginBottom={'8px'}
                                    >
                                        Цена (₽)
                                    </Typography>

                                    <Grid container spacing={1} marginBottom={'12px'}>
                                        <Grid item md={6}>
                                            <TextField size="small" label="От ₽" />
                                        </Grid> 

                                        <Grid item md={6}>
                                            <TextField size="small" label="До ₽" />                                              
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                <div className={styles.bgprdx}>
                </div>
            </main>
        </div>
    );
}
