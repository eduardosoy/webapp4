import { Routes, RouterModule } from '@angular/router';
import { GamePageComponent } from './game-page/game-page.component';
import { GameStadisticsComponent } from './game-stadistics/game-stadistics.component';
import { IndexPageComponent } from './index-page/index-page.component';


const appRoutes = [
    
    { path: 'games', component: GamePageComponent },
    { path: 'index', component: IndexPageComponent },
    { path: 'stadistics', component: GameStadisticsComponent },
    { path: '', redirectTo: 'index', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);