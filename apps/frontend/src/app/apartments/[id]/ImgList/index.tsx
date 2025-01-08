'use client'
import { useState } from 'react'
import { Box, ImageList, ImageListItem } from "@mui/material"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from './page.module.css'

interface IImgListProps {
    imgArray: string[]
}

const ImgList: React.FC<IImgListProps> = ({imgArray}) => {
    const [activeImgIndex, setActiveImgIndex] = useState(0)

    return (
        <Box>
            <div className={styles.imgBlock}>
                <div className={styles.imgBlockLeft} onClick={() => {
                    if (activeImgIndex === 0) {
                        setActiveImgIndex(imgArray.length - 1)
                    } else {
                        setActiveImgIndex(prev => prev - 1)
                    }
                }}>
                    <ArrowBackIosNewIcon />
                </div>

                <img
                    style={{
                        width: '100%',
                        height: '450px',
                        objectFit: 'cover'
                    }}
                    src={imgArray[activeImgIndex]}
                    alt={''}
                    loading="lazy"
                />

                <div className={styles.imgBlockRight} onClick={() => {
                    if (imgArray.length - 1 === activeImgIndex) {
                        setActiveImgIndex(0)
                    } else {
                        setActiveImgIndex(prev => prev + 1)
                    }
                }}>
                    <ArrowForwardIosIcon />
                </div>
            </div>
                                    
            <ImageList
                sx={{ width: '100%' }}
                variant="quilted"
                cols={4}
                rowHeight={121}
                >
                {imgArray.map((item, key) => (
                    <ImageListItem key={key} cols={1} rows={1}>
                        <img
                            src={item}
                            alt={''}
                            loading="lazy"
                            style={{
                                cursor: 'pointer'
                            }}
                            onClick={() => {
                                setActiveImgIndex(key)
                            }}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    )
}

export default ImgList