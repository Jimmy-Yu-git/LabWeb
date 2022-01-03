import React, { useState, useCallback } from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { lighten, makeStyles } from '@material-ui/core/styles';


const Photo = () => {
    const [currentImage, setCurrentImage] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [page, setPage] = React.useState(1);
    const images = [
        'http://placeimg.com/1200/800/nature',
        "https://i.ibb.co/nPcy5H7/S-86638597.jpg",
        'https://i.ibb.co/3NkXv8P/LINE-ALBUM-202213-220103-0.jpg',
        'https://i.ibb.co/JmjgBXW/LINE-ALBUM-202213-220103-1.jpg',
        'https://i.ibb.co/R67nZkm/LINE-ALBUM-202213-220103-2.jpg',
        "https://i.ibb.co/KrF8f6C/image.jpg",

    ];
    const active = [
        "",
        'Xmas party',
        "Year-End Party",
        'Year-End Party',
        'Year-End Party',
        'Year-End Party',

    ];
    const handleChange = (event, value) => {
        setPage(value);
        console.log(value)
        // setCurrentImage(images[page])
        console.log(images[0])
        console.log(currentImage)
    };
    console.log(loaded)
    return (
        <section id="Activity">
            <div class="projects container">
                <div class="projects-header">
                    <h1 class="section-title"> Activities <span></span></h1>
                </div>
                <div class="projects-header">
                    <h2 class="section-title">{active[`${page}`]}</h2>
                </div>
                <div class="all-Photo">
                    <div class="project-item">
                        <div class="Photo-img">
                            {loaded ? null :
                                <div
                                    style={{
                                        background: 'red',
                                        height: '400px',
                                        width: '400px',
                                    }}
                                />
                            }
                            <img style={loaded ? {} : { display: 'none' }}
                                src={images[`${page}`]}
                                onLoad={() => setLoaded(true)}
                                alt="img" />
                        </div>
                    </div>
                </div>
                <div class="page">
                    <Stack spacing={2} >
                        {/* <Typography>Page: {page}</Typography> */}
                        <Pagination size="large" variant="outlined" count={10} page={page} onChange={handleChange} />
                    </Stack>
                </div>
            </div>
        </section>
    )
}
export default Photo