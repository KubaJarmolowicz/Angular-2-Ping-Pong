import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-pong",
  templateUrl: "./pong.component.html"
})
export class PongComponent {
  @Input() isPingNext: boolean;

  @Output() requestPlayPong = new EventEmitter<boolean>();

  signalPongToPlay() {
    this.requestPlayPong.emit(this.isPingNext);
  }
}
