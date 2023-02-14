
$(document).ready(function(){
// const params = new Proxy(new URLSearchParams(window.location.search), {
  // get: (searchParams, prop) => searchParams.get(prop),
// });

// let user = params.user; // "some_value"
// let music_user = music_data[user];

var last_entry = "";

$('#first_button').append('Click to open tracker (popout)');
    
$(function() { 
    $('#first_button').click(function() {
        window.open(`tracker.html`, '_blank', `width=480, height=760, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no`);
    
    }).change(); // Trigger the event
});

function toTitleCase(str) {
    return str.replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
    });
}

// bootup
var items = $('img')
$.each( $('img'), function(idx) {
    img = items[idx];
    $(img).css("opacity",".2");
    });

var dungeon_list = ['???','Deku','Dodongo','Jabu','Forest','Fire','Water','Shadow','Spirit','Free']

var key_array = {
    "dark_agon_key" : 3,
    "dark_torvus_key" : 3,
    "ing_hive_key" : 3,
    "sky_temple_key" : 9,
}


var item_dict = {
    "lightbeam" : "light_beam",
    "light_beam" : "light_beam",
    "light" : "light_beam",
    "darkbeam" : "dark_beam",
    "dark" : "dark_beam",
    "dark_beam" : "dark_beam",
    "annihilator" : "annihilator_beam",
    "sunburst" : "sunburst",
    "darkburst" : "dark_burst",
    "dark_burst" : "dark_burst",
    "sonicboom" : "sonic_boom",
    "sonic" : "sonic_boom",

    "bomb" : "morph_ball_bomb",
    "bombs" : "morph_ball_bomb",
    "morph_ball_bomb" : "morph_ball_bomb",
    "boost" : "boost_ball",
    "spider" : "spider_ball",
    "grapple" : "grapple_beam",
    "screw_attack" : "screw_attack",
    "screwattack" : "screw_attack",
    "screw" : "screw_attack",
    "darksuit" : "dark_suit",

    "power_bomb" : "power_bomb",
    "power" : "power_bomb",
    "missile" : "missile_launcher",
    "missiles" : "missile_launcher",
    "super_missiles" : "super_missiles",
    "super" : "super_missiles",
    "supers" : "super_missiles",
    "supermissile" : "super_missiles",
    "seekers" : "seeker_launcher",
    "seeker" : "seeker_launcher",
    "space_jump" : "space_jump_boots",
    "spacejump" : "space_jump_boots",
    "space_jump_boots" : "space_jump_boots",
    "jump" : "space_jump_boots",
    "light_suit" : "light_suit",
    "lightsuit" : "light_suit",

    "dark_visor" : "dark_visor",
    "echo_visor" : "echo_visor",
    "violet" : "violet_translator",
    "amber" : "amber_translator",
    "emerald" : "emerald_translator",
    "cobalt" : "cobalt_translator",

    "agon" : "dark_agon_key",
    "dark_agon" : "dark_agon_key",
    "darkagon" : "dark_agon_key",
    "torvus" : "dark_torvus_key",
    "bog" : "dark_torvus_key",
    "darktorvus" : "dark_torvus_key",
    "dark_torvus" : "dark_torvus_key",
    "ing_hive" : "ing_hive_key",
    "inghive" : "ing_hive_key",
    "ing" : "ing_hive_key",
    "stk" : "sky_temple_key",
    "sky" : "sky_temple_key",
    "sky_temple" : "sky_temple_key",
    
    "agonkey" : "dark_agon_key",
    "dark_agonkey" : "dark_agon_key",
    "darkagonkey" : "dark_agon_key",
    "torvuskey" : "dark_torvus_key",
    "bogkey" : "dark_torvus_key",
    "darktorvuskey" : "dark_torvus_key",
    "dark_torvuskey" : "dark_torvus_key",
    "ing_hivekey" : "ing_hive_key",
    "inghivekey" : "ing_hive_key",
    "ingkey" : "ing_hive_key",
    "skykey" : "sky_temple_key",
    "sky_templekey" : "sky_temple_key",    

    "agon_key" : "dark_agon_key",
    "dark_agon_key" : "dark_agon_key",
    "darkagon_key" : "dark_agon_key",
    "torvus_key" : "dark_torvus_key",
    "bog_key" : "dark_torvus_key",
    "darktorvus_key" : "dark_torvus_key",
    "dark_torvus_key" : "dark_torvus_key",
    "ing_hive_key" : "ing_hive_key",
    "inghive_key" : "ing_hive_key",
    "ing_key" : "ing_hive_key",
    "sky_key" : "sky_temple_key",
    "sky_temple_key" : "sky_temple_key",    
    

    
}




