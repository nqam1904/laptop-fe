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
		padding: 0 10px;
		width: 100%;
		flex: 1;
		&-item {
			border: 2px solid ${variableStyles.BORDER};
			border-radius: 16px;
			position: relative;
			width: 150px !important;
			height: 150px;
			margin: 0 10px;
			background-color: ${variableStyles.WHITE};
			overflow: hidden;
		}
		&-image-child {
			border-radius: 16px;
			object-fit: contain;
			padding: 10px;
			overflow: hidden;
		}
		@media (max-width: 768px) {
			&-item {
				border: 2px solid ${variableStyles.BORDER};
				border-radius: 16px;
				position: relative;
				width: 90px !important;
				height: 90px;
				margin: 0 10px;
				background-color: ${variableStyles.WHITE};
				overflow: hidden;
			}
			&-image-child {
				border-radius: 16px;
				object-fit: cover;
				padding: 10px;
				overflow: hidden;
			}
		}
	}
`
const ProductCarouselArrow = styled.div`
	& .icon_arrow-left {
		width: 20px;
		height: 20px;
	}
	@media (max-width: 768px) {
		& .icon_arrow-left {
			width: 8px;
			height: 8px;
		}
	}
`
export { Container, ProductCarouselArrow }
