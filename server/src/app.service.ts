import { Injectable } from "@nestjs/common"
const { Configuration, OpenAIApi } = require("openai")

@Injectable()
export class AppService {
  async getMessage(message: string) {
    console.log("message", message)
    const configuration = new Configuration({
      apiKey: "xxx"
    })
    const openai = new OpenAIApi(configuration)

    try {
      const completion = await openai.createCompletion(
        {
          model: "text-davinci-003",
          prompt: message,
          temperature: 0.6,
          max_tokens: 100,
          top_p: 1,
          frequency_penalty: 0.0,
          presence_penalty: 0.0,
          stop: ["\n"]
        },
        {
          timeout: 6000
        }
      )
      console.log(completion.data.choices[0].text)
      return completion.data.choices[0].text
    } catch (error) {
      if (error.response) {
        console.log("status", error.response.status)
        console.log("data", error.response.data)
      } else {
        console.log("message", error.message)
      }
      return error
    }
  }
}
