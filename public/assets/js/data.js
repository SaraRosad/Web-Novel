
'use strict';
var content_body_section = '';
var pokemon_legendary_section = $('#pokemon-legendary');
var pokemon_mythic_section = $('#pokemon-mythic');
var pokemon_standard_section = $('#pokemon-standard');
var pokemon_ultra_beast_section = $('#pokemon-ultra-beast');
var pokemon_stats = [];
var pokemon_max_cp = [];
var pokemon_evolution = [];
var pokemon_gender = [];
var pokemon_types = [];
var pokemon_encounter_data = [];

const settings_pokemon_rarity= {
	"async": true,
	"crossDomain": true,
	"url": "https://pokemon-go1.p.rapidapi.com/pokemon_rarity.json",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "2f0e7d3dfcmshe1836446ab79b26p189cd1jsn74a5f7ee94f2",
		"X-RapidAPI-Host": "pokemon-go1.p.rapidapi.com"
	}
};

$.ajax(settings_pokemon_rarity).done(function (response) {
    pokemon_legendary_section.empty();
    pokemon_mythic_section.empty();
    pokemon_standard_section.empty();
    pokemon_ultra_beast_section.empty();

     //LIST OF POKEMON AVAILABLES @just for now to get a correct data showing

    var list_items_legendary = {
        name:   ['Articuno','Zapdos','Moltres','Mewtwo','Raikou','Entei'],
     };

    var list_items_mythic = {
        name:   [''],
     };

    var list_items_standard = {
        name:   [''],
     };

    var list_items_ultra_beast = {
        name:   [''],
     };

    //POKEMON LEGENDARY SECTION
    for (let pokemon_legendary of response.Legendary){
        let first_body_pokemon_section = `
            <div class="col-lg-4 col-md-6">
                    <div class="pokemon" data-aos="fade-up" data-aos-delay="100">
                        <img src="assets/img/pokemon_legendary/`+pokemon_legendary.pokemon_name+'_'+pokemon_legendary.form+`.png" alt="`+pokemon_legendary.rarity+`" class="img-fluid">
                        <div class="details">
                            <h3><a class="pokemon_modal" role="button" data-toggle="modal" data-bs-toggle="modal" data-bs-target="#modal_pokemon" data-pokemon_id="`+pokemon_legendary.pokemon_id+`" data-form="`+pokemon_legendary.form+`">`+pokemon_legendary.pokemon_name+`</a></h3>
                            <p>`+pokemon_legendary.form+`</p>
                            <div class="stats">
                                <a href="" class="icon-power">
                                    <p class="m-0">CP:</p>
                                    <div class="progress mx-1">
                                        <div class="progress-bar" data-pokemon_id="`+pokemon_legendary.pokemon_id+`" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="10000"></div>
                                    </div>
                                    <p class="pg-bar"><span>%</span></p>
                                </a>
                            </div>
                        </div>
                    </div>
            </div>
        `;

        for (let pokemon_name of list_items_legendary.name) {
            if(pokemon_name === pokemon_legendary.pokemon_name){
                pokemon_legendary_section.append(first_body_pokemon_section);
            }
        }

        /* console.log(pokemon_legendary.pokemon_name); */
    }

    //POKEMON MYTHIC SECTION
    for (let pokemon_mythic of response.Mythic){
        let body_pokemon_section = `
            <div class="col-lg-4 col-md-6">
                    <div class="pokemon" data-aos="fade-up" data-aos-delay="100">
                        <img src="assets/img/pokemon_legendary/`+pokemon_mythic.pokemon_name+'_'+pokemon_mythic.form+`.png" alt="`+pokemon_mythic.rarity+`" class="img-fluid">
                        <div class="details">
                            <h3><a class="pokemon_modal" role="button" data-toggle="modal" data-bs-toggle="modal" data-bs-target="#modal_pokemon" data-pokemon_id="`+pokemon_mythic.pokemon_id+`" data-form="`+pokemon_mythic.form+`">`+pokemon_mythic.pokemon_name+`</a></h3>
                            <p>`+pokemon_mythic.form+`</p>
                            <div class="stats">
                                <a href="" class="icon-power">
                                    <p class="m-0">CP:</p>
                                    <div class="progress mx-1">
                                        <div class="progress-bar" data-pokemon_id="`+pokemon_mythic.pokemon_id+`" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="10000"></div>
                                    </div>
                                    <p class="pg-bar"><span>%</span></p>
                                </a>
                            </div>
                        </div>
                    </div>
            </div>
        `;

        for (let pokemon_name of list_items_mythic.name) {
            if(pokemon_name === pokemon_mythic.pokemon_name){
                pokemon_mythic_section.append(body_pokemon_section);
            }
        }

        /* console.log(pokemon_legendary.pokemon_name); */
    }

    //POKEMON STANDARD SECTION
    for (let pokemon_standard of response.Standard){
        let body_pokemon_section = `
            <div class="col-lg-4 col-md-6">
                    <div class="pokemon" data-aos="fade-up" data-aos-delay="100">
                        <img src="assets/img/pokemon_legendary/`+pokemon_standard.pokemon_name+'_'+pokemon_standard.form+`.png" alt="`+pokemon_standard.rarity+`" class="img-fluid">
                        <div class="details">
                            <h3><a class="pokemon_modal" role="button" data-toggle="modal" data-bs-toggle="modal" data-bs-target="#modal_pokemon" data-pokemon_id="`+pokemon_standard.pokemon_id+`" data-form="`+pokemon_standard.form+`">`+pokemon_standard.pokemon_name+`</a></h3>
                            <p>`+pokemon_standard.form+`</p>
                            <div class="stats">
                                <a href="" class="icon-power">
                                    <p class="m-0">CP:</p>
                                    <div class="progress mx-1">
                                        <div class="progress-bar" data-pokemon_id="`+pokemon_standard.pokemon_id+`" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="10000"></div>
                                    </div>
                                    <p class="pg-bar"><span>%</span></p>
                                </a>
                            </div>
                        </div>
                    </div>
            </div>
        `;

        for (let pokemon_name of list_items_standard.name) {
            if(pokemon_name === pokemon_standard.pokemon_name){
                pokemon_standard_section.append(body_pokemon_section);
            }
        }
    }

    //POKEMON ULTRA BEAST SECTION
    var ultra_beast = Object.entries(response)[3][1];

    for (let pokemon_ultra_beast of ultra_beast){

        let body_pokemon_section = `
            <div class="col-lg-4 col-md-6">
                    <div class="pokemon" data-aos="fade-up" data-aos-delay="100">
                        <img src="assets/img/pokemon_legendary/`+pokemon_ultra_beast.pokemon_name+'_'+pokemon_ultra_beast.form+`.png" alt="`+pokemon_ultra_beast.rarity+`" class="img-fluid">
                        <div class="details">
                            <h3><a class="pokemon_modal" role="button" data-toggle="modal" data-bs-toggle="modal" data-bs-target="#modal_pokemon" data-pokemon_id="`+pokemon_ultra_beast.pokemon_id+`" data-form="`+pokemon_ultra_beast.form+`">`+pokemon_ultra_beast.pokemon_name+`</a></h3>
                            <p>`+pokemon_ultra_beast.form+`</p>
                            <div class="stats">
                                <a href="" class="icon-power">
                                    <p class="m-0">CP:</p>
                                    <div class="progress mx-1">
                                        <div class="progress-bar" data-pokemon_id="`+pokemon_ultra_beast.pokemon_id+`" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="10000"></div>
                                    </div>
                                    <p class="pg-bar"><span>%</span></p>
                                </a>
                            </div>
                        </div>
                    </div>
            </div>
        `;

        for (let pokemon_name of list_items_ultra_beast.name) {
            if(pokemon_name === pokemon_ultra_beast.pokemon_name){
                pokemon_ultra_beast_section.append(body_pokemon_section);
            }
        }
    }

    $('.modal-title').empty();
    $('.modal-title').append('');
});

