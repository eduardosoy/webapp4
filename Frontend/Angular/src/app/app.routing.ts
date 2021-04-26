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


const appRoutes = [
    
    { path: 'games', component: GamePageComponent },
    { path: 'index', component: IndexPageComponent },
    { path: 'statistics/:id', component: GameStatisticsComponent },
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'listPosts',component:ListPostsComponent},
    { path: 'listPosts/:id',component:ExpandedPostComponent},
    { path: 'newPost',component:CreatePostComponent},
    { path: 'editPost/:id',component:EditPostComponent},
    { path: 'login',component:LoginComponent},
    { path: 'register',component:RegisterComponent}
];

export const routing = RouterModule.forRoot(appRoutes);