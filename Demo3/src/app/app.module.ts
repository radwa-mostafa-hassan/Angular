import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PowerToxPipe } from './power-tox.pipe';
import { PipeComponent } from './pipe/pipe.component';
import { ArraySplicePipe } from './array-splice.pipe';
import { StringConvertPipe } from './string-convert.pipe';
import { SharedModule } from './shared/shared.module';
import { PrimComponent } from './prim/prim.component';
import { ProductModule } from "./product/product.module";

@NgModule({
  declarations: [
    AppComponent,
    PowerToxPipe,
    PipeComponent,
    ArraySplicePipe,
    StringConvertPipe,
    PrimComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
