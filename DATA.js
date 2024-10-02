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
    "Маслянко": {
		"short_name": "доц. Маслянко П. П.",
		"long_name": "доцент Маслянко Павло Павлович",
		"sched_link": "http://epi.kpi.ua/Schedules/ViewSchedule.aspx?v=1da042d3-54fc-466a-bf2f-37af93053418",
	},
    "Яковлєв": {
		"short_name": "доц. Яковлєв С. В.",
		"long_name": "доцент Яковлєв Сергій Володимирович",
		"sched_link": "http://epi.kpi.ua/Schedules/ViewSchedule.aspx?v=aad73539-3fd3-4559-953a-9c439276a14e",
	},
};

let s = {
    "Англ": {
		"title": "Іноземна мова для наукової діяльності. Частина 1. Наукові дослідження",
		"wiki_link": "http://wiki.kpi.ua/index.php/%D0%86%D0%BD%D0%BE%D0%B7%D0%B5%D0%BC%D0%BD%D0%B0%20%D0%BC%D0%BE%D0%B2%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D0%BD%D0%B0%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D1%97%20%D0%B4%D1%96%D1%8F%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D1%96.%20%D0%A7%D0%B0%D1%81%D1%82%D0%B8%D0%BD%D0%B0%201.%20%D0%9D%D0%B0%D1%83%D0%BA%D0%BE%D0%B2%D1%96%20%D0%B4%D0%BE%D1%81%D0%BB%D1%96%D0%B4%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F_(19202880)",
	},
    "Філософія": {
		"title": "Філософські засади наукової діяльності",
		"wiki_link": "http://wiki.kpi.ua/index.php/%D0%A4%D1%96%D0%BB%D0%BE%D1%81%D0%BE%D1%84%D1%81%D1%8C%D0%BA%D1%96%20%D0%B7%D0%B0%D1%81%D0%B0%D0%B4%D0%B8%20%D0%BD%D0%B0%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D1%97%20%D0%B4%D1%96%D1%8F%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D1%96_(19203320)",
	},
    "Наука 1": {
		"title": "Організація науково-інноваційної діяльності 1",
		"wiki_link": "http://wiki.kpi.ua/index.php/%D0%9E%D1%80%D0%B3%D0%B0%D0%BD%D1%96%D0%B7%D0%B0%D1%86%D1%96%D1%8F%20%D0%BD%D0%B0%D1%83%D0%BA%D0%BE%D0%B2%D0%BE-%D1%96%D0%BD%D0%BD%D0%BE%D0%B2%D0%B0%D1%86%D1%96%D0%B9%D0%BD%D0%BE%D1%97%20%D0%B4%D1%96%D1%8F%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D1%96%201_(19202730)",
	},
    "Наука 2": {
		"title": "Організація науково-інноваційної діяльності 2",
		"wiki_link": "http://wiki.kpi.ua/index.php/%D0%9E%D1%80%D0%B3%D0%B0%D0%BD%D1%96%D0%B7%D0%B0%D1%86%D1%96%D1%8F%20%D0%BD%D0%B0%D1%83%D0%BA%D0%BE%D0%B2%D0%BE-%D1%96%D0%BD%D0%BD%D0%BE%D0%B2%D0%B0%D1%86%D1%96%D0%B9%D0%BD%D0%BE%D1%97%20%D0%B4%D1%96%D1%8F%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D1%96%202_(19201910)",
	},
};

let p = {
    "Англ": {
		"subject": s["Англ"],
		"teacher": t["Духаніна"],
		"type": "practice",
        "zoom_link": "https://us04web.zoom.us/j/71743587936?pwd=ADPzgKodocah2cvbszUSm9JEHWdbhy.1",
	},
    "Філософія лек": {
		"subject": s["Філософія"],
		"teacher": t["Рубанець"],
		"type": "lecture",
	},
    "Філософія прак": {
		"subject": s["Філософія"],
		"teacher": t["Бабіна"],
		"type": "practice",
		"zoom_link": "https://zoom.us/j/2563522813?pwd=WUs1aG0yV3JTaHU2d0N3QmlzSlc4UT09",
	},
    "Наука лек": {
		"subject": s["Наука 2"],
		"teacher": t["Маслянко"],
		"type": "lecture",
		"zoom_link": "https://us04web.zoom.us/j/2729661736?pwd=Jf1bdGzfuUqimufXxawpaFsFdETHRo.1",
	},
    "Наука прак": {
		"subject": s["Наука 1"],
		"teacher": t["Яковлєв"],
		"type": "practice",
		"zoom_link": "https://us04web.zoom.us/j/73095195813?pwd=zc4AX4AqLNmKAxRGRJaV2dhFmmyEAd.1",
	},
};

var schedule_data = {
	"f": {
		"team_name": "КМ-41ф",
		"week_1": {
			"Четвер": {
				2: p["Англ"],
				3: p["Англ"],
				4: p["Філософія прак"],
			},
		},
		"week_2": {
			"Четвер": {
				2: p["Англ"],
				4: p["Філософія лек"],
				5: p["Наука лек"],
				6: p["Наука прак"],
			},
		},
	},
};