/* global wcbcf_public_params */
jQuery(function ($) {
  const vindi_plugin = {
    init: function () {
      /* woocommerce-extra-checkout-fields-for-brazil input mask toggle value
      if (wcbcf_public_params.maskedinput === "yes")
       */
      vindi_plugin.maskCC();
    },
    maskCC: function () {
      $("#vindi_ccNo").mask("0000 0000 0000 0000");
      $("#vindi_expdate").mask("00/00");
      $("#vindi_cvv").mask("000");
    },
    unmaskCC: function () {
      $("#vindi_ccNo").unmask();
      $("#vindi_expdate").unmask();
      $("#vindi_cvv").unmask();
    },
  };

  vindi_plugin.init();
});
