import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/templates/header/header.component';

/* Importação para o modulo do Toolbar do MaterailDesigner */
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/templates/footer/footer.component';
import { NavComponent } from './components/templates/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { MatCardModule} from '@angular/material/card';
import { ProtocoloCrudComponent } from './views/protocolo-crud/protocolo-crud.component';
import { ProtocoloCreateComponent } from './components/protocolo/protocolo-create/protocolo-create.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProtocoloReadComponent } from './components/protocolo/protocolo-read/protocolo-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ProtocoloUpdateComponent } from './components/protocolo/protocolo-update/protocolo-update.component';
import { ProtocoloDeleteComponent } from './components/protocolo/protocolo-delete/protocolo-delete.component';
import { LoginComponent } from './components/login/login.component';
import { Auth2Service } from './components/login/auth2.service';
import { ProtocoloLoginComponent } from './components/protocolo/protocolo-login/protocolo-login.component';
import { ProtocoloService } from './components/protocolo/protocolo.service';
import { AuthGuard } from './guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProtocoloCrudComponent,
    ProtocoloCreateComponent,
    ProtocoloReadComponent,
    ProtocoloUpdateComponent,
    ProtocoloDeleteComponent,
    LoginComponent,
    ProtocoloLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
    
  ],
  providers: [ProtocoloService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
