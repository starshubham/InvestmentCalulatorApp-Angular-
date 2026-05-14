import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { BrowserModule } from "@angular/platform-browser";
import { UserInputModule } from "./user-input/user-input.module";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        InvestmentResultsComponent,
    ],
    /*  
        BrowserModule is required for running the app in a browser 
        and CurrencyPipe is required for formatting currency values 
        in the investment-results component which is now included in BrowserModule.
        UserInputModule is required for using ngModel in the user-input component.
    */
    imports: [BrowserModule, UserInputModule], 
    bootstrap: [AppComponent]
})

export class AppModule {}