const settings_pokemon_max_cp = {
	"async": true,
	"crossDomain": true,
	"url": "https://pokemon-go1.p.rapidapi.com/pokemon_max_cp.json",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "2f0e7d3dfcmshe1836446ab79b26p189cd1jsn74a5f7ee94f2",
		"X-RapidAPI-Host": "pokemon-go1.p.rapidapi.com"
	}
};

function onlyUnique(value, index, self){
     return self.indexOf(value) === index;
}

function removeItemOnce(arr, val){
    var index = arr.indexOf(val);
    if(index > -1){
        arr.splice(index, 1);
    }
    return arr;
}

function removeItemAll(arr, val){
    var i = 0;

    while( i < arr.length){
        if(arr[i] === val){
            arr.splice(i, 1);
        }else{
            ++i;
        }
    }

    return arr;
}

$.ajax(settings_pokemon_max_cp).done(function (response) {

    var progressbar = $('.progress-bar');
    var iconBar = $('.icon-power').find('.pg-bar');

    response.forEach((pokemon_cp, i) => {
        pokemon_max_cp.push(pokemon_cp);
        for( let bar of progressbar){
            if(parseInt(bar.dataset.pokemon_id) === pokemon_cp.pokemon_id){
                let pokemon_health_cp = pokemon_cp.max_cp/100;
                bar.attributes[3].nodeValue = pokemon_health_cp;
                bar.style.width = pokemon_health_cp+"px";
                /* bar.offsetParent.children[2].children[0].lastElementChild.append(pokemon_health_cp); */
            }
        }
    });
});

