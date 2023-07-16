import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { Service } from 'typedi';
import { SECRET_KEY, OPENAI_API_KEY } from '@config';
import { Configuration, OpenAIApi } from "openai"
import { Message } from '@/interfaces/chat.interface';
import { ChatDto } from '@/dtos/index.dto';
import { HttpException } from '@/exceptions/httpException';

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

@Service()
export class IndexService {
  private openai = new OpenAIApi(configuration)
  private users = new Map<string, Message[]>()

  public async index(): Promise<string> {
    return "test"
  }

  public async chat(body: ChatDto): Promise<string> {
    try {
      const chatCompletion = await this.openai.createChatCompletion({
        model: body.model || "gpt-3.5-turbo-16k",
        messages: body.messages,
        temperature: body.temperature || 1,
        max_tokens: body.max_tokens || 150,
        top_p: body.top_p || 1,
        presence_penalty: body.presence_penalty || 0,
        frequency_penalty: body.frequency_penalty || 0,
      });
      return chatCompletion.data.choices[0].message.content
    } catch (e) {
      if(e instanceof HttpException) throw e
      throw new HttpException(500, "OPEN AI 서버와 통신을 실패했습니다.")
    }    
  }
}
