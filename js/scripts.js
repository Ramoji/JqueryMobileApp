$(document).on('pageinit','#home',function(event) {

for (i = 0; i <= 50; i++) {
   $("#something_select").append('<option value="some' + i + '">Something ' + i + '</option>');
}

addAnotherThings();
addFinalThings();

$("#another_select").parent().parent().hide();
$("#final_select").parent().parent().hide();

function addAnotherThings() {
    ii = 0;

    for (i = 0; i <= 500; i++) {
        if ((i % 10) == 0) {
            ii++;
        }
        $('#another_select').append('<option value="other' + i + '" id="some' + ii + '">Another ' + i + '</option>');
    }
}

function addFinalThings() {
    ii = 0;

    for (i = 0; i <= 1000; i++) {
        if ((i % 10) == 0) {
            ii++;
        }
        $('#final_select').append('<option value="final' + i + '" id="other' + ii + '">Final ' + i + '</option>');
    }
}

$('#something_select').change(function() {
    var selectedSomething = $(this).val();
    var selectFirst = 0;
    addAnotherThings();

    $("#another_select option").each(function() {
        if ($(this).attr('id') != selectedSomething) {
            $(this).remove();
        } else {
            if (selectFirst < 1) {
                $(this).attr('id', selectedSomething).attr('selected', 'selected');
            }
            selectFirst++;
        }
    });
    $("#another_select").parent().parent().show();

    if ($('#another_select option').size() == 0) {
        $('#another_select').append('<option value="noother">Nothing Found</option>');
    }
});

$('#another_select').change(function() {
    var selectedAnother = $(this).val();
    var selectFirst = 0;
    addFinalThings();

    $("#final_select option").each(function() {
        if ($(this).attr('id') != selectedAnother) {
            $(this).remove();
        } else {
            if (selectFirst < 1) {
                $(this).attr('id', selectedAnother).attr('selected', 'selected');
            }
            selectFirst++;
        }
    });
    $("#final_select").parent().parent().show();

    if ($('#final_select option').size() == 0) {
        $('#final_select').append('<option value="nothing">No things for another thing</option>');
    }
});/* Custom scripts here */

});