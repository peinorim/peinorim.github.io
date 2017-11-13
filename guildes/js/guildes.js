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

    $("[w3-include-html]").each(function(index) {
        $(this).load($(this).attr("w3-include-html"));
        $(this).removeAttr("w3-include-html");
    });
    
    $.getJSON("json/guildes.json", function(data) {

        if (data !== null) {
            if(data.armes.length > 0) {
                 for (var i = 0; i < data.armes.length; i++) {
                    $(document).find("#body-armes").append("<tr>"+
                    "<td>" + data.armes[i].nom + "</td>"+
                    "<td>" + data.armes[i].init + "</td>"+
                    "<td>" + data.armes[i].att + "</td>"+
                    "<td>" + data.armes[i].def + "</td>"+
                    "<td>" + data.armes[i].blessure + "</td>"+
                    "<td>" + data.armes[i].enc + "</td>"+
                    "<td>" + data.armes[i].fort + "</td>"+
                    "<td>" + data.armes[i].cad + "</td>"+
                    "<td>" + data.armes[i].pmoy + "</td>"+
                    "<td>" + data.armes[i].peff + "</td>"+
                    "</tr>");
                }
            }
            if(data.armures.length > 0) {
                 for (var i = 0; i < data.armures.length; i++) {
                     $(document).find("#body-armures").append("<tr>"+
                     "<td>" + data.armures[i].nom + "</td>"+
                     "<td>" + data.armures[i].init + "</td>"+
                     "<td>" + data.armures[i].att + "</td>"+
                     "<td>" + data.armures[i].def + "</td>"+
                     "<td>" + data.armures[i].protec + "</td>"+
                     "<td>" + data.armures[i].enc + "</td>"+
                     "<td>" + data.armures[i].fort + "</td>"+
                     "</tr>");
                 }
            }
            if(data.equipement.length > 0) {
                for (var i = 0; i < data.equipement.length; i++) {
                    var filteredData = data.equipcategorie.filter(function(item) {
                        return item.id.indexOf(data.equipement[i].categorie_id) > -1;
                    });
                    $(document).find("#body-equip").append("<tr>"+
                    "<td>" + data.equipement[i].nom + "</td>"+
                    "<td>" + data.equipement[i].prix + "</td>"+
                    "<td>" + data.equipement[i].rarete + "</td>"+
                    "<td>" + filteredData[0].nom + "</td>"+
                    "</tr>");
                }
            }
            if(data.cdball.length > 0) {
                
                $(document).find("#body-cdbmes").append('<div class="page-header col-xs-12"><h3>Coups de bol</h3></div>');
                
                for (var i = 0; i < data.cdball.length; i++) {
                    $(document).find("#body-cdbmes").append(
                            '<div class="thumbnail col-md-4 col-xs-12">'+
                            '<div class="caption"><p class="bold">'+data.cdball[i].nom+'</p>'+
                            '<p>'+data.cdball[i].effet+'</p>'+
                            '</div></div>'
                    );
                }
                
                $(document).find("#body-cdbmes").append('<div class="page-header col-xs-12"><h3>Mésaventures</h3></div>');
                
                for (var i = 0; i < data.mesall.length; i++) {
                    $(document).find("#body-cdbmes").append(
                            '<div class="thumbnail col-md-4 col-xs-12">'+
                            '<div class="caption"><p class="bold">'+data.mesall[i].nom+'</p>'+
                            '<p>'+data.mesall[i].effet+'</p>'+
                            '</div></div>'
                    );
                }
            }
            
            if (data.cdbmaison.length > 0) {
                
                var htmlKeys = ["#body-venn","#body-ashra","#body-gehem","#body-felsi","#body-ulmeq","body-kheyz"];
                
                for (var i = 0; i < data.maisons.length; i++) {
                    var cdbMaisons = data.cdbmaison.filter(function(item) {
                        return item.maison_id.indexOf(data.maisons[i].id) > -1;
                    });

                    for (var j = 0; j < cdbMaisons.length; j++) {
                        
                        $(document).find(htmlKeys[i]).append(
                                '<div class="thumbnail col-md-4 col-xs-12">'+
                                '<div class="caption"><p class="bold">'+cdbMaisons[j].titre+'</p>'+
                                '<p>'+cdbMaisons[j].cdb+'</p>'+
                                '<p><i>'+cdbMaisons[j].effet+'</i></p>'+
                                '<hr></hr>'+
                                '<p>'+cdbMaisons[j].mes+'</p>'+
                                '<p><i>'+cdbMaisons[j].mes_effet+'</i></p>'+
                                '</div></div>'
                        );
                    }
                    
                }
            }
            
            if(data.tours.length > 0) {
                for (var i = 0; i < data.maisons.length; i++) {
                    var tours = data.tours.filter(function(item) {
                        return item.maison_id.indexOf(data.maisons[i].id) > -1;
                    });
                    for (var j = 0; j < tours.length; j++) {
                        $(document).find("#body-tours").append("<tr>"+
                        "<td>" + tours[j].nom + "</td>"+
                        "<td>" + tours[j].portee + "</td>"+
                        "<td>" + tours[j].cible + "</td>"+
                        "<td>" + tours[j].duree + "</td>"+
                        "<td>" + tours[j].effet + "</td>"+
                        "<td>" + data.maisons[i].nom + "</td>"+
                        "</tr>");
                    }
                }
            }
            
            if(data.sorts.length > 0) {
                for (var i = 0; i < data.maisons.length; i++) {
                    var sorts = data.sorts.filter(function(item) {
                        return item.maison_id.indexOf(data.maisons[i].id) > -1;
                    });
                    for (var j = 0; j < sorts.length; j++) {
                        $(document).find("#body-sorts").append("<tr>"+
                        "<td>" + sorts[j].nom + "</td>"+
                        "<td>" + sorts[j].diff + "</td>"+
                        "<td>" + sorts[j].type + "</td>"+
                        "<td>" + sorts[j].portee + "</td>"+
                        "<td>" + sorts[j].cible + "</td>"+
                        "<td>" + data.maisons[i].nom + "</td>"+
                        "</tr>");
                    }
                }
            }
            
            if(data.sortileges.length > 0) {
                for (var i = 0; i < data.maisons.length; i++) {
                    var sortileges = data.sortileges.filter(function(item) {
                        return item.maison_id.indexOf(data.maisons[i].id) > -1;
                    });
                    for (var j = 0; j < sortileges.length; j++) {
                        $(document).find("#body-sortileges").append("<tr>"+
                        "<td>" + sortileges[j].nom + "</td>"+
                        "<td>" + sortileges[j].diff + "</td>"+
                        "<td>" + sortileges[j].portee + "</td>"+
                        "<td>" + data.maisons[i].nom + "</td>"+
                        "</tr>");
                    }
                }
            }
            
        }
      
    });

});
