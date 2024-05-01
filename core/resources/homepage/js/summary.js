/*
 * Copyright (c) 2022 - 2024 Bearsampp
 * License:  GNU General Public License version 3 or later; see LICENSE.txt
 * Website: https://bearsampp.com
 * Github: https://github.com/Bearsampp
 */

$(document).ready(function() {
  if ($('.summary').length) {
    $.ajax({
      data: {
        proc: 'summary'
      },
      success: function(data) {
        $('.summary-binapache').append(data.binapache);
        $('.summary-binapache').find('.loader').remove();

        $('.summary-binfilezilla').append(data.binfilezilla);
        $('.summary-binfilezilla').find('.loader').remove();

        $('.summary-binmailhog').append(data.binmailhog);
        $('.summary-binmailhog').find('.loader').remove();

        $('.summary-binmariadb').append(data.binmariadb);
        $('.summary-binmariadb').find('.loader').remove();

        $('.summary-binmysql').append(data.binmysql);
        $('.summary-binmysql').find('.loader').remove();

        $('.summary-binpostgresql').append(data.binpostgresql);
        $('.summary-binpostgresql').find('.loader').remove();

        $('.summary-binmemcached').append(data.binmemcached);
        $('.summary-binmemcached').find('.loader').remove();

        $('.summary-binnodejs').append(data.binnodejs);
        $('.summary-binnodejs').find('.loader').remove();

        $('.summary-binphp').append(data.binphp);
        $('.summary-binphp').find('.loader').remove();
      }
    });
  }
});