var item_cleanup_dict = {
    "light_beam" : "Light Beam",
    "dark_beam" : "Dark Beam",
    "annihilator_beam" : "Annihilator Beam",
    "sunburst" : "Sunburst",
    "dark_burst" : "Darkburst",
    "sonic_boom" : "Sonic Boom",
    "morph_ball_bomb" : "Morph Ball Bomb",
    "power_bomb" : "Power Bomb",
    "missile_launcher" : "Missile Launcher",
    "super_missiles" : "Super Missile",    
    "super_missile" : "Super Missile",    
    "seeker_launcher" : "Seeker Launcher",    
    "dark_suit" : "Dark Suit",
    "space_jump_boots" : "Space Jump Boots",
    "boost_ball" : "Boost Ball",
    "spider_ball" : "Spider Ball",
    "grapple_beam" : "Grapple Beam",
    "screw_attack" : "Screw Attack",
    "light_suit" : "Light Suit",
    "dark_visor" : "Dark Visor",
    "echo_visor" : "Echo Visor",
    "violet_translator" : "Violet Translator",
    "amber_translator" : "Amber Translator",
    "emerald_translator" : "Emerald Translator",
    "cobalt_translator" : "Cobalt Translator",
    "dark_agon_key" : "Dark Agon Key",
    "dark_torvus_key" : "Dark Torvus Key",
    "ing_hive_key" : "Ing Hive Key",
    "sky_temple_key" : "Sky Temple Key",



    
}

var area_dict = {
    "temple" : "Temple Grounds",
    "temple_grounds" : "Temple Grounds",
    "sky_temple" : "Sky Temple Grounds",
    "sky_temple_grounds" : "Sky Temple Grounds",
    "agon" : "Agon Wastes",
    "dark_agon" : "Dark Agon",
    "torvus" : "Torvus Bog",
    "bog" : "Torvus Bog",
    "dark_torvus" : "Dark Torvus",
    "sanctuary" : "Sanctuary",
    "ing_hive" : "Ing Hive",
    
}

var key_dict = {
    "agon" : "dark_agon_key",
    "torvus" : "dark_torvus_key",
    "bog" : "dark_torvus_key",
    "ing_hive" : "ing_hive_key",
    "sky_temple" : "sky_temple_key",
    "stk" : "sky_temple_key",
    
    
}




