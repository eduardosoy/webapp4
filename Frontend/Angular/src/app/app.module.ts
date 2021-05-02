import { GameListComponent } from './adminUpdates/gameList.component';
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
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminUpdatesComponent } from './adminUpdates/adminUpdates.component';
import { DatePipe } from '@angular/common';
import { SuccessPageComponent } from './success-page/success-page.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { SubsButtonComponent } from './subscriptions/subs-button/subs-button.component';
import { NewGameComponent } from './adminUpdates/newGame/newGame.component';
import { EditGameComponent } from './adminUpdates/editGame/editGame.component';


@NgModule({
  declarations: [AppComponent,HeaderComponent,FooterComponent, GamePageComponent, IndexPageComponent,
    GameStatisticsComponent, CreatePostComponent ,ListPostsComponent,  ExpandedPostComponent,
    PostButtonComponent, EditPostComponent, LoginComponent, RegisterComponent, 
    ProfileComponent,AdminUpdatesComponent, SuccessPageComponent,GameListComponent, SubscriptionsComponent, SubsButtonComponent,
    NewGameComponent,EditGameComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, routing],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
