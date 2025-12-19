<?php
//$GLOBALS['result'];
	
composeMail();
           
    function composeMail(){
        $fullname =  $_POST['fname'] . " " . $_POST['lname'];
        $email = $_POST['eaddress'];
        $phone = $_POST['tel'];
        $notes = $_POST['notes'];

        $message = "Customer Details:\r\n\r\n";
        $message .= "Name: " . $fullname . "\r\n";
        $message .= "Email: " . $email . "\r\n";
        $message .= "Cell: " . $phone . "\r\n";
        $message .= "Notes: " . $notes . "\r\n\r\n";


        $headers = "From: ".$fullname. " <" . $email . ">" ."\r\n";
        $headers .= "Reply-To: " . $fullname . " <" . $email . ">" . "\r\n";
        $headers .= "Date: " . date("r")."\r\n";

        sendMail($subject, $message, $headers);
    }

    function sendMail($subject, $message, $headers){
        $to = "info@tsilatourstransfers.com";
        $theSubject = "Inquiry from website";;
        $theheaders = $headers;
        $theMessage = $message;
        
        if(!(mail($to, $theSubject, $theMessage, $theheaders))){
            $GLOBALS['result'] = "Oops, we are currently unable to accept your submission.  Please try again later!";
        }else{
            $GLOBALS['result'] = "Thank you for your submission.  A message has been mailed to the administrators.\r\n \r\n We will be in contact shortly!";
        }
    }
?>






<html lang="en">

<head>
  <title>Tsila &mdash; Confirm Contact</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">


  <link href="https://fonts.googleapis.com/css?family=Oswald:300,400,700|Muli:300,400" rel="stylesheet">
  <link rel="stylesheet" href="fonts/icomoon/style.css">

  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="css/jquery-ui.css">
  <link rel="stylesheet" href="css/owl.carousel.min.css">
  <link rel="stylesheet" href="css/owl.theme.default.min.css">
  <link rel="stylesheet" href="css/owl.theme.default.min.css">

  <link rel="stylesheet" href="css/jquery.fancybox.min.css">

  <link rel="stylesheet" href="css/bootstrap-datepicker.css">

  <link rel="stylesheet" href="fonts/flaticon/font/flaticon.css">

  <link rel="stylesheet" href="css/aos.css">
  <link href="css/jquery.mb.YTPlayer.min.css" media="all" rel="stylesheet" type="text/css">

  <link rel="stylesheet" href="css/style.css">



</head>

