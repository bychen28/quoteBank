import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { AppComponent } from './app.component'
import { ViewQuoteComponent } from './view-quote/view-quote.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
const routes: Routes = [
  {path: 'all', component: AllComponent },
  {path: 'new',component: NewComponent },
  {path: 'edit', component: EditComponent},
  {path:'viewQuote/:id', component: ViewQuoteComponent},
  {path:'write/:id', component: NewQuoteComponent},
  // { path: '', pathMatch: 'full', redirectTo: '/new' }
  {path: '**', component: AllComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
