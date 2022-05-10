export interface FeedbackCreateData {
    type: string
    comment: string
    screenshot?: string
    createdAt: string
}

export interface FeedbacksRepository {
    create: (data: FeedbackCreateData) => Promise<void>;
}