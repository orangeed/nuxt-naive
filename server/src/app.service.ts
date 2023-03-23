import { Injectable } from "@nestjs/common"
// const { Configuration, OpenAIApi } = require("openai")
// import axios from "axios"
@Injectable()
export class AppService {
  async getMessage(message: string) {
    console.log("message", message)
    return ""
    // try {
    //   const data = await axios({
    //     url: "https://api.openai.com/v1/chat/completions",
    //     method: "post",
    //     headers: {
    //       Authorization: "Bearer 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",
    //       "Content-Type": "application/json",
    //       // ":authority": "api.openai.com",
    //       // ":path": "/v1/chat/completions",
    //       // ":scheme": "https",
    //       accept: "application/json, text/plain, */*",
    //       "accept-encoding": "gzip, deflate, br",
    //       "accept-language": "zh-CN,zh;q=0.9",
    //       "content-length": 81,
    //       origin: "http://192.168.124.3:9008",
    //       referer: "http://192.168.124.3:9008/",
    //       "sec-ch-ua": "'Chromium';v='110', 'Not A(Brand';v='24', 'Google Chrome';v='110'",
    //       "sec-ch-ua-mobile": "?0",
    //       "sec-ch-ua-platform": "Windows",
    //       "sec-fetch-dest": "empty",
    //       "sec-fetch-mode": "cors",
    //       "sec-fetch-site": "cross-site",
    //       "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"
    //     },
    //     data: {
    //       model: "gpt-3.5-turbo-0301",
    //       messages: [{ role: "user", content: "你好！" }]
    //     },
    //     timeout: 30000
    //   })
    //   console.log("data", data)
    //   return data
    // } catch (error) {
    //   console.log(error)
    //   return error
    // }
    // const configuration = new Configuration({
    //   apiKey: "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"
    // })
    // const openai = new OpenAIApi(configuration)

    // try {
    //   const completion = await openai.createCompletion(
    //     {
    //       model: "text-davinci-003",
    //       prompt: message,
    //       temperature: 0.6,
    //       max_tokens: 100,
    //       top_p: 1,
    //       frequency_penalty: 0.0,
    //       presence_penalty: 0.0,
    //       stop: ["\n"]
    //     },
    //     {
    //       timeout: 6000
    //     }
    //   )
    //   console.log(completion.data.choices[0].text)
    //   return completion.data.choices[0].text
    // } catch (error) {
    //   if (error.response) {
    //     console.log("status", error.response.status)
    //     console.log("data", error.response.data)
    //   } else {
    //     console.log("message", error.message)
    //   }
    //   return error
    // }
  }
}
