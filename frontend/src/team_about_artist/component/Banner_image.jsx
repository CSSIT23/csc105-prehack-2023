import React from 'react'
import { Box } from '@mui/material'

const Banner_image = ({banner_url = ''}) => {
  return (
	<Box
		width={"100vh"}
		height={"500px"}
		display={"flex"}
		alignItems={"center"}
		justifyContent={"center"}
		sx={{}}
	>
		<Box
			component='img'
			sx={{
				width: 300,
			}}
			alt="artist_banner"
			src={banner_url}
		/>

	</Box>
  )
}

export default Banner_image
