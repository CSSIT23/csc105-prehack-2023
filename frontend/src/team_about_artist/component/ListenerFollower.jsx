import { Box, Typography } from '@mui/material'
import React from 'react'

const ListenerFollower = ({ count = '', listener = '', follower = '' }) => {
	return (
		<>
			<Box
				sx={{
					padding: 3,
					borderRadius: "5px",
					// background: "blue",
					width: "auto",
					height: "auto",
				}}
			>
				<Typography variant="h4" sx={{marginBottom: "10px"}} >{follower}</Typography>
				<Typography variant="p">Followers</Typography>
			</Box>
			<Box
				sx={{
					padding: 3,
					borderRadius: "5px",
					// background: "blue",
					width: "auto",
					height: "auto",
				}}
			>
				<Typography variant="h4" sx={{marginBottom: "10px"}} >{listener}</Typography>
				<Typography variant="p">Followers</Typography>
			</Box>
		</>
	)
}

export default ListenerFollower
