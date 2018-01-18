import { NgModule } from '@angular/core';
import { IdiomaesDirective } from './idiomaes/idiomaes';
import { IdiomaenDirective } from './idiomaen/idiomaen';
import { IdiomaptDirective } from './idiomapt/idiomapt';
@NgModule({
	declarations: [IdiomaesDirective,
    IdiomaenDirective,
    IdiomaptDirective],
	imports: [],
	exports: [IdiomaesDirective,
    IdiomaenDirective,
    IdiomaptDirective]
})
export class DirectivesModule {}
