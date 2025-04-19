'use client'

import styles from './styles.module.css'
import data from '../../apartments.json'
import {Divider, Grid, ToggleButton, ToggleButtonGroup, Typography} from "@mui/material";
import {FC, useCallback, useState} from "react";
import Link from 'next/link';
import { spaceDigits } from '../../utils/numbers/spaceDigits';
import ListIcon from '@mui/icons-material/List';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';

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

interface IApartmentsListProps {
    items: Array<{
        id: number;
        description: string;
        imageUrls: string[];
        price: number;
        square: {
            total: number;
            living: number;
        };
        storey: number;
        rooms: number;
        location: ILocation
    }>
    total: number;
    variant?: 'list' | 'cols'
}

const ApartmentsList: FC<IApartmentsListProps> = (props) => {
    const { items, variant } = props
    const [alignment, setAlignment] = useState<string | null>(variant || 'cols');

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
    ) => {
        setAlignment(newAlignment);
    };


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

    return (
        <div>
            {!variant && (
                <div className={styles.buttonGroup}>
                    <ToggleButtonGroup
                        color="primary"
                        value={alignment}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="text alignment"
                        size='small'
                    >
                        <ToggleButton value="cols" aria-label="left aligned">
                            <ViewColumnIcon />
                        </ToggleButton>
                        <ToggleButton value="list" aria-label="centered">
                            <ListIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </div>
            )}
        
            {alignment === 'list' ? (
                <ul className={styles.apartmentsList}>
                    {items.map((item) => (
                        <li key={item.id} style={{listStyle: 'none'}}>
                            <div className={styles.apartment}>
                                <Grid container spacing={'16px'}>
                                    <Grid item md={4}>
                                        <img className={styles.apartmentImg} src={item.imageUrls[0]} alt='' />
                                    </Grid>

                                    <Grid item md={8}>
                                        <Link href={`/apartments/${item.id}`}>
                                            <Typography 
                                                className={styles.apartmentTitle}
                                                variant={'h2'} 
                                                fontSize={'24px'} 
                                                fontWeight={'bold'}
                                                marginBottom={'8px'}
                                            >
                                                {`${item.rooms} комн. квартира, ${item.square.total} м², ${item.storey} этаж`}
                                            </Typography>
                                        </Link>

                                        <Typography fontSize={'16px'} marginBottom={'8px'} color="rgba(0,0,0, 0.5)">
                                            <span>
                                                {getAddress(item.location)}
                                            </span>
                                        </Typography>

                                        <Typography 
                                            variant={'h3'} 
                                            fontSize={'22px'} 
                                            fontWeight={'bold'}
                                            marginBottom={'8px'}
                                        >
                                            {`${spaceDigits(item.price)} ₽`}
                                        </Typography>

                                        <Typography 
                                            variant={'h3'} 
                                            color='textDisabled'
                                            fontSize={'16px'}
                                            marginBottom={'8px'}
                                        >
                                            {`${spaceDigits(item.price / item.square.total)} ₽/м²`}
                                        </Typography>

                                        <Typography fontSize={'12px'} color='textDisabled'>
                                            {item.description.slice(0, 320)}...
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <Grid container spacing={2}>
                    {items.map((item) => (
                        <Grid item md={4} key={item.id}>
                            <Grid container spacing={'16px'}>
                                    <Grid item>
                                        <img className={styles.apartmentImg} src={item.imageUrls[0]} alt='' />
                                    </Grid>

                                    <Grid item>
                                        <Link href={`/apartments/${item.id}`}>
                                            <Typography 
                                                className={styles.apartmentTitle}
                                                variant={'h2'} 
                                                fontSize={'24px'} 
                                                fontWeight={'bold'}
                                                marginBottom={'8px'}
                                            >
                                                {`${item.rooms} комн. квартира, ${item.square.total} м², ${item.storey} этаж`}
                                            </Typography>
                                        </Link>

                                        <Typography fontSize={'16px'} marginBottom={'8px'} color="rgba(0,0,0, 0.5)">
                                            <span>
                                                {getAddress(item.location)}
                                            </span>
                                        </Typography>

                                        <Typography 
                                            variant={'h3'} 
                                            fontSize={'22px'} 
                                            fontWeight={'bold'}
                                            marginBottom={'8px'}
                                        >
                                            {`${spaceDigits(item.price)} ₽`}
                                        </Typography>

                                        <Typography 
                                            variant={'h3'} 
                                            color='textDisabled'
                                            fontSize={'16px'}
                                            marginBottom={'8px'}
                                        >
                                            {`${spaceDigits(item.price / item.square.total)} ₽/м²`}
                                        </Typography>

                                        <Typography fontSize={'12px'} color='textDisabled'>
                                            {item.description.slice(0, 320)}...
                                        </Typography>
                                    </Grid>
                                </Grid>
                        </Grid>
                    ))}
                </Grid>
            )}
        </div>
    )
}

export default ApartmentsList