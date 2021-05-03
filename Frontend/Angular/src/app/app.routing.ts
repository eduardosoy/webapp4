import { ErrorComponent } from './error/error.component';
import { GameListComponent } from './adminUpdates/gameList.component';
import { Routes, RouterModule } from '@angular/router';
import { GamePageComponent } from './game-page/game-page.component';
import { GameStatisticsComponent } from './game-statistics/game-statistics.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { ListPostsComponent } from './posts/listPosts.component';
import { PostButtonComponent } from './posts/postButton.component';
import { ExpandedPostComponent } from './posts/expandedPost.component';
import { CreatePostComponent } from './posts/createPost.component';
import { EditPostComponent } from './posts/editPost.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminUpdatesComponent } from './adminUpdates/adminUpdates.component';
import { ProfileComponent } from './profile/profile.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { EditGameComponent } from './adminUpdates/editGame/editGame.component';
import { NewGameComponent } from './adminUpdates/newGame/newGame.component';
import { SuccessPageComponent } from './success-page/success-page.component';
import { SubsButtonComponent } from './subscriptions/subs-button/subs-button.component';

const appRoutes = [

    { path: 'games/:id', component: GamePageComponent },
    { path: 'gameList',component: GameListComponent},
    { path: 'index', component: IndexPageComponent },
    { path: 'adminUpdates', component: AdminUpdatesComponent },
    { path: 'editGame/:id', component: EditGameComponent},
    { path: 'newGame', component: NewGameComponent},
    { path: 'statistics/:id', component: GameStatisticsComponent },
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'listPosts/types',component:ListPostsComponent},
    { path: 'listPosts/:id',component:ExpandedPostComponent},
    { path: 'newPost/:id',component:CreatePostComponent},
    { path: 'editPost/:id',component:EditPostComponent},
    { path: 'login',component:LoginComponent},
    { path: 'register',component:RegisterComponent},
    { path: 'profile/:id',component:ProfileComponent},
    { path: 'successPage',component:SuccessPageComponent},
    { path: 'subscriptions',component:SubscriptionsComponent},
    { path: 'errorPage',component:ErrorComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
