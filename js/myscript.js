    //Get the button
    let mybutton = document.getElementById("btn-back-to-top");
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
    scrollFunction();
    };
    function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
    mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
    }
    // When the user clicks on the button, scroll to the top of the document
    mybutton.addEventListener("click", backToTop);
    function backToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
    function CopyToClipboard(contentt)
      {
        var r = document.createRange();
        r.selectNode(document.getElementById(contentt));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(r);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        document.getElementById('copier').innerHTML = "Copied";
      }
    function CopyToClipboard1(contentt1)
      {
        var r = document.createRange();
        r.selectNode(document.getElementById(contentt1));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(r);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        document.getElementById('copier1').innerHTML = "Copied";
      }
    function CopyToClipboard2(contentt2)
      {
        var r = document.createRange();
        r.selectNode(document.getElementById(contentt2));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(r);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
      }
    function CopyToClipboard3(contentt3)
      {
        var r = document.createRange();
        r.selectNode(document.getElementById(contentt3));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(r);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        document.getElementById('copier3').innerHTML = "Copied";
      }
    function CopyToClipboard4(contentt4)
      {
        var r = document.createRange();
        r.selectNode(document.getElementById(contentt4));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(r);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        document.getElementById('copier4').innerHTML = "Copied";
      }
    function CopyToClipboard5(contentt5)
      {
        var r = document.createRange();
        r.selectNode(document.getElementById(contentt5));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(r);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
      }
    function CopyToClipboard6(contentt6)
      {
        var r = document.createRange();
        r.selectNode(document.getElementById(contentt6));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(r);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
      }
    function CopyToClipboard7(contentt7)
      {
        var r = document.createRange();
        r.selectNode(document.getElementById(contentt7));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(r);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
      }
    function CopyToClipboard8(contentt8)
      {
        var r = document.createRange();
        r.selectNode(document.getElementById(contentt8));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(r);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
      }
    function CopyToClipboard9(contentt9)
      {
        var r = document.createRange();
        r.selectNode(document.getElementById(contentt9));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(r);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
      }
    function CopyToClipboard10(contentt10)
      {
        var r = document.createRange();
        r.selectNode(document.getElementById(contentt10));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(r);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
      }
    function CopyToClipboard11(contentt11)
      {
        var r = document.createRange();
        r.selectNode(document.getElementById(contentt11));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(r);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
      }

      // Popover c'mon baby
      var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
        })


       

