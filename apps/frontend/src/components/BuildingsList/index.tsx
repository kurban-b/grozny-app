import styles from './styles.module.css'
import {Grid, Typography} from "@mui/material";
import {FC, useCallback} from "react";
import Link from 'next/link';

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
    }
}

interface IBuildingsListProps {
    items: Array<{
        id: number; 
        name: string;
        status: string; 
        finishDate: string;
        description: string;
        imageUrls?: string[];
        location: ILocation
        developer: {
            id: number
            name: string
        }
    }>
    total: number;
}

const BuildingsList: FC<IBuildingsListProps> = (props) => {
    const { items, total } = props

    const getStatusText = useCallback((status: string) => {
        switch (status) {
            case "done":
                return "Сдан";
            case "inProcess":
                return "Строится";
            default:
                return null
        }
    }, [])

    const getAddress = useCallback((location: ILocation) => {
        let res = ``

        const {city, district, street, house} = location.address

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

        return res
    }, [])

    return (
        <ul className={styles.buildingsList}>
            {items.map((item) => (
                <li key={item.id} style={{listStyle: 'none'}}>
                    <div className={styles.building}>
                        <Grid container spacing={'16px'}>
                            <Grid item md={4}>
                                {item.imageUrls && (
                                    <img className={styles.buildingImg} src={item.imageUrls[0]} alt='' />
                                )}
                            </Grid>

                            <Grid item md={8}>
                                <Link href={`/buildings/${item.id}`}>
                                    <Typography 
                                        className={styles.apartmentTitle}
                                        variant={'h2'} 
                                        fontSize={'24px'} 
                                        fontWeight={'bold'}
                                        marginBottom={'8px'}
                                    >
                                        {item.name}
                                    </Typography>
                                </Link>

                                <Typography fontSize={'16px'} marginBottom={'8px'}>
                                    <span style={{color: 'rgba(0,0,0, 0.5)'}}>
                                        {`Статус: `}
                                    </span>

                                    <span>
                                        {getStatusText(item.status)}
                                    </span>
                                </Typography>

                                <Typography fontSize={'16px'} marginBottom={'8px'}>
                                    <span style={{color: 'rgba(0,0,0, 0.5)'}}>
                                        {`Адрес: `}
                                    </span>

                                    <span>
                                        {getAddress(item.location)}
                                    </span>
                                </Typography>

                                <Typography fontSize={'16px'} marginBottom={'8px'}>
                                    <span style={{color: 'rgba(0,0,0, 0.5)'}}>
                                        {`Застройщик: `}
                                    </span>

                                    <span style={{color: '#1976d2'}}>
                                        <Link href={`/developers/${item.developer.id}`}>
                                            {item.developer.name}
                                        </Link>
                                    </span>
                                </Typography>

                                <Link href={`/buildings/${item.id}`}>
                                    
                                </Link>

                                <Typography fontSize={'14px'} color='textDisabled'>
                                    {item.description.slice(0, 290)}...
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default BuildingsList