// template-begin pure-component keep
import React, { PureComponent } from 'react';
// template-end pure-component
// template-begin pure-component remove
import React, { Component } from 'react';
// template-end pure-component
// template-begin intl-support keep
import { translate } from 'react-i18next';
// template-end intl-support

import css from './styles.module.scss';

// template-begin pure-component keep
class ___componentName___ extends PureComponent {
// template-end pure-component
// template-begin pure-component remove
class ___componentName___ extends Component {
// template-end pure-component
	// template-begin complete-component keep
	constructor(props) {
		super(props);
	}

	// template-end complete-component
	render() {
		// template-begin intl-support keep
		// template-begin complete-component keep
		const { t, i18n, id } = this.props;
		// template-end complete-component
		// template-begin complete-component remove
		const { t, id } = this.props;
		// template-end complete-component
		// template-end intl-support
		// template-begin intl-support remove
		const { id } = this.props;
		// template-end intl-support

		// template-begin complete-component keep
		// template-begin intl-support keep
		const changeLanguage = lng => {
			i18n.changeLanguage(lng);
		};
		// template-end intl-support
		// template-end complete-component

		return (
			<div>
				// template-begin intl-support keep
				// template-begin complete-component keep
				<span title={id}>{t('welcome-to-comp', { comp: '___componentName___' })}</span>
				<div className={css['lang-toggle']}>
					<button onClick={() => changeLanguage('de')}>{t('change-to-de')}</button>
					<button onClick={() => changeLanguage('en')}>{t('change-to-en')}</button>
				</div>
				// template-end complete-component
				// template-begin complete-component remove
				<span title={id}>{t('welcome-to-comp', { comp: '___componentName___' })}</span>
				// template-end complete-component
				// template-end intl-support
				// template-begin intl-support remove
				<span title={id}>Welcome to component ___componentName___!</span>
				// template-end intl-support
			</div>
		)
	}
}

// template-begin intl-support keep
export default translate()(___componentName___);
// template-end intl-support
// template-begin intl-support remove
export default ___componentName___;
// template-end intl-support
