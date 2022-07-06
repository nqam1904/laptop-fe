import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import Layout from 'layouts/Layout'
const NotFound = () => {
	return (
		<Layout>
			<div className="container">
				<section className="page_404">
					<div className="container">
						<div className="row">
							<div className="col-sm-12 ">
								<div className="col-sm-10 col-sm-offset-1  text-center">
									<div className="four_zero_four_bg">
										<h1 className="text-center">404</h1>
									</div>

									<div className="contant_box_404">
										<h2 className="h2">Trang này chưa có</h2>
										<br />
										<div className='button-link'>
											<Link to="/">Về trang chủ</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</Layout>
	)
}
export default NotFound
