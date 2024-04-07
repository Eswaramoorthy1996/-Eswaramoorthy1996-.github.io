// working on this

var usNm;
var mbl;
var mail;
var password ;
var conPass;
var gen;
var adrs;
var state;
var pin;
var opt;
var ckBx = [];

console.log('as global-> '+password+' usnm-->'+usNm);

function validate() {
  usNm = $(inputName).val();
  mbl = $(inputMobileNumber).val();
  mail = $(inputEmail).val();
  password = $(inputPassword).val();
  conPass = $(inputPasswordCon).val();
  gen = $("input[name=gender]:checked").val();
  adrs = $("#address").val();
  state = $(inputCity).val();
  pin = $(inputZip).val();
  opt = $("select option:selected").val();

  ckBx = [];

  $("input[name=patTyp]:checked").each(function () {
    ckBx.push($(this).val());
  });
  console.log(ckBx);

  // for( i=0; i<ckBx.length;i++ ){
  //     console.log(ckBx[i])
  // }

  if (usNm === "") {
    $("#namErr").css({ display: "block", color: "red" }).text("*enter name");
  }
  // else{
  //       $("#signUP").modal("hide");
  //       $("#loginMod").modal("show");

  //       console.log(' password inside validate-> '+password+'-- '+usNm);

  //       $(inputEmail3).val(mail);
  //       $(inputPassword3).val(password);
  // }
  else {
    var valNm = /^[A-Za-z]+$/;
    if (valNm.test(usNm)) {
      $("#namErr").css({ display: "none", color: "green" }).text("valid name");

      // *************************
      $("#nmDn").text(usNm);
      $("#userModalLabel").text("Welcome " + usNm);

      if (mbl === "") {
        $("#noErr")
          .css({ display: "block", color: "red" })
          .text("should not be empty");
      } else {
        var valNo = /^[5-9]{1}[0-9]{9}$/;

        if (valNo.test(mbl)) {
          $("#noErr")
            .css({ display: "none", color: "green" })
            .text("valid number");
          $(noDn).text(mbl);
          if (mail === "") {
            $("#mailErr")
              .css({ display: "block", color: "red" })
              .text("give an email");
          } else {
            var valEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

            if (valEmail.test(mail)) {
              $("#mailErr")
                .css({ display: "none", color: "green" })
                .text("valid email");
              $(emDn).text(mail);
              if (password === "") {
                $(pasErr)
                  .css({ display: "block", color: "red" })
                  .text("enter password");
              } else {
                var valPass =
                  /^(?=.*[A-Z])(?=.*[~`!@#$%^&*_+()-|?])(?=.*\d).{8,}$/;
                if (valPass.test(password)) {
                  $(pasErr)
                    .css({ display: "none", color: "green" })
                    .text("valid password");

                  if (conPass === "") {
                    $(conPas)
                      .css({ display: "block", color: "red" })
                      .text("enter confirm password");
                  } else {
                    if (conPass === password) {
                      $(conPas)
                        .css({ display: "none", color: "green" })
                        .text("password matches");

                      if (gen == null) {
                        $(genErr)
                          .css({ display: "block", color: "red" })
                          .text("select gender");
                      } else {
                        $(genErr)
                          .css({ display: "none", color: "green" })
                          .text("selected");
                        //console.log(gen)//getting value
                        // skill box array
                        // *************************
                        $(gDn).text(gen);

                        if (ckBx.length == 0) {
                          $(patErr)
                            .css({ display: "block", color: "red" })
                            .text("enter patent admit type");
                        } else {
                          $(patErr)
                            .css({ display: "none", color: "green" })
                            .text(" ");
                          console.log(ckBx); //check box value

                          // *************************
                          $(SkDn).text(ckBx);

                          if (adrs == "") {
                            $(addErr)
                              .css({ display: "block", color: "red" })
                              .text("enter your address");
                          } else {
                            $(addErr).css({ display: "none", color: "green" });
                            $(AdIn).text(adrs);

                            if (state === "") {
                              $(detErr)
                                .css({ display: "block", color: "red" })
                                .text("enter your state");
                            } else {
                              $(detErr).css({
                                display: "none",
                                color: "green",
                              });

                              // *************************
                              $(StIn).text(state);

                              if (opt === "") {
                                $(detErr)
                                  .css({ display: "block", color: "red" })
                                  .text("select nation");
                              } else {
                                // *************************
                                $(naIn).text(opt);

                                $(detErr)
                                  .css({ display: "none", color: "green" })
                                  .text("selected");

                                if (pin === "") {
                                  $(detErr)
                                    .css({ display: "block", color: "red" })
                                    .text("enter pin number");
                                } else {
                                  var valPin = /^[0-9]+$/;
                                  // alert(valPin.test(pin))

                                  if (valPin.test(pin)) {
                                    $(detErr)
                                      .css({ display: "none", color: "green" })
                                      .text("selected");
                                    // *************************
                                    $(naDn).text(pin);

                                    $("#signUP").modal("hide");
                                    $("#loginMod").modal("show");

                                    $(inputEmail3).val(mail);
                                    $(inputPassword3).val(password);
                                  } else {
                                    $(detErr)
                                      .css({ display: "block", color: "red" })
                                      .text("enter valid number");
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    } else {
                      $(conPas)
                        .css({ display: "block", color: "red" })
                        .text("password not matching");
                    }
                  }
                } else {
                  $(pasErr)
                    .css({ display: "block", color: "red" })
                    .text("password must have a upper case ,number");
                }
              }
            } else {
              $("#mailErr")
                .css({ display: "block", color: "red" })
                .text("invalid email");
            }
          }
        } else {
          $("#noErr")
            .css({ display: "block", color: "red" })
            .text("Enter valid number");
        }
      }
    } else {
      $("#namErr")
        .css({ display: "block", color: "red" })
        .text("should not have numbers or special char");
    }
  }
}

function updateAcc() {
  usNm = $(inputName).val();
  mbl = $(inputMobileNumber).val();
  mail = $(inputEmail).val();
  password = $(inputPassword).val();
  conPass = $(inputPasswordCon).val();
  gen = $("input[name=gender]:checked").val();
  adrs = $("#address").val();
  state = $(inputCity).val();
  pin = $(inputZip).val();
  opt = $("select option:selected").val();

  ckBx = [];

  $("input[name=patTyp]:checked").each(function () {
    ckBx.push($(this).val());
  });
  console.log(ckBx);

  // for( i=0; i<ckBx.length;i++ ){
  //     console.log(ckBx[i])
  // }

  if (usNm === "") {
    $("#namErr").css({ display: "block", color: "red" }).text("*enter name");
  }
  // else{
  //       $("#signUP").modal("hide");
  //       $("#loginMod").modal("show");

  //       $(inputEmail3).val(mail);
  //       $(inputPassword3).val(password);
  // }
  else {
    var valNm = /^[A-Za-z]+$/;
    if (valNm.test(usNm)) {
      $("#namErr").css({ display: "none", color: "green" }).text("valid name");

      // *************************
      $("#nmDn").text(usNm);
      $("#userModalLabel").text("Welcome "+usNm);

      if (mbl === "") {
        $("#noErr")
          .css({ display: "block", color: "red" })
          .text("should not be empty");
      } else {
        var valNo = /^[5-9]{1}[0-9]{9}$/;

        if (valNo.test(mbl)) {
          $("#noErr")
            .css({ display: "none", color: "green" })
            .text("valid number");
          $(noDn).text(mbl);
          if (mail === "") {
            $("#mailErr")
              .css({ display: "block", color: "red" })
              .text("give an email");
          } else {
            var valEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

            if (valEmail.test(mail)) {
              $("#mailErr")
                .css({ display: "none", color: "green" })
                .text("valid email");
              $(emDn).text(mail);
              if (false) {
                $(pasErr)
                  .css({ display: "block", color: "red" })
                  .text("enter password");
              } else {
                var valPass =
                  /^(?=.*[A-Z])(?=.*[~`!@#$%^&*_+()-|?])(?=.*\d).{8,}$/;
                if (true) {
                  $(pasErr)
                    .css({ display: "none", color: "green" })
                    .text("valid password");

                  if (false) {
                    $(conPas)
                      .css({ display: "block", color: "red" })
                      .text("enter confirm password");
                  } else {
                    if (true) {
                      $(conPas)
                        .css({ display: "none", color: "green" })
                        .text("password matches");

                      if (gen == null) {
                        $(genErr)
                          .css({ display: "block", color: "red" })
                          .text("select gender");
                      } else {
                        $(genErr)
                          .css({ display: "none", color: "green" })
                          .text("selected");
                        //console.log(gen)//getting value
                        // skill box array
                        // *************************
                        $(gDn).text(gen);

                        if (ckBx.length == 0) {
                          $(patErr)
                            .css({ display: "block", color: "red" })
                            .text("enter patent admit type");
                        } else {
                          $(patErr)
                            .css({ display: "none", color: "green" })
                            .text(" ");
                          console.log(ckBx); //check box value

                          // *************************
                          $(SkDn).text(ckBx);

                          if (adrs == "") {
                            $(addErr)
                              .css({ display: "block", color: "red" })
                              .text("enter your address");
                          } else {
                            $(addErr).css({ display: "none", color: "green" });
                            $(AdIn).text(adrs);

                            if (state === "") {
                              $(detErr)
                                .css({ display: "block", color: "red" })
                                .text("enter your state");
                            } else {
                              $(detErr).css({
                                display: "none",
                                color: "green",
                              });

                              // *************************
                              $(StIn).text(state);

                              if (opt === "") {
                                $(detErr)
                                  .css({ display: "block", color: "red" })
                                  .text("select nation");
                              } else {
                                // *************************
                                $(naIn).text(opt);

                                $(detErr)
                                  .css({ display: "none", color: "green" })
                                  .text("selected");

                                if (pin === "") {
                                  $(detErr)
                                    .css({ display: "block", color: "red" })
                                    .text("enter pin number");
                                } else {
                                  var valPin = /^[0-9]+$/;
                                  // alert(valPin.test(pin))

                                  if (pin.length != 6) {
                                    $(detErr)
                                      .css({ display: "block", color: "red" })
                                      .text("enter valid pin number");
                                  }

                                  if (valPin.test(pin)) {
                                    $(detErr)
                                      .css({ display: "none", color: "green" })
                                      .text("selected");
                                    // *************************
                                    $(naDn).text(pin);

                                    $("#signUP").modal("hide");
                                    $("#userModal").modal("show");

                                    $(inputEmail3).val(mail);
                                    $(inputPassword3).val(password);
                                  } else {
                                    $(detErr)
                                      .css({ display: "block", color: "red" })
                                      .text("enter valid number");
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    } else {
                      $(conPas)
                        .css({ display: "block", color: "red" })
                        .text("password not matching");
                    }
                  }
                } else {
                  $(pasErr)
                    .css({ display: "block", color: "red" })
                    .text("password must have a upper case ,number");
                }
              }
            } else {
              $("#mailErr")
                .css({ display: "block", color: "red" })
                .text("invalid email");
            }
          }
        } else {
          $("#noErr")
            .css({ display: "block", color: "red" })
            .text("Enter valid number");
        }
      }
    } else {
      $("#namErr")
        .css({ display: "block", color: "red" })
        .text("should not have numbers or special char");
    }
  }
}

function updatePass( password ) {
  var oldPass = $("#oldPassword").val();
  var newPass = $(ChaNewPassword).val();
  var conPass = $(newPasswordCon).val();

  // console.log('default password-> '+password);
  // console.log('new pass-> '+oldPass);


  var valPass = /^(?=.*[A-Z])(?=.*[~`!@#$%^&*_+()-|?])(?=.*\d).{8,}$/;

  if (oldPass != password) {
    $(oldPasErr)
      .css({ display: "block", color: "red" })
      .text("*enter correct password");

  } else if (newPass.length == "") {
    $(oldPasErr)
    .css({ display: "none"});
    $(newPasErr)
      .css({ display: "block", color: "red" })
      .text("*enter password");

  } else if (newPass.length < 8) {
    $(newPasErr)
      .css({ display: "block", color: "red" })
      .text("*length must be min character");
  } else if (!valPass.test(newpass)) {
    $(newPasErr)
      .css({ display: "block", color: "red" })
      .text("password must have a upper case ,number");
  }
  //confirm password
  else if (conPass.length == "") {
    $(newPasErr).css({ display: "none" });
    $(newConPasErr)
      .css({ display: "block", color: "red" })
      .text("*enter confirm password");
  } else if (conPass != newPass) {
    $(newPasErr).css({ display: "none" });
    $(newConPasErr)
      .css({ display: "block", color: "red" })
      .text("*password miss match");
  } else {
    $(newPasErr).css({ display: "none" });
    $(newPasErr).css({ display: "none" });
    $(newConPasErr).css({ display: "none" });

    password = newPass;
    $("#chaPassMod").modal("hide");
  }
}

function loginBtn() {
  $("#loginBtn").css({ display: "none" });
  $("#loginMod").modal("hide");
  $(account).css({ display: "block" });
}

function logOutBtn() {
  $("#loginBtn").css({ display: "block" });
  $("#account").css({ display: "none" });
  $(".hideOnLogin").css({ display: "block" });
  $("#updBtn").css({ display: "none" });
}

function editUser() {
  $(".hideOnLogin").css({ display: "none" });
  $(updBtn).css({ display: "flex" });
}


function togglePassword(element) {
  var $passwordField = $(element).closest('.pasHei').find('.form-control');
  var $toggleIcon = $(element).find('img');
  var fieldType = $passwordField.attr('type');
  


  if (fieldType === 'password') {
      $passwordField.attr('type', 'text');
      $toggleIcon.attr({src: "images/passShow-4.png" , alt:"show"});
   
  } else {
      $passwordField.attr('type', 'password');
      $toggleIcon.attr({src: "images/passHIde-4.png" , alt:"hide"});
  
  }
}