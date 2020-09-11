import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { QuillModule } from 'ngx-quill';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { NgToolsModule } from '@finlex/ng-tools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import Counter from './counter';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // QuillModule.forRoot({
    //   customModules: [{
    //     implementation: Counter,
    //     path: 'modules/counter'
    //   }],
    //   customOptions: [{
    //     import: 'formats/font',
    //     whitelist: ['mirza', 'roboto', 'aref', 'serif', 'sansserif', 'monospace']
    //   }]
    // }),
    TranslateModule.forRoot(),
    NgToolsModule,
    MDBBootstrapModulesPro.forRoot()
  ],
  providers: [
    TranslateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
