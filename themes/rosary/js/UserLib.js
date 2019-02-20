$(function() {

    //Wait for Pinegrow to wake-up
    $("body").one("pinegrow-ready", function(e, pinegrow) {

        //Create new Pinegrow framework object
        var f = new PgFramework("UserLib", "UserLib");

        //This will prevent activating multiple versions of this framework being loaded
        f.type = "UserLib";
        f.allow_single_type = true;
        f.user_lib = true

        var comp_comp1 = new PgComponentType('comp1', 'Topbar');
        comp_comp1.code = '<div class="top-bar" data-pg-collapsed>\
    <div class="container">\
        <div class="row d-flex align-items-center">\
            <div class="col-md-6 d-md-block d-none">\
                <p>Contact us on +420 777 555 333 or hello@universal.com.</p>\
            </div>\
            <div class="col-md-6">\
                <div class="d-flex justify-content-md-end justify-content-between">\
                    <ul class="list-inline contact-info d-block d-md-none">\
                        <li class="list-inline-item">\
                            <a href="#"><i class="fa fa-phone"></i></a>\
                        </li>\
                        <li class="list-inline-item">\
                            <a href="#"><i class="fa fa-envelope"></i></a>\
                        </li>\
                    </ul>\
                    <ul class="social-custom list-inline">\
                        <li class="list-inline-item">\
                            <a href="#"><i class="fa fa-facebook"></i></a>\
                        </li>\
                        <li class="list-inline-item">\
                            <a href="#"><i class="fa fa-google-plus"></i></a>\
                        </li>\
                        <li class="list-inline-item">\
                            <a href="#"><i class="fa fa-twitter"></i></a>\
                        </li>\
                        <li class="list-inline-item">\
                            <a href="#"><i class="fa fa-envelope"></i></a>\
                        </li>\
                    </ul>\
                </div>\
            </div>\
        </div>\
    </div>\
</div>';
        comp_comp1.parent_selector = null;
        f.addComponentType(comp_comp1);
        
        var comp_comp2 = new PgComponentType('comp2', 'header');
        comp_comp2.code = '<header class="nav-holder make-sticky" data-pg-collapsed>\
    <div id="navbar" role="navigation" class="navbar navbar-expand-lg">\
        <div class="container">\
            <a href="index.html" class="navbar-brand home">\
                <img alt="Our Lady of the Rosary Logo" class="d-inline-block d-md-none" src="img/logo-nav.png" height="47px">\
                <span class="sr-only">Universal - go to homepage</span>\
            </a>\
            <button type="button" data-toggle="collapse" data-target="#navigation" class="navbar-toggler btn-template-outlined">\
                <span class="sr-only">Toggle navigation</span>\
                <i class="fa fa-align-justify"></i>\
            </button>\
            <div id="navigation" class="navbar-collapse collapse">\
                <ul class="nav navbar-nav m-auto" style="padding-bottom: 0;">\
                    <li class="nav-item">\
                        <a data-toggle="dropdown">Home <b class="caret"></b></a>\
                    </li>\
                    <li class="nav-item">\
                        <a data-toggle="dropdown">Schedule<b class="caret"></b></a>\
                    </li>\
                    <li class="nav-item">\
                        <a data-toggle="dropdown">Bulletins</a>\
                    </li>\
                    <!-- ========== FULL WIDTH MEGAMENU ==================-->\
                    <!-- ========== FULL WIDTH MEGAMENU END ==================-->\
                    <!-- ========== Contact dropdown ==================-->\
                    <li class="nav-item">\
                        <a href="1-contact.html" data-toggle="dropdown">Contact <b class="caret"></b></a>\
                    </li>\
                    <li class="nav-item">\
                        <a href="1-contact.html" data-toggle="dropdown">Give<b class="caret"></b></a>\
                    </li>\
                    <!-- ========== Contact dropdown end ==================-->\
                </ul>\
            </div>\
            <div id="search" class="collapse clearfix">\
                <form role="search" class="navbar-form">\
                    <div class="input-group">\
                        <input type="text" placeholder="Search" class="form-control">\
                        <span class="input-group-btn"> <button type="submit" class="btn btn-template-main">\
                                <i class="fa fa-search"></i>\
                            </button></span>\
                    </div>\
                </form>\
            </div>\
        </div>\
    </div>\
</header>';
        comp_comp2.parent_selector = null;
        f.addComponentType(comp_comp2);
        
        var comp_comp3 = new PgComponentType('comp3', 'Footer');
        comp_comp3.code = '<footer class="main-footer" data-pg-collapsed>\
    <div class="container text-center-sm">\
        <div class="row text-center center">\
            <div class="col-md-4 text-uppercase">\
                <p class="padding-vertical"> 5622 Julie Drive  <br>Highway 231 Bayou George <br>Panama City, FL 32404</p>\
            </div>\
            <div class="col-md-4">\
                <img src="img/olr-footer.png" alt="..." class="img-fluid">\
            </div>\
            <div class="col-md-4 text-uppercase">\
                <p class="padding-vertical">Phone: (850) 769-5067<br>\
Fax: (850) 769-1227</p>\
            </div>\
        </div>\
    </div>\
    <div class="copyrights">\
        <div class="container text-center">\
            <p>© 2018. <a href="https://ptdiocese.org">The Diocese of Pensacola-Tallahassee</a></p>\
        </div>\
    </div>\
</footer>';
        comp_comp3.parent_selector = null;
        f.addComponentType(comp_comp3);
        
        //Tell Pinegrow about the framework
        pinegrow.addFramework(f);
            
        var section = new PgFrameworkLibSection("UserLib_lib", "Components");
        //Pass components in array
        section.setComponentTypes([comp_comp1, comp_comp2, comp_comp3]);

        f.addLibSection(section);
   });
});