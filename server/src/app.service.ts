import { Injectable } from "@nestjs/common"
import axios from "axios"

@Injectable()
export class AppService {
  getMessage(message: string) {
    axios.post()
  }
}
