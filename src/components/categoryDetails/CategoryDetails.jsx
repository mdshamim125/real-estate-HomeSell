import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryDetails = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <h1>this is details page {data.id}</h1>
        </div>
    );
};

export default CategoryDetails;