import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';


//importing components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';

//importing services
import { UserService } from './user.service';

import { AuthguardGuard } from './authguard.guard';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
    {
        path: 'dashboard',
        canActivate: [AuthguardGuard],
        component: DashboardComponent
    },
    {
        path: '',
        component: LoginComponent
    }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
      RouterModule.forRoot(appRoutes),
      BrowserModule,
      HttpClientModule
  ],
  providers: [UserService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
