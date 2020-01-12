import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: [ 'app.component.scss' ]
})
export class AppComponent {
	public appPages = [
		{
			title: 'Search',
			url: '/search',
			icon: 'search'
		},
		{
			title: 'Home',
			url: '/home',
			icon: 'home'
		},
		{
			title: 'List',
			url: '/list',
			icon: 'list'
		},
		{
			title: 'Top Anime',
			url: '/top-anime/tv',
			icon: 'analytics'
		},
		{
			title: 'Settings',
			url: '/settings',
			icon: 'settings'
		}
	];

	constructor (private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar) {
		this.initializeApp();
	}

	initializeApp () {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}
}
export class Episodes{
    "request_hash": "request:anime:c3b5c243bf4f5bb79e88226aa4eb303264352b24";
    "request_cached": true;
    "request_cache_expiry": 20734;
    "episodes_last_page": 1;
    "episodes": [
        {
            "episode_id": 1,
            "title": "A Prince Appears",
            "title_japanese": "王子様現る",
            "title_romanji": "Ouji-sama Arawaru ",
            "aired": "2001-10-10T00:00:00+00:00",
            "filler": false,
            "recap": false,
            "video_url": null,
            "forum_url": "https://myanimelist.net/forum/?topicid=39261"
        }
    ];
}

