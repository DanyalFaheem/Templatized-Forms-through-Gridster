import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridsterModule } from 'angular-gridster2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutService } from './layout.service';
import { LayoutComponent } from './layout/layout.component';
import { LayoutItemDirective } from './layout-item.directive';
import { InputComponent } from './input/input.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatOptionModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LayoutItemDirective,
    CheckboxComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridsterModule,
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatExpansionModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatExpansionModule

  ],
  providers: [LayoutService],
  bootstrap: [AppComponent],
  entryComponents: [
    InputComponent,
    CheckboxComponent
  ]
})
export class AppModule { }
