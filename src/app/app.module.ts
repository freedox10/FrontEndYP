import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DeleteComponent } from './components/delete/delete.component';
import { EditComponent } from './components/edit/edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkillComponent } from './components/skill/skill.component';
import { ProyectComponent } from './components/proyect/proyect.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CookieService } from "ngx-cookie-service";
import { RegisterComponent } from './components/register/register.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { EditskillComponent } from './components/skill/editskill.component';
import { NewskillComponent } from './components/skill/newskill.component';
import { EditaboutComponent } from './components/about/editabout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    BannerComponent,
    AboutComponent,
    DeleteComponent,
    EditComponent,
    SkillComponent,
    ProyectComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ExperienciaComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EducacionComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditskillComponent,
    NewskillComponent,
    EditaboutComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgCircleProgressModule.forRoot({}),
    routing
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
