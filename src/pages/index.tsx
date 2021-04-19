
import { useEffect } from 'react';

import { DateTime } from 'luxon';

import { EpgProps } from '~/@types/epg';
import { ScheduleItem } from '~/components/ScheduleItem';
import useLazyFetch from '~/hooks/useLazyFetch';


export default function Home() {
	const [{ data }, getData] = useLazyFetch<EpgProps>('/programmes/1337', {
		params: {
			date: DateTime.now().toFormat('yyyy-MM-dd')
		},
	});

	useEffect(() => {
		getData();
	}, []);

	return (
		<section className="schedule-list">
			<h1>Programação</h1>

			<ul>
				{data?.programme.entries.map((schedule) =>
					<ScheduleItem key={schedule.title} schedule={schedule} />
				)}
			</ul>
		</section>
	);
}
