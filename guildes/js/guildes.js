function Arme(id, nom, init, att, def, blessure, enc, fort, cad, pmoy, peff, comp_id) {
    this.id = id;
    this.nom = nom;
    this.init = init;
    this.att = att;
    this.def = def;
    this.blessure = blessure;
    this.enc = enc;
    this.fort = fort;
    this.cad = cad;
    this.pmoy = pmoy;
    this.peff = peff;
    this.comp_id = comp_id;
}

function Armure(id, nom, init, att, def, protec, enc, fort) {
    this.id = id;
    this.nom = nom;
    this.init = init;
    this.att = att;
    this.def = def;
    this.protec = protec;
    this.enc = enc;
    this.fort = fort;
}

function Artefact(id, nom, maison_id, type_id) {
    this.id = id;
    this.nom = nom;
    this.maison_id = maison_id;
    this.type_id = type_id;
}

function ArtefactType(id, nom) {
    this.id = id;
    this.nom = nom;
}

function Carac(id, nom, type_id) {
    this.id = id;
    this.nom = nom;
    this.type_id = type_id;
}

function CaracType(id, nom) {
    this.id = id;
    this.nom = nom;
}

function CDBAcademie(id, nom, effet) {
    this.id = id;
    this.nom = nom;
    this.effet = effet;
}

function CDBAll(id, nom, effet) {
    this.id = id;
    this.nom = nom;
    this.effet = effet;
}

function CDBMaison(id, titre, cdb, effet, mes, mes_effet, maison_id) {
    this.id = id;
    this.titre = titre;
    this.cdb = cdb;
    this.effet = effet;
    this.mes = mes;
    this.mes_effet = mes_effet;
    this.maison_id = maison_id;
}

function Chapitre(id, nom) {
    this.id = id;
    this.nom = nom;
}

function Competence(id, nom, chapitre_id, carac_id, apprenti, academie) {
    this.id = id;
    this.nom = nom;
    this.chapitre_id = chapitre_id;
    this.carac_id = carac_id;
    this.apprenti = apprenti;
    this.academie = academie;
}

function CompetenceMetier(id, comp_id, metier_id) {
    this.id = id;
    this.comp_id = comp_id;
    this.metier_id = metier_id;
}

function EquipCategorie(id, nom) {
    this.id = id;
    this.nom = nom;
}

function Equipement(id, nom, prix, rarete, base, categorie_id) {
    this.id = id;
    this.nom = nom;
    this.prix = prix;
    this.rarete = rarete;
    this.base = base;
    this.categorie_id = categorie_id;
}

function Machination(id, nom, niveau, description, novice, initie, expert, effet_pervers, chapitre_id) {
    this.id = id;
    this.nom = nom;
    this.niveau = niveau;
    this.description = description;
    this.novice = novice;
    this.initie = initie;
    this.expert = expert;
    this.effet_pervers = effet_pervers;
    this.chapitre_id = chapitre_id;
}

function Maison(id, nom, art) {
    this.id = id;
    this.nom = nom;
    this.art = art;
}

function Mesall(id, nom, effet) {
    this.id = id;
    this.nom = nom;
    this.effet = effet;
}

function Mesacademie(id, nom, effet) {
    this.id = id;
    this.nom = nom;
    this.effet = effet;
}

function Metier(id, nom, maison_id) {
    this.id = id;
    this.nom = nom;
    this.maison_id = maison_id;
}

function Sort(id, nom, diff, type, portee, cible, effet, maison_id) {
    this.id = id;
    this.nom = nom;
    this.diff = diff;
    this.type = type;
    this.portee = portee;
    this.cible = cible;
    this.effet = effet;
    this.maison_id = maison_id;
}

function Sortilege(id, nom, diff, portee, effet, maison_id) {
    this.id = id;
    this.nom = nom;
    this.diff = diff;
    this.portee = portee;
    this.effet = effet;
    this.maison_id = maison_id;
}

function Tour(id, nom, portee, cible, duree, effet, maison_id) {
    this.id = id;
    this.nom = nom;
    this.portee = portee;
    this.cible = cible;
    this.duree = duree;
    this.effet = effet;
    this.maison_id = maison_id;
}

