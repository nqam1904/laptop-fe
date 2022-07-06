import React from 'react'
import './styles.scss'

const TableTechnique = ({ configuration }) => {
	console.log(configuration)
	return (
		<table className="table">
			<tbody>
				<tr>
					<th className="table_lable">CPU</th>
					<td className="table_value">{configuration?.cpu}</td>
				</tr>
				<tr>
					<th className="table_lable">RAM</th>
					<td className="table_value">{configuration?.ram}</td>
				</tr>
				<tr>
					<th className="table_lable">Ổ cứng</th>
					<td className="table_value">{configuration?.hardDisk}</td>
				</tr>
				<tr>
					<th className="table_lable">VGA</th>
					<td className="table_value">{configuration?.vga}</td>
				</tr>
				<tr>
					<th className="table_lable">Màn hình</th>
					<td className="table_value">{configuration?.display}</td>
				</tr>
				<tr>
					<th className="table_lable">Âm thanh</th>
					<td className="table_value">{configuration?.audio}</td>
				</tr>
				<tr>
					<th className="table_lable">Chuẩn LAN</th>
					<td className="table_value">{configuration?.lan}</td>
				</tr>
				<tr>
					<th className="table_lable">Chuẩn wifi</th>
					<td className="table_value">{configuration?.wifi}</td>
				</tr>
				<tr>
					<th className="table_lable">Bluetooth</th>
					<td className="table_value">{configuration?.bluetooth}</td>
				</tr>
				<tr>
					<th className="table_lable">Hệ điều hành</th>
					<td className="table_value">{configuration?.os}</td>
				</tr>
				<tr>
					<th className="table_lable">Pin</th>
					<td className="table_value">{configuration?.bettery}</td>
				</tr>
				<tr>
					<th className="table_lable">Kích thước</th>
					<td className="table_value">{configuration?.size}</td>
				</tr>
			</tbody>
		</table>
	)
}

export default React.memo(TableTechnique)
