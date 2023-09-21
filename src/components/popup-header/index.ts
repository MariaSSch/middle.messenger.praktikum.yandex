import Block from "../../js/block";
import template from "./popup-header.pug";

export class PopupHeader extends Block {
  constructor() {
    super();
  }

  render() {
    return this.compile(template, this.props);
  }
}
