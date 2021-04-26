import { Routes, RouterModule } from '@angular/router';
import { GamePageComponent } from './game-page/game-page.component';
import { GameStatisticsComponent } from './game-statistics/game-statistics.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { ListPostsComponent } from './posts/listPosts.component';
import { PostButton } from './posts/postButton.component';
import { ExpandedPost } from './posts/expandedPost.component';
import { CreatePostComponent } from './posts/createPost.component';


const appRoutes = [
    
    { path: 'games', component: GamePageComponent },
    { path: 'index', component: IndexPageComponent },
    { path: 'statistics/:id', component: GameStatisticsComponent },
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'listPosts',component:ListPostsComponent},
    { path: 'listPosts/:id',component:ExpandedPost},
    { path: 'newPost',component:CreatePostComponent}
];

export const routing = RouterModule.forRoot(appRoutes);