const settings_pokemon_stats = {
	"async": true,
	"crossDomain": true,
	"url": "https://pokemon-go1.p.rapidapi.com/pokemon_stats.json",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "2f0e7d3dfcmshe1836446ab79b26p189cd1jsn74a5f7ee94f2",
		"X-RapidAPI-Host": "pokemon-go1.p.rapidapi.com"
	}
};

$.ajax(settings_pokemon_stats).done(function (response) {
    pokemon_stats.length = 0;
    for(let stats of response){
        pokemon_stats.push(stats);
    }
});

const settings_pokemon_evolutions = {
	"async": true,
	"crossDomain": true,
	"url": "https://pokemon-go1.p.rapidapi.com/pokemon_evolutions.json",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "2f0e7d3dfcmshe1836446ab79b26p189cd1jsn74a5f7ee94f2",
		"X-RapidAPI-Host": "pokemon-go1.p.rapidapi.com"
	}
};

$.ajax(settings_pokemon_evolutions).done( function(response){

    for(let evolution  of response){
        for(let envolve of evolution.evolutions){
            pokemon_evolution.push({ pokemon_id: envolve.pokemon_id, candy_required: envolve.candy_required, form: envolve.form, pokemon_name: envolve.pokemon_name });
        }
    }
});

const settings_pokemon_genders = {
	"async": true,
	"crossDomain": true,
	"url": "https://pokemon-go1.p.rapidapi.com/pokemon_genders.json",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "2f0e7d3dfcmshe1836446ab79b26p189cd1jsn74a5f7ee94f2",
		"X-RapidAPI-Host": "pokemon-go1.p.rapidapi.com"
	}
};

$.ajax(settings_pokemon_genders).done(function (res) {
     let female_keys = Object.keys(res);
     let all_data = Object.values(res);
     pokemon_gender.length = 0;

    for(let genders of all_data){
        for(let gender of genders){
            if(gender.gender.female_percent !== undefined && gender.gender.male_percent === undefined){
                pokemon_gender.push({pokemon_id: gender.pokemon_id, pokemon_name: gender.pokemon_name, form: gender.form, gender: 'F'});
            }
            if(gender.gender.female_percent !== undefined && gender.gender.male_percent !== undefined){
                pokemon_gender.push({pokemon_id: gender.pokemon_id, pokemon_name: gender.pokemon_name, form: gender.form, gender: 'FM'});
            }
            if(gender.gender.female_percent !== undefined && gender.gender.male_percent === undefined){
                pokemon_gender.push({pokemon_id: gender.pokemon_id, pokemon_name: gender.pokemon_name, form: gender.form, gender: 'M'});
            }
            if(gender.gender.genderless_percent !== undefined){
                pokemon_gender.push({pokemon_id: gender.pokemon_id, pokemon_name: gender.pokemon_name, form: gender.form, gender: 'GL'});
            }

        }
    }
});

const settings_pokemon_types = {
	"async": true,
	"crossDomain": true,
	"url": "https://pokemon-go1.p.rapidapi.com/pokemon_types.json",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "2f0e7d3dfcmshe1836446ab79b26p189cd1jsn74a5f7ee94f2",
		"X-RapidAPI-Host": "pokemon-go1.p.rapidapi.com"
	}
};

$.ajax(settings_pokemon_types).done(function (response) {

    for(let pokemon_type of response){
        pokemon_types.push(pokemon_type);
    }
});

