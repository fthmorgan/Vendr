import { AppState } from "../AppState.js";
import { moneyService } from "../services/MoneyService.js";
import { setText } from "../utils/Writer.js";


function _drawMoney() {
  setText('moneyTotal', AppState.money)
}
export class MoneyController {
  constructor() {
    console.log('Money Controller is Working');
    _drawMoney()
    AppState.on('money', _drawMoney)
  }
  addMoney() {
    console.log('The button was clicked');
    moneyService.addMoney()
  }
}