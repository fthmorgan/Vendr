import { AboutController } from "./controllers/AboutController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { SnacksController } from "./controllers/SnacksController.js";
import { MoneyController } from "./controllers/MoneyController.js";


export const router = [
  {
    path: '',
    controller: [SnacksController, MoneyController],
    view: ''
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]