import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// import { QuillModule } from 'ngx-quill';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { NgToolsModule } from '@finlex/ng-tools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TutorialModalComponent } from './modals/tutorial-modal/tutorial-modal.component';
import { AddNewQuestionModalComponent } from './modals/add-new-question-modal/add-new-question-modal.component';
import { Questionnairev2Component } from './components/questionnairev2/questionnairev2.component';
import { CreateQuestionnaireComponent } from './components/create-questionnaire/create-questionnaire.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TutorialModalComponent,
    AddNewQuestionModalComponent,
    Questionnairev2Component,
    CreateQuestionnaireComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
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
