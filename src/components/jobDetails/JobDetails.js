import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const JobDetails = () => {
    // get id from url query params
    const location = useLocation();
    const id = new URLSearchParams(location.search).get('id');
    // console.log(id);
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => {
                // find job with the id from query params
                const job = data.find(job => job.id === id);
                setData(job);
            })
    }, [id]);

    console.log(data);
    return (
        <div className='py-10'>
            Hello
        </div>
    );
};

export default JobDetails;