import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateQuestionnaireComponent } from './components/create-questionnaire/create-questionnaire.component';
import { HomeComponent } from './components/home/home.component';
import { Questionnairev2Component } from './components/questionnairev2/questionnairev2.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'questionnairev2',
    component: Questionnairev2Component
  },
  {
    path: 'create-questionnaire',
    component: CreateQuestionnaireComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
