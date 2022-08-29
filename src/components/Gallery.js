import {useContext} from 'react'

import GalleryItem from './GalleryItem'


function Gallery(){
    const data = useContext(item,index)
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