export class Anime {
	watchStatus: string = '';
	episodesWatched: number = 0;
	userScoreString: string = '';
	request_hash: 'request:anime:d6092f2422f084452c84555f17c7ba047e6998d3';
	request_cached: true;
	request_cache_expiry: 49537;
	mal_id: 1;
	url: 'https://myanimelist.net/anime/1/Cowboy_Bebop';
	image_url: 'https://cdn.myanimelist.net/images/anime/4/19644.jpg';
	trailer_url: 'https://www.youtube.com/embed/qig4KOK2R2g?enablejsapi=1&wmode=opaque&autoplay=1';
	title: 'Cowboy Bebop';
	title_english: 'Cowboy Bebop';
	title_japanese: 'カウボーイビバップ';
	title_synonyms: [];
	type: 'TV';
	source: 'Original';
	episodes: 26;
	status: 'Finished Airing';
	airing: false;
	aired: {
		'from': '1998-04-03T00:00:00+00:00';
		'to': '1999-04-24T00:00:00+00:00';
		'prop': {
			'from': {
				'day': 3;
				'month': 4;
				'year': 1998;
			};
			'to': {
				'day': 24;
				'month': 4;
				'year': 1999;
			};
		};
		'string': 'Apr 3, 1998 to Apr 24, 1999';
	};
	duration: '24 min per ep';
	rating: 'R - 17+ (violence & profanity)';
	score: 8.81;
	scored_by: 463582;
	rank: 26;
	popularity: 39;
	members: 924270;
	favorites: 48988;
	synopsis: 'In the year 2071, humanity has colonized several of the planets and moons of the solar system leaving the now uninhabitable surface of planet Earth behind. The Inter Solar System Police attempts to keep peace in the galaxy, aided in part by outlaw bounty hunters, referred to as "Cowboys." The ragtag team aboard the spaceship Bebop are two such individuals. Mellow and carefree Spike Spiegel is balanced by his boisterous, pragmatic partner Jet Black as the pair makes a living chasing bounties and collecting rewards. Thrown off course by the addition of new members that they meet in their travels—Ein, a genetically engineered, highly intelligent Welsh Corgi; femme fatale Faye Valentine, an enigmatic trickster with memory loss; and the strange computer whiz kid Edward Wong—the crew embarks on thrilling adventures that unravel each member\'s dark and mysterious past little by little. Well-balanced with high density action and light-hearted comedy, Cowboy Bebop is a space Western classic and an homage to the smooth and improvised music it is named after. [Written by MAL Rewrite]';
	background: 'When Cowboy Bebop first aired in spring of 1998 on TV Tokyo, only episodes 2, 3, 7-15, and 18 were broadcast, it was concluded with a recap special known as Yose Atsume Blues. This was due to anime censorship having increased following the big controversies over Evangelion, as a result most of the series was pulled from the air due to violent content. Satellite channel WOWOW picked up the series in the fall of that year and aired it in its entirety uncensored. Cowboy Bebop was not a ratings hit in Japan, but sold over 19,000 DVD units in the initial release run, and 81,000 overall. Protagonist Spike Spiegel won Best Male Character, and Megumi Hayashibara won Best Voice Actor for her role as Faye Valentine in the 1999 and 2000 Anime Grand Prix, respectively.Cowboy Bebop\'s biggest influence has been in the United States, where it premiered on Adult Swim in 2001 with many reruns since. The show\'s heavy Western influence struck a chord with American viewers, where it became a "gateway drug" to anime aimed at adult audiences.';
	premiered: 'Spring 1998';
	broadcast: 'Saturdays at 01:00 (JST)';
	related: {
		'Adaptation': [
			{
				'mal_id': 173;
				'type': 'manga';
				'name': 'Cowboy Bebop';
				'url': 'https://myanimelist.net/manga/173/Cowboy_Bebop';
			},
			{
				'mal_id': 174;
				'type': 'manga';
				'name': 'Shooting Star Bebop: Cowboy Bebop';
				'url': 'https://myanimelist.net/manga/174/Shooting_Star_Bebop__Cowboy_Bebop';
			}
		];
		'Side story': [
			{
				'mal_id': 5;
				'type': 'anime';
				'name': 'Cowboy Bebop: Tengoku no Tobira';
				'url': 'https://myanimelist.net/anime/5/Cowboy_Bebop__Tengoku_no_Tobira';
			},
			{
				'mal_id': 17205;
				'type': 'anime';
				'name': 'Cowboy Bebop: Ein no Natsuyasumi';
				'url': 'https://myanimelist.net/anime/17205/Cowboy_Bebop__Ein_no_Natsuyasumi';
			}
		];
		'Summary': [
			{
				'mal_id': 4037;
				'type': 'anime';
				'name': 'Cowboy Bebop: Yose Atsume Blues';
				'url': 'https://myanimelist.net/anime/4037/Cowboy_Bebop__Yose_Atsume_Blues';
			}
		];
		'Alternative version': [
			{
				'mal_id': 40054;
				'type': 'anime';
				'name': 'Akira (Shin Anime)';
				'url': 'https://myanimelist.net/anime/40054/Akira_Shin_Anime';
			}
		];
		'Sequel': [
			{
				'mal_id': 1735;
				'type': 'anime';
				'name': 'Naruto: Shippuuden';
				'url': 'https://myanimelist.net/anime/1735/Naruto__Shippuuden';
			}
		];
		'Spin-off': [
			{
				'mal_id': 2520;
				'type': 'anime';
				'name': 'Dragon Ball Specials';
				'url': 'https://myanimelist.net/anime/2520/Dragon_Ball_Specials';
			}
		];
		'Prequel': [
			{
				'mal_id': 33486;
				'type': 'anime';
				'name': 'Boku no Hero Academia 2nd Season';
				'url': 'https://myanimelist.net/anime/33486/Boku_no_Hero_Academia_2nd_Season';
			}
		];
	};
	producers: [
		{
			'mal_id': 23;
			'type': 'anime';
			'name': 'Bandai Visual';
			'url': 'https://myanimelist.net/anime/producer/23/Bandai_Visual';
		}
	];
	licensors: [
		{
			'mal_id': 102;
			'type': 'anime';
			'name': 'Funimation';
			'url': 'https://myanimelist.net/anime/producer/102/Funimation';
		},
		{
			'mal_id': 233;
			'type': 'anime';
			'name': 'Bandai Entertainment';
			'url': 'https://myanimelist.net/anime/producer/233/Bandai_Entertainment';
		}
	];
	studios: [
		{
			'mal_id': 14;
			'type': 'anime';
			'name': 'Sunrise';
			'url': 'https://myanimelist.net/anime/producer/14/Sunrise';
		}
	];
	genres: [
		{
			'mal_id': 1;
			'type': 'anime';
			'name': 'Action';
			'url': 'https://myanimelist.net/anime/genre/1/Action';
		},
		{
			'mal_id': 2;
			'type': 'anime';
			'name': 'Adventure';
			'url': 'https://myanimelist.net/anime/genre/2/Adventure';
		},
		{
			'mal_id': 4;
			'type': 'anime';
			'name': 'Comedy';
			'url': 'https://myanimelist.net/anime/genre/4/Comedy';
		},
		{
			'mal_id': 8;
			'type': 'anime';
			'name': 'Drama';
			'url': 'https://myanimelist.net/anime/genre/8/Drama';
		},
		{
			'mal_id': 24;
			'type': 'anime';
			'name': 'Sci-Fi';
			'url': 'https://myanimelist.net/anime/genre/24/Sci-Fi';
		},
		{
			'mal_id': 29;
			'type': 'anime';
			'name': 'Space';
			'url': 'https://myanimelist.net/anime/genre/29/Space';
		}
	];
	opening_themes: ['"Tank!" by The Seatbelts (eps 1-25)'];
	ending_themes: ['"The Real Folk Blues" by The Seatbelts feat. Mai Yamane (eps 1-12, 14-25)', '"Space Lion" by The Seatbelts (ep 13)', '"Blue" by The Seatbelts feat. Mai Yamane (ep 26)'];
}
