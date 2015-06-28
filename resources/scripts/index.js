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

        $('[data-toggle="tooltip"]').tooltip();


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
                            '<a class="navbar-brand text-center logobox" href="#" id="logo">' +
                                '<img src="resources/images/digisetup_logo.png" alt="logo">'+
                            '</a>'+
                        '</div>'+

                        '<div class="collapse navbar-collapse navbar-left" id="myNavbar2">'+
                            '<ul class="nav nav-pills">'+
                                '<li>' +
                                    '<a href="#">Eszköz tesztelése</a>' +
                                '</li>'+
                                '<li class="active">' +
                                    '<a href="#">Profil szerkesztése</a>' +
                                '</li>'+
                                '<li>' +
                                    '<a href="#">Firmware kezelése</a>' +
                                '</li>'+
                                '<li>' +
                                    '<a href="#">Dokumentáció</a>' +
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
                            '<h1 class="section1x">GPRS beállítások</h1>'+
                        '</div>'+

                        '<div class="panel panel-default">'+
                            '<div class="panel-heading">'+
                                'DIGItracker működésének jellege:'+
                            '</div>'+
                            '<div class="panel-body">'+
                                '<div class="row">'+
                                    '<div class="col-md-5 text-right">'+
                                        'Funkcionális működés:'+
                                    '</div>'+
                                    '<div class="input-group col-md-6 text-left">'+
                                        '<select class="form-control" id="sel1">'+
                                            '<option>Útvonal követés + vagyonvédelem</option>'+
                                            '<option>Vagyonvédelem</option>'+
                                        '</select>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="row">'+
                                    '<div class="col-md-offset-5 col-md-6 text-left device-panel">'+
                                        '<span class="device-info-warning">DIGItrackerben: <span>Vagyonvédelem</span></span>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+

                        '<div class="panel panel-default">'+
                            '<div class="panel-heading">'+
                                'Adatgyűjtő szerver és a DIGItracker közötti kommunikációval kapcsolatos beállítások:'+
                            '</div>'+
                            '<div class="panel-body">'+
                                '<div class="row">'+
                                    '<div class="col-md-5 text-right">'+
                                        'Szerver IP címe:'+
                                    '</div>'+
                                    '<div class="input-group col-md-6 text-left">'+
                                        '<input type="text" class="form-control" placeholder="192.168.1.1">'+
                                    '</div>'+
                                '</div>'+
                                '<div class="row">'+
                                    '<div class="col-md-offset-5 col-md-6 text-left device-panel">'+
                                        '<span class="device-info-success">DIGItrackerben: <span>192.168.67.89</span></span>'+
                                    '</div>'+
                                '</div>'+

                                '<div class="row">'+
                                    '<div class="col-md-5 text-right">'+
                                        'Szerver port:'+
                                    '</div>'+
                                    '<div class="input-group col-md-6 text-left">'+
                                        '<input type="text" class="form-control" placeholder="1345">'+
                                    '</div>'+
                                '</div>'+
                                '<div class="row">'+
                                    '<div class="col-md-offset-5 col-md-6 text-left device-panel">'+
                                        '<span class="device-info-success">DIGItrackerben: <span>1345</span></span>'+
                                    '</div>'+
                                '</div>'+

                                '<div class="row">'+
                                    '<div class="col-md-5 text-right">'+
                                        'SMS küldéséhez tartozó telefonszám:'+
                                    '</div>'+
                                    '<div class="input-group col-md-6 text-left">'+
                                        '<input type="text" class="form-control" placeholder="+36xxxxxxxxx">'+
                                    '</div>'+
                                '</div>'+
                                '<div class="row">'+
                                    '<div class="col-md-offset-5 col-md-6 text-left device-panel">'+
                                        '<span class="device-info-success">DIGItrackerben: <span>+3612275213</span></span>'+
                                    '</div>'+
                                '</div>'+

                            '</div>'+
                        '</div>'+

                        '<div class="panel panel-default">'+
                            '<div class="panel-heading">'+
                                'GSM szolgáltatóval kapcsolatos beállítások:'+
                            '</div>'+
                                '<div class="panel-body">'+
                                    '<div class="row">'+
                                        '<div class="col-md-5 text-right">'+
                                            'APN név:'+
                                        '</div>'+
                                        '<div class="input-group col-md-6 text-left">'+
                                            '<input type="text" class="form-control" placeholder="192.168.1.1">'+
                                        '</div>'+
                                    '</div>'+
                                    '<div class="row">'+
                                        '<div class="col-md-offset-5 col-md-6 text-left device-panel">'+
                                            '<span class="device-info-warning">DIGItrackerben: <span>internet</span></span>'+
                                        '</div>'+
                                    '</div>'+
                                    '<div class="row">'+
                                        '<div class="col-md-5 text-right">'+
                                            'Felhasználó név:'+
                                        '</div>'+
                                        '<div class="input-group col-md-6 text-left">'+
                                            '<input type="text" class="form-control" placeholder="1345">'+
                                        '</div>'+
                                    '</div>'+
                                    '<div class="row">'+
                                        '<div class="col-md-offset-5 col-md-6 text-left device-panel">'+
                                            '<span class="device-info-success">DIGItrackerben: <span></span></span>'+
                                        '</div>'+
                                    '</div>'+
                                    '<div class="row">'+
                                        '<div class="col-md-5 text-right">'+
                                            'Jelszó:'+
                                        '</div>'+
                                        '<div class="input-group col-md-6 text-left">'+
                                            '<input type="text" class="form-control" placeholder="1345">'+
                                        '</div>'+
                                    '</div>'+
                                    '<div class="row">'+
                                    '<div class="col-md-offset-5 col-md-6 text-left device-panel">'+
                                        '<span class="device-info-success">DIGItrackerben: <span></span></span>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+

                        '<div class="panel panel-default">'+
                            '<div class="panel-heading">'+
                                'Roaming beállítások:'+
                            '</div>'+
                            '<div class="panel-body">'+
                                '<div class="row">'+
                                    '<div class="col-md-5 text-right">'+
                                        'Roaming alatt adatok beküldése GPRS hálózaton:'+
                                    '</div>'+
                                    '<div class="input-group col-md-6 text-left">'+
                                        '<select class="form-control" id="sel1">'+
                                            '<option>Nincs adat beküldés</option>'+
                                            '<option>Van adat beküldés</option>'+
                                        '</select>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="row">'+
                                    '<div class="col-md-offset-5 col-md-6 text-left device-panel">'+
                                        '<span class="device-info-warning">DIGItrackerben: <span>nem</span></span>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="row">'+
                                    '<div class="col-md-5 text-right">'+
                                        'Roaming alatt adatok beküldése SMS-ben:'+
                                    '</div>'+
                                    '<div class="input-group col-md-6 text-left">'+
                                        '<select class="form-control" id="sel1">'+
                                            '<option>Nincs SMS küldés</option>'+
                                            '<option>Van SMS küldés</option>'+
                                        '</select>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="row">'+
                                    '<div class="col-md-offset-5 col-md-6 text-left device-panel">'+
                                        '<span class="device-info-success">DIGItrackerben: <span>igen</span></span>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+

                    '</div>'+
                '</div>'+

                '<div id="section12" class="mag">'+
                    '<div class="container-fluid">'+
                        '<div class="page-header">'+
                            '<h1 class="section1x">Távoli frissítés</h1>'+
                        '</div>'+
                        '<div class="panel panel-default">'+
                            '<div class="panel-heading">'+
                                'Távoli firmware letöltést biztosító szerver és a DIGItracker közötti kommunkiációval kapcsolatos beállítások:'+
                            '</div>'+
                            '<div class="panel-body">'+
                                '<div class="row">'+
                                    '<div class="col-md-5 text-right">'+
                                        'Szerver IP címe:'+
                                    '</div>'+
                                    '<div class="input-group col-md-6 text-left">'+
                                        '<input type="text" class="form-control" placeholder="192.168.67.88">'+
                                    '</div>'+
                                '</div>'+
                                '<div class="row">'+
                                    '<div class="col-md-offset-5 col-md-6 text-left device-panel">'+
                                        '<span class="device-info-success">DIGItrackerben: <span>192.168.67.88</span></span>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="row">'+
                                    '<div class="col-md-5 text-right">'+
                                        'Szerver port:'+
                                    '</div>'+
                                    '<div class="input-group col-md-6 text-left">'+
                                        '<input type="text" class="form-control" placeholder="9999">'+
                                    '</div>'+
                                '</div>'+
                                '<div class="row">'+
                                    '<div class="col-md-offset-5 col-md-6 text-left device-panel">'+
                                        '<span class="device-info-success">DIGItrackerben: <span>9999</span></span>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+

                '<div id="section21" class="mag">'+
                    '<div class="container-fluid">'+
                        '<div class="page-header">'+
                            '<h1 class="section2x">Autóriasztó funkció</h1>'+
                        '</div>'+
                    '</div>'+
                '</div>'+

                '<div id="section22" class="mag">'+
                    '<div class="container-fluid">'+
                        '<div class="page-header">'+
                            '<h1 class="section2x">Vezérlő funkció</h1>'+
                        '</div>'+
                    '</div>'+
                '</div>'+

                '<div id="section23" class="mag">'+
                    '<div class="container-fluid">'+
                        '<div class="page-header">'+
                            '<h1 class="section2x">Indításgátló funkció</h1>'+
                        '</div>'+
                    '</div>'+
                '</div>'+

                '<div id="section24" class="mag">'+
                    '<div class="container-fluid">'+
                        '<div class="page-header">'+
                            '<h1 class="section2x">SMS értesítések</h1>'+
                        '</div>'+
                    '</div>'+
                '</div>'+

                '<div id="section25" class="mag">'+
                    '<div class="container-fluid">'+
                        '<div class="page-header">'+
                            '<h1 class="section2x">SMS szövegek</h1>'+
                        '</div>'+
                    '</div>'+
                '</div>'+

                '<div id="section26" class="mag">'+
                    '<div class="container-fluid">'+
                        '<div class="page-header">'+
                            '<h1 class="section2x">Dallas kulcsok</h1>'+
                        '</div>'+
                    '</div>'+
                '</div>'+

                // Egyéb beállítások:
                '<div id="section31" class="mag">'+
                    '<div class="container-fluid">'+
                        '<div class="page-header">'+
                            '<h1 class="section3x">Bemenetek beállítása</h1>'+
                            '<div class="row">'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+

                '<div id="section32" class="mag">'+
                    '<div class="container-fluid">'+
                        '<div class="page-header">'+
                            '<h1 class="section3x">Pozíció rögzítése</h1>'+
                        '</div>'+
                    '</div>'+
                '</div>'+

                '<div id="section33" class="mag">'+
                    '<div class="container-fluid">'+
                        '<div class="page-header">'+
                            '<h1 class="section3x">Egyéb értékek</h1>'+
                        '</div>'+
                    '</div>'+
                '</div>'+

                '<div id="section34" class="mag">'+
                    '<div class="container-fluid">'+
                        '<div class="page-header">'+
                            '<h1 class="section3x">Adatok rögzítése</h1>'+
                        '</div>'+
                    '</div>'+
                '</div>'+

                '<div id="section35" class="mag">'+
                    '<div class="container-fluid">'+
                        '<div class="page-header">'+
                            '<h1 class="section3x">Érzékelők</h1>'+
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
        '<div class="col-md-12 no-horizontal-padding menubuttons-group">'+
            '<div class="col-md-3 no-horizontal-padding text-center">'+
                '<button type="button" class="btn btn-default btn-xs menubuttons" data-toggle="tooltip" data-placement="right" title="file megnyitása"><i class="fa fa-folder-open-o fa-2x text-center"></i></button>'+
            '</div>'+
            '<div class="col-md-3 no-horizontal-padding text-center">'+
                '<button type="button" class="btn btn-default btn-xs menubuttons" data-toggle="tooltip" data-placement="bottom" title="file elmentése"><i class="fa fa-floppy-o fa-2x text-center"></i></button>'+
            '</div>'+
            '<div class="col-md-3 no-horizontal-padding text-center">'+
                '<button type="button" class="btn btn-default btn-xs menubuttons" disabled="disabled" data-toggle="tooltip" data-placement="bottom" title="adatok letöltése"><i class="fa fa-reply fa-rotate-270 fa-2x text-center"></i></button>'+
            '</div>'+
            '<div class="col-md-3 no-horizontal-padding text-center">'+
                '<button type="button" class="btn btn-default btn-xs menubuttons" disabled="disabled" data-toggle="tooltip" data-placement="left" title="adatok feltöltése"><i class="fa fa-reply fa-2x fa-rotate-90 text-center"></i></button>'+
            '</div>'+
        '</div>'+
        '<div id="navigation">'+
            '<nav id="navigation2">'+
                '<ul class="nav" id="side-menu">'+
                    '<li>'+
                        '<a>'+
                            '<i class="fa fa-phone bcolor-purple text-center"></i>'+
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
                            '<i class="fa fa-car bcolor-blue text-center"></i>'+
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
                            '<i class="fa fa-info bcolor-yellow text-center"></i>'+
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
