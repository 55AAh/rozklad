let t = {
    "Духаніна": {
		"short_name": "доц. Духаніна Н. М.",
		"long_name": "доцент Духаніна Наталія Мар’янівна",
		"sched_link": "http://epi.kpi.ua/Schedules/ViewSchedule.aspx?v=004b847b-a787-4557-9758-419c5b3ef065",
	},
    "Бабіна": {
		"short_name": "ст.вик. Бабіна С. І.",
		"long_name": "старший викладач Бабіна Світлана Іванівна",
		"sched_link": "http://epi.kpi.ua/Schedules/ViewSchedule.aspx?v=a6614963-a7bb-4cb8-9078-04772b6401f4",
	},
    "Рубанець": {
		"short_name": "проф. Рубанець О. М.",
		"long_name": "професор Рубанець Олександра Михайлівна",
		"sched_link": "http://epi.kpi.ua/Schedules/ViewSchedule.aspx?v=253607ec-fcb9-4e77-bd86-dfed0c882f0d",
	},
    "Кивлюк": {
		"short_name": "проф. Кивлюк О. П.",
		"long_name": "професор Кивлюк Ольга Петрівна",
		"sched_link": "http://epi.kpi.ua/Schedules/ViewSchedule.aspx?v=775aae65-5251-468e-9f1c-b23a9c0773eb",
	},
    "Шамрук": {
		"short_name": "ст.вик. Шамрук О. П.",
		"long_name": "старший викладач Шамрук Олег Павлович",
		"sched_link": "http://epi.kpi.ua/Schedules/ViewSchedule.aspx?v=95b7884a-0cf3-476e-b5e4-194b624aa4bf",
	},
};

let s = {
    "Англ": {
		"title": "Іноземна мова для наукової діяльності. Частина 2. Наукова комунікація",
		"wiki_link": "http://wiki.kpi.ua/index.php/%D0%86%D0%BD%D0%BE%D0%B7%D0%B5%D0%BC%D0%BD%D0%B0%20%D0%BC%D0%BE%D0%B2%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%BD%D0%B0%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D1%97%20%D0%B4%D1%96%D1%8F%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D1%96.%20%D0%A7%D0%B0%D1%81%D1%82%D0%B8%D0%BD%D0%B0%202.%20%D0%9D%D0%B0%D1%83%D0%BA%D0%BE%D0%B2%D0%B0%20%D0%BA%D0%BE%D0%BC%D1%83%D0%BD%D1%96%D0%BA%D0%B0%D1%86%D1%96%D1%8F_(19202880)",
	},
    "Філософія": {
		"title": "Філософські засади наукової діяльності",
		"wiki_link": "http://wiki.kpi.ua/index.php/%D0%A4%D1%96%D0%BB%D0%BE%D1%81%D0%BE%D1%84%D1%81%D1%8C%D0%BA%D1%96%20%D0%B7%D0%B0%D1%81%D0%B0%D0%B4%D0%B8%20%D0%BD%D0%B0%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D1%97%20%D0%B4%D1%96%D1%8F%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D1%96_(19203320)",
	},
    "Педагогіка": {
		"title": "Актуальні проблеми педагогіки вищої школи",
		"wiki_link": "http://wiki.kpi.ua/index.php/%D0%90%D0%BA%D1%82%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D1%96%20%D0%BF%D1%80%D0%BE%D0%B1%D0%BB%D0%B5%D0%BC%D0%B8%20%D0%BF%D0%B5%D0%B4%D0%B0%D0%B3%D0%BE%D0%B3%D1%96%D0%BA%D0%B8%20%D0%B2%D0%B8%D1%89%D0%BE%D1%97%20%D1%88%D0%BA%D0%BE%D0%BB%D0%B8_(19203340)",
	},
};

let p = {
    "Англ": {
		"subject": s["Англ"],
		"teachers": [t["Духаніна"]],
		"type": "practice",
        "zoom_link": "https://us04web.zoom.us/j/77422861469?pwd=Oi38v3kJoabcV5aXDUgcIPx3E5Au0q.1",
	},
    "Філософія лек": {
		"subject": s["Філософія"],
		"teachers": [t["Рубанець"], t["Кивлюк"]],
		"type": "lecture",
	},
    "Філософія прак": {
		"subject": s["Філософія"],
		"teachers": [t["Бабіна"]],
		"type": "practice",
	},
    "Педагогіка лек": {
		"subject": s["Педагогіка"],
		"teachers": [t["Шамрук"]],
		"type": "lecture",
	},
    "Педагогіка прак": {
		"subject": s["Педагогіка"],
		"teachers": [t["Шамрук"]],
		"type": "practice",
	},
};

var schedule_data = {
	"f": {
		"team_name": "КМ-41ф",
		"week_1": {
			"Четвер": {
				1: p["Філософія прак"],
				2: p["Англ"],
				3: p["Філософія лек"],
			},
		},
		"week_2": {
			"Четвер": {
				1: p["Філософія прак"],
				2: p["Англ"],
				3: p["Педагогіка лек"],
			},
			"П'ятниця": {
				1: p["Педагогіка прак"],
			}
		},
	},
};