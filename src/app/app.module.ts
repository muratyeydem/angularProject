import { HttpClientModule } from '@angular/common/http'; // İçe aktarım
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar'; // İçe aktarım
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CrewDetailComponent } from './crew-detail/crew-detail.component';
import { AddCrewModalComponent } from './add-crew-modal/add-crew-modal.component';
import { AddCrewDialogComponent } from './add-crew-modal/add-crew-dialog/add-crew-dialog.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient } from '@angular/common/http'; // İçe aktarım

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CrewDetailComponent,
    AddCrewModalComponent,
    AddCrewDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Burada içe aktarım
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient], // Bağımlılıklar
      },
    }),
    AppRoutingModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'en' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
