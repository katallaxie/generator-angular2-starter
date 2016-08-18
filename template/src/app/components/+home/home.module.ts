import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonsModule } from '../../common';
import { HomeComponent } from './home.component';
import { NameListService } from '../../services';

@NgModule({
    imports: [CommonModule, CommonsModule],
    declarations: [HomeComponent],
    exports: [HomeComponent],
    providers: [NameListService]
})

export class HomeModule { }
