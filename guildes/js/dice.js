$(function() {

    $(document).on("change", '#rad_comp', function() {
        $('#res').hide();
        if ($(this).is(':checked')) {
            $('#div_lanceur').show();
            $('#div_comp').show();
            $('#div_comp_niv').show();
            $('#div_des').show();
            $('#div_carac').hide();
            $('#div_carac_niv').hide();
        }
    });
    $(document).on("change", '#rad_noncomp', function() {
        $('#res').hide();
        if ($(this).is(':checked')) {
            $('#div_lanceur').show();
            $('#div_comp').show();
            $('#div_comp_niv').hide();
            $('#div_des').hide();
            $('#div_carac').hide();
            $('#div_carac_niv').hide();
        }
    });
    $(document).on("change", '#rad_carac', function() {
        $('#res').hide();
        if ($(this).is(':checked')) {
            $('#div_lanceur').show();
            $('#div_comp').hide();
            $('#div_des').hide();
            $('#div_comp_niv').hide();
            $('#div_carac').show();
            $('#div_carac_niv').show();
        }
    });

    init();

    $(document).on("click", '#btn_des', function() {
        dice();
    });
});

function init() {
    $('#div_comp').show();
    $('#div_comp_niv').show();
    $('#div_des').show();
    $('#div_carac').hide();
    $('#div_carac_niv').hide();
    $('#res').hide();
}

