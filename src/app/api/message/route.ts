import { chatbotPrompt } from "@/app/helpers/constants/chatbotPrompt";
import { ChatGPTMessage, OpenAiStream, OpenAiStreamPayload } from "@/lib/openai-stream";
import { MessagesArraySchema } from "@/lib/validators/message";

export async function POST(request: Request) {
    const { messages } = await request.json();
    const parseMessage = MessagesArraySchema.parse(messages);

    // throw new Error("Test error");

    const outboundMessages: ChatGPTMessage[] = parseMessage.map((message) => ({
        role: message.isUserMessage ? "user" : "system",
        content: message.text
    }))

    outboundMessages.unshift({
        role: "system",
        content: chatbotPrompt
    })

    const payload: OpenAiStreamPayload = {
        model: 'gpt-3.5-turbo',
        messages: outboundMessages,
        temperature: 0.4,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        max_tokens: 150,
        stream: true,
        n: 1
    }

    const stream = await OpenAiStream(payload);
    // console.log("stream" +stream);
    

    return new Response(stream);
}