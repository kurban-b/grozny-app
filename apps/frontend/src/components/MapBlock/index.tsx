'use client'
import { Box } from "@mui/material"
import { Map, Placemark, YMaps, ZoomControl } from "@pbe/react-yandex-maps";

interface IMapBlock {
    center: number[]
    marks: Array<{
        defaultGeometry: number[]
    }>
}

const MapBlock: React.FC<IMapBlock> = ({center, marks}) => {
    return (
        <Box>
            <YMaps
                query={{ 
                    lang: 'en_RU' 
                    }}
            >
                <Map
                    width={'100%'} 
                    height={400}
                    defaultState={{ 
                        center: center, 
                        zoom: 13
                    }}
                >
                    <ZoomControl options={{ position: {bottom: '40px', left: '8px'} }} />

                    {marks.map((item, key) => {
                        return (
                            <Placemark
                                key={key}
                                onClick={() => {
                                    alert("Вы нажали метку ");
                                }}
                                defaultGeometry={item.defaultGeometry}
                                options={{
                                    iconImageSize: [10, 10]
                                }}
                            />
                        )
                    })}                     
                </Map>
            </YMaps>
        </Box>
    )
}

export default MapBlock