function loadData() {
	/*let team = new URLSearchParams(window.location.search).get('team');
	if (!(team in schedule_data)) {
		team = ('; ' + document.cookie).split('; team=').pop().split(';')[0];
	}*/
    let team = 'f';

	console.log(`Team: ${team}`);

    if (!(team in schedule_data)) {
    	$('#team_select_warning').show();
    	$('#team_select').append(`<option selected></option>`);
    }

	Object.keys(schedule_data).forEach(_team => {
		sel = (_team == team) ? ' selected' : '';
		$('#team_select').append(`<option value="${_team}"${sel}>${schedule_data[_team]['team_name']}</option>`);
	});

	if (!(team in schedule_data)) {
		return false;
	}

    //document.cookie = `team=${team}`;
	
	let team_name = schedule_data[team]['team_name'];
	console.log(`Team name: ${team_name}`);
	document.title = `Розклад ${team_name}`;

	for (let week_i = 0; week_i < 2; week_i++) {
		let data = schedule_data[team][`week_${week_i + 1}`];
		let table = $(`#week${week_i}_table`);
		let days = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];
		table.append(`<tr><td></td>${days.map(d => `<td>${d}</td>`).join('')}</tr>`);
		['08:30', '10:25', '12:20', '14:15', '16:10', '18:30', '20:20'].forEach((t, i) => {
			let _r = [];
			days.map(_d => {
				if (_d in data && i + 1 in data[_d]) {
					let _pair = data[_d][i + 1];

					if (Array.isArray(_pair)) {
						_pair = _pair[0];
					}

					title = _pair['subject']['title'];
					wiki_link = _pair['subject']['wiki_link'];
					_p = `<span class="disLabel"><a class="plainLink" href="${wiki_link}" title="${title}">${title}</a></span><br>`;
					
					_pair['teachers'].forEach((teacher, index) => {
						if (index > 0) {
							_p += `, `;
						}
						short_name = teacher['short_name'];
						long_name = teacher['long_name'];
						sched_link = teacher['sched_link'];
						_p += `<a class="plainLink" href="${sched_link}" title="${long_name}">${short_name}</a>`;
					});
					_p += `<br>`;
					
					if (_pair['zoom_link']) {
						_p += `<a href="${_pair['zoom_link']}" title="Приєднатися до заняття"`;
					}
					else {
						_p += '<a';
					}
					zoom_type = {'lecture': 'Лек on-line', 'practice': 'Прак on-line', 'lab': 'Лаб on-line', 'lecture-practice': '0,5 Лек, 0,5 Прак'}[_pair['type']];
					_p += ` target="_blank" class="connect">${zoom_type}</a>`;
					
					_r.push(_p);
				}
				else {
					_r.push('');
				}
			});
			table.append(`<tr><td>${i + 1}<br>${t}</td>${_r.map(_c => `<td class='day'>${_c}</td>`).join('')}</tr>`);
		});
	}

	$('#weeks_div').show();

	return true;
}