import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { LoginComponent } from './Auth/login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { CartComponent } from './cart/cart.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PaymentComponent } from './payment/payment.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { ProductComponent } from './product/product.component';
import { RemediesComponent } from './remedies/remedies.component';
import { HelthtipsComponent } from './helthtips/helthtips.component';
import { UserComponent } from './Auth/user/user.component';
import { AddressComponent } from './address/address.component';
import { SkinComponent } from './category/skin/skin.component';
import { BodyComponent } from './category/body/body.component';
import { HairComponent } from './category/hair/hair.component';
import { ImmunityComponent } from './category/immunity/immunity.component';
import { DigestionComponent } from './category/digestion/digestion.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { AdminRemediesComponent } from './admin/admin-remedies/admin-remedies.component';
import { AdminHealthTipsComponent } from './admin/admin-health-tips/admin-health-tips.component';
import { AdminUserDetailsComponent } from './admin/admin-user-details/admin-user-details.component';
import { AdminManagementComponent } from './admin/admin-management/admin-management.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'nav',component:NavComponent},
  {path:'footer',component:FooterComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'bookmark',component:BookmarkComponent},
  {path:'cart',component:CartComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'payment',component:PaymentComponent},
  {path:'privacy',component:PrivacypolicyComponent},
  {path:'product',component:ProductComponent},
  {path:'remedies',component:RemediesComponent},
  {path:'healthtips',component:HelthtipsComponent},
  {path:'user',component:UserComponent},
  {path:'address',component:AddressComponent},
  {path:'skin',component:SkinComponent},
  {path:'body',component:BodyComponent},
  {path:'hair',component:HairComponent},
  {path:'immunity',component:ImmunityComponent},
  {path:'digestion',component:DigestionComponent},
  { path: '', redirectTo: '/admin-panel', pathMatch: 'full' },
  { path: 'admin-panel', component: AdminPanelComponent },
  { path: 'admin-product', component: AdminProductComponent },
  { path: 'admin-remedies', component: AdminRemediesComponent },
  { path: 'admin-health-tips', component: AdminHealthTipsComponent },
  { path: 'admin-user-details', component: AdminUserDetailsComponent },
  { path: 'admin-management', component: AdminManagementComponent },
  { path: 'admin-profile', component: AdminProfileComponent },
  {path:'address',component:AddressComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
