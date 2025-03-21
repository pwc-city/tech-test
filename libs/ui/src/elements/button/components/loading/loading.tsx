import styles from './loading.module.scss';

import { Icon } from '../../../icons';

type LoadingProps = {
	dimension?: 'small' | 'medium' | 'large';
	className?: string;
};

export const Loading = ({
	dimension = 'small',
	className,
}: LoadingProps) => {
	const cssClasses: string[] = [];
	cssClasses.push(styles.container);
	cssClasses.push(styles[dimension]);

	return (
		<div className={cssClasses.join(' ')}>
			<div className={styles.loader}>
				<Icon variant="Loading" className={className} />
			</div>
		</div>
	);
};
