import Block from "../../js/block";
import template from "./link.pug";

interface LinkProps {
	text: string;
	linkClass: string;
	onClick: () => void;
	events: {
		click: () => void;
	}
}

export class Link extends Block {
  constructor(props: LinkProps) {
    super({
      ...props,
      events: {
        click: props.onClick,
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
