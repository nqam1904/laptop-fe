import styled from '@emotion/styled'
import variableStyles from 'styles/variable-styles'

const Container = styled.div`
	& .slider_main {
		&-item {
			width: 425px;
			height: 325px;
			border-radius: 16px;
			margin-bottom: 10px;
			background-color: ${variableStyles.WHITE};
		}
		&-image {
			border-radius: 16px;
			object-fit: contain;
		}
	}
	& .slider_child {
		&-item {
			border: 2px solid ${variableStyles.BORDER};
			border-radius: 16px;
			display: inline-block;
			position: relative;
			width: 180px !important;
			height: 130px;
			padding: 4px !important;
			margin-right: 20px;
			background-color: ${variableStyles.WHITE};
		}
		&-image-child {
			border-radius: 16px;
			object-fit: contain;
			padding: 10px;
			/* margin: 10px; */
		}
	}
`
const ProductCarouselArrow = styled.div`
	& .icon_arrow-left {
		width: 20px;
		height: 20px;
	}
`
export { Container, ProductCarouselArrow }
