import mongoose from 'mongoose';
import { MONGODB_URI } from '$env/static/private';

let cachedDb: typeof mongoose | null = null;

export const connect = async () => {
	if (cachedDb) {
		return cachedDb;
	}

	if (!MONGODB_URI) {
		throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
	}

	const db = await mongoose.connect(MONGODB_URI);
	cachedDb = db;
	return db;
};
