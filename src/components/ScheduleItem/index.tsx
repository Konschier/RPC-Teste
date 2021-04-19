import { useMemo } from 'react';

import { DateTime, LocaleOptions } from 'luxon';

import { EntryProps } from '~/@types/epg';

const options: LocaleOptions & Intl.DateTimeFormatOptions = {
	locale: 'pt-BR',
	day: '2-digit',
	month: '2-digit',
	year: '2-digit',
	hour: '2-digit',
	minute: '2-digit',
};

const ScheduleItem: React.FC<Pick<EntryProps, 'description' | 'title' | 'human_start_time' | 'human_end_time'>> = (props) => {
	const startTime = useMemo(() => {
		return DateTime.fromISO(props.human_start_time).toLocaleString(options);
	}, []);

	const endTime = useMemo(() => {
		return DateTime.fromISO(props.human_end_time).toLocaleString(options);
	}, []);

	return (
		<div>
			<li>
				<strong>{props.title}</strong>
				<p>Descrição do programa: {props.description}</p>
				<br />
				<p>
					{`Inicio do programa: ${startTime}`}
				</p>
				<p>{`fim do programa: ${endTime}`}</p>
			</li>
			<br />
		</div>
	);
};

export default ScheduleItem;
