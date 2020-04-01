var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, navCtrl) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.navCtrl = navCtrl;
        this.appPages = [
            {
                title: 'Home',
                url: '/home-accounts',
                direct: 'root',
                icon: 'home'
            },
            {
                title: 'About',
                url: '/about',
                direct: 'forward',
                icon: 'information-circle-outline'
            },
            {
                title: 'Account Summary',
                url: '/summary',
                direct: 'forward',
                icon: 'cog'
            },
            {
                title: 'Set Accounts',
                url: '/settings',
                direct: 'forward',
                icon: 'cog'
            },
            {
                title: 'Set Payments',
                url: '/settings',
                direct: 'forward',
                icon: 'cog'
            },
            {
                title: 'Reminders ',
                url: '/settings',
                direct: 'forward',
                icon: 'cog'
            },
            {
                title: 'App Settings',
                url: '/settings',
                direct: 'forward',
                icon: 'cog'
            }
        ];
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        }).catch(function () { });
    };
    AppComponent.prototype.goToEditProgile = function () {
        this.navCtrl.navigateForward('edit-profile');
    };
    AppComponent.prototype.logout = function () {
        this.navCtrl.navigateRoot('/');
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['./app.component.scss']
        }),
        __metadata("design:paramtypes", [Platform,
            SplashScreen,
            StatusBar,
            NavController])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map