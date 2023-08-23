import { Component, Host, h, State } from '@stencil/core';
import { HTMLClasses } from './resources';
import { RGB, RGBEvent } from '../../utils/interfaces';
import { kubelkaMunk } from '../../utils/index';

@Component({
  tag: 'home-page',
  styleUrl: 'home-page.scss',
  shadow: true,
})
export class HomePage {

  @State() dominantColor?: RGB;
  
  @State() secondaryColor?: RGB;

  @State() resultColor?: RGB = { red: 0, green: 0, blue: 0 };

  private onColorPickerChange = (event: CustomEvent<RGBEvent>) => {
    const { rgb, id } = event.detail;
    switch(id) {
      case "dominant_color":
        this.dominantColor = rgb;
        break;
      case "secondary_color":
        this.secondaryColor = rgb;
        break;
      default:
        break;
    }
    if (this.dominantColor !== undefined && this.secondaryColor !== undefined) {
      this.resultColor = kubelkaMunk(this.dominantColor, this.secondaryColor);
    }
  }

  render() {
    return (
      <Host>
        <div class={HTMLClasses.inlineContainer}>
          <color-picker
            uniqueId="dominant_color"
            label="Dominant Color"
            onColorPickerValueChange={(e) => this.onColorPickerChange(e)}
          ></color-picker>
          <color-swatch value={this.resultColor}>
          </color-swatch>
          <color-picker
            uniqueId="secondary_color"
            label="Secondary Color"
            onColorPickerValueChange={(e) => this.onColorPickerChange(e)}
          ></color-picker>
        </div>
      </Host>
    );
  }
}