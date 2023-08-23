import { Component, Element, Host, Prop, State, Watch, forceUpdate, h } from '@stencil/core';
import { RGB } from '../../utils/interfaces';
import { HTMLClasses } from './resources';

@Component({
  tag: 'color-swatch',
  styleUrl: 'color-swatch.scss',
  shadow: true,
})
export class ColorSwatch {

  @Element() hostElement: HTMLColorSwatchElement;

  @Prop({reflect: true}) label?: string;

  @Prop() value: RGB = { red: 0, green: 0, blue: 0 };

  @State() convertedColor = "#000000";

  @Watch("value")
  onValueChange(newValue: RGB) {
    const convertedColor = `#${(newValue.red*255).toString(16).slice(0,2)}${(newValue.green*255).toString(16).slice(0,2)}${(newValue.blue*255).toString(16).slice(0,2)}`;
    this.convertedColor = convertedColor;
    forceUpdate(this.hostElement);
  }

  render() {
    return (
      <Host>
        <div
          style={{background: this.convertedColor}}
          class={HTMLClasses.colorSwatch}
        ></div>
        <h1 class={HTMLClasses.colorSwatch}>{this.convertedColor}</h1>
      </Host>
    );
  }
}