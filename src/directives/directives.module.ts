import { NgModule } from '@angular/core';
import { IdiomaesDirective } from './idiomaes/idiomaes';
import { IdiomaenDirective } from './idiomaen/idiomaen';
import { IdiomaptDirective } from './idiomapt/idiomapt';
import { IdiomaalDirective } from './idiomaal/idiomaal';
@NgModule({
	declarations: [IdiomaesDirective,
    IdiomaenDirective,
    IdiomaptDirective,
    IdiomaalDirective],
	imports: [],
	exports: [IdiomaesDirective,
    IdiomaenDirective,
    IdiomaptDirective,
    IdiomaalDirective]
})
export class DirectivesModule {}
