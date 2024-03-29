import _ from 'lodash'
import React from 'react'
import { formatChar, formatSizeDisplay } from 'utils/function'
import './styles.scss'

const TableTechnique = ({ configuration }) => {
	const display =
		formatSizeDisplay(configuration?.size_display) +
			' ' +
			formatChar(configuration?.pixel_display) +
			' ' +
			formatChar(configuration?.panel_display) +
			' ' +
			formatChar(configuration?.hz_display) +
			' ' +
			configuration?.display || '_'
	const disk = !_.isEmpty(configuration?.hdd_lap)
		? formatChar(configuration?.ssd_lap) + ' + ' + formatChar(configuration?.hdd_lap)
		: formatChar(configuration?.ssd_lap)
	const vga = !_.isEmpty(configuration?.watt)
		? formatChar(configuration?.vga_lap) + ' ' + `(${formatChar(configuration?.watt).trim()})`
		: formatChar(configuration?.vga_lap) || '_'
	return (
		<div className="block_table">
			<p className="title-table">Thông tin cấu hình</p>
			<table>
				<tbody>
					<tr>
						<th className="table_lable">CPU</th>
						<td className="table_value">{formatChar(configuration?.cpu_lap) || '_'}</td>
					</tr>
					<tr className="color-gray">
						<th className="table_lable-gray">RAM</th>
						<td className="table_value">{formatChar(configuration?.ram_lap) || '_'}</td>
					</tr>
					<tr>
						<th className="table_lable">Ổ cứng</th>
						<td className="table_value">{disk || '_'}</td>
					</tr>
					<tr className="color-gray">
						<th className="table_lable-gray">VGA</th>
						<td className="table_value">{vga}</td>
					</tr>
					<tr>
						<th className="table_lable">Màn hình</th>
						<td className="table_value">{display}</td>
					</tr>
					<tr className="color-gray">
						<th className="table_lable-gray">Chuẩn wifi</th>
						<td className="table_value">{configuration?.wifi || '_'}</td>
					</tr>
					<tr>
						<th className="table_lable">Hệ điều hành</th>
						<td className="table_value">
							{formatChar(configuration?.operating_system) || '_'}
						</td>
					</tr>
					<tr className="color-gray">
						<th className="table_lable-gray">Pin</th>
						<td className="table_value">{configuration?.battery || '_'}</td>
					</tr>
					<tr>
						<th className="table_lable">Màu sắc</th>
						<td className="table_value">{configuration?.color || '_'}</td>
					</tr>
					<tr className="color-gray">
						<th className="table_lable-gray">Trọng lượng</th>
						<td className="table_value">{configuration?.weight || '_'}</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default React.memo(TableTechnique)
