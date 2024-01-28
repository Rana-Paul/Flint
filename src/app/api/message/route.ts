import { chatbotPrompt } from "@/app/helpers/constants/chatbotPrompt";
import { ChatGPTMessage } from "@/lib/openai-stream";
import { MessagesArraySchema } from "@/lib/validators/message";

export async function POST(request: Request) {
    const { messages } = await request.json();
    const parseMessage = MessagesArraySchema.parse(messages)

    const outboundMessages: ChatGPTMessage[] = parseMessage.map((message) => ({
        role: message.isUserMessage ? "user" : "system",
        content: message.text
    }))

    outboundMessages.unshift({
        role: "system",
        content: chatbotPrompt
    })
}