import React from 'react'

const CommentsArea = (props) => (
    const getApi = async() => {
        try {
            const response = await fetch ("https://striveschool-api.herokuapp.com/api/comments/", {
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjMzNTY4OGUzZGQ5MDAwMTUzNDg0NWYiLCJpYXQiOjE2NDc1MzE2NTYsImV4cCI6MTY0ODc0MTI1Nn0.Ug40MicRniHKKawPN9b_C3yKPTheY7P7HL9c1rUjs6c"
                },
            });
            if (response.ok) {
                let data = await response.json();
            } else {
                <Alert variant="danger">An error has occurred!</Alert>
            }

        } catch (error) {
            console.log(error);
        }
        
    }
)