import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { HomeComponent } from './pages/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children:[
            {
                path:':id',
                component:ContactDetailsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }