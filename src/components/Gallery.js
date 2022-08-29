import {useContext} from 'react'

import GalleryItem from './GalleryItem'
import { DataContext } from '../context/DataContext'


function Gallery(){
    const data = useContext(DataContext)
    const display = data.map((item) =>{
        return (
            <GalleryItem item={item} key={item.trackId} />
        )
    })
    return (
        <div>
           {display}
        </div>
    )
}

export default Gallery