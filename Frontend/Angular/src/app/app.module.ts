import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { GamePageComponent } from './game-page/game-page.component';
import { routing } from './app.routing';
import { IndexPageComponent } from './index-page/index-page.component';
import { GameStatisticsComponent } from './game-statistics/game-statistics.component';
import { ListPostsComponent } from './posts/listPosts.component';
import { PostButtonComponent } from './posts/postButton.component';
import { ExpandedPostComponent } from './posts/expandedPost.component';
import { CreatePostComponent } from './posts/createPost.component';
import { EditPostComponent } from './posts/editPost.component';

@NgModule({
  declarations: [AppComponent,HeaderComponent,FooterComponent, GamePageComponent, IndexPageComponent, 
    GameStatisticsComponent, CreatePostComponent ,ListPostsComponent,  ExpandedPostComponent, 
    PostButtonComponent, EditPostComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, routing],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
