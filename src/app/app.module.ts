import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'
import { LocationStrategy, HashLocationStrategy } from '@angular/common'

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

import { WpService } from './wp.service'

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'posts',
        component: PostListComponent
      },
      {
        path: 'posts/:id',
        component: PostDetailComponent
      },
      {
        path: '',
        redirectTo: '/posts',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    WpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
