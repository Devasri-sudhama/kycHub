import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { KnowMoreComponent } from './components/know-more/know-more.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { SearchAdverseMediaComponent } from './components/search-adverse-media/search-adverse-media.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { PerformSearchComponent } from './components/perform-search/perform-search.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AmlService } from './aml.service';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    KnowMoreComponent,
    CreateProfileComponent,
    SearchAdverseMediaComponent,
    SearchResultsComponent,
    PerformSearchComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AmlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
