import { User } from "./user-model";

export interface Chat {
	id: number;
	title: string;
	avatar: string;
	unread_count: number;
	created_by: number;
	last_message: {
		user: User,
		time: Date;
		content: string;
	}
}
