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

  @State() resultColors?: RGB[] = [{ red: 0, green: 0, blue: 0 }];

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
      this.resultColors = [];
      for (let i = 1; i < 4; i += 1) {
        console.log(kubelkaMunk(this.dominantColor, this.secondaryColor, i * (1/4) ));
        this.resultColors.push(kubelkaMunk(this.dominantColor, this.secondaryColor, i * (1/4) ));
      }
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
          {
            this.resultColors.map((color: RGB) => {
              return (
                <color-swatch value={color}>
                </color-swatch>
              );
            })
          }
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