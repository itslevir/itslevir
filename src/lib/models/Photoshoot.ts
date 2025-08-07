import mongoose from 'mongoose';

const photoshootSchema = new mongoose.Schema({
	_id: { type: String, required: true },
	email: { type: String, required: true },
	name: { type: String, required: true },
	taken: { type: Date, required: true },
	location: { type: String, required: true },
	delivery: { type: Array, required: true }
});

export const Photoshoot =
	mongoose.models.Photoshoot || mongoose.model('Photoshoot', photoshootSchema);

export type PhotoshootType = {
	_id: string;
	email: string;
	name: string;
	taken: Date;
	location: string;
	delivery: Array<string>;
};
