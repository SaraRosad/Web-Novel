'use strict';

const novels = {
	async: true,
	crossDomain: true,
	url: 'https://anime-manga-and-novels-api.p.rapidapi.com/novels?pageSize=5&page=1',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2f0e7d3dfcmshe1836446ab79b26p189cd1jsn74a5f7ee94f2',
		'X-RapidAPI-Host': 'anime-manga-and-novels-api.p.rapidapi.com'
	}
};

const novels_section = $('#novels-registory');

$.ajax(novels).done(function (response) {

    novels_section.empty();

    for (let index = 0; index < response.items.length; index++) {
        const r = response.items[index];
        console.log(r);
        let list_item = ` <div class="col-12">
                            <div class="novels-hover col-12" data-aos="fade-up" data-aos-delay="100">
                            <div><a href="/novel/`+r.novelId+`" class="novel-title" role="button" data-slug="`+r.slug+`">`+r.name+`</a></div>
                                <div class="details">
                                    <p>`+r.status+`</p>
                                </div>
                            </div>
                        </div>`;

        novels_section.append(list_item);
    }
});
