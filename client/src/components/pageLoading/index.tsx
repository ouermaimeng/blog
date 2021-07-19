import React from 'react'
import style from './index.module.scss'

const PageLoading: React.FC = () => {
	return (
		<div className={style.pageLoading}>
			<div className={style.loadingCenterAbsolute}>
				{Array.from({ length: 5 }).map((ele, index) => (
					<div
						className={style.object}
						id={style[`object${index}`]}
						key={index}
						style={{ left: index * 20 }}
					/>
				))}
			</div>
		</div>
	)
}
export default PageLoading
