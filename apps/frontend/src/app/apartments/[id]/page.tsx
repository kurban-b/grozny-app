import styles from "./page.module.css";
import React, { useCallback, useMemo } from "react";
import { Box, Container, Grid, ImageList, ImageListItem, Typography } from "@mui/material";
import ApartmentsList from "@frontend/src/components/ApartmentsList";
import appartnetsData from '../../../apartments.json'
import { spaceDigits } from "@frontend/src/utils/numbers/spaceDigits";
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import ApartmentIcon from '@mui/icons-material/Apartment';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import EventIcon from '@mui/icons-material/Event';
import ImgList from "./ImgList";
import { YMaps, Map, ObjectManager, ZoomControl, Placemark } from "@pbe/react-yandex-maps";
import MapBlock from "@frontend/src/components/MapBlock";

interface ILocation {
    coordinates: {
        x: string;
        y: string;
    };
    address: {
        city: string;
        district: string;
        street: string;
        house: string;
        housing: string;
        entrance: string;
        apartment: string;
    };
};

export default function Apartments() {
    const apartment = useMemo(() => {
        return appartnetsData.items[0]
    }, [])

    const getAddress = useCallback((location: ILocation) => {
        let res = ``

        const {city, district, street, house, housing, entrance, apartment} = location.address

        if (city) {
            res += `г. ${city}`
        }

        if (district) {
            res += `, р-н ${district}`
        }

        if (street) {
            res += `, ул. ${street}`
        }

        if (house) {
            res += `, д. ${house}`
        }

        if (housing) {
            res += `, к. ${housing}`
        }

        if (entrance) {
            res += `, подъезд. ${entrance}`
        }

        if (apartment) {
            res += `, кв. ${apartment}`
        }

        return res
    }, [])

    const coordinates = useMemo(() => {
        if (apartment.location.coordinates) {
            return [Number(apartment.location.coordinates.x), Number(apartment.location.coordinates.y)]
        }
    }, [apartment])

    return (
        <div className={styles.page}>
            <main className={styles.main}>
            <div className={styles.bgprdx}>
            </div>

                <Box marginBottom={'16px'}>
                    <Container>
                        <Grid container spacing={4}>
                            <Grid item md={8}>
                                <Box marginBottom={'32px'}>
                                    <ImgList imgArray={apartment.imageUrls} />
                                </Box>

                                <Box marginBottom={'32px'}>
                                    <Grid container spacing={2}>
                                        <Grid item md={3}>
                                            <div style={{
                                                display: 'flex'
                                            }}>
                                                <div style={{
                                                    width: 'auto',
                                                    display: 'flex',
                                                    alignItems: 'center'
                                                }}>
                                                    <SquareFootIcon style={{width: '32px', height: '32px'}} />
                                                </div>

                                                <div style={{
                                                    flex: 1,
                                                    padding: '4px'
                                                }}>
                                                    <Typography fontSize={'12px'} color="textDisabled">
                                                        Общая площадь
                                                    </Typography>

                                                    <Typography fontSize={'16px'}>
                                                        {apartment.square.total} м²
                                                    </Typography>
                                                </div>
                                            </div>
                                        </Grid>

                                        <Grid item md={3}>
                                            <div style={{
                                                display: 'flex'
                                            }}>
                                                <div style={{
                                                    width: 'auto',
                                                    display: 'flex',
                                                    alignItems: 'center'
                                                }}>
                                                    <ApartmentIcon style={{width: '32px', height: '32px'}}/>
                                                </div>

                                                <div style={{
                                                    flex: 1,
                                                    padding: '4px'
                                                }}>
                                                    <Typography fontSize={'12px'} color="textDisabled">
                                                        Статус дома
                                                    </Typography>

                                                    <Typography fontSize={'16px'}>
                                                        Сдан
                                                    </Typography>
                                                </div>
                                            </div>
                                        </Grid>

                                        <Grid item md={3}>
                                            <div style={{
                                                display: 'flex'
                                            }}>
                                                <div style={{
                                                    width: 'auto',
                                                    display: 'flex',
                                                    alignItems: 'center'
                                                }}>
                                                    <MeetingRoomIcon style={{width: '32px', height: '32px'}}/>
                                                </div>

                                                <div style={{
                                                    flex: 1,
                                                    padding: '4px'
                                                }}>
                                                    <Typography fontSize={'12px'} color="textDisabled">
                                                        Этаж
                                                    </Typography>

                                                    <Typography fontSize={'16px'}>
                                                        6 из 10
                                                    </Typography>
                                                </div>
                                            </div>
                                            
                                        </Grid>

                                        <Grid item md={3}>
                                            <div style={{
                                                display: 'flex'
                                            }}>
                                                <div style={{
                                                    width: 'auto',
                                                    display: 'flex',
                                                    alignItems: 'center'
                                                }}>
                                                    <EventIcon style={{width: '32px', height: '32px'}}/>
                                                </div>

                                                <div style={{
                                                    flex: 1,
                                                    padding: '4px'
                                                }}>
                                                    <Typography fontSize={'12px'} color="textDisabled">
                                                        Год сдачи
                                                    </Typography>

                                                    <Typography fontSize={'16px'}>
                                                        2025
                                                    </Typography>
                                                </div>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Box>

                                <Box marginBottom={'24px'}>
                                    {coordinates && <MapBlock center={coordinates} marks={[{ defaultGeometry: coordinates }]} />}
                                </Box>

                                <Typography marginBottom={'24px'}>
                                    {apartment.description}
                                </Typography>

                                <Box>
                                    <Typography
                                        className={styles.apartmentTitle}
                                        fontSize={'26px'} 
                                        fontWeight={'bold'}
                                        marginBottom={'24px'}
                                    >
                                        Другие квартиры для вас
                                    </Typography>

                                    <ApartmentsList 
                                        variant="list" 
                                        total={appartnetsData.total} 
                                        items={appartnetsData.items} 
                                    />
                                </Box>
                            </Grid>

                            <Grid item md={4} position={'relative'} minHeight={'100%'}>
                                <div style={{position: 'relative', height: '100%'}}>
                                    <div style={{position: 'sticky', top: 0}}>
                                        <Box 
                                            boxShadow={'0 2px 16px rgba(0, 0, 0, .08)'} 
                                            borderRadius={'8px'} 
                                            padding={'16px'}
                                        >
                                            <Typography 
                                                fontSize={'32px'} 
                                                fontWeight={'bold'}
                                                marginBottom={'8px'}
                                            >
                                                {`${spaceDigits(apartment.price)} ₽`}
                                            </Typography>

                                            <Typography 
                                                color='textDisabled'
                                                fontSize={'18px'}
                                                marginBottom={'18px'}
                                            >
                                                {`${spaceDigits(apartment.price / apartment.square.total)} ₽/м²`}
                                            </Typography>

                                            <Typography>
                                                {getAddress(apartment.location)}
                                            </Typography>
                                        </Box>
                                    </div>
                                </div>
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
