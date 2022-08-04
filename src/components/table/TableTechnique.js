import React from 'react'
import { formatChar } from 'utils/function'
import './styles.scss'

const TableTechnique = ({ configuration }) => {
	return (
		<div className='block_table'>
			<table className="table">
				<tbody>
					<tr>
						<th className="table_lable">CPU</th>
						<td className="table_value">{formatChar(configuration?.cpu_lap) || "_"}</td>
					</tr>
					<tr>
						<th className="table_lable">RAM</th>
						<td className="table_value">{configuration?.ram || "_"}</td>
					</tr>
					<tr>
						<th className="table_lable">Ổ cứng</th>
						<td className="table_value">{configuration?.disk || "_"}</td>
					</tr>
					<tr>
						<th className="table_lable">VGA</th>
						<td className="table_value">{configuration?.vga || "_"}</td>
					</tr>
					<tr>
						<th className="table_lable">Màn hình</th>
						<td className="table_value">{configuration?.display || "_"}</td>
					</tr>
					<tr>
						<th className="table_lable">Chuẩn wifi</th>
						<td className="table_value">{configuration?.wifi || "_"}</td>
					</tr>
					<tr>
						<th className="table_lable">Hệ điều hành</th>
						<td className="table_value">{formatChar(configuration?.operating_system) || "_"}</td>
					</tr>
					<tr>
						<th className="table_lable">Pin</th>
						<td className="table_value">{configuration?.bettery || "_"}</td>
					</tr>
					<tr>
						<th className="table_lable">Kích thước</th>
						<td className="table_value">{configuration?.size || "_"}</td>
					</tr>
					<tr>
						<th className="table_lable">Màu sắc</th>
						<td className="table_value">{configuration?.color || "_"}</td>
					</tr>
					<tr>
						<th className="table_lable">Trọng lượng</th>
						<td className="table_value">{configuration?.weight || "_"}</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default React.memo(TableTechnique)
