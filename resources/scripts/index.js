/**
 * Created by viktor on 22/03/15.
 */

$(document).ready(function () {
    'use strict';

    function buildMain(){
        $("body").empty();
        $("body").append(buildBody());

        $("body").append(biuldContent());

        $("body").append(menuText);

        var width = $("body").width();
        console.log("width:" + width);

        $("#piecontent").width((width-180) + 'px');



        // A logutButton-hoz rendeljük a kilépés funkciót.
        /*$("#logoutButton").on('click', function(){
            buildLogin();
        });
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
            '<div class="color-line"></div>'+
            '<div class="main-line">' +
                '<nav class="navbar navbar-fixed-top">'+
                    '<div class="container-fluid">'+
                        '<div class="navbar-header">'+
                            '<a class="navbar-brand text-center" href="#" id="logo">DIGIsetup V.1.0.</a>'+
                        '</div>'+

                        '<div class="collapse navbar-collapse navbar-left" id="myNavbar2">'+
                            '<ul class="nav nav-pills">'+
                                '<li class="active">' +
                                    '<a href="#section11">Eszköz tesztelése</a>' +
                                '</li>'+
                                '<li>' +
                                    '<a href="#section22">Profil szerkesztése</a>' +
                                '</li>'+
                                '<li>' +
                                    '<a href="#section23">Firmware kezelése</a>' +
                                '</li>'+
                                '<li>' +
                                    '<a href="#section24">Dokumentáció</a>' +
                                '</li>'+
                            '</ul>'+
                        '</div>'+
                    '</div>'+
                '</nav>'+
            '</div>';
    }


    function biuldContent(){
        return ''+
            '<div data-spy="scroll" data-target="#navigation2" data-offset="20" class="test" id="piecontent">'+
                '<div id="section11" class="mag">'+
                    '<div class="container-fluid">'+
                        '<div class="page-header">'+
                            '<h3>GPRS beállítások</h3>'+
                                '<div class="row">'+
                                '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div id="section12" class="mag">'+
                    '<div class="container-fluid">'+
                        '<div class="page-header">'+
                            '<h3>Távoli frissítés</h3>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div id="section21" class="mag">'+
                    '<div class="container-fluid">'+
                        '<div class="page-header">'+
                            '<h3>Autóriasztó funkció</h3>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div id="section22" class="mag">'+
                    '<div class="container-fluid">'+
                        '<div class="page-header">'+
                            '<h3>Vezérlő funkció</h3>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div id="section23" class="mag">'+
                    '<div class="container-fluid">'+
                        '<div class="page-header">'+
                            '<h3>Indításgátló funkció</h3>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div id="section24" class="mag">'+
                    '<div class="container-fluid">'+
                        '<div class="page-header">'+
                            '<h3>SMS értesítések</h3>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div id="section25" class="mag">'+
                    '<div class="container-fluid">'+
                        '<div class="page-header">'+
                            '<h3>SMS szövegek</h3>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div id="section26" class="mag">'+
                    '<div class="container-fluid">'+
                        '<div class="page-header">'+
                            '<h3>Dallas kulcsok</h3>'+
                        '</div>'+
                    '</div>'+
                '</div>'+

                // Egyéb beállítások:
                '<div id="section31" class="mag">'+
                    '<div class="container-fluid">'+
                        '<div class="page-header">'+
                            '<h3>Bemenetek beállítása</h3>'+
                            '<div class="row">'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div id="section32" class="mag">'+
                    '<div class="container-fluid">'+
                        '<div class="page-header">'+
                            '<h3>Pozíció rögzítése</h3>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div id="section33" class="mag">'+
                    '<div class="container-fluid">'+
                        '<div class="page-header">'+
                            '<h3>Egyéb értékek</h3>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div id="section34" class="mag">'+
                    '<div class="container-fluid">'+
                        '<div class="page-header">'+
                            '<h3>Adatok rögzítése</h3>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div id="section35" class="mag">'+
                    '<div class="container-fluid">'+
                        '<div class="page-header">'+
                            '<h3>Érzékelők</h3>'+
                        '</div>'+
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

    var menuText =
    '<aside id="menu">'+
        '<div id="navigation">'+
            '<nav id="navigation2">'+
                '<ul class="nav" id="side-menu">'+
                    '<li>'+
                        '<a>'+
                            '<i class="fa fa-camera-retro bcolor-purple"></i>'+
                            '<span class="nav-label"> GSM beállítások</span>'+
                        '</a>'+
                        '<ul class="nav">'+
                            '<li>'+
                                '<a href="#section11">GPRS beállítások</a>'+
                            '</li>'+
                            '<li>'+
                                '<a href="#section12">Távoli frissítés</a>'+
                            '</li>'+
                        '</ul>'+
                    '</li>'+
                    '<li>'+
                        '<a>'+
                            '<i class="fa fa-camera-retro bcolor-blue"></i>'+
                            '<span class="nav-label"> Gépjármű védelem</span>'+
                        '</a>'+
                        '<ul class="nav">'+
                            '<li>'+
                                '<a href="#section21">Autóriasztó funkció</a>'+
                            '</li>'+
                            '<li>'+
                                '<a href="#section22">Vezérlő funkció</a>'+
                            '</li>'+
                            '<li>'+
                                '<a href="#section23">Indításgátló funkció</a>'+
                            '</li>'+
                            '<li>'+
                                '<a href="#section24">SMS értesítések</a>'+
                            '</li>'+
                            '<li>'+
                                '<a href="#section25">SMS szövegek</a>'+
                            '</li>'+
                            '<li>'+
                                '<a href="#section26">Dallas kulcsok</a>'+
                            '</li>'+
                        '</ul>'+
                    '</li>'+
                    '<li>'+
                        '<a>'+
                            '<i class="fa fa-camera-retro bcolor-yellow"></i>'+
                            '<span class="nav-label"> Egyéb beállítások</span>'+
                        '</a>'+
                        '<ul class="nav">'+
                            '<li>'+
                                '<a href="#section31">Bementek beállítása</a>'+
                            '</li>'+
                            '<li>'+
                                '<a href="#section32">Pozíció rögzítése</a>'+
                            '</li>'+
                            '<li>'+
                                '<a href="#section33">Egyéb értékek</a>'+
                            '</li>'+
                            '<li>'+
                                '<a href="#section34">Adatok rögzítése</a>'+
                            '</li>'+
                            '<li>'+
                                '<a href="#section35">Érzékelők</a>'+
                            '</li>'+
                        '</ul>'+
                    '</li>'+
                '</ul>'+
            '</nav>'+
    '</div>'+
    '</aside>';


    buildMain();
});
