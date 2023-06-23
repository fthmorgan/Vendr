import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";
import { Snack } from "../models/Snack.js";

function _drawSnacks() {
  const snacks = AppState.snacks

  let template = ''

  snacks.forEach(snack => template += snack.SnackTemplate)

  setHTML('snackCatalog', Snack.SnackTemplate)
}

export class SnacksController {
  constructor() {
    console.log(AppState.snacks);
    _drawSnacks()

  }

}

