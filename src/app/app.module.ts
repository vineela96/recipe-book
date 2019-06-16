import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';

import { HomeComponent } from './home/home.component';
import { AuthComponent } from './basic/auth/auth.component';
import { FooterComponent } from './basic/footer/footer.component';
import { NavigatorComponent } from './basic/navigator/navigator.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeManagementComponent } from './recipes/recipe-management/recipe-management.component';
import { UserRecipeListComponent } from './recipes/user-recipe-list/user-recipe-list.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, DashboardComponent, HomeComponent, AuthComponent, FooterComponent, NavigatorComponent, RecipeDetailComponent, RecipeManagementComponent, UserRecipeListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AuthService, AuthGuardService]
})
export class AppModule { }