function toggle_image(cur_div, loc_str = '', num_keys = undefined) {
        var text = $(cur_div).next();
        
        
        
        var img_path = $(cur_div).attr('src');
        var cur_opacity = $(cur_div).css("opacity");
        
        
        latest_item_from_path = img_path.split("/")[1].split('.')[0];
        
        // check each image 
        
        // STRENGTH
        if (img_path == "img/lift1.png") {
            if (cur_opacity < 1) {
                $(cur_div).css("opacity","1");
            }
            else{
                $(cur_div).attr("src","img/lift2.png");    
                latest_item_from_path = 'lift2'
            }
        }
        else if (img_path == "img/lift2.png") {
            $(cur_div).attr("src","img/lift3.png");    
            latest_item_from_path = 'lift3'
        }
        else if (img_path == "img/lift3.png") {
            $(cur_div).attr("src","img/lift1.png");  
            $(cur_div).css("opacity",".3");      
            latest_item_from_path = undefined;
        }
        
        // OCARINA
        else if (img_path == "img/fairyocarina.png") {
            if (cur_opacity < 1) {
                $(cur_div).css("opacity","1");
            }
            else{
                $(cur_div).attr("src","img/ocarina.png");    
            }    
        }
        else if (img_path == "img/ocarina.png") {
            $(cur_div).attr("src","img/fairyocarina.png");  
            $(cur_div).css("opacity",".3");      
            latest_item_from_path = undefined;
        }
        
        // SCALE
        else if (img_path == "img/scale1.png") {
            if (cur_opacity < 1) {
                $(cur_div).css("opacity","1");
            }
            else{
                $(cur_div).attr("src","img/scale2.png");    
            }    
        }
        else if (img_path == "img/scale2.png") {
            $(cur_div).attr("src","img/scale1.png");  
            $(cur_div).css("opacity",".3");      
            latest_item_from_path = undefined;
        }
        
        // BOTTLE/LETTER
        else if (img_path == "img/bottle.png") {
            if (cur_opacity < 1) {
                $(cur_div).css("opacity","1");
            }
            else{
                $(cur_div).attr("src","img/bottle-letter.png");    
            }    
        }
        else if (img_path == "img/bottle-letter.png") {
            $(cur_div).attr("src","img/bottle.png");  
            $(cur_div).css("opacity",".3");      
            latest_item_from_path = undefined;
        }        
        
        // HOOKSHOT
        else if (img_path == "img/hookshot.png") {
            if (cur_opacity < 1) {
                $(cur_div).css("opacity","1");
            }
            else{
                $(cur_div).attr("src","img/longshot.png");    
            }    
        }
        else if (img_path == "img/longshot.png") {
            $(cur_div).attr("src","img/hookshot.png");  
            $(cur_div).css("opacity",".3");      
            latest_item_from_path = undefined;
        }        
        
        // SMALLKEY
        else if (img_path == "img/dark_agon_key.png" || img_path == "img/dark_torvus_key.png" || img_path == "img/ing_hive_key.png" || img_path == "img/sky_temple_key.png") {
            
            
            
            var key_type = $(cur_div).attr('id');
            var latest_item_from_path = key_type
            
            var counter_div = $(cur_div).parent().children(".key_counter");
            var count = $(counter_div).text();
            

            if (num_keys != undefined) {
                $(cur_div).css("opacity","1");
                counter_div.text(num_keys);
                counter_div.css("opacity","1");              
                
                
            }
            
            else if (cur_opacity < 1) {
                $(cur_div).css("opacity","1");
                counter_div.text("1");
                counter_div.css("opacity","1");
            }
            else {
                var key_limit = key_array[key_type];
                var cur_text = parseInt(counter_div.text());

                if (cur_text >= key_limit){
                    $(cur_div).css("opacity",".3");
                    counter_div.text("0");
                    counter_div.css("opacity","0")
                    latest_item_from_path = undefined;
                    
                }
                else {
                    counter_div.text(cur_text + 1);
                }
            }    
        }

        

        // DEFAULT
        
        else {
        
            if (cur_opacity < 1) {
                $(cur_div).css("opacity","1");
                console.log("Check")

            }
            else{
                $(cur_div).css("opacity",".3"); 

                latest_item_from_path = undefined;                
            }
        }    
    
    
        // boss key id for log
        
        if (latest_item_from_path == "bosskey") {
            var key_type = $(cur_div).attr('id');
            var latest_item_from_path = key_type
        };
    
        // console.log(latest_item_from_path)
        var final_item = item_cleanup_dict[latest_item_from_path];
        if (final_item != undefined) {
            update_log("Get: " + final_item + loc_str);
        }
    
}



function update_log(log_text, color = undefined, notes = false) {

    if (notes || $("#setting_update_log").is(':checked')) {
                
        var cur_html = $("#log_entries_container").html();
        var color_style = '';
        if (color != undefined) {
            color_style = 'color:' + color + ';'
        }
        
        
        // if toggle only notes is on, then do not display new non=notes
        var cur_color = $("#hide-show-log").css("color");
        var display = "";
    
        if (cur_color == "rgb(14, 152, 237)" && (!notes)) {
            display = "display:none;"
            }


        
        $("#log_entries_container").html("<div class = 'log_entry' style = "+color_style+display+">" + log_text + "</div>" + cur_html)
        
        
        var cur_html = $("#log_entries_container")
        var children = $(cur_html).children();
        $.each(children, function (child) {
            
            var child_select = $(children[child]);
            // console.log($(child_select).text())
            
            
            child_select.on("dblclick",
                   function(){ 
                        $(this).remove();
                  });;
            
        });
    };
    
    
}



