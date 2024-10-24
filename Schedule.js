$(document).ready(function () {

    function calculate(current_date) {
        console.log(`Current date: ${current_date}`);

        var days_count = $('.day').length;
        console.assert(days_count == 72, 'days count =', days_count, '!= 72');

        $('.day').removeClass().addClass('day');
        $('.connect:not([href])').css('color', 'grey');

        function cell(week, day, pair) {
            return $(`.day:eq(${week * 36 + pair * 6 + day})`);
        }

        var current_week = 1;
        for (let first_monday = new Date("Sep 05 2022"); first_monday <= current_date; first_monday.setDate(first_monday.getDate() + 7)) {
            current_week = 1 - current_week;
        }

        var current_day = current_date.getDay() - 1;
        if (current_day >= 0) {
            for (pair = 0; pair < 6; pair++) {
                cell(current_week, current_day, pair).addClass('day_backlight');
            }
        }
        else {
            current_day = 6;
        }

        var current_day_seconds = current_date.getHours() * 3600 + current_date.getMinutes() * 60 + current_date.getSeconds();
        let current_pair_prop = (current_day_seconds - (8 * 3600 + 30 * 60)) / (115 * 60);
        var current_pair = Math.floor(current_pair_prop);
        var current_pair_minute = Math.floor(((current_pair_prop - current_pair) * 115));
        var between_pairs = current_pair_minute >= 95;
        if (between_pairs) {
            current_pair++;
        }

        var closest_week = current_week;
        var closest_day = current_day;
        var closest_pair = Math.max(current_pair, 0);

        while (closest_day > 5 || closest_pair < 0 || closest_pair > 5 || cell(closest_week, closest_day, closest_pair).children().length == 0) {
            closest_pair++;
            if (closest_pair > 5) {
                closest_pair = 0;

                closest_day++;
                if (closest_day > 5) {
                    closest_day = 0;

                    closest_week++;
                    if (closest_week > 1) {
                        closest_week = 0;
                    }
                }
            }
        }

        console.log(`Current: week ${current_week}, day ${current_day}, pair ${current_pair}`);
        console.log(`Closest: week ${closest_week}, day ${closest_day}, pair ${closest_pair}`);

        if (closest_week == current_week && closest_day == current_day && closest_pair == current_pair) {
            if (between_pairs) {
                console.log('Current state: between');
                cell(current_week, current_day, current_pair).addClass('closest_pair');
                var next_update_seconds = 8 * 3600 + 30 * 60 + current_pair * (115 * 60);
            }
            else {
                console.log('Current state: pair');
                cell(current_week, current_day, current_pair).addClass('current_pair');
                var next_update_seconds = 8 * 3600 + 30 * 60 + (current_pair + 1) * (115 * 60);
            }
            var closest_cell = cell(current_week, current_day, current_pair);
        }
        else {
            cell(closest_week, closest_day, closest_pair).addClass('closest_pair');
            var closest_cell = cell(closest_week, closest_day, closest_pair);
            if (closest_week == current_week && closest_day == current_day) {
                console.log('Current state: before');
                var next_update_seconds = 8 * 3600 + 30 * 60 + closest_pair * (115 * 60);
            }
            else {
                console.log('Current state: after');
                var next_update_seconds = 24 * 3600;
            }
        }

        let closest_link = closest_cell.find('.connect').attr('href');

        if (closest_link) {
            let connect_button = $(`#week${closest_week}_connect`);
            connect_button.show();
            connect_button.find('.btn').attr('href', closest_link);
            console.log(`Link found: ${closest_link}`);
        }

        if (new URLSearchParams(window.location.search).get('connect')) {
            if (closest_link) {
                window.location.replace(closest_link);
            }
            else {
                const url = new URL(location);
                url.searchParams.delete('connect');
                window.location.replace(url);
            }
        }

        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }

        let week_page_offset = $(`.week${closest_week}_label`).offset();
        window.scrollTo(week_page_offset.left - 5, week_page_offset.top - 5);

        var next_update_delta = Math.max(next_update_seconds - current_day_seconds, 1);
        let next_update_date = new Date(current_date);
        next_update_date.setSeconds(next_update_date.getSeconds() + next_update_delta);
        console.log(`Next page update in ${next_update_delta}s, at ${next_update_date}`);
        setTimeout(function() { location.reload(); }, next_update_delta * 1000);
    }

    if (loadData()) {
        calculate(new Date());
    }
});
