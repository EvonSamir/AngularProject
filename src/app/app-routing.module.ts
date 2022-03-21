import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CladdingComponent } from './cladding/cladding.component';
import { DigitalPrintingComponent } from './digital-printing/digital-printing.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { InOutPrintingComponent } from './in-out-printing/in-out-printing.component';
import { LazerComponent } from './lazer/lazer.component';
import { OffsetComponent } from './offset/offset.component';
import { PreviousWorkComponent } from './previous-work/previous-work.component';
import { ReactiveFormComponentComponent } from './reactive-form-component/reactive-form-component.component';
import { SilkScreenComponent } from './silk-screen/silk-screen.component';
import { SumblimationComponent } from './sumblimation/sumblimation.component';
import { UvComponent } from './uv/uv.component';


const routes: Routes = [
{path:"",component:HomeComponent},
{path:"home",component:HomeComponent},
{path:"clading",component:CladdingComponent},
{path:"digital",component:DigitalPrintingComponent},
{path:"inout",component:InOutPrintingComponent},
{path:"lazer",component:LazerComponent},
{path:"offset",component:OffsetComponent},
{path:"silk",component:SilkScreenComponent},
{path:"sumblimation",component:SumblimationComponent},
{path:"uv",component:UvComponent},
{path:"ContactUs",component:ReactiveFormComponentComponent},



{path:"**",component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
