/**
 * Created by viktor on 22/03/15.
 */

$(document).ready(function () {
    'use strict';

    function buildMain(){
        $("body").empty();
        $("body").append(buildBody());

        $("#mainContainer").append(headerText);
        //$("body").append(menuText);
        $("#mainContainer").append(gorditosav());

        // A logutButton-hoz rendeljük a kilépés funkciót.
        $("#logoutButton").on('click', function(){
            buildLogin();
        });

        homer();

    }

    function buildLogin(){
        $("body").empty();
        $("body").append(loginText);

        // A loginButton-hoz rendeljük a kilépés funkciót.
        $("#loginButton").on('click', function(){
            buildMain();
        });

    }

    function buildBody(){
        return ''+
            '<div class="container-fluid" id="mainContainer">'+
            '</div>';
    }

    var loginText =
        '<div class="color-line"></div>'+
        '<div class="login-container">'+
            '<div class="row">'+
                '<div class="col-md-12 animated-panel zoomIn">'+
                    '<div class="text-center m-b-md">'+
                        '<h3>Kérlek jelentkezz be a DIGIsetup alkalmazásba</h3>'+
                        '<small>Bejelentkezés nélkül kizárólag tesztelési célra tudod használni az alkalmazást!</small>'+
                    '</div>'+
                    '<div class="hpanel">'+
                        '<div class="panel-body">'+
                            '<form action="#" id="loginForm">'+
                                '<div class="form-group">'+
                                    '<label class="control-label" for="username">Felhasználói név</label>'+
                                    '<input type="text" placeholder="example@gmail.com" title="Kérlek gépeld be a felhasználói nevedet" required="" value="" name="username" id="username" class="form-control">'+
                                    '<span class="help-block small">A korábban regisztrált felhasználói nevedet használd, vagy hagyd üresen</span>'+
                                '</div>'+
                                '<div class="form-group">'+
                                    '<label class="control-label" for="password">Jelszó</label>'+
                                    '<input type="password" title="Kérlek gépeld be a jelszavad" placeholder="******" required="" value="" name="password" id="password" class="form-control">'+
                                    '<span class="help-block small">A korábban regisztrált jelszavadat használd, vagy hagyd üresen</span>'+
                                '</div>'+
                                '<button class="btn btn-success btn-block" id="loginButton">Bejelentkezés</button>'+
                                '<button class="btn btn-default btn-block" id="registrationButton">Regisztráció</button>'+
                            '</form>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
            '<div class="row">'+
                '<div class="col-md-12 text-center">'+
                    '<strong>DIGIsetup</strong> - DIGItracker paraméterező és teszt alkalmazás <br/> 2015 Copyright DIGITinvent Kft. Hungary<br/><strong>www.digitinvent.hu</strong>'+
                '</div>'+
            '</div>'+
        '</div>';

    var headerText =
        '<div id="header" class="animated-panel zoomIn">'+
            '<div class="color-line">'+
            '</div>'+
            '<div id="logo" class="dark-version">'+
                '<div>'+
                    '<span>DIGIsetup</span>'+
                '</div>'+
                '<div>'+
                    '<span>V.1.0.</span>'+
                '</div>'+
            '</div>'+
            '<nav role="navigation" class="h-300">'+
                '<div class="navbar-left">'+
                    '<ul class="nav navbar-nav">'+
                        '<li>'+
                            '<div class="onoffswitch">'+
                                '<input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" checked>'+
                                '<label class="onoffswitch-label" for="myonoffswitch">'+
                                    '<span class="onoffswitch-inner"></span>'+
                                    '<span class="onoffswitch-switch"></span>'+
                                '</label>'+
                            '</div>'+
                        '</li>'+
                    '</ul>'+
                '</div>'+
                '<div class="navbar-right">'+
                    '<ul class="nav navbar-nav">'+
                        '<li class="dropdown">'+
                            '<a id="logoutButton" title="kilépés">'+
                                '<i class="pe-7s-upload pe-rotate-90"></i>'+
                            '</a>'+
                        '</li>'+
                    '</ul>'+
                '</div>'+
            '</nav>'+
        '</div>';

    var menuText =
    '<aside id="menu">'+
        '<div id="navigation">'+
                '<ul class="nav" id="side-menu">'+
                    '<li>'+
                        '<a>'+
                            '<span class="nav-label">GSM<br>beállítások</span>'+
                            '<span class="fa arrow"></span>'+
                        '</a>'+
                        '<ul class="nav nav-second-level">'+
                            '<li>'+
                                '<a href="#">GPRS beállítások</a>'+
                            '</li>'+
                            '<li>'+
                                '<a href="#">Távoli frissítés</a>'+
                            '</li>'+
                        '</ul>'+
                    '</li>'+
                    '<li>'+
                        '<a>'+
                            '<span class="nav-label">Gépjármű<br>védelem</span>'+
                            '<span class="fa arrow"></span>'+
                        '</a>'+
                        '<ul class="nav nav-second-level">'+
                            '<li>'+
                                '<a>Autóriasztó funkció</a>'+
                            '</li>'+
                            '<li>'+
                                '<a>Vezérlő funkció</a>'+
                            '</li>'+
                            '<li>'+
                                '<a>Indításgátló funkció</a>'+
                            '</li>'+
                            '<li>'+
                                '<a>SMS értesítések</a>'+
                            '</li>'+
                            '<li>'+
                                '<a>SMS szövegek</a>'+
                            '</li>'+
                            '<li>'+
                                '<a>Dallas kulcsok</a>'+
                            '</li>'+
                        '</ul>'+
                    '</li>'+
                    '<li>'+
                        '<a>'+
                            '<span class="nav-label">Egyéb<br>beállítások</span>'+
                            '<span class="fa arrow"></span>'+
                        '</a>'+
                        '<ul class="nav nav-second-level">'+
                            '<li>'+
                                '<a>Bementek beállítása</a>'+
                            '</li>'+
                            '<li>'+
                                '<a>Pozíció rögzítése</a>'+
                            '</li>'+
                            '<li>'+
                                '<a>Egyéb értékek</a>'+
                            '</li>'+
                            '<li>'+
                                '<a>Adatok rögzítése</a>'+
                            '</li>'+
                            '<li>'+
                                '<a>Érzékelők</a>'+
                            '</li>'+
                        '</ul>'+
                    '</li>'+
                    '<li>'+
                        '<a>'+
                            '<span class="nav-label">Firmware<br>kezelés</span>'+
                            '<span class="fa arrow"></span>'+
                        '</a>'+
                        '<ul class="nav nav-second-level">'+
                            '<li>'+
                                '<a>Firmware letöltése</a>'+
                            '</li>'+
                        '</ul>'+
                    '</li>'+
                    '<li>'+
                        '<a>'+
                            '<span class="nav-label">Eszköz<br>tesztelés</span>'+
                            '<span class="fa arrow"></span>'+
                        '</a>'+
                        '<ul class="nav nav-second-level">'+
                            '<li>'+
                                '<a>Bemenetek tesztelése</a>'+
                            '</li>'+
                            '<li>'+
                                '<a>Valami...</a>'+
                            '</li>'+
                        '</ul>'+
                    '</li>'+
                '</ul>'+
        '</div>'+
    '</aside>';

    function gorditosav(){
        var text=''+
            '<aside id="menuv">'+
                '<div id="navigation">'+

                                '<ul class="mailbox-list">'+
                                    '<li class="active">'+
                                        '<a href="#"><i class="fa fa-envelope"></i> Inbox</a>'+
                                    '</li>'+
                                    '<li>'+
                                        '<a href="#"><i class="fa fa-paper-plane"></i> Sent</a>'+
                                    '</li>'+
                                    '<li>'+
                                        '<a href="#"><i class="fa fa-pencil"></i> Draft</a>'+
                                    '</li>'+
                                    '<li>'+
                                        '<a href="#"><i class="fa fa-trash"></i> Trash</a>'+
                                    '</li>'+
                                    '<hr>'+
                                    '<li>'+
                                        '<a href="#"><i class="fa fa-plane text-danger"></i> Travel</a>'+
                                    '</li>'+
                                    '<li>'+
                                        '<a href="#"><i class="fa fa-bar-chart text-warning"></i> Finance</a>'+
                                    '</li>'+
                                    '<li>'+
                                        '<a href="#"><i class="fa fa-users text-info"></i> Social</a>'+
                                    '</li>'+
                                    '<li>'+
                                        '<a href="#"><i class="fa fa-tag text-success"></i> Promos</a>'+
                                    '</li>'+
                                    '<li>'+
                                        '<a href="#"><i class="fa fa-flag text-primary"></i> Updates</a>'+
                                    '</li>'+
                                    '<li>'+
                                        '<a href="#"><i class="fa fa-gears"></i> Settings</a>'+
                                    '</li>'+
                                    '<li>'+
                                        '<a href="#"><i class="fa fa-info-circle"></i> Support</a>'+
                                    '</li>'+
                                '</ul>'+
                '</div> '+
            '</aside>';
        return text;
    }
    buildMain();
});
