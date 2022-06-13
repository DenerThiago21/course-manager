import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Erro404Component } from "./erro-404/erro-404.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@NgModule({
 declarations: [
  NavBarComponent,
  Erro404Component
 ],  imports: [
  RouterModule.forChild([
    {
      path: "**", component: Erro404Component
    }
  ])
 ],  exports: [
  NavBarComponent
 ]
})
export class CoreModule {

}