function dice() {
    $(document).find('#res').html('');

    if ($('#rad_comp').is(':checked')) {

        var comp_id = $('#select_comp').val();
        var comp_niv = $('#comp_niv').val();
        var nb_des = parseInt($('#nb_des').val());

        if (nb_des != 0) {

            if (comp_niv === 'N') {

                var arraydest = [ 0 ];
                var dicedest = (Math.floor(Math.random() * 6)) + 1;
                arraydest.push(dicedest);

                while (dicedest === 6) {
                    var dicedest = (Math.floor(Math.random() * 6)) + 1;
                    arraydest.push(dicedest);
                }

                if (arraydest[0] === 0) {
                    arraydest.shift();
                }
                var sommedest = 0;
                var op = "";
                var j = 0;
                var jetdest = "";

                for (var i = 0; i < arraydest.length; i++) {
                    sommedest = (sommedest * 1) + Number(arraydest[i]);
                    j++;
                    if (arraydest.length > j) {
                        if (i === 0) {
                            op = "(" + op + String(arraydest[i]) + " + ";
                        } else {
                            op = op + String(arraydest[i]) + " + ";
                        }
                    } else {
                        op = op + String(arraydest[i]) + ")";
                    }
                    if (arraydest.length > 1) {
                        op = op.bold().fontcolor("red");
                        jetdest = op + " => " + sommedest;
                    } else {
                        jetdest = String(sommedest);
                        jetdest = jetdest.fontcolor("red");
                    }
                }
                if (nb_des > 1) {
                    var arraydices = [ Number(sommedest) ];
                    var max1 = sommedest;
                    var min1 = 0;

                    if (arraydest.length === 1) {
                        op = op.replace(")", "");
                    }

                    op = op.fontcolor("red");
                    var jettot = op;

                    for (var i = 0; i < (nb_des - 1); i++) {
                        arraydices[i + 1] = (Math.floor(Math.random() * 6)) + 1;

                        if (arraydices[i + 1] > max1) {
                            max1 = arraydices[i + 1];
                            jettot = jettot + " + " + String(max1);
                        } else {
                            min1 = arraydices[i + 1];
                            jettot = jettot + " + " + String(min1);
                        }
                    }
                    jettot = jettot + " => " + String(max1);
                    $('#res').html(jettot + getDiff(max1).bold());
                } else {
                    $('#res').html(jetdest + getDiff(sommedest).bold());
                }
            } else if (comp_niv === 'I') {
                var arraydest = [ 0 ];
                var dicedest = (Math.floor(Math.random() * 6)) + 1;
                arraydest.push(dicedest);

                while (dicedest === 6) {
                    var dicedest = (Math.floor(Math.random() * 6)) + 1;
                    arraydest.push(dicedest);
                }

                if (arraydest[0] === 0) {
                    arraydest.shift();
                }

                var sommedest = 0;
                var op = "";
                var j = 0;
                var jetdest = "";

                for (var i = 0; i < arraydest.length; i++) {
                    sommedest = (sommedest * 1) + Number(arraydest[i]);
                    j++;
                    if (arraydest.length > j) {
                        if (i === 0) {
                            op = "(" + op + String(arraydest[i]) + " + ";
                        } else {
                            op = op + String(arraydest[i]) + " + ";
                        }
                    } else {
                        op = op + String(arraydest[i]) + ")";
                    }
                    if (arraydest.length > 1) {
                        op = op.bold().fontcolor("red");
                        jetdest = op + " => " + sommedest;
                    } else {
                        jetdest = String(sommedest);
                        jetdest = jetdest.fontcolor("red");
                    }
                }
                if (nb_des > 1) {
                    var arraydices = [ Number(sommedest) ];
                    var max1 = sommedest;
                    var max2 = 0;
                    var min1 = 0;

                    if (arraydest.length === 1) {
                        op = op.replace(")", "");
                    }

                    op = op.fontcolor("red");

                    var jettot = op;

                    for (var i = 0; i < (nb_des - 1); i++) {
                        arraydices[i + 1] = (Math.floor(Math.random() * 6)) + 1;

                        if (arraydices[i + 1] > max1) {
                            max2 = max1;
                            max1 = arraydices[i + 1];
                            jettot = jettot + " + " + String(max1);
                        } else {
                            if (arraydices[i + 1] > max2) {
                                max2 = arraydices[i + 1];
                                jettot = jettot + " + " + String(max2);
                            } else {
                                min1 = arraydices[i + 1];
                                jettot = jettot + " + " + String(min1);
                            }
                        }
                    }

                    max1 = max1 * 1 + max2 * 1;
                    jettot = jettot + " => " + String(max1);
                    $('#res').html(jettot + getDiff(max1).bold());
                } else {
                    $('#res').html(jetdest + getDiff(sommedest).bold());
                }

            } else if (comp_niv === 'E') {
                var arraydest = [ 0 ];
                var dicedest = (Math.floor(Math.random() * 6)) + 1;
                arraydest.push(dicedest);

                while (dicedest === 6) {
                    var dicedest = (Math.floor(Math.random() * 6)) + 1;
                    arraydest.push(dicedest);
                }

                if (arraydest[0] === 0) {
                    arraydest.shift();
                }

                var sommedest = 0;
                var op = "";
                var j = 0;
                var jetdest = "";

                for (var i = 0; i < arraydest.length; i++) {
                    sommedest = (sommedest * 1) + Number(arraydest[i]);
                    j++;
                    if (arraydest.length > j) {
                        if (i === 0) {
                            op = "(" + op + String(arraydest[i]) + " + ";
                        } else {
                            op = op + String(arraydest[i]) + " + ";
                        }
                    } else {
                        op = op + String(arraydest[i]) + ")";
                    }
                    if (arraydest.length > 1) {
                        op = op.bold().fontcolor("red");
                        jetdest = op + " => " + sommedest;
                    } else {
                        jetdest = String(sommedest);
                        jetdest = jetdest.fontcolor("red");
                    }
                }
                if (nb_des > 1) {
                    var arraydices = [ Number(sommedest) ];
                    var max1 = sommedest;
                    var max2 = 0;
                    var max3 = 0;
                    var min1 = 0;

                    if (arraydest.length === 1) {
                        op = op.replace(")", "");
                    }

                    op = op.fontcolor("red");

                    var jettot = op;

                    for (var i = 0; i < (nb_des - 1); i++) {
                        arraydices[i + 1] = (Math.floor(Math.random() * 6)) + 1;

                        if (arraydices[i + 1] > max1) {
                            max2 = max1;
                            max3 = max2;
                            max1 = arraydices[i + 1];
                            jettot = jettot + " + " + String(max1);
                        } else if (arraydices[i + 1] > max2) {
                            max3 = max2;
                            max2 = arraydices[i + 1];
                            jettot = jettot + " + " + String(max2);
                        } else if (arraydices[i + 1] > max3) {
                            min1 = max3;
                            max3 = arraydices[i + 1];
                            jettot = jettot + " + " + String(max3);
                        } else {
                            min1 = arraydices[i + 1];
                            jettot = jettot + " + " + String(min1);
                        }
                    }

                    max1 = max1 * 1 + max2 * 1 + max3 * 1;
                    jettot = jettot + " => " + String(max1);
                    $('#res').html(jettot + getDiff(max1).bold());
                } else {
                    $('#res').html(jetdest + getDiff(sommedest).bold());
                }

            }
        }
    } else if ($('#rad_noncomp').is(':checked')) {

        var comp_id = $('#select_comp').val();

        var arraydest = [ 0 ];
        var dicedest = (Math.floor(Math.random() * 6)) + 1;
        arraydest.push(dicedest);

        while (dicedest === 6) {
            var dicedest = (Math.floor(Math.random() * 6)) + 1;
            arraydest.push(dicedest);
        }

        if (arraydest[0] === 0) {
            arraydest.shift();
        }
        var sommedest = 0;
        var op = "";
        var j = 0;
        var jetdest = "";

        for (var i = 0; i < arraydest.length; i++) {
            sommedest = (sommedest * 1) + Number(arraydest[i]);
            j++;
            if (arraydest.length > j) {
                if (i === 0) {
                    op = "(" + op + String(arraydest[i]) + " + ";
                } else {
                    op = op + String(arraydest[i]) + " + ";
                }
            } else {
                op = op + String(arraydest[i]) + ")";
            }
        }
        sommedest -= 3;
        if (arraydest.length > 1) {
            op = op.bold().fontcolor("red");
            jetdest = op + " => " + sommedest;
        } else if (arraydest.length === 1) {
            op = op.replace(")", "");
        } else {
            jetdest = String(sommedest);
            jetdest = jetdest.fontcolor("red");
        }

        op = op.fontcolor("red");

        var jettot = op;
        jettot = jettot + " - 3 " + " = " + sommedest;
        $('#res').html(jettot + getDiff(sommedest).bold());

    } else if ($('#rad_carac').is(':checked')) {

        var carac_id = $('#select_carac').val();
        var nb_des = parseInt($('#carac_niv').val());
        var carac_niv = parseInt($('#carac_niv').val());

        if (carac_id != 0 && nb_des != 0 && carac_niv != 0) {
            var arraydest = [ 0 ];
            var dicedest = (Math.floor(Math.random() * 6)) + 1;
            arraydest.push(dicedest);

            while (dicedest === 6) {
                var dicedest = (Math.floor(Math.random() * 6)) + 1;
                arraydest.push(dicedest);
            }

            if (arraydest[0] === 0) {
                arraydest.shift();
            }
            var sommedest = 0;
            var op = "";
            var j = 0;
            var jetdest = "";

            for (var i = 0; i < arraydest.length; i++) {
                sommedest = (sommedest * 1) + Number(arraydest[i]);
                j++;
                if (arraydest.length > j) {
                    if (i === 0) {
                        op = "(" + op + String(arraydest[i]) + " + ";
                    } else {
                        op = op + String(arraydest[i]) + " + ";
                    }
                } else {
                    op = op + String(arraydest[i]) + ")";
                }
                if (arraydest.length > 1) {
                    op = op.bold().fontcolor("red");
                    jetdest = op + " => " + sommedest;
                } else {
                    jetdest = String(sommedest);
                    jetdest = jetdest.fontcolor("red");
                }
            }
            if (nb_des > 1) {
                var arraydices = [ Number(sommedest) ];
                var max1 = sommedest;
                var min1 = 0;

                if (arraydest.length === 1) {
                    op = op.replace(")", "");
                }

                op = op.fontcolor("red");

                var jettot = op;

                for (var i = 0; i < (nb_des - 1); i++) {
                    arraydices[i + 1] = (Math.floor(Math.random() * 6)) + 1;

                    if (arraydices[i + 1] > max1) {
                        max1 = arraydices[i + 1];
                        jettot = jettot + " + " + String(max1);
                    } else {
                        min1 = arraydices[i + 1];
                        jettot = jettot + " + " + String(min1);
                    }
                }
                var tot = max1 * 1 + carac_niv * 1;
                jettot = jettot + " => " + String(max1) + " + " + String(carac_niv).bold() + " = " + tot;
                $('#res').html(jettot + getDiff(tot).bold());
            } else {
                $('#res').html(jetdest + getDiff(sommedest).bold());
            }
        }
    }
    $('#res').show();
}

function getDiff(tot) {

    var diff = parseInt($('#diff').val());
    var reussi = null;

    if (diff === 0) {
        reussi = '';
    } else {
        if (tot >= diff && tot < diff + 6) {
            reussi = " Réussite normale.";
        } else if (tot >= diff + 6) {
            reussi = " Baraka !";
        } else if (tot < diff && tot > diff - 6) {
            reussi = " Échec.";
        } else if (tot < diff - 6) {
            reussi = " Schkoumoune...";
        }
    }

    switch (reussi) {

    case ' Réussite normale.':
        $('#res').removeClass().addClass('alert alert-success');
        break;
    case ' Baraka !':
        $('#res').removeClass().addClass('alert alert-success');
        break;
    case ' Echec.':
        $('#res').removeClass().addClass('alert alert-warning');
        break;
    case ' Schkoumoune...':
        $('#res').removeClass().addClass('alert alert-danger');
        break;
    default:
        $('#res').removeClass().addClass('alert alert-info');
        break;
    }
    if (reussi !== null) {
        return reussi;
    }
}