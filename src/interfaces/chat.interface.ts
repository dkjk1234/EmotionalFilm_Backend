export interface Message {
    role: MessageRole
    content: string
}

export type MessageRole = 'user' | 'system' | 'assistant'