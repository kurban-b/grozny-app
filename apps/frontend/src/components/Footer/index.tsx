import Container from '@mui/material/Container';
import ApartmentIcon from '@mui/icons-material/Apartment';
import {Divider, Grid, Typography } from '@mui/material';
import styles from './styles.module.css'
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item md={2}>
                        <ApartmentIcon style={{width: '32px'}} />
                    </Grid>

                    <Grid item display={'flex'} md={8} alignItems={'center'}>
                        <ul>
                            <li>
                                <Link href="/">Главная</Link>
                            </li>

                            <li>
                                <Link href="/apartments">Квартиры</Link>
                            </li>

                            <li>
                                <Link href="/buildings">Жылищные комплексы</Link>
                            </li>

                            <li>
                                <Link href="/developers">Застройщики</Link>
                            </li>
                        </ul>
                    </Grid>

                    <Grid item md={2} display={'flex'} alignItems={'center'}>
                        <Typography fontSize={'12px'} lineHeight={'24px'}>
                            © Все права защищены 2024.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} >
                        <Divider style={{margin: '12px 0'}} />

                        <Typography textAlign={'center'} fontSize={'12px'} color={'textDisabled'}>
                            Любая информация, представленная на данном сайте, носит исключительно информационный характер и не является публичной офертой.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}

export default Footer