export type Feedback = {
	id: string;
	projectId: string;
	content: string;
	isAnonymous: boolean;
	createdAt: string;
	status: "new" | "reviewed" | "rejected";
};