$(function() {

    $("[include-html]").each(function(index) {
        $(this).load($(this).attr("include-html"));
        $(this).removeAttr("include-html");
    });

    $(document).on("click", "table th", function(index) {
        var table = $(this).parents("table:first");
        sortTable(table, $(this).index());
    });

    $.getJSON("json/guildes.json", function(data) {

        if (data !== null) {
            if (data.armes.length > 0) {
                for (var i = 0; i < data.armes.length; i++) {
                    $(document).find("#body-armes").append(
                            "<tr>" + "<td>" + data.armes[i].nom + "</td>" + "<td>" + data.armes[i].init + "</td>" + "<td>" + data.armes[i].att + "</td>" + "<td>" + data.armes[i].def + "</td>" + "<td>" + data.armes[i].blessure + "</td>" + "<td>" + data.armes[i].enc + "</td>" + "<td>"
                                    + data.armes[i].fort + "</td>" + "<td>" + data.armes[i].cad + "</td>" + "<td>" + data.armes[i].pmoy + "</td>" + "<td>" + data.armes[i].peff + "</td>" + "</tr>");
                }
            }
            if (data.armures.length > 0) {
                for (var i = 0; i < data.armures.length; i++) {
                    $(document).find("#body-armures").append(
                            "<tr>" + "<td>" + data.armures[i].nom + "</td>" + "<td>" + data.armures[i].init + "</td>" + "<td>" + data.armures[i].att + "</td>" + "<td>" + data.armures[i].def + "</td>" + "<td>" + data.armures[i].protec + "</td>" + "<td>" + data.armures[i].enc + "</td>" + "<td>"
                                    + data.armures[i].fort + "</td>" + "</tr>");
                }
            }
            if (data.equipement.length > 0) {
                for (var i = 0; i < data.equipement.length; i++) {
                    var filteredData = data.equipcategorie.filter(function(item) {
                        return item.id === data.equipement[i].categorie_id;
                    });
                    $(document).find("#body-equip").append("<tr>" + "<td>" + data.equipement[i].nom + "</td>" + "<td>" + data.equipement[i].prix + "</td>" + "<td>" + data.equipement[i].rarete + "</td>" + "<td>" + filteredData[0].nom + "</td>" + "</tr>");
                }
            }
            if (data.cdball.length > 0) {

                for (var i = 0; i < data.cdball.length; i++) {
                    $(document).find("#body-cdbmes").append('<div class="thumbnail col-md-4 col-xs-12">' + '<div class="caption"><p class="bold">' + data.cdball[i].nom + '</p>' + '<p>' + data.cdball[i].effet + '</p>' + '</div></div>');
                }

                $(document).find("#body-cdbmes").append('<div class="page-header col-xs-12"><h3>Mésaventures</h3></div>');

                for (var i = 0; i < data.mesall.length; i++) {
                    $(document).find("#body-cdbmes").append('<div class="thumbnail col-md-4 col-xs-12">' + '<div class="caption"><p class="bold">' + data.mesall[i].nom + '</p>' + '<p>' + data.mesall[i].effet + '</p>' + '</div></div>');
                }
            }

            if (data.cdbmaison.length > 0) {

                var htmlKeys = [ "#body-venn", "#body-ashra", "#body-gehem", "#body-felsi", "#body-ulmeq", "body-kheyz" ];

                for (var i = 0; i < data.maisons.length; i++) {
                    var cdbMaisons = data.cdbmaison.filter(function(item) {
                        return item.maison_id === data.maisons[i].id;
                    });

                    for (var j = 0; j < cdbMaisons.length; j++) {

                        $(document).find(htmlKeys[i]).append(
                                '<div class="thumbnail col-md-4 col-xs-12">' + '<div class="caption"><p class="bold">' + cdbMaisons[j].titre + '</p>' + '<p>' + cdbMaisons[j].cdb + '</p>' + '<p><i>' + cdbMaisons[j].effet + '</i></p>' + '<hr></hr>' + '<p>' + cdbMaisons[j].mes + '</p>' + '<p><i>'
                                        + cdbMaisons[j].mes_effet + '</i></p>' + '</div></div>');
                    }

                }
            }

            if (data.tours.length > 0) {
                for (var i = 0; i < data.maisons.length; i++) {
                    var tours = data.tours.filter(function(item) {
                        return item.maison_id === data.maisons[i].id;
                    });
                    for (var j = 0; j < tours.length; j++) {
                        $(document).find("#body-tours")
                                .append("<tr>" + "<td>" + tours[j].nom + "</td>" + "<td>" + tours[j].portee + "</td>" + "<td>" + tours[j].cible + "</td>" + "<td>" + tours[j].duree + "</td>" + "<td>" + tours[j].effet + "</td>" + "<td>" + data.maisons[i].nom + "</td>" + "</tr>");
                    }
                }
            }

            if (data.sorts.length > 0) {
                for (var i = 0; i < data.maisons.length; i++) {
                    var sorts = data.sorts.filter(function(item) {
                        return item.maison_id === data.maisons[i].id;
                    });
                    for (var j = 0; j < sorts.length; j++) {
                        $(document).find("#body-sorts").append("<tr>" + "<td>" + sorts[j].nom + "</td>" + "<td>" + sorts[j].diff + "</td>" + "<td>" + sorts[j].type + "</td>" + "<td>" + sorts[j].portee + "</td>" + "<td>" + sorts[j].cible + "</td>" + "<td>" + data.maisons[i].nom + "</td>" + "</tr>");
                    }
                }
            }

            if (data.sortileges.length > 0) {
                for (var i = 0; i < data.maisons.length; i++) {
                    var sortileges = data.sortileges.filter(function(item) {
                        return item.maison_id === data.maisons[i].id;
                    });
                    for (var j = 0; j < sortileges.length; j++) {
                        $(document).find("#body-sortileges").append("<tr>" + "<td>" + sortileges[j].nom + "</td>" + "<td>" + sortileges[j].diff + "</td>" + "<td>" + sortileges[j].portee + "</td>" + "<td>" + data.maisons[i].nom + "</td>" + "</tr>");
                    }
                }
            }

            if (data.competences.length > 0) {
                for (var i = 0; i < data.competences.length; i++) {
                    var chapitres = data.chapitres.filter(function(item) {
                        return item.id === data.competences[i].chapitre_id;
                    });
                    var caracs = data.caracs.filter(function(item) {
                        return item.id === data.competences[i].carac_id;
                    });
                    var apprenti = "Oui";
                    if (data.competences[i].apprenti === "0") {
                        apprenti = "Non";
                    }
                    var academie = "Oui";
                    if (data.competences[i].academie === "0") {
                        academie = "Non";
                    }
                    $(document).find("#body-comp").append("<tr>" + "<td>" + data.competences[i].nom + "</td>" + "<td>" + chapitres[0].nom + "</td>" + "<td>" + caracs[0].nom + "</td>" + "<td>" + apprenti + "</td>" + "<td>" + academie + "</td>" + "</tr>");
                    $(document).find("#select_comp").append($("<option></option>").attr("value", data.competences[i].id).text(data.competences[i].nom));
                }
            }

            if (data.machinations.length > 0) {
                for (var i = 0; i < data.machinations.length; i++) {
                    var chapitres = data.chapitres.filter(function(item) {
                        return item.id === data.machinations[i].chapitre_id;
                    });
                    $(document).find("#body-machi").append(
                            "<tr>" + "<td>" + data.machinations[i].nom + "</td>" + "<td>" + data.machinations[i].niveau + "</td>" + "<td>" + data.machinations[i].description + "</td>" + "<td>" + data.machinations[i].novice + "</td>" + "<td>" + data.machinations[i].initie + "</td>" + "<td>"
                                    + data.machinations[i].expert + "</td>" + "<td>" + data.machinations[i].effet_pervers + "</td>" + "<td>" + chapitres[0].nom + "</td>" + "</tr>");
                }
            }

            data.metiers.sort(predicateBy("nom"));
            data.competences.sort(predicateBy("nom"));

            if (data.metiers.length > 0) {
                for (var i = 0; i < data.metiers.length; i++) {
                    $(document).find("#body-metiers-metier").append('<li><a class="list-group-item" data-metier-id="' + data.metiers[i].id + '" href="#">' + data.metiers[i].nom + "</a></li>");
                    $(document).find("#perso-metiers").append($("<option></option>").attr("value", data.metiers[i].id).text(data.metiers[i].nom));
                }
                for (var i = 0; i < data.competences.length; i++) {
                    $(document).find("#body-metiers-comp").append('<li><a class="list-group-item" data-comp-id="' + data.competences[i].id + '" href="#">' + data.competences[i].nom + "</a></li>");
                }
                for (var i = 0; i < data.caracs.length; i++) {
                    $(document).find("#body-metiers-carac").append('<li><a class="list-group-item" data-carac-id="' + data.caracs[i].id + '" href="#">' + data.caracs[i].nom + "</a></li>");
                    $(document).find("#select_carac").append($("<option></option>").attr("value", data.caracs[i].id).text(data.caracs[i].nom));
                }
                for (var i = 0; i < data.chapitres.length; i++) {
                    $(document).find("#body-metiers-chap").append('<li><a class="list-group-item" data-chap-id="' + data.chapitres[i].id + '" href="#">' + data.chapitres[i].nom + "</a></li>");
                }
            }

            $(document).find("table").each(function(index) {
                sortTable($(this), 0);
            });

            $(document).on("click", "#body-metiers-metier li a", function(e) {
                e.preventDefault();

                var metier_id = $(this).attr("data-metier-id");

                if (metier_id !== "") {

                    $(document).find("#body-metiers-comp li a").removeClass("active");
                    $(document).find("#body-metiers-metier li a").removeClass("active");
                    $(document).find("#body-metiers-carac li a").removeClass("active");
                    $(document).find("#body-metiers-chap li a").removeClass("active");
                    $(this).addClass("active");

                    var compmetiers = data.competencemetier.filter(function(item) {
                        return item.metier_id === metier_id;
                    });
                    $(document).find("#body-metiers-comp li a").removeClass("active");
                    for (var i = 0; i < compmetiers.length; i++) {
                        $(document).find("#body-metiers-comp li a[data-comp-id='" + compmetiers[i].comp_id + "']").addClass("active");
                    }
                }
            });

            $(document).on("click", "#body-metiers-comp li a", function(e) {
                e.preventDefault();

                var comp_id = $(this).attr("data-comp-id");
                $("#body-metiers-comp li a").removeClass("active");

                if (comp_id !== "") {

                    $(document).find("#body-metiers-comp li a").removeClass("active");
                    $(document).find("#body-metiers-metier li a").removeClass("active");
                    $(document).find("#body-metiers-carac li a").removeClass("active");
                    $(document).find("#body-metiers-chap li a").removeClass("active");
                    $(this).addClass("active");

                    var compmetiers = data.competencemetier.filter(function(item) {
                        return item.comp_id === comp_id;
                    });

                    $(document).find("#body-metiers-metier li a").removeClass("active");
                    for (var i = 0; i < compmetiers.length; i++) {
                        $(document).find("#body-metiers-metier li a[data-metier-id='" + compmetiers[i].metier_id + "']").addClass("active");
                    }

                    var comps = data.competences.filter(function(item) {
                        return item.id === comp_id;
                    });

                    $(document).find("#body-metiers-carac li a[data-carac-id='" + comps[0].carac_id + "']").addClass("active");
                    $(document).find("#body-metiers-chap li a[data-chap-id='" + comps[0].chapitre_id + "']").addClass("active");
                }
            });

            $(document).on("click", "#body-metiers-carac li a", function(e) {
                e.preventDefault();

                var carac_id = $(this).attr("data-carac-id");
                $("#body-metiers-carac li a").removeClass("active");

                if (carac_id !== "") {

                    $(document).find("#body-metiers-comp li a").removeClass("active");
                    $(document).find("#body-metiers-metier li a").removeClass("active");
                    $(document).find("#body-metiers-carac li a").removeClass("active");
                    $(document).find("#body-metiers-chap li a").removeClass("active");
                    $(this).addClass("active");

                    var compcaracs = data.competences.filter(function(item) {
                        return item.carac_id === carac_id;
                    });

                    for (var i = 0; i < compcaracs.length; i++) {
                        $(document).find("#body-metiers-comp li a[data-comp-id='" + compcaracs[i].id + "']").addClass("active");
                    }

                }
            });

            $(document).on("click", "#body-metiers-chap li a", function(e) {
                e.preventDefault();

                var chap_id = $(this).attr("data-chap-id");
                $("#body-metiers-chap li a").removeClass("active");

                if (chap_id !== "") {

                    $(document).find("#body-metiers-comp li a").removeClass("active");
                    $(document).find("#body-metiers-metier li a").removeClass("active");
                    $(document).find("#body-metiers-carac li a").removeClass("active");
                    $(document).find("#body-metiers-chap li a").removeClass("active");
                    $(this).addClass("active");

                    var compchaps = data.competences.filter(function(item) {
                        return item.chapitre_id === chap_id;
                    });

                    for (var i = 0; i < compchaps.length; i++) {
                        $(document).find("#body-metiers-comp li a[data-comp-id='" + compchaps[i].id + "']").addClass("active");
                    }

                }
            });

            $(document).on("change", "#perso-caracs input[type='radio']", function(e) {
                var puces = 0;
                $("#perso-caracs label.active").each(function(index) {
                    puces += parseInt($(this).text());
                });
                $("#caracsPts").text(puces);
            });

            $(document).on("change", "#perso-metiers", function(e) {
                var metier_id = $(this).val();
                var compmetiers = data.competencemetier.filter(function(item) {
                    return item.metier_id === metier_id;
                });

                for (var i = 0; i < compmetiers.length; i++) {
                    var comp = data.competences.filter(function(item) {
                        return item.id === compmetiers[i].comp_id;
                    });
                    $("#body-perso-metiers-comp").append("<tr>" + "<td><span data-comp-id='"+comp[0].id+"'>" + comp[0].nom + "</span></td>" + "<td><select class='form-control'><option value='NC' selected>NC</option><option value='N'>Novice</option><option value='I'>Initié</option><option value='E'>Expert</option></td>" + "</tr>");
                }
                
                var compaca = data.competences.filter(function(item) {
                    return item.academie === "1";
                });
                
                for (var i = 0; i < compaca.length; i++) {
                    
                    var trouve = false;
                    
                    $("#body-perso-metiers-comp tr td:first-child span").each(function() {
                        if($(this).attr("data-comp-id") === compaca[i].id) {
                            trouve = true;
                        }
                    });
                    
                    if (!trouve) {
                        $("#body-perso-metiers-compaca").append("<tr>" + "<td>" + compaca[i].nom + "</td>" + "<td><select class='form-control'><option value='NC' selected>NC</option><option value='N'>Novice</option><option value='I'>Initié</option><option value='E'>Expert</option></td>" + "</tr>");
                    }
                }
            });

            $(document).on("change", "#body-perso-metiers-comp select", function(e) {
                var compPts = 0;
                $(document).find("#body-perso-metiers-comp select").each(function() {
                    if ($(this).val() === "N") {
                        compPts++;
                    } else if ($(this).val() === "I") {
                        compPts += 3;
                    } else if ($(this).val() === "E") {
                        compPts += 7;
                    }
                });
                $("#compPts").text(compPts);
            });
            
            $(document).on("change", "#body-perso-metiers-compaca select", function(e) {
                var compAcaPts = 0;
                $(document).find("#body-perso-metiers-compaca select").each(function() {
                    if ($(this).val() === "N") {
                        compAcaPts++;
                    } else if ($(this).val() === "I") {
                        compAcaPts += 3;
                    } else if ($(this).val() === "E") {
                        compAcaPts += 7;
                    }
                });
                $("#compAcaPts").text(compAcaPts);
            });

        }

    });

});

function sortTable(table, n) {
    var rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /*
     * Make a loop that will continue until no switching has been done:
     */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.find("TR");
        /*
         * Loop through all table rows (except the first, which contains table
         * headers):
         */
        for (i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /*
             * Get the two elements you want to compare, one from current row
             * and one from the next:
             */
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /*
             * Check if the two rows should switch place, based on the
             * direction, asc or desc:
             */
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /*
             * If a switch has been marked, make the switch and mark that a
             * switch has been done:
             */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /*
             * If no switching has been done AND the direction is "asc", set the
             * direction to "desc" and run the while loop again.
             */
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

function predicateBy(prop) {
    return function(a, b) {
        if (a[prop] > b[prop]) {
            return 1;
        } else if (a[prop] < b[prop]) {
            return -1;
        }
        return 0;
    }
}
