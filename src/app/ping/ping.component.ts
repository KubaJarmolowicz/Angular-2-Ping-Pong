import { Component, OnInit, Input } from "@angular/core";
import { DomSanitizer, SafeStyle } from "@angular/platform-browser";

@Component({
  selector: "app-ping",
  templateUrl: "./ping.component.html",
  styleUrls: ["./ping.component.css"]
})
export class PingComponent implements OnInit {
  ballLeft: number = -10;
  ballTop: number = -10;
  @Input() isPingNext: boolean = true;

  constructor(private sanitizer: DomSanitizer) {}

  get currentBallPosition(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(
      `translate(${this.ballLeft}px, ${this.ballTop}px)`
    );
  }

  ngOnInit() {
    this.passBall(-10, -10);
  }

  passBall(top: number, left: number) {
    this.ballLeft = left;
    this.ballTop = top;
  }

  playPing() {
    if (this.isPingNext) {
      this.passBall(randomIntInclusive(160, 290), randomIntInclusive(-10, 190));
      this.isPingNext = !this.isPingNext;
    }
  }

  playPong(signal: boolean) {
    if (!signal) {
      this.passBall(randomIntInclusive(-10, 130), randomIntInclusive(-10, 190));
      this.isPingNext = !this.isPingNext;
    }
  }
}

function randomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);

  const randomizedInt = Math.floor(Math.random() * (max - min + 1) + min);

  return randomizedInt;
}
