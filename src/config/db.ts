import mongoose from 'mongoose';
import dotenv from 'dotenv';

const { config } = dotenv;

config();

export async function connect() {

    try {

        mongoose.connect(process.env.DB_URL!);

        const connection = mongoose.connection;

        connection.on('connected', () => {

            console.log('MongoDB connected successfully');
        })

        connection.on('error', (err: any) => {

            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);

            process.exit();
        })

    } catch (error) {

        console.log('Something goes wrong!');

        console.log(error);

    }


}