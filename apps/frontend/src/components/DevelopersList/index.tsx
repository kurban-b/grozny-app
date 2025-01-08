import { Box, Grid, Typography } from '@mui/material'
import Link from 'next/link';
import React from 'react'
import styles from './styles.module.css'

interface IDevelopersListProps {
    items: {
        id: number
        name: string,
        imgUrl: string | null
        description: string
    }[];
    total: number;
}

const DevelopersList: React.FC<IDevelopersListProps> = (props) => {
    const {items, total} = props

    return (
        <Grid container spacing={2}>
            {items.map((item) => {
                return (
                    <Grid key={item.id} item md={2}>
                        <Link href={`/buildings/${item.id}`}>
                            <div className={styles.developer}>
                                <div className={styles.developerImgBlock}>
                                    {item.imgUrl && <img className={styles.developerImg} src={item.imgUrl} alt={item.name} />}
                                </div>
                                
                                <Typography 
                                    color="primary"
                                    variant={'h3'} 
                                    fontSize={'18px'} 
                                    marginBottom={'8px'}
                                >
                                        {item.name}
                                </Typography>            
                            </div>
                        </Link>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default DevelopersList;