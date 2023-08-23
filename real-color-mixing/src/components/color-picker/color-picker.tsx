import { Component, Host, Prop, h, Event, EventEmitter } from '@stencil/core';
import { RGB, RGBEvent } from '../../utils/interfaces';

@Component({
  tag: 'color-picker',
  styleUrl: 'color-picker.scss',
  shadow: true,
})
export class ColorPicker {

  private colorPickerReference?: HTMLInputElement;

  @Prop({reflect: true}) label?: string;

  @Prop() value: RGB = { red: 0, green: 0, blue: 0 };

  @Prop({reflect: true}) uniqueId: string;

  @Event({
    cancelable: true,
    bubbles: true,
    composed: true
  }) colorPickerValueChange: EventEmitter<RGBEvent>;

  private onColorPickerChange = () => {
    const selectedValue = (this.colorPickerReference.value as string).replace("#", "");
    this.value = {
      red: parseInt(selectedValue.slice(0, 2), 16),
      green: parseInt(selectedValue.slice(2, 4), 16),
      blue: parseInt(selectedValue.slice(4, 6), 16)
    };
    this.colorPickerValueChange.emit({ rgb: this.value, id: this.uniqueId });
  }

  /**
   * Renders the home page and subsequent components
   * @category Private
   * @returns {VNode} the rendered page
   */
  render() {
    return (
      <Host>
        <input 
          ref={(el) => this.colorPickerReference = el} 
          type="color"
          name={this.label} 
          id={this.uniqueId}
          value="#000000"
          onChange={this.onColorPickerChange}
        />  
        <h1>{`#${(this.value.red*255).toString(16).slice(0,2)}${(this.value.green*255).toString(16).slice(0,2)}${(this.value.blue*255).toString(16).slice(0,2)}`}</h1>        
      </Host>
    );
  }
}