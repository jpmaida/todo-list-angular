import { FormsModule } from '@angular/forms';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewTodoDialogComponent } from './new-todo-dialog/new-todo-dialog.component';
import { AppConfigService } from './services/app-config.service';
import { TodoApiService } from './services/todo-api.service';

export function initConfig (appConfig: AppConfigService) {
  return appConfig.loadConfig()
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewTodoDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    deps: [AppConfigService, TodoApiService],
    multi: true,
    useFactory: (
      appConfigSvc: AppConfigService,
      todoApiService: TodoApiService
    ) => {
      return async () => {
        const config = await appConfigSvc.loadConfig();
        return await todoApiService.loadConfig(config);
      }
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
