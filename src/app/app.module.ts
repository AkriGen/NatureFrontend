import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './Auth/user/user.component';
import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import {MatButtonModule} from '@angular/material/button'; 
import { MatToolbarModule } from '@angular/material/toolbar';  // Import MatToolbarModule here
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { RemediesComponent } from './remedies/remedies.component';
import { SliderComponent } from './slider/slider.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CartComponent } from './cart/cart.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HelthtipsComponent } from './helthtips/helthtips.component';
import { PaymentComponent } from './payment/payment.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address/address.component';
import { CancellationComponent } from './cancellation/cancellation.component';
import { SkinComponent } from './category/skin/skin.component';
import { HairComponent } from './category/hair/hair.component';
import { BodyComponent } from './category/body/body.component';
import { ImmunityComponent } from './category/immunity/immunity.component';
import { DigestionComponent } from './category/digestion/digestion.component';
import { AdminHealthTipsComponent } from './admin/admin-health-tips/admin-health-tips.component';
import { AdminManagementComponent } from './admin/admin-management/admin-management.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { AdminRemediesComponent } from './admin/admin-remedies/admin-remedies.component';
import { AdminUserDetailsComponent } from './admin/admin-user-details/admin-user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    RemediesComponent,
    SliderComponent,
    PrivacypolicyComponent,
    ContactusComponent,
    CartComponent,
    BookmarkComponent,
    AboutusComponent,
    HelthtipsComponent,
    PaymentComponent,
    CancellationComponent,
    SkinComponent,
    HairComponent,
    BodyComponent,
    ImmunityComponent,
    DigestionComponent,
    AdminHealthTipsComponent,
    AdminManagementComponent,
    AdminPanelComponent,
    AdminProductComponent,
    AdminProfileComponent,
    AdminRemediesComponent,
    AdminUserDetailsComponent,
    AddressComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignupComponent,
    MatButtonModule,
    MatToolbarModule,  
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