function clear_log() {
    
    var cur_html = $("#log_entries_container");
    $(cur_html).find('div:first').remove();
};
function clear_log_full() {
    
    $("#log_entries_container").html("");
    
};



function hide_log_non_notes() {
    
    var cur_html = $("#log_entries_container").children();
    
    $.each(cur_html, function(child) { 
        color = $(cur_html[child]).css("color");

        if (color != "rgb(111, 122, 252)") {
            $(cur_html[child]).css("display","none");
            }          
        }
    );
};

function show_log_non_notes() {
    
    var cur_html = $("#log_entries_container").children();
    
    $.each(cur_html, function(child) { 
        color = $(cur_html[child]).css("color");

        if (color != "rgb(111, 122, 252)") {
            $(cur_html[child]).css("display","block");
            }          
        }
    );
};
function clear_log_entry(div) {    

    $(div).remove();            
};



// image click 
$(function() { 
    $('img').click(function() {
        toggle_image(this);
        });
    });
    
    
$(function() { 
    $('#last_entry-button').click(function() {
        $("#entry").val(last_entry);
        $("#entry").focus();
        });
    });
$(function() { 
    $('#clear-button').dblclick(function() {
        clear_log_full();
        });
    });

$(function() { 
    $('#hide-show-log').dblclick(function() {
        
        var cur_color = $(this).css("color");
        
        if (cur_color == "rgb(82, 12, 120)") {
            hide_log_non_notes();    
            $(this).css("color", "#0e98ed")
            $(this).css("border", "2px dotted #0e98ed")
            $(this).text("Show auto log")
        }
        else {
            show_log_non_notes();    
            $(this).css("color", "#520c78")
            $(this).css("border", "2px dotted #520c78")
            $(this).text("Hide auto log")
        }
        
        
        
        });
    });



$(function() { 
    $('.medallion_text').click(function() {
        
        var text = $(this).text().trim();
        idx = dungeon_list.indexOf(text) + 1
        if (idx == dungeon_list.length) {
            idx = 0
        }
        
        $(this).text(dungeon_list[idx]);
        // // console.log(text)
        });
        });



        

$(function() { 
    $('.key_counter').click(function() {
        var latest_item_from_path = '';
        var loc_str = '';
        var count = $(this).text();
        
        var img_div = $(this).parent().children("img");
        
        var img_path = $(img_div).attr('src');
        var cur_opacity = $(img_div).css("opacity");
        var key_type = $(img_div).attr('id');

        var latest_item_from_path = key_type
 
        if (cur_opacity < 1) {
            img_div.css("opacity","1");
            $(this).text("1");
            $(this).css("opacity","1");
        }
        else {
            var key_limit = key_array[key_type];
            var cur_text = parseInt($(this).text());
            
            if (cur_text >= key_limit){
                img_div.css("opacity",".2");
                $(this).text("0");
                $(this).css("opacity","0")
                latest_item_from_path = undefined;  
            }
            else {
                $(this).text(cur_text + 1);
            }
        }    
        
        var final_item = item_cleanup_dict[latest_item_from_path];
        if (final_item != undefined) {
            
            update_log("Get: " + final_item + loc_str);
            
            
        }

        
    });
    
    
});


// parse inputs 

