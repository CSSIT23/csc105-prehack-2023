import React from 'react'
import { Box, Typography } from '@mui/material'

const ListenerEachCountry = ({ country = {} }) => {
	return (
		<>
			{country.map((item, index) => (
				<Box
					sx={{
						padding: 4,
						borderRadius: "5px",
						background: "rgba(0,0,0,.1)",
						width: "auto",
						height: "auto",
					}}
				>
					<Typography variant="p">{item.country_name} </Typography>
					<Typography variant="p">{item.count} listeners</Typography>
				</Box>
			))}

		</>

	)
}

export default ListenerEachCountry
