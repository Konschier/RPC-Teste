


import * as react from 'react';

import { DateTime } from 'luxon';

import { EpgProps } from '~/@types/epg';
import { ScheduleItem } from '~/components/ScheduleItem';
import useLazyFetch from '~/hooks/useLazyFetch';
import styles from '~/styles/Schedule.module.scss';




export default function Home() {
	const [{ data }, getData] = useLazyFetch<EpgProps>('/programmes/1337', {
		params: {
			date: DateTime.now().toFormat('yyyy-MM-dd')
		},
	});

	react.useEffect(() => {
		getData();
	}, []);

	return (
		<section className={styles.scheduleList}>
			<h1>Programação</h1>

			<ul>
				{data?.programme.entries.map((schedule) =>
					<ScheduleItem key={schedule.title} schedule={schedule} />
				)}
			</ul>
		</section>
	);
}