$('input').keypress(function (e) {
    
    
    if (e.which == 13) {
        // console.log("Submit\n\n\n")

        original_val = $(e.currentTarget).val();
        last_entry = original_val;
        
        cur_val = $(e.currentTarget).val().toLowerCase();

        $(e.currentTarget).val("")


        args = cur_val.split(" ");
        first_arg = args[0];
        // console.log(args);
        
  
      
        //
        // GET
        //
        
        if (first_arg == 'get') {
            item = args[1];
            loc = args[2];
            // console.log("GET, item: " + item + " loc: " + loc);

            var loc_str = ''
            if (loc != undefined) {
            
                loc_match = area_dict[loc]
                if (loc_match != undefined) {
                    loc_str = ' from&nbsp;<div style = "color:#1fbaac">' + loc_match + '</div>'
                }
                else {
                    loc_str = ' from ' + loc
                }
            }
            
            item_lookup = item_dict[item];
            
            if (item_lookup != undefined) {            
                // check for keys first
                
                if (item.indexOf("key") >= 0) {
                    // console.log("KEY")

                    // find matching div for key type
                    var all_img = $('img');
                    
                    $.each(all_img, function (img) {
                        var src_id = $(all_img[img]).attr("id")
                        if (src_id == item_lookup) {
                            // console.log("Key match " + src_id + " " + item_lookup)
                            div_match = all_img[img];
                        }
                        });
                    toggle_image(div_match, loc_str);
                    


                    return false;
                    
                    
                }

                var img_path = "img/" + item_lookup + ".png";

                // default case for toggling images 
                

                var all_img = $('img');
                var div_match = false;
                $.each(all_img, function (img) {
                        var src_img = $(all_img[img]).attr("src")
                        // // console.log(src_img + " " + img_path)
                        if (src_img == img_path) {
                            // console.log("Match " + src_img + " " + img_path)
                            div_match = all_img[img];
                        }
                        });

                
                if (div_match != false) {
                    // custom for letter, do it again
                    if (item == "letter" && $(div_match).css("opacity") < 1) {
                        toggle_image(div_match, loc_str);
                        toggle_image(div_match, loc_str);
                        // update_log("Get: Letter" + loc_str);
                    }
                    else {
                        toggle_image(div_match, loc_str);
                        // update_log("Get: " + item_cleanup_dict[item_lookup] + loc_str);
                    }
                    
                    
                    
                    
                }
                else {
                    var override_flag = false
                    
                    // MANUAL OVERRIDES 
                    if (item == 'str' || item == 's' || item == 'strength' || item == 'strength1' || item == 'strength2') {
                        // console.log("Override for str3");
                        img_path = 'img/lift2.png'
                        override_flag = true;
                    }
                    
                    // if override condition
                    
                    if (override_flag) {                
                        $.each(all_img, function (img) {
                            var src_img = $(all_img[img]).attr("src")
                            if (src_img == img_path) {
                                // console.log("Match " + src_img + " " + img_path)
                                div_match = all_img[img];
                            }
                            });
                        toggle_image(div_match, loc_str);
                    }
                }
            }
      
          
          
          
      }
      
        
        else if (first_arg == "keys") {
            loc = args[1];
            area1 = args[2];
            area2 = args[3];
            area3 = args[4];

            lookup1 = area_dict[loc];
            lookup2 = area_dict[area1];
            lookup3 = area_dict[area2];
            lookup4 = area_dict[area3];



            if (lookup1 == undefined) {
                lookup1 = loc
            }
            if (lookup2 == undefined) {
                console.log("TEST: " + lookup2)
                lookup2 = area1
                
            }
            if (lookup3 == undefined) {
                lookup3 = area2
            }
            if (lookup4 == undefined) {
                lookup4 = area3
            }

            
            loc_str = lookup1 +' keys: &nbsp;<div style = "color:#1fbaac">' + lookup2 + ", " + lookup3 + ", " + lookup4 + '</div>'

                        
            update_log(loc_str, "#b51024", true)
        }
        
        else if (first_arg == "stk") {
            num = args[1]
            
            if (Math.floor(num) == num && $.isNumeric(num)) {
                
                area = args[2];
                
                console.log(args.length)
                if (args.length > 3) {
                    // extra = args[3];
                    console.log(extra)
                    extra = original_val.split(" ", 3)[1];
                }
                else {
                    extra = ""
                    
                }
                
                lookup1 = area_dict[area];


                if (lookup1 == undefined) {
                    lookup1 = area
                }


                
                if (extra == "") {
                loc_str = "Sky Temple Key #" + num + ' in&nbsp;<div style = "color:#1fbaac">' + lookup1 + '</div>'
                }
                else {
                loc_str = "Sky Temple Key #" + num + ' in&nbsp;<div style = "color:#1fbaac">' + lookup1 + " - " + extra + '</div>'    
                 
                }
                
                update_log(loc_str, "#b51024", true)
            }     
            //
            // NOTE (default)
            //
        }
        
        else {
            update_log(original_val, "#6f7afc", true)
        
        }
    
    return false;    
  }
});



    
});







