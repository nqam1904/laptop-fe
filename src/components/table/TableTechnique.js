import React from 'react'
import './styles.scss'

const TableTechnique = ({ configuration }) => {
	return (
		<table className="table">
			<tbody>
				<tr>
					<th className="table_lable">CPU</th>
					<td className="table_value">{configuration?.[0]?.cpu || "_"}</td>
				</tr>
				<tr>
					<th className="table_lable">RAM</th>
					<td className="table_value">{configuration?.[0]?.ram || "_"}</td>
				</tr>
				<tr>
					<th className="table_lable">Ổ cứng</th>
					<td className="table_value">{configuration?.[0]?.disk || "_"}</td>
				</tr>
				<tr>
					<th className="table_lable">VGA</th>
					<td className="table_value">{configuration?.[0]?.vga || "_"}</td>
				</tr>
				<tr>
					<th className="table_lable">Màn hình</th>
					<td className="table_value">{configuration?.[0]?.display || "_"}</td>
				</tr>
				<tr>
					<th className="table_lable">Âm thanh</th>
					<td className="table_value">{configuration?.[0]?.audio || "_"}</td>
				</tr>
				<tr>
					<th className="table_lable">Chuẩn LAN</th>
					<td className="table_value">{configuration?.[0]?.lan || "_"}</td>
				</tr>
				<tr>
					<th className="table_lable">Chuẩn wifi</th>
					<td className="table_value">{configuration?.[0]?.wifi || "_"}</td>
				</tr>
				<tr>
					<th className="table_lable">Hệ điều hành</th>
					<td className="table_value">{configuration?.[0]?.os || "_"}</td>
				</tr>
				<tr>
					<th className="table_lable">Pin</th>
					<td className="table_value">{configuration?.[0]?.bettery || "_"}</td>
				</tr>
				<tr>
					<th className="table_lable">Kích thước</th>
					<td className="table_value">{configuration?.[0]?.size || "_"}</td>
				</tr>
				<tr>
					<th className="table_lable">Màu sắc</th>
					<td className="table_value">{configuration?.[0]?.color || "_"}</td>
				</tr>
				<tr>
					<th className="table_lable">Trọng lượng</th>
					<td className="table_value">{configuration?.[0]?.weight || "_"}</td>
				</tr>
			</tbody>
		</table>
	)
}

export default React.memo(TableTechnique)
