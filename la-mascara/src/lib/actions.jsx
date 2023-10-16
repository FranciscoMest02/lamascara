"use server"

import { NextResponse } from "next/server";

export async function updateUser(data){
    const id= data.id
    const name = data.name
    const mask1 = data.mask1
    const mask2 = data.mask2

    const dataToUpdate = {
        name: name,
        mask1: mask1,
        mask2: mask2,
    };

    try {
        const host = process.env.NODE_ENV == 'production' ? 'https://lamascara.vercel.app/' : 'http://localhost:3000/'
        const response = await fetch(host + 'api/participantes/' + id, {
            method: 'PUT', // Specify the PUT method
            headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
            },
            body: JSON.stringify(dataToUpdate), // Convert the data to JSON and send it in the body
        });
    
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    
        const updatedData = await response.json();

        return {status: 200}
    
        // Handle the updated data from the API here
        //console.log(updatedData);
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('Fetch error:', error);
    }
}


export async function createUser(data) {
    const name = data.name
    const mask1 = data.mask1
    const mask2 = data.mask2

    const dataCreation = {
        name: name,
        mask1: mask1,
        mask2: mask2,
    };

    try {
        const host = process.env.NODE_ENV == 'production' ? 'https://lamascara.vercel.app/' : 'http://localhost:3000/'
        const response = await fetch(host + 'api/participantes', {
            method: 'POST', // Specify the PUT method
            headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
            },
            body: JSON.stringify(dataCreation), // Convert the data to JSON and send it in the body
        });
    
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return {status: 200}
    
        //const updatedData = await response.json();
    
        // Handle the updated data from the API here
        //console.log(updatedData);
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('Fetch error:', error);
    }
}

export async function deleteUser(id) {
    try {
        const host = process.env.NODE_ENV == 'production' ? 'https://lamascara.vercel.app/' : 'http://localhost:3000/'
        const response = await fetch(host + 'api/participantes/' + id, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
            },
            body: JSON.stringify({}), // Convert the data to JSON and send it in the body
        });
    
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return {status: 200}
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('Fetch error:', error);
    }
}

export async function updateMasks(status) {
    try {
        const host = process.env.NODE_ENV == 'production' ? 'https://lamascara.vercel.app/' : 'http://localhost:3000/'
        //Mandamos un url con la fecha (cambiante) para que nunca nos haga un cache de la llamada a la api
        const uniqueQueryParam = Date.now();
        const apiUrl = `api/mascaras/` + uniqueQueryParam;
        const response = await fetch(host + apiUrl, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
            },
            body: JSON.stringify(status), // Convert the data to JSON and send it in the body7
        });
        //console.log(response.ok)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    
        return {status: 200}
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('Fetch error:', error);
    }
}