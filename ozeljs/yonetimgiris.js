//== Class Definition
var SnippetLogin = function() {


	//alert(getBaseURL());

	$("#kullaniciad").focus();
	var login = $('#m_login');


	var showErrorMsg = function(form, type, msg) {
		var alert = $('<div class="m-alert m-alert--outline alert alert-' + type + ' alert-dismissible" role="alert">\
			<button type="button" class="close" data-dismiss="alert" aria-label="Close"></button>\
			<span></span>\
		</div>');

		form.find('.alert').remove();
		alert.prependTo(form);
		//alert.animateClass('fadeIn animated');
		mUtil.animateClass(alert[0], 'fadeIn animated');
		alert.find('span').html(msg);
	}

	//== Private Functions

	var displaySignUpForm = function() {
		login.removeClass('m-login--forget-password');
		login.removeClass('m-login--signin');

		login.addClass('m-login--signup');
		mUtil.animateClass(login.find('.m-login__signup')[0], 'flipInX animated');
	}

	var displaySignInForm = function() {
		login.removeClass('m-login--forget-password');
		login.removeClass('m-login--signup');

		login.addClass('m-login--signin');
		mUtil.animateClass(login.find('.m-login__signin')[0], 'flipInX animated');
		//login.find('.m-login__signin').animateClass('flipInX animated');
	}

	var displayForgetPasswordForm = function() {
		login.removeClass('m-login--signin');
		login.removeClass('m-login--signup');

		login.addClass('m-login--forget-password');
		//login.find('.m-login__forget-password').animateClass('flipInX animated');
		mUtil.animateClass(login.find('.m-login__forget-password')[0], 'flipInX animated');

	}

	var handleFormSwitch = function() {
		$('#m_login_forget_password').click(function(e) {
			e.preventDefault();
			displayForgetPasswordForm();
		});

		$('#m_login_forget_password_cancel').click(function(e) {
			e.preventDefault();
			displaySignInForm();
		});

		$('#m_login_signup').click(function(e) {
			e.preventDefault();
			displaySignUpForm();
		});

		$('#m_login_signup_cancel').click(function(e) {
			e.preventDefault();
			displaySignInForm();
		});
	}

	var handleSignInFormSubmit = function() {
		$('#m_login_signin_submit').click(function(e) {
			e.preventDefault();
			var btn = $(this);
			var form = $(this).closest('form');

			form.validate({
				rules: {
					kullaniciad: {
						required: true,
					},
					kullanicisifre: {
						required: true
					}
				}
			});

			if (!form.valid()) {
				return;
			}

			buttonloadyap(btn);

			var kullaniciad = document.getElementById("kullaniciad").value;
			var kullanicisifre = document.getElementById("kullanicisifre").value;
			var clientDateGun = new Date();
			clientDateGun = clientDateGun.getDate();


			var kod;
			try {
				kod = document.getElementById("kod").value;
			}
			catch(e) {
				kod = "";
			}

			var remember = document.getElementById("remember").value;

			$.ajax({
				type: "POST",
				url: getBaseURL() + "Yonetimgiris/loginControl",
				dataType: "json",
				data: {
					kullaniciad: kullaniciad, kullanicisifre: kullanicisifre,
					kod: kod, remember: remember, clientdategun: clientDateGun
				},
				//beforeSend: function (xhr) {
					//xhr.setRequestHeader("RequestVerificationToken",
						//$('input:hidden[name="__RequestVerificationToken"]').val());
				//},
				success: function (result, status, xhr, $form) {

					if (result.durum != "Kaydedildi") {
						// similate 300ms delay

						setTimeout(function () {
							buttonloadbitir(btn);
							showErrorMsg(form, 'danger', result.hatastr);
						}, 0);
						buttonloadbitir(btn);

						//$("#loginmodal").show();
						//$("#loginaciklamastr").html(result.hatastr);

                        if (result.hatastr == "Resim Kodu hatalı") {
                            location.reload();
                        }

					}
					if (result.durum == "Kaydedildi") {
						location.href = result.hatastr;
					}
				}
			});
		  
		});
	}

	var handleSignUpFormSubmit = function() {
		$('#m_login_signup_submit').click(function(e) {
			e.preventDefault();

			var btn = $(this);
			var form = $(this).closest('form');

			form.validate({
				rules: {
					fullname: {
						required: true
					},
					email: {
						required: true,
						email: true
					},
					password: {
						required: true
					},
					rpassword: {
						required: true
					},
					agree: {
						required: true
					}
				}
			});

			if (!form.valid()) {
				return;
			}

			buttonloadyap(btn);

			
		});
	}


	var handleForgetPasswordFormSubmit = function() {
		$('#m_login_forget_password_submit').click(function(e) {
			e.preventDefault();

			var btn = $(this);
			var form = $(this).closest('form');

			form.validate({
				rules: {
					m_eposta: {
						required: true,
						email: true
					},
					m_kullanicisifre: {
						required: true
					}
				}
			});

			if (!form.valid()) {
				return;
			}

			buttonloadyap(btn);
			var m_eposta = document.getElementById("m_eposta").value;

			$.ajax({
				type: "POST",
				url: getBaseURL() + "Yonetimgiris/forgetPasswordOnlyMail",
				dataType: "json",
				data: { m_eposta: m_eposta },
				success: function (result, status, xhr, $form) {

					if (result.durum != "Kaydedildi") {
						// similate 2s delay
						setTimeout(function () {
							buttonloadbitir(btn);
							showErrorMsg(form, 'danger', result.hatastr);
						}, 2000);

					}

					if (result.durum == "Kaydedildi") {
						showtoast("success", "Tebrikler", "Yeni şifreniz e-posta adresinize gönderildi.");
						buttonloadbitir(btn);
					}
				}
			});

		});
	}



	var handleSignInWithCertificateFormSubmit = function () {

		$('#submit_eimza').click(function (e) {
			e.preventDefault();
			$("#modaleimza").modal('show');
		});

	}

	//== Public Functions
	return {
		// public functions
		init: function () {
	 
			handleFormSwitch();
			handleSignInFormSubmit();
			handleSignUpFormSubmit();
			handleForgetPasswordFormSubmit();
			handleSignInWithCertificateFormSubmit();
		}
	};
}();

//== Class Initialization
jQuery(document).ready(function() {
 
	SnippetLogin.init();

});

