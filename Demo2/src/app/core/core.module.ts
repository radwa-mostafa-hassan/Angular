import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BodyComponent } from './body/body.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    BodyComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[NavbarComponent,
    FooterComponent,
    SidebarComponent,
    BodyComponent]
})
export class CoreModule { }
