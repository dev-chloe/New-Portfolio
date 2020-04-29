import { ModuleWithProviders, NgModule } from '@angular/core';
import { LoadingScreenService } from './loading-screen/loading-screen.service';

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [/* declare in `forRoot()` */],
})

export class ServicesModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ServicesModule,
            providers: [
                LoadingScreenService
            ]
        };
    }
}