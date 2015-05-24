/**
 * Created by viktor on 22/03/15.
 */

$(document).ready(function () {
    'use strict';

    function buildMain(){
        $("body").empty();
        $("body").append(buildBody());

        $('#function_selector').bootstrapSwitch();
        $('#function_selector').bootstrapSwitch('size','small');
        $('#function_selector').bootstrapSwitch('onText', 'Profil');
        $('#function_selector').bootstrapSwitch('offText', 'Teszt');
        $('#function_selector').bootstrapSwitch('onColor', 'info');
        $('#function_selector').bootstrapSwitch('offColor','warning');

        $("body").append(biuldContent());
        //$("#mainContainer").append(headerText);
        //$("body").append(menuText);
        // $("#mainContainer").append(gorditosav());

        // A logutButton-hoz rendeljük a kilépés funkciót.
        /*$("#logoutButton").on('click', function(){
            buildLogin();
        });

        homer();
*/
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
            '<nav class="navbar navbar-inverse navbar-fixed-top">'+
                '<div class="container-fluid">'+
                    '<div class="navbar-header">'+
                        /*'<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">'+
                        '</button>'+*/
                        '<a class="navbar-brand" href="#">DIGIsetup V.1.0.</a>'+
                    '</div>'+

                    '<div class="collapse navbar-collapse navbar-left" id="myNavbar">'+

                        '<ul class="nav navbar-nav">'+

                            // GSM beállítások fejezet
                            '<li class="dropdown">' +
                                '<a class="dropdown-toggle" data-toggle="dropdown" href="#">GSM beállítások ' +
                                    '<span class="caret"></span>' +
                                '</a>'+
                                '<ul class="dropdown-menu">'+
                                    '<li>' +
                                        '<a href="#section11">GPRS beállítások</a>' +
                                    '</li>'+
                                    '<li>' +
                                        '<a href="#section12">Távoli frissítés</a>' +
                                    '</li>'+
                                '</ul>'+
                            '</li>'+

                                // Gépjármű védelem fejezet
                            '<li class="dropdown">' +
                                '<a class="dropdown-toggle" data-toggle="dropdown" href="#">Gépjármű védelem ' +
                                    '<span class="caret"></span>' +
                                '</a>'+
                                '<ul class="dropdown-menu">'+
                                    '<li>' +
                                        '<a href="#section21">Autóriasztó funkció</a>' +
                                    '</li>'+
                                    '<li>' +
                                        '<a href="#section22">Vezérlő funkció</a>' +
                                    '</li>'+
                                    '<li>' +
                                        '<a href="#section23">Indításgátló funkció</a>' +
                                    '</li>'+
                                    '<li>' +
                                        '<a href="#section24">SMS értesítések</a>' +
                                    '</li>'+
                                    '<li>' +
                                        '<a href="#section25">SMS szövegek</a>' +
                                    '</li>'+
                                    '<li>' +
                                        '<a href="#section26">Dallas kulcsok</a>' +
                                    '</li>'+
                                '</ul>'+
                            '</li>'+

                                // Egyéb beállítások fejezet
                            '<li class="dropdown">' +
                                '<a class="dropdown-toggle" data-toggle="dropdown" href="#">Egyéb beállítások ' +
                                    '<span class="caret"></span>' +
                                '</a>'+
                                '<ul class="dropdown-menu">'+
                                    '<li>' +
                                        '<a href="#section31">Bementek beállítása</a>' +
                                    '</li>'+
                                    '<li>' +
                                        '<a href="#section32">Pozíció rögzítése</a>' +
                                    '</li>'+
                                    '<li>' +
                                        '<a href="#section33">Egyéb értékek</a>' +
                                    '</li>'+
                                    '<li>' +
                                        '<a href="#section34">Adatok rögzítése</a>' +
                                    '</li>'+
                                    '<li>' +
                                        '<a href="#section35">Érzékelők</a>' +
                                    '</li>'+
                                '</ul>'+
                            '</li>'+
                        '</ul>'+
                    '</div>'+
                    '<div class="navbar-right">'+

                        '<ul class="nav navbar-nav">'+
                            '<li>'+
                                '<div id="function_selector_div">'+
                                    '<input type="checkbox" name="function_selector" id="function_selector">'+
                                '</div>'+
                            '</li>'+
                            '<li class="dropdown">'+
                                '<a id="logoutButton" title="kilépés">'+
                                    '<i class="pe-7s-upload pe-rotate-90"></i>'+
                'hmmm'+
                                '</a>'+
                            '</li>'+
                        '</ul>'+
                    '</div>'+
                '</div>'+
            '</nav>';
    }

    function biuldContent(){
        return ''+
            '<div data-spy="scroll" data-target=".navbar" data-offset="20" class="test">'+
                '<div id="section11" class="mag">'+
                    '<div class="container-fluid">'+
                        '<h2>GSM beállítások / GPRS beállítások</h2>'+
                    '</div>'+
                '</div>'+
                '<div id="section12" class="mag">'+
                    '<div class="container-fluid">'+
                        '<h1>GSM beállítások / Távoli frissítés</h1>'+
                    '</div>'+
                '</div>'+
                '<div id="section21" class="mag">'+
                    '<div class="container-fluid">'+
                        '<h1>Section 3</h1>'+

                    '</div>'+
                '</div>'+
                '<div id="section22" class="mag">'+
                    '<div class="container-fluid">'+
                        '<h1>Section 4 Submenu 1</h1>'+
                        '<p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>'+
                        '<p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>'+
                    '</div>'+
                '</div>'+
                '<div id="section23" class="mag">'+
                    '<div class="container-fluid">'+
                        '<h1>Section 4 Submenu 2</h1>'+
                        '<p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>'+
                        '<p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>'+
                    '</div>'+
                '</div>'+
                '<div id="section24" class="mag">'+
                    '<div class="container-fluid">'+
                        '<h1>Section 4 Submenu 2</h1>'+
                    '</div>'+
                '</div>'+
                '<div id="section25" class="mag">'+
                    '<div class="container-fluid">'+
                        '<h1>Section 4 Submenu 2</h1>'+
                    '</div>'+
                '</div>'+
                '<div id="section26" class="mag">'+
                    '<div class="container-fluid">'+
                        '<h1>Section 4 Submenu 2</h1>'+
                    '</div>'+
                '</div>'+
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
        '<div class="onoffswitch">'+
        '<input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" checked>'+
        '<label class="onoffswitch-label" for="myonoffswitch">'+
        '<span class="onoffswitch-inner"></span>'+
        '<span class="onoffswitch-switch"></span>'+
        '</label>'+
        '</div>'+
            '</div>'+
            '<nav class="h-300">'+
                /*'<div class="navbar-left">'+
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
                '</div>'+*/


                '<div class="collapse navbar-collapse navbar-left" id="myNavbar">'+
                    '<ul class="nav navbar-nav">'+
                        // GSM beállítások fejezet
                        '<li class="dropdown">' +
                            '<a class="dropdown-toggle" data-toggle="dropdown" href="#">GSM beállítások ' +
                                '<span class="caret"></span>' +
                            '</a>'+
                            '<ul class="dropdown-menu">'+
                                '<li>' +
                                    '<a href="#section11">GPRS beállítások</a>' +
                                '</li>'+
                                '<li>' +
                                    '<a href="#section12">Távoli frissítés</a>' +
                                '</li>'+
                            '</ul>'+
                        '</li>'+

                        // Gépjármű védelem fejezet
                        '<li class="dropdown">' +
                                '<a class="dropdown-toggle" data-toggle="dropdown" href="#">Gépjármű védelem ' +
                                    '<span class="caret"></span>' +
                                '</a>'+
                            '<ul class="dropdown-menu">'+
                                '<li>' +
                                    '<a href="#section21">Autóriasztó funkció</a>' +
                                '</li>'+
                                '<li>' +
                                    '<a href="#section22">Vezérlő funkció</a>' +
                                '</li>'+
                                '<li>' +
                                    '<a href="#section23">Indításgátló funkció</a>' +
                                '</li>'+
                                '<li>' +
                                    '<a href="#section24">SMS értesítések</a>' +
                                '</li>'+
                                '<li>' +
                                    '<a href="#section25">SMS szövegek</a>' +
                                '</li>'+
                                '<li>' +
                                    '<a href="#section26">Dallas kulcsok</a>' +
                                '</li>'+
                            '</ul>'+
                        '</li>'+

                        // Egyéb beállítások fejezet
                        '<li class="dropdown">' +
                            '<a class="dropdown-toggle" data-toggle="dropdown" href="#">Egyéb beállítások ' +
                                '<span class="caret"></span>' +
                            '</a>'+
                            '<ul class="dropdown-menu">'+
                                '<li>' +
                                    '<a href="#section31">Bementek beállítása</a>' +
                                '</li>'+
                                '<li>' +
                                    '<a href="#section32">Pozíció rögzítése</a>' +
                                '</li>'+
                                '<li>' +
                                    '<a href="#section33">Egyéb értékek</a>' +
                                '</li>'+
                                '<li>' +
                                    '<a href="#section34">Adatok rögzítése</a>' +
                                '</li>'+
                                '<li>' +
                                    '<a href="#section35">Érzékelők</a>' +
                                '</li>'+
                            '</ul>'+
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
        '</div>'+
        '<div>'+
        '<div data-spy="scroll" data-target=".navbar" data-offset="10" class="test">'+
            '<div id="section11">'+
            '<div class="container-fluid">'+
            '<h1>Section 1</h1>'+
            '<p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>'+
            '<p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>'+
            '</div>'+
            '</div>'+
            '<div id="section12">'+
            '<div class="container-fluid">'+
            '<h1>Section 2</h1>'+
            '<p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>'+
            '<p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>'+
            '</div>'+
            '</div>'+
            '<div id="section21">'+
            '<div class="container-fluid">'+
            '<h1>Section 3</h1>'+
            '<p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>'+
            '<p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>'+
            '</div>'+
            '</div>'+
            '<div id="section22">'+
            '<div class="container-fluid">'+
            '<h1>Section 4 Submenu 1</h1>'+
            '<p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>'+
            '<p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>'+
            '</div>'+
            '</div>'+
            '<div id="section23">'+
            '<div class="container-fluid">'+
            '<h1>Section 4 Submenu 2</h1>'+
            '<p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>'+
            '<p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>'+
            '</div>'+
            '</div>'+
        '</div>'+
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


    buildMain();
});
