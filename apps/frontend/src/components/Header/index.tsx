import styles from './styles.module.css'
import Container from '@mui/material/Container';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { Grid, Typography } from '@mui/material';
import Link from 'next/link';

const Header = () => {
    return (
        <header className={styles.header__block}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item>
                        <ApartmentIcon style={{width: '32px'}} />
                    </Grid>

                    <Grid item display={'flex'} alignItems={'center'} flex={1}>
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

                    <Grid item>
                        <Typography fontSize={'16px'}>
                            8(999)999-99-99
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </header>
    );
}

export default Header;