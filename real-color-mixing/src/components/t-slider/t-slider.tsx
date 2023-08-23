import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 't-slider',
  styleUrl: 't-slider.scss',
  shadow: true,
})
export class TSlider {

  private tSliderReference?: HTMLInputElement;

  @Prop() value: string = "3";

  @Prop({reflect: true}) uniqueId: string;
  
  @Prop({reflect: true}) label?: string;

  @Event({
    cancelable: true,
    bubbles: true,
    composed: true
  }) sliderValueChange: EventEmitter<number>;

  private tSliderChange() {
    console.log(this.tSliderReference);
    this.value = this.tSliderReference.value;
    console.log(this.value);
    this.sliderValueChange.emit(parseInt(this.value));
  }

  render() {
    return (
      <Host>
        <input 
          ref={(el) => this.tSliderReference = el} 
          type="range"
          name={this.label} 
          id={this.uniqueId}
          min="1"
          max="10"
          onChange={this.tSliderChange}
        />
        <h1>{this.value}</h1>
      </Host>
    );
  }
}