<body data-spy="scroll" data-target=".site-navbar-target" data-offset="300">

  <div class="site-wrap">

    <div class="site-mobile-menu site-navbar-target">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close mt-3">
          <span class="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body"></div>
    </div>


    
     <div class="header-top bg-light">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-6 col-lg-3">
              <a href="index.html">
                <img src="images/logo.png" alt="Image" class="img-fluid"> 
                <!--
                <strong style="color:#CC5500;">YOUR AFRICAN SUPER HOST!</strong>-->
              </a>
            </div>
           
            <div class="col-lg-3 d-none d-lg-block">
              <div class="quick-contact-icons d-flex">
                <div class=" align-self-start"> <!--class icon removed-->
                    <!-- <span class="icon-location-arrow footerTextColor"></span>-->
                </div>
                <div class="text">
                    <!-- <span class="h4 d-block">Cape Town</span>-->
                    <!-- <span class="caption-text">Main offices</span>-->
                </div>
              </div>
            </div>
  
            <div class="col-lg-3 d-none d-lg-block">
              <div class="quick-contact-icons d-flex">
                <div class="icon align-self-start">
                  <span class="icon-phone footerTextColor"></span>
                </div>
                <div class="text">
                  <span class="h4 d-block">+263 71 274 9532</span>
                  <span class="caption-text">Call us</span>
                </div>
              </div>
            </div>
  
            <div class="col-lg-3 d-none d-lg-block">
              <div class="quick-contact-icons d-flex">
                <div class="icon align-self-start">
                  <span class="icon-envelope footerTextColor"></span>
                </div>
                <div class="text">
                  <span class="h4 d-block">info@tsilatourstransfers.com</span>
                  <span class="caption-text">Email any time</span>
                </div>
              </div>
            </div>
  
            <div class="col-6 d-block d-lg-none text-right">
                <a href="#" class="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black"><span
                  class="icon-menu h3"></span></a>
            </div>
          </div>
        </div>
        
  
  
              
      <div class="site-navbar py-2 js-sticky-header site-navbar-target d-none pl-0 d-lg-block" role="banner">

        <div class="container">
          <div class="d-flex align-items-center">
            
            <div class="mx-auto">
              <nav class="site-navigation position-relative text-right" role="navigation">
                <ul class="site-menu main-menu js-clone-nav mr-auto d-none pl-0 d-lg-block">
                  <li >
                    <a href="index.html" class="nav-link text-left">Home</a>
                  </li>
                  <li>
                    <a href="freetour.html" class="nav-link text-left">Free Walking Tours</a>
                  </li> 

                  <li >
                    <a href="transfers.html" class="nav-link text-left">Transfers</a>
                  </li>

                  <li >
                    <a href="charters.html" class="nav-link text-left">Charters</a>
                  </li>
                <!-- <li><a href="gallery.html" class="nav-link text-left">Gallery</a></li> --> 
                <li>
                  <a href="about.html" class="nav-link text-left">About Us</a>
                </li>
                  <li class="active">
                      <a href="contact.html" class="nav-link text-left">Contact</a>
                  </li>
                </ul>                                                                                                                                                                                                                                                                                      
              </nav>
  
            </div>
           
          </div>
        </div>

    </div>
      
  </div>
    



      <div class="intro-section site-blocks-cover innerpage" style="background-image: url('images/hearderrImage1.jpg');">
      <div class="container">
        <div class="row align-items-center text-center ">
          <div class="col-lg-12 mt-5" data-aos="fade-up">
            <h1>Get In Touch</h1>
            <p class="text-white text-center">
              <a href="index.html">Home</a>
              <span class="mx-2">/</span>
              <span>Contact Us</span>
            </p>
          </div>
        </div>
      </div>
    </div>


    









    <div class="news-wrap">
        <div class="container">
            <div class="container">
                <br>
                <br>
                <h2>Thank you for contacting us!</h2>
                <div class="row">
                <?php
                    echo $GLOBALS['result'];
                ?>
                </div>
                <br>
                <br>
            </div>
        </div>
    </div>










   <div class="footer bg-light">
<div class="container">
<div class="row">
<div class="col-lg-3">
<p class="mb-4"><img alt="Image" class="img-fluid" src="images/logo.png" /></p>

<p>For any of your travel needs and your host will get back to you within 24 hours.</p>

<p><a class="footerTextColor" href="transfers.html">More Details</a></p>
</div>

<div class="col-lg-3">
<h3 class="footer-heading"><span>Our Company</span></h3>

<ul class="list-unstyled">
	<li><a class="footerTextColor" href="about.html">About</a></li>
	<li><a class="footerTextColor" href="transfers.html">Services</a></li>
	<li><a class="footerTextColor" href="about.html">Our Team</a></li>
</ul>
</div>

<div class="col-lg-3">
<h3 class="footer-heading"><span>Our Services</span></h3>

<ul class="list-unstyled">
	<li><a class="footerTextColor" href="freetour.html">Free Walking Tours</a></li>
	<li><a class="footerTextColor" href="transfers.html">Transfers</a></li>
	<li><a class="footerTextColor" href="charters.html">Charters</a></li>
</ul>
</div>

<div class="col-lg-3">
<h3 class="footer-heading"><span>Contact</span></h3>

<ul class="list-unstyled ">
	<li><a class="footerTextColor" href="contact.html">Help Center</a></li>
</ul>
</div>
</div>

<div class="row">
<div class="col-12">
<div class="copyright">
<p>Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved</p>
</div>
</div>
</div>
</div>
</div>
    

  </div>
  <!-- .site-wrap -->


  <!-- loader -->
  <div id="loader" class="show fullscreen"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#ff5e15"/></svg></div>

  <script src="js/jquery-3.3.1.min.js"></script>
  <script src="js/jquery-migrate-3.0.1.min.js"></script>
  <script src="js/jquery-ui.js"></script>
  <script src="js/popper.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/owl.carousel.min.js"></script>
  <script src="js/jquery.stellar.min.js"></script>
  <script src="js/jquery.countdown.min.js"></script>
  <script src="js/bootstrap-datepicker.min.js"></script>
  <script src="js/jquery.easing.1.3.js"></script>
  <script src="js/aos.js"></script>
  <script src="js/jquery.fancybox.min.js"></script>
  <script src="js/jquery.sticky.js"></script>
  <script src="js/jquery.mb.YTPlayer.min.js"></script>




  <script src="js/main.js"></script>

</body>

</html>