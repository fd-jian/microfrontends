import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [AppComponent],
  imports: [
    BrowserModule
  ],
  providers: []
})
export class AppModule {

  constructor(private injector: Injector) {}

  ngDoBootstrap() {

    const CAMPAIGN_APP = 'campaign-app';
    const customElement = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define(CAMPAIGN_APP, customElement);

    if (window.createMount) {
      window.createMount('Campaign', CAMPAIGN_APP);
    }
  }
}
