import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { IntroComponent } from './intro/intro.component';
import { PreviousWorkComponent } from './previous-work/previous-work.component';
import { OffsetComponent } from './offset/offset.component';
import { HttpClientModule } from '@angular/common/http';
import { CladdingComponent } from './cladding/cladding.component';
import { DigitalPrintingComponent } from './digital-printing/digital-printing.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { InOutPrintingComponent } from './in-out-printing/in-out-printing.component';
import { LazerComponent } from './lazer/lazer.component';
import { SilkScreenComponent } from './silk-screen/silk-screen.component';
import { SumblimationComponent } from './sumblimation/sumblimation.component';
import { UvComponent } from './uv/uv.component';
import { ReactiveFormComponentComponent } from './reactive-form-component/reactive-form-component.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardsComponent,
    FooterComponent,
    SliderComponent,
    IntroComponent,
    PreviousWorkComponent,
    OffsetComponent,
    CladdingComponent,
    DigitalPrintingComponent,
    ErrorComponent,
    HomeComponent,
    InOutPrintingComponent,
    LazerComponent,
    SilkScreenComponent,
    SumblimationComponent,
    UvComponent,
    ReactiveFormComponentComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
