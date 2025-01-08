import React from 'react'
import styles from "./page.module.css";
import {Button, Container, Grid, TextField, Typography } from '@mui/material';

const IndexHero: React.FC = () => {
    return (
        <div className={styles.hero}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item md={8} xs={12}>
                        <Typography
                            fontSize={'42px'}
                            lineHeight={'72px'}
                            variant="h1"
                            component="h1"
                        >
                            Квартиры в Грозном
                        </Typography>
                    </Grid>

                    <Grid item md={4} xs={12}>
                        <div className={styles.heroFormBlock}>
                            <Typography
                                fontSize={'28px'}
                                lineHeight={'28px'}
                                fontWeight={'bold'}
                                variant="h3"
                                component="h3"
                                textAlign={'center'}
                                marginBottom={'32px'}
                            >
                                Оставить заявку
                            </Typography>

                            <div style={{marginBottom: '16px'}}>
                                <TextField fullWidth placeholder={'Имя'} size={'small'}/>
                            </div>

                            <div style={{marginBottom: '16px'}}>
                                <TextField fullWidth placeholder={'Телефон'} size={'small'}/>
                            </div>

                            <div>
                                <Button fullWidth color="primary" variant="contained">
                                    Отправить
                                </Button>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default IndexHero;