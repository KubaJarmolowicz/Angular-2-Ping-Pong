import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { PingComponent } from "./ping/ping.component";
import { PongComponent } from "./pong/pong.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, PingComponent, PongComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