const settings_pokemon_encounter_data = {
	"async": true,
	"crossDomain": true,
	"url": "https://pokemon-go1.p.rapidapi.com/pokemon_encounter_data.json",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "2f0e7d3dfcmshe1836446ab79b26p189cd1jsn74a5f7ee94f2",
		"X-RapidAPI-Host": "pokemon-go1.p.rapidapi.com"
	}
};

$.ajax(settings_pokemon_encounter_data).done(function (response) {
    for(let data of response){
        pokemon_encounter_data.push(data);
    }

});

function getPokemon(pokemon_id, form){
    var pokemon_health_cp = 0;
    var pokemon_stat = {};
    var evolution = '';
    var gender_section = '';
    var type_section = '';
    var encounter_data_section = '';
    for(let envolve of pokemon_evolution){

        if(parseInt(pokemon_id) === envolve.pokemon_id){

            evolution = `
                <div class="d-flex flex-column">
                    <h3 class="mx-2">
                        <strong>Evolutions</strong>:
                        <h5 class="mx-2">
                        <p class="d-flex"><strong>Pokemon Name:</strong>`+envolve.pokemon_name+`</p>
                        <p class="d-flex"> <strong>Form:</strong>`+envolve.form+`</p>
                        <p class="d-flex"> <strong>Candy Required:</strong>`+envolve.candy_required+`</p>
                        </h5>
                    </h3>
                </div>
                `;
        }
    }

    for(let max_cp of pokemon_max_cp){
        if(max_cp.pokemon_id === parseInt(pokemon_id) && max_cp.form === form){
            pokemon_health_cp = max_cp.max_cp/100;
        }
    }

    for(let gender  of pokemon_gender){
        if(parseInt(pokemon_id) === gender.pokemon_id && form === gender.form){
            var pokemon_gender_name = '';

            if(gender.gender === 'GL'){
                pokemon_gender_name = 'Gender Less';
            }else if(gender.gender === 'FM'){
                pokemon_gender_name = 'Female & Male';
            }else if(gender.gender === 'F'){
                pokemon_gender_name = 'Female';
            }else if(gender.gender === 'M'){
                pokemon_gender_name = 'Male';
            }

            gender_section = `
                <div class="d-flex align-items-center m-2">
                    <h5 class="d-flex text-center my-0"><span><strong>Gender</strong></span> : <p class="mx-2 text-center my-0">`+pokemon_gender_name+`</p></h5>
                </div>
            `;

        }
    }

    for(let types of pokemon_types){

        if(parseInt(pokemon_id) === types.pokemon_id && form === types.form){
            var type_pokemon = [];
            var count = 0;
            var list_item = '';

            for(let type  of types.type){

                type_pokemon.push(`
                        <li class="list-group-item">
                            <i class="fa fa-circle" aria-hidden="true"></i>
                            <label class="form-check-label stretched-link ms-1">`+type+`</label>
                        </li>
                    `);
            }
            let content_type =type_pokemon.join("");

            type_section = `
                        <h5 class="m-2"><span class="c-red"><strong>Type</strong></span></h5>
                        <ul class="col-6 list-group">
                            `+content_type+`
                        </ul>
                    `;
        }
    }

    for(let encounter_data of pokemon_encounter_data){

        if(parseInt(pokemon_id) === encounter_data.pokemon_id && form === encounter_data.form){
            encounter_data_section =`
                <p> Is very important to notice that `+encounter_data.pokemon_name+`
                has an attack probability around `+encounter_data.attack_probability+`%,
                the rate of capture is around `+encounter_data.base_capture_rate+`%,
                the rate of flee is around `+encounter_data.base_flee_rate+`%,
                the probability of dodging is around `+encounter_data.dodge_probability+`%
                the max and min action is around `+encounter_data.max_pokemon_action_frequency+`% and `+encounter_data.min_pokemon_action_frequency+`%</p>
            `;
        }
    }

    //Content body Modal
    for(let stats of pokemon_stats){
        if(parseInt(pokemon_id) === stats.pokemon_id && form === stats.form){
            pokemon_stat = {
                base_stamina: stats.base_stamina/100,
                base_defense :stats.base_defense/100,
                base_attack : stats.base_attack/100,
            };

            $('.modal-title').empty();
            // $('.modal-title').append(stats.pokemon_name);
            $('.modal-body').empty();
            $('.modal-body').append(
                `
                <section id="show-pokemon-stats" class="section-with-bg">
                    <div class="container" data-aos="fade-up">

                    <div class="section-header">
                        <h2>Pokemon <span class="c-red">Profile</span></h2>
                        <p class="pokemon-description">Stats of the pokemon</p>
                    </div>

                    <div class="row pokemon-stats">
                        <div class="content-header">
                                <h4 class="pokemon-name">`+stats.pokemon_name+`</h4>
                               `+encounter_data_section+`
                        </div>
                        <div class="col-lg-8" data-aos="fade-up" data-aos-delay="100">

                            <div class="content-body">

                                <h5 class="m-2"><span class="c-red"><strong>Vitality</strong></span></h5>
                                <div class="d-flex">
                                    <h5 class="d-flex mx-2">
                                    <strong>Max CP</strong>:
                                    <p>
                                        <div class="progress m-auto mx-2">
                                            <div class="progress-bar pokemon-stats" data-pokemon_id="`+stats.pokemon_id+`" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="10000" style="width:`+pokemon_health_cp+`px;"></div>
                                        </div>
                                        <span>`+pokemon_health_cp+`%</span>
                                    </p>
                                    </h5>

                                </div>
                                <h5 class="m-2"><span class="c-red"><strong>Stats</strong></span></h5>
                                <div class="d-flex">
                                    <h5 class="d-flex mx-2">
                                        <strong>Stamina</strong>:
                                        <p>
                                            <div class="progress m-auto mx-2">
                                                <div class="progress-bar pokemon-stats" data-pokemon_id="`+stats.pokemon_id+`" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="10000" style="width:`+pokemon_stat.base_stamina+`px;"></div>
                                            </div>
                                            <span>`+pokemon_stat.base_stamina+`%</span>
                                        </p>
                                    </h5>
                                </div>
                                <div class="d-flex">
                                    <h5 class="d-flex mx-2"><strong>Defence</strong>:
                                    <p>
                                        <div class="progress m-auto mx-2">
                                            <div class="progress-bar pokemon-stats" data-pokemon_id="`+stats.pokemon_id+`" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="10000" style="width:`+pokemon_stat.base_defense+`px;"></div>
                                        </div>
                                        <span>`+pokemon_stat.base_defense+`%</span>
                                    </p>
                                    </h5>
                                    <h5 class="d-flex mx-2"><strong>Attack</strong>:
                                    <p>
                                        <div class="progress m-auto mx-2">
                                            <div class="progress-bar pokemon-stats" data-pokemon_id="`+stats.pokemon_id+`" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="10000" style="width:`+pokemon_stat.base_attack+`px;"></div>
                                        </div>
                                        <span>`+pokemon_stat.base_attack+`%</span>
                                    </p>
                                    </h5>
                                </div>
                              `+evolution+`
                            `+type_section+`
                            </div>
                        </div>
                        <div class="col-lg-4 my-5" data-aos="fade-up" data-aos-delay="100">
                        <div class="card mb-5 mb-lg-0">
                            <div class="card-body">
                            <img src="assets/img/pokemon_legendary/`+stats.pokemon_name+'_'+stats.form+`.png" alt="pokemon 1" class="img-fluid">
                            `+gender_section+`
                            <hr>
                            <div class="text-center">
                                <button type="button" id="goToPokemon" data-id="`+stats.pokemon_id+`" data-form="`+stats.form+`" class="btn">Go Now</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                `
            );
        }
    }

}

$(document).on('click', '.pokemon_modal', function(e){
    let pokemon_id = e.target.dataset.pokemon_id;
    let pokemon_form = e.target.dataset.form;
    getPokemon(pokemon_id, pokemon_form);
});

$(document).on('click',  '#goToPokemon', function(){
    switch(logged){
        case false:
            Swal.fire({
                title: 'Oops!',
                text: 'I\'m sorry, please login first',
                imageUrl: 'https://media.tenor.com/CFNA9X91BIwAAAAC/pikachu-pokemon.gif',
                imageWidth: 400,
                imageHeight: 300,
                imageAlt: 'Pikachu is crying',
            });

            break;
        case true:
            let data_id = $('#goToPokemon').data('id');
            let data_form = $('#goToPokemon').data('form');
            $('#goToPokemon').attr("href", "/pokemon-show/"+data_id+"/"+data_form);
            break;
    }
});

