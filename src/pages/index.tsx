


import { useEffect } from 'react';

import { DateTime } from 'luxon';

import { EpgProps } from '~/@types/epg';
import ScheduleItem from '~/components/ScheduleItem';
import useLazyFetch from '~/hooks/useLazyFetch';
import styles from '~/styles/schedule.module.scss';

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
		<section className={styles.scheduleList}>
			<h1>Programação</h1>

			<ul>
				{data?.programme.entries.map((schedule) =>
					<ScheduleItem
						key={schedule.title}
						title={schedule.title}
						description={schedule.description}
						human_start_time={schedule.human_start_time}
						human_end_time={schedule.human_end_time}
					/>
				)}
			</ul>
		</section>
